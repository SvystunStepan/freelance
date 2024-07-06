<?php

/*ОТПРАВЛЯЕМ НА ПОЧТУ */
$c = true;
//- встановлює email адресу адміністратора
$admin_email = 'info@topgen.com.ua';
//- встановлює email адресу, на яку буде відправлено лист
// $to = 'irichman2010@gmail.com';
$to = 's913ua@gmail.com';

$project_name = 'Order TopGen';

function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

foreach ($data_post as $key => $value) {
	if ($value != "") {
		$message .= "
				" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>";
	}
}
$message = "<table style='width: 100%;'>$message</table>";

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($to, adopt($project_name), $message, $headers );

/*end ОТПРАВЛЯЕМ НА ПОЧТУ */

