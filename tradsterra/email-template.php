<?php
return '
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Простой Email-шаблон</title>
  <style>
/* Общие стили */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
      line-height: 1.4;
    }
    
    .container {
    max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1 {
    font-size: 24px;
      margin-bottom: 20px;
    }
    
    p {
    margin-bottom: 10px;
    }
    
    .button {
    display: inline-block;
    padding: 10px 20px;
      background-color: #FFA500;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
    }
    
    /* Медиа-запросы для мобильных устройств */
    @media screen and (max-width: 480px) {
    .container {
        padding: 10px;
      }
      
      h1 {
        font-size: 20px;
      }
      
      p {
        font-size: 14px;
      }
      
      .button {
        padding: 8px 16px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Заявка на платформу успешно сформирована!</h1>
    <p>Мы рады сообщить вам, что ваша заявка на платформу по заработку была успешно сформирована. Ожидайте, в скором времени с вами свяжеться менеджер и проведет экскурсию по платформе.</p>
    <p>Если у вас возникнут какие-либо вопросы или вам понадобится дополнительная информация, не стесняйтесь обращаться к нам. Мы всегда готовы помочь вам.</p>
    <p>С нетерпением ждем вас на нашей платформе и надеемся, что это будет продуктивное и вдохновляющее время для вас.</p>
    <p>С наилучшими пожеланиями!</p>
  </div>
</body>
</html>';

