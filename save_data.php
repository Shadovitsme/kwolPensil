<?php

$databaseFile = './test.db.';  // Заменяется именем файла базы данных SQLite


switch ($_POST['funk']) {
    case 'addNamePhone':
        addNamePhone();
        break;
    case 'addCommonData':
        addCommonData();
        break;
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
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}

function addCommonData()
{
    global $databaseFile;
    $id = $_COOKIE['userId'];
    $familyMembers = $_POST['familyMembers'];
    $pets = $_POST['pets'];
    $soundless = $_POST['soundless'];
    $furniture = $_POST['furniture'];
    $hobby = $_POST['hobby'];
    $replane = $_POST['replane'];
    $visitors = $_POST['visitors'];
    $budget = $_POST['budget'];
    $sql = "UPDATE Customers
        SET familyMembers = '$familyMembers',
        Pets = '$pets',
        soundless = '$soundless',
        furniture = '$furniture',
        hobbyDescription = '$hobby',
        replan = '$replane',
        visitors = '$visitors',
        budget = $budget
        WHERE Id = '$id'";

    try {
        $connection = new PDO("sqlite:$databaseFile");
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
    } catch (PDOException $e) {
        die("Connection failed: " . $e->getMessage());
    }

    try {
        $connection->exec($sql);

        echo "Data inserted successfully";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
