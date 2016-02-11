<?php
 $to = "khalamazad@gmail.com";
 $subject = "From KhalamAzad Website Contact Form";
 $name = $_POST['newFeedBack.userName'];
 $lname = $_POST['newFeedBack.lastName'];
 $email = $_POST['newFeedBack.email'];
 $phone = $_POST['newFeedBack.phoneNumber'];
 $messagetext = $_POST['newFeedBack.message'];

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