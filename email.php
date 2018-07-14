<?php

$subject = 'Recibiste un mensaje de la pagina web'; // Subject of your email
$to = 'zosi.lucas@gmail.com';  //Recipient's E-mail
$emailTo = $_REQUEST['inputEmail'];

$headers = "MIME-Version: 1.1";
$headers .= "Content-type: text/html; charset=iso-8859-1";
$headers .= "From: " . $emailTo . "\r\n"; // Sender's E-mail
$headers .= "Return-Path:" . $emailTo;

$message .= 'Nombre: ' . $_REQUEST['inputName'] . "\n";
$message .= 'Email: ' . $_REQUEST['inputEmail'] . "\n";
$message .= 'Telefon : ' . $_REQUEST['inputPhone'] . "\n";
$message .= 'Mensaje: ' . $_REQUEST['inputMessage'];
$message = wordwrap($mensaje, 70, "\r\n");

if (@mail($to, $subject, $message, $headers)) {
    // Transfer the value 'sent' to ajax function for showing success message.
    echo 'sent';
} else {
    // Transfer the value 'failed' to ajax function for showing error message.
    echo 'failed';
}
?>


