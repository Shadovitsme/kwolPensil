<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

var_dump($_FILES);

$uploadDir = './clientsRefs/';
$uploadFile = $uploadDir . basename($_FILES['photo']['name']);

if (move_uploaded_file($_FILES['photo']['tmp_name'], $uploadFile)) {
    echo json_encode(['status' => 'success', 'message' => 'File uploaded successfully.']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to move uploaded file.']);
}
