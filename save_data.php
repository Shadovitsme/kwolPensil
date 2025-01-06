<?php

$databaseFile = './test.db.';  // Заменяется именем файла базы данных SQLite


if ($_POST['funk'] == 'addNamePhone') {
    addNamePhone();
}


function addNamePhone()
{
    global $databaseFile;
    var_dump(($_POST));

    $name = $_POST['name']; // получаем данные из формы
    $phone = $_POST['phone'];
    try {
        $connection = new PDO("sqlite:$databaseFile");
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
    } catch (PDOException $e) {
        die("Connection failed: " . $e->getMessage());
    }

    $sql = "INSERT INTO Customers (FirstName, Phone) VALUES ('$name', '$phone')";
    echo $sql;
    try {
        $connection->exec($sql);
        echo "Data inserted successfully";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
