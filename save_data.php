<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$databaseFile = './test.db.';  // Заменяется именем файла базы данных SQLite

switch ($_POST['funk']) {
    case 'addNamePhone':
        addNamePhone();
        break;
    case 'addCommonData':
        addCommonData();
        break;
    case 'addRoomCount';
        addRoomCount();
        break;
    case 'addWishes':
        addWishes();
        break;
    case 'addDetailRoom':
        addDetailRoom();
        break;
    case 'addRefs':
        addRefs();
        break;
}

function addNamePhone()
{
    global $databaseFile;
    $name = $_POST['name'];  // получаем данные из формы
    $phone = $_POST['phone'];
    $town = $_POST['town'];
    $date = date('d/m/y');
    try {
        $connection = new PDO("sqlite:$databaseFile");
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die('Connection failed: ' . $e->getMessage());
    }
    $sql = "INSERT INTO Customers (FirstName, Phone, Town,date) VALUES ('$name', '$phone','$town','$date')";
    try {
        $connection->exec($sql);
        $a = $connection->query("SELECT id FROM Customers where FirstName = '$name' AND Phone = '$phone'");
        $id = $a->fetchAll()[0][0];
        echo ($id);

        setcookie('userId', $id, time() + 3600);
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}

function setLocation($id)
{
    global $databaseFile;

    $location = $_POST['location'];
    $sql = "UPDATE Customers
        SET 
        'location' = '$location'
        WHERE Id = '$id'";
    try {
        $connection = new PDO("sqlite:$databaseFile");
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'Connected successfully';
    } catch (PDOException $e) {
        die('Connection failed: ' . $e->getMessage());
    }

    try {
        $connection->exec($sql);

        echo 'Data inserted successfully';
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}

function addCommonData()
{
    global $databaseFile;
    $id = $_POST['userId'];
    $familyMembers = $_POST['familyMembers'];
    $pets = $_POST['pets'];
    $soundless = $_POST['soundless'];
    $furniture = $_POST['furniture'];
    $hobby = $_POST['hobby'];
    $replane = $_POST['replane'];
    $visitors = $_POST['visitors'];
    $actvitySphere = $_POST['actvitySphere'];
    $area = $_POST['area'];
    $zones = $_POST['zones'];
    $workPlaces = $_POST['workPlaces'];
    $location = $_POST['location'];
    $sql = "UPDATE Customers
        SET familyMembers = '$familyMembers',
        Pets = '$pets',
        soundless = '$soundless',
        furniture = '$furniture',
        hobbyDescription = '$hobby',
        replan = '$replane',
        visitors = '$visitors',
        'actvitySphere' = '$actvitySphere',
        'area' = '$area',
        'zones'= '$zones',
        'workPlaces' = '$workPlaces',
        'location' = '$location'
        WHERE Id = '$id'";

    try {
        $connection = new PDO("sqlite:$databaseFile");
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'Connected successfully';
    } catch (PDOException $e) {
        die('Connection failed: ' . $e->getMessage());
    }

    try {
        $connection->exec($sql);

        echo 'Data inserted successfully';
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}

function addRoomCount()
{
    global $databaseFile;
    $id = $_POST['userId'];
    $i = 0;
    foreach ($_POST as $room => $count) {
        if ($i > 1) {
            if ($count) {
                try {
                    $connection = new PDO("sqlite:$databaseFile");
                    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    echo 'Connected successfully';
                } catch (PDOException $e) {
                    die('Connection failed: ' . $e->getMessage());
                }
                $sql = "INSERT INTO rooms (userId, room, count) VALUES ('$id', '$room', '$count')";

                try {
                    $connection->exec($sql);
                    setcookie($room, $count, time() + 3600);
                    echo 'Data inserted successfully';
                } catch (PDOException $e) {
                    echo 'Error: ' . $e->getMessage();
                }
            }
        }
        $i++;
    }
    setLocation($id);
}

function addWishes()
{
    global $databaseFile;
    $id = $_POST['userId'];

    try {
        $connection = new PDO("sqlite:$databaseFile");
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'Connected successfully';
    } catch (PDOException $e) {
        die('Connection failed: ' . $e->getMessage());
    }

    $light = $_POST['light'];
    $condicioner = $_POST['condicioner'];
    $warmFloor = $_POST['warmFloor'];
    $style = $_POST['style'];
    $ceiling = $_POST['ceiling'];
    $wannaSee = $_POST['wannaSee'];
    $dontWannaSee = $_POST['dontWannaSee'];
    $deadline = $_POST['deadline'];
    $additional = $_POST['additional'];
    $floor = $_POST['floor'];

    $sql = "INSERT INTO wishes (userId, light, warmFloor, ceiling, floor, conditioner, wannaSee, dontWannaSee, deadline,additional,style) VALUES ('$id', '$light
    ', '$warmFloor', '$ceiling', '$floor', '$condicioner', '$wannaSee', '$dontWannaSee', '$deadline', '$additional', '$style' )";

    try {
        $connection->exec($sql);

        echo 'Data inserted successfully';
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
    setLocation($id);
}

function addDetailRoom()
{
    global $databaseFile;
    $id = $_POST['userId'];
    setLocation($id);

    foreach ($_POST['arr'] as $item) {
        $i = 0;
        $room = $item[0];
        echo 'hie';
        foreach ($item as $prop) {
            if ($i > 0) {
                if ($prop[1] && $prop[0]) {
                    $thing = $prop[0];
                    $description = $prop[1];
                    try {
                        $connection = new PDO("sqlite:$databaseFile");
                        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        echo 'Connected successfully';
                    } catch (PDOException $e) {
                        die('Connection failed: ' . $e->getMessage());
                    }
                    $sql = "INSERT INTO detailRoom (userId, room, property,description) VALUES ('$id', '$room', '$thing','$description')";
                    try {
                        $connection->exec($sql);

                        echo 'Data inserted successfully';
                    } catch (PDOException $e) {
                        echo 'Error: ' . $e->getMessage();
                    }
                }
            }
            $i++;
        }
    }
}

function addRefs()
{
    global $databaseFile;
    $id = $_POST['userId'];
    var_dump($_POST);
    setLocation($id);

    try {
        $connection = new PDO("sqlite:$databaseFile");
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo "Connected successfully";
    } catch (PDOException $e) {
        die('Connection failed: ' . $e->getMessage());
    }
    foreach ($_POST['dataArr'] as $item) {
        $pic = $item[0];
        $description = $item[1];
        $sql = "INSERT INTO refs (userId, img, description) VALUES ('$id', '$pic','$description')";
        try {
            $connection->exec($sql);

            echo 'Data inserted successfully';
        } catch (PDOException $e) {
            echo 'Error: ' . $e->getMessage();
        }
    }
}
