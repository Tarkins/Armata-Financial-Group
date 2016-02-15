<?php

$frm_name  = "Youname";
$recepient = "tarasovartyomand@mail.ru";
$sitename  = "Armata Financical Group";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$formname = trim($_POST["form-name"]);

$message = "
Новая заявка:<br>

Форма: $formname <br>
Имя: $name <br>
Телефон: $phone
";

if( mail($recepient, $subject, $message, "Content-type: text/html; charset=\"utf-8\"") ) {
	echo 'ok';
	} else {
		echo 'error';
	}
