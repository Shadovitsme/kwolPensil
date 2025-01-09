<?php

$databaseFile = './test.db.';  // Заменяется именем файла базы данных SQLite
$id = $_COOKIE['userId'];

try {
  $connection = new PDO("sqlite:$databaseFile");
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die("Connection failed: " . $e->getMessage());
}
try {
  $a = $connection->query("SELECT * FROM detailRoom");
  $l = ($a->fetchAll());
  echo json_encode($l);
} catch (PDOException $e) {
  echo "Error: " . $e->getMessage();
}
