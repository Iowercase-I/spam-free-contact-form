<?php
$title = 'Spam-free Contact Form';
$name = $_POST['form_name'];
$email = $_POST['form_email'];
$website = $_POST['form_website'];
$message = $_POST['form_message'];
$phone = $_POST['form_phone'];
$newsletter = $_POST['form_newsletter'];
$amount = $_POST['form_donation_amount'];
$currency = $_POST['form_donation_currency'];
$destination_email = 'destination_email@your_domain.com';
$redirect_url = 'https://your_redirect_site.com/';
$content =
'Spam-free Contact Form Payment and Message Received:
Form Title: ' . $title . '
Name: ' . $name . '
Email: ' . $email . '
Phone: ' . $phone . '
Website: ' . $website . '
Newsletter: ' . $newsletter . '
Donation Amount: ' . $amount . '
Donation Currency: ' . $currency . '
Message: ' . $message;
mail( $destination_email, 'Spam-free Form Payment and Message Received - ' . $name . ', ' . $email, $content );
header('Location: '.$redirect_url);
exit('Redirecting you to '.$redirect_url);?>
