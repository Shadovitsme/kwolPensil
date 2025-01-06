<?php
$name = $_POST['name']; // получаем данные из формы
file_put_contents('data.txt', $name); // записываем данные в файл
