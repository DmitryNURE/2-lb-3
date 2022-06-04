var ajax = new XMLHttpRequest();

function ok1() {
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                console.dir(ajax.responseText);
                document.getElementById("result").innerHTML = ajax.response;
            }
        }
    }
    var league = document.getElementById("league").value;
    ajax.open("get", "1.php?league=" + league);
    ajax.send();
}

function ok2() {
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {

                console.dir(ajax);
                let rows = ajax.responseXML.firstChild.children;
                let result = "Список игр на указанный интервал дат<ol>";
                for (var i = 0; i < rows.length; i++) {
                    result += "<li>";
                    result += "Дата: " + rows[i].children[0].firstChild.nodeValue + ", ";
                    result += "Стадион: " + rows[i].children[1].firstChild.nodeValue + ", ";
                    result += "Команда 1: " + rows[i].children[2].firstChild.nodeValue + ", ";
                    result += "Cчет: " + rows[i].children[0].firstChild.nodeValue + ", ";
                    result += "Команда 2: " + rows[i].children[1].firstChild.nodeValue;
                    result += "</li>";
                }
                result += "</ol>";
                document.getElementById("result").innerHTML = result;
            }
        }
    }
    var date_1 = document.getElementById("date_1").value;
    var date_2 = document.getElementById("date_2").value;
    ajax.open("get", "2.php?date_1=" + date_1 +"&date_2=" + date_2);
    ajax.send();
}
function ok3() {
    ajax.onreadystatechange = function(){
        let rows = JSON.parse(ajax.responseText);
        console.dir(rows);
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                console.dir(ajax);
                
                let result = "Список игр футболиста: <ol>";
                for (var i = 0; i < rows.length; i++) {
                    result += "<li>";
                    result += "Игрок: " + rows[i].player + ", ";
                    result += "Дата: " + rows[i].date + ", ";
                    result += "Стадион: " + rows[i].place + ", ";
                    result += "Команда 1: " + rows[i].team1 + ", ";
                    result += "Счет: " + rows[i].score + ", ";
                    result += "Команда 2:" + rows[i].team2;
                    result += "</li>";
                }
                result += "</ol>";
                document.getElementById("result").innerHTML = result;
            }
        }
    }
    var player = document.getElementById("player").value;
    ajax.open("get", "3.php?player=" + player);
    ajax.send();
}