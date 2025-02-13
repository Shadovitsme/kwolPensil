<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$databaseFile = './test.db.';  // Заменяется именем файла базы данных SQLite

try {
  $connection = new PDO("sqlite:$databaseFile");
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die("Connection failed: " . $e->getMessage());
}
try {
  $a = $connection->query("SELECT * FROM Customers order by date");
  $l = ($a->fetchAll());
  echo json_encode($l);

} catch (PDOException $e) {
  echo "Error: " . $e->getMessage();
}
