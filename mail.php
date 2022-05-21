<?php


$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n"

$recipient = "kevinwilber@yahoo.com";

mail($recipient, $subject, $message, $mailheader)
or die("Error!");

echo'
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Contact</title>
    <link rel="stylesheet" href="stud.css">
  </head>
  <body>

<div class="container">
  <h1>Thank you for contacting me, I will get back to you as soons as possible</h1>
   <p>Go back to the homepage</p>
</div>

  </body>
</html>


';

 ?>
