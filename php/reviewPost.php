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
$result = $db->query("SELECT * FROM review_table");
    
$arr = $result->fetchAll();
    
echo json_encode($arr);

?>