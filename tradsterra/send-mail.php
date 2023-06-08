<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Создаем экземпляр класса PHPMailer
$mail = new PHPMailer;

// Настройки SMTP
$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->Host = 'smtp-relay.sendinblue.com'; // Укажите адрес SMTP-сервера
$mail->SMTPAuth = true;
$mail->Username = 'irichman2010@gmail.com'; // Укажите адрес электронной почты отправителя
$mail->Password = 'mqF5IzhBO6gtj8TH'; // Укажите пароль от почтового ящика отправителя
//$mail->SMTPSecure = 'tls'; // Тип шифрования (tls или ssl)
$mail->Port = 587; // Порт SMTP-сервера

$mail->setFrom('corporate@tradsterra.com', 'Tradsterra'); // Адрес электронной почты отправителя и имя отправителя
$mail->addAddress('uprom24@gmail.com', 'Uprom24'); // Адрес электронной почты получателя и имя получателя
$mail->isHTML(true);
$mail->Subject = 'Заявка сформирована, ожидайте'; // Тема письма
$mail->Body = require('email-template.php');

$mail->AltBody = 'Заявка на платформу успешно сформирована! Ожидайте, в скором времени с вами свяжеться менеджер и проведет экскурсию по платформе'; // Альтернативный текст письма (для неподдерживающих HTML клиентов)

// Отправляем письмо
if (!$mail->send()) {
    echo 'Ошибка отправки письма: ' . $mail->ErrorInfo;
} else {
    echo 'Письмо успешно отправлено!';
}
?>
