<?php 
 header('Access-Control-Allow-Origin: *');  
 $postdata = file_get_contents("php://input");
 $request = json_decode($postdata);
     
 $to = "khalamazad@gmail.com"; 
 $subject = "From khalamAzad Website Contact Form";
 
 @$FirstName = $request->FirstName;
 @$LastName = $request->LastName;
 @$email = $request->Email;
 @$phone = $request->PhoneNumber;
 @$messagetext = $request->message;
 
	$message = "First Name: ". @$FirstName ."\r\n"; 
	$message .= "Last Name: ". @$LastName ."\r\n";
	$message .= "Email: ". @$email ."\r\n"; 
	$message .= "Phone: ". @$phone ."\r\n"; 
	$message .= "Message: ". @$messagetext ."\r\n";
	$message .= "..................................";
 
 $sent = mail($to, $subject, $message, $headers, $message); 
 if($sent) 
 {
	 echo "Your message has been sent. Thank you for contacting us.";
 }
 else 
 {
 	echo "Could not connect to the server. Please try again later.";
 }
 ?>