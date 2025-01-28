<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$databaseFile = './test.db.';  // Заменяется именем файла базы данных SQLite
$id = $_GET['userId'];


try {
  $connection = new PDO("sqlite:$databaseFile");
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die("Connection failed: " . $e->getMessage());
}

try {
  $requestQuery = $connection->query("SELECT * FROM rooms where userId = '$id'");
  $requestResponseToUser = ($requestQuery->fetchAll());
  echo json_encode($requestResponseToUser);
} catch (PDOException $e) {
  echo "Error: " . $e->getMessage();
}
