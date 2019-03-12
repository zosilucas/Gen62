<?php

$subject = 'Recibiste un mensaje de la pagina web'; // Subject of your email
$to = 'arquitectos@gen62.com.ar';  //Recipient's E-mail
$emailTo = $_REQUEST['inputEmail'];

$headers = "MIME-Version: 1.1";
$headers .= "Content-type: text/html; charset=iso-8859-1";
$headers .= "From: " . $emailTo . "\r\n"; // Sender's E-mail
$headers .= "Return-Path:" . $emailTo;

$message .= 'Nombre: ' . $_REQUEST['inputName'] . "\n";
$message .= 'Email: ' . $_REQUEST['inputEmail'] . "\n";
$message .= 'Teléfono: ' . $_REQUEST['inputPhone'] . "\n";
$message .= 'Mensaje: ' . $_REQUEST['inputMessage'];
$message = wordwrap($message, 70, "\r\n");

if (@mail($to, $subject, $message, $headers)) {
    // Transfer the value 'sent' to ajax function for showing success message.
    send_json_and_die(array("success" => true));
} else {
    // Transfer the value 'failed' to ajax function for showing error message.
    send_json_and_die(array("success" => false));
}

function send_json_and_die($arr, $http_code = 200) {
    header("Content-Type:application/json;charset=UTF-8");
    if ($http_code !== 200) {
        header("HTTP/1.1 $http_code  ");
    }
    if (is_array($arr)) {
        $encoded = json_encode($arr);
        if (json_last_error() === JSON_ERROR_UTF8) {
            $encoded = json_encode(utf8ize($arr));
        }
    } else {
        $encoded = $arr;
    }
    echo $encoded;
    die();
}
?>


