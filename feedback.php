<?php
 $to = "khalamazad@gmail.com";
 $subject = "From KhalamAzad Website Contact Form";
 $name = $_POST['userName'];
 $lname = $_POST['lastName'];
 $email = $_POST['email'];
 $phone = $_POST['phoneNumber'];
 $messagetext = $_POST['message'];

	$message = "Name: ". $name ."\r\n";
	$message .= "Last Name: ". $lname ."\r\n";
	$message .= "Email: ". $email ."\r\n";
	$message .= "Phone: ". $phone ."\r\n";
	$message .= "Requirement: ". $messagetext ."\r\n";

 $headers = "From:$email";
 $sent = mail($to, $subject, $message, $headers, $message);
 if($sent)
 {
	 print "Your message has been sent. Thank you for contacting Me.";
 }
 else
 {print "Could not connect to the server. Please try again later"; }
 ?>