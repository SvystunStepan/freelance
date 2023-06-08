<?php
// Проверяем, был ли отправлен POST-запрос
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем и валидируем данные из полей формы
    $name = test_input($_POST["name"]);
    $phone = test_input($_POST["phone"]);
    $email = test_input($_POST["email"]);
    $register = test_input($_POST["register"] ?? 1);

    // Проверяем, заполнены ли все поля
    if (empty($name) || empty($phone) || empty($email)) {
        echo "Пожалуйста, заполните все поля формы.";
    } else {
        // Получаем IP-адрес пользователя
        $ip = $_SERVER["REMOTE_ADDR"];

        // Получаем User-Agent пользователя
        $userAgent = $_SERVER["HTTP_USER_AGENT"];

        // Отправляем POST-запрос с данными на адрес https://app.tradsterra.com/send
        $url = "https://app.tradsterra.com/send";
        $data = array(
            "f_name" => $name,
            "full_phone" => $phone,
            "email" => $email,
            "register" => $register,
            "ip" => $ip,
            "user_agent" => $userAgent
        );

        $json_data = json_encode($data);
        $file_path = 'data.json';
        $file_handle = fopen($file_path, 'a');
        fwrite($file_handle, $json_data . "\n");
        fclose($file_handle);

        $options = array(
            "http" => array(
                "header"  => "Content-type: application/x-www-form-urlencoded",
                "method"  => "POST",
                "content" => http_build_query($data)
            )
        );

        $context = stream_context_create($options);
        $result = file_get_contents($url, false, $context);

        if ($result !== false) {
            header("Location: /courses.html");
            exit;
        } else {
            header("Location: /courses.html");
            exit;
        }
    }
}

// Функция для проверки и очистки данных
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
