<?php 
 header('Access-Control-Allow-Origin: *');  
 $to = "khalamazad@gmail.com"; 
 $subject = "From khalamAzad Website Contact Form";
 $name = $_REQUEST['FirstName']; 
 $company = $_REQUEST['LastName']; 
 $email = $_REQUEST['Email']; 
 $phone = $_REQUEST['PhoneNumber'];
 $messagetext = $_REQUEST['message'];
 
	$message = "Name: ". $name ."\r\n"; 
	$message .= "Email: ". $email ."\r\n"; 
	$message .= "Phone: ". $phone ."\r\n"; 
	$message .= "Company: ". $company ."\r\n";
	$message .= "Requirement: ". $messagetext ."\r\n";
 
 $headers = "From:$email"; 
 $sent = mail($to, $subject, $message, $headers, $message); 
 if($sent) 
 {
	 echo "<script type='text/javascript'>alert('Your message has been sent. Thank you for contacting us.');</script>";

 
 }
 else 
 {
 echo "<script type='text/javascript'>alert('Could not connect to the server. Please try again later.');</script>";
 }
 ?>