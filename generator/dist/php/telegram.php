<?php

function getVar($name){
  return isset($_REQUEST[$name]) ? trim($_REQUEST[$name]) : null;
}


function sanitizeString($string) {
    // Видаляємо зайві пробіли на початку і в кінці рядка
    $string = trim($string);

    // Екрануємо спеціальні символи HTML
    $string = htmlspecialchars($string, ENT_QUOTES, 'UTF-8');

    // Видаляємо потенційно небезпечні символи
    $string = filter_var($string, FILTER_SANITIZE_STRING);

    return $string;
}


$data_post = [
  'order_value' => 'Order:',
  'email' => getVar('email'),
  'phone' => getVar('phone')
];

if(empty($data_post['email']) && empty($data_post['phone'])) {
  die('empty');
}

// $order_list = str_replace('$', '', getVar('order_value'));
// $order_list = str_replace('+', '', $order_list);
// $order_list = str_replace('(', '', $order_list);
// $order_list = str_replace(')', '', $order_list);
$order_list = addslashes(getVar('order_value'));

$order_list_array = explode("; ", $order_list);

$message = '';
foreach ($data_post as $key => $value) {
  if ($value != "") {
    $message .= "<b>".$key."</b> : ".$value."\n";
  }
}

foreach ($order_list_array as $key => $value) {
  if ($value != "") {
    $message .= "<b>".ucfirst($key)."</b> : ".$value."\n";
  }
}

//print_r(($message));

// токен телеграмм бота
// $token = '6177008365:AAHArveuNVb7mdrWy_RzeGYk3MURLnRDAGU';
$token = '6579693076:AAGT027cb5-mHJpdcMsXGkyAxB68F8S1Dzo';
// айди пользователя в чат телеграмм
$chatId = [
    // '-806140435',
    '625798556',
    // '405035213',
];

// URL API для отправки сообщения
$url = "https://api.telegram.org/bot$token/sendMessage";

for ($i=0; $i < count($chatId); $i++) {
    // Создание массива данных для запроса
    $data = array(
        'chat_id' => $chatId[$i],
        'text' => $message,
        'parse_mode' => 'HTML'
    );

    // Преобразование данных в JSON
    $jsonData = json_encode($data);

    // Настройка параметров запроса
    $options = array(
        'http' => array(
            'header' => "Content-Type: application/json\r\n",
            'method' => 'POST',
            'content' => $jsonData
        )
    );

    // Создание контекста потока
    $context = stream_context_create($options);

    // Отправка запроса и получение ответа
    $result = file_get_contents($url, false, $context);

    // Проверка результата
    if ($result === false) {
        // Обработка ошибки
        echo "Ошибка при отправке сообщения";
    } else {
        // Обработка успешного результата
        echo "Сообщение успешно отправлено";
    }
}

include 'mail.php';
