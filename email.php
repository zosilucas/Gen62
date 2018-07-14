<?php

//$to      = 'arquitectos@gen62.com.ar';//$_REQUEST['inputEmail'];
$to = 'zosi.lucas@gmail.com'; //$_REQUEST['inputEmail'];
$emailFrom = $_REQUEST['inputEmail'];
$subject = 'Recibiste un mensaje nuevo';
$message = 'Nombre : ' . $_REQUEST['inputName'] . "\n";
$message .= 'Email : ' . $emailFrom . "\n";
$message .= 'Telefono : ' . $_REQUEST['inputPhone'] . "\n";
$message .= 'Mensaje : ' . $_REQUEST['inputMessage'];
$headers = 'From: ' . $emailFrom;

$success = mail($to, $subject, $message, $headers);

return $success;

?>
