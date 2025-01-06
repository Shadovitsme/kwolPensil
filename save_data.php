<?php

$databaseFile = './test.db.';  // Заменяется именем файла базы данных SQLite


if ($_POST['funk'] == 'addNamePhone') {
    addNamePhone();
}


function addNamePhone()
{
    global $databaseFile;

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
    try {
        $connection->exec($sql);

        echo "Data inserted successfully";
        $a = $connection->query("SELECT id FROM Customers where FirstName = '$name' AND Phone = '$phone'");
        setcookie('userId', $a->fetchAll()[0][0], time() + 3600);
        var_dump($_COOKIE['userId']);
      
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
