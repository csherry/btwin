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

$userNameFB = $_POST['userNameFB'];
$brandName = $_POST['brandName'];
$productName = $_POST['productName'];
$color = $_POST['color'];
$description = $_POST['description'];
$rating = $_POST['rating'];
$picture = $_POST['picture'];

$result = $db->query("INSERT INTO review_table(userNameFB, brandName, productName, color, description, rating, picture) VALUES ('$userNameFB','$brandName', '$productName', '$color', '$description', '$rating', '$picture')");
   
$arr = $result->fetchAll();
echo json_encode($arr);
?>