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

$fbName = $_POST['fbName'];
$fbPic = $_POST['fbPic'];

$result = $db -> query("INSERT IGNORE INTO fblogin(fbName, fbPic) VALUES ('$fbName', '$fbPic')");

$arr = $result->fetchAll();
echo json_encode($arr);
?>