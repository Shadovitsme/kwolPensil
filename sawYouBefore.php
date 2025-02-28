<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$databaseFile = './test.db.';  // Заменяется именем файла базы данных SQLite
$phone = $_GET['phone'];
try {
    $connection = new PDO("sqlite:$databaseFile");
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Connection failed: ' . $e->getMessage());
}
try {
    $query = $connection->query("SELECT * FROM Customers where phone='$phone'");
    $result = ($query->fetchAll());
    $userId = $result[0]['Id'];
    $roomsQuery = $connection->query("SELECT * FROM rooms where userId='$userId'")->fetchAll();
    $wishesQuery = $connection->query("SELECT * FROM wishes where userId='$userId'")->fetchAll();
    $detailRoomQuery = $connection->query("SELECT * FROM detailRoom where userId='$userId'")->fetchAll();
    $result[0]['rooms'] = $roomsQuery;
    $result[0]['wishes'] = $wishesQuery;
    $result[0]['detailRoom'] = $detailRoomQuery;

    echo json_encode($result);
} catch (PDOException $e) {
    echo 'Error: ' . $e->getMessage();
}
