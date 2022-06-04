<?php
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
include "conn.php";
$player = $_GET['player'];
$sqlSelect = $dbh->prepare(
    "SELECT $db.game.score, $db.game.date as date, $db.team1.name as team1, $db.team2.name as team2, 
    $db.player.name as player, $db.game.place as place FROM $db.PLAYER 
    JOIN $db.TEAM as team1 ON $db.PLAYER.FID_TEAM = $db.team1.ID_TEAM 
    JOIN $db.GAME ON $db.team1.ID_TEAM = $db.GAME.FID_TEAM1 
    JOIN $db.TEAM as team2 ON $db.GAME.FID_TEAM2 = $db.team2.ID_TEAM 
    where $db.player.name =:player"
);
$sqlSelect->execute(array('player' => $player));
$cell = $sqlSelect->fetchAll(PDO::FETCH_OBJ);
print json_encode($cell);
?>