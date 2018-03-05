<?php 
header("Access-Control-Allow-Origin:*");
$servername = "testing.sherrychenxy.com";
$dblogin = "sherr516_wp91";
$password = "12345qwert";
$dbname= "sherr516_beautytwin";

try{
    $db = new PDO ("mysql:host=$servername; dbname=$dbname", $dblogin, $password);
} catch(PDOException $e){
    echo $e -> getMessage();
}

$result = $db->query("SELECT fblogin.id, fblogin.fbName, review_table.userName FROM review_table INNER JOIN fblogin ON fblogin.id = review_table.userName");
    
$arr = $result->fetchAll();
    
echo json_encode($arr);

?>