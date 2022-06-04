<?php
   header('Content-Type: text/xml');
   header('Cache-Control: no-cache, must-revalidate');
   include "conn.php";
   echo '<?xml version="1.0" ?>';
   echo "<root>";
  $date_1 = $_GET['date_1'];
  $date_2 = $_GET['date_2'];
  $sqlSelect = $dbh->prepare(
    "SELECT * FROM $db.GAME
    INNER JOIN $db.TEAM as Team1 ON $db.GAME.FID_TEAM1 = $db.Team1.ID_TEAM
    INNER JOIN $db.TEAM as Team2 ON $db.GAME.FID_TEAM2 = $db.Team2.ID_TEAM
    WHERE $db.GAME.DATE between :date_1 and :date_2"
  );
  $sqlSelect->execute(array('date_1' => $date_1, 'date_2' => $date_2));
  while ($cell = $sqlSelect->fetch(PDO::FETCH_BOTH)) {
    $date = $cell[1];
    $place = $cell[2];
    $score = $cell[3];
    $team1 = $cell[7];
    $team2 = $cell[11];
    echo "<row><date>$date</date><place>$place</place><team1>$team1</team1><score>$score</score><team2>$team2</team2></row>";
  }
  echo "</root>";
  ?>