<?php 
header("Access-Control-Allow-Origin:*");
$servername = "sherrychenxy.com";
$dblogin = "sherr516_wp91";
$password = "12345qwert";
$dbname= "sherr516_beautytwin";

try{
    $db = new PDO ("mysql:host=$servername; dbname=$dbname", $dblogin, $password);
} catch(PDOException $e){
    echo $e -> getMessage();
}

$gName = $_POST['gName'];

$result = $db -> query("INSERT IGNORE INTO gmaillogin(gName) VALUES ('$gName')");

$arr = $result->fetchAll();
echo json_encode($arr);
?>