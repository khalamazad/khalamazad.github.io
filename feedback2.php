<?php
 $errors = array(); // array to hold validation errors
 $data = array(); // array to pass back data
 // return a response ===========================================================
 // response if there are errors
 if ( ! empty($errors)) {
   // if there are items in our errors array, return those errors
   $data['success'] = false;
   $data['errors'] = $errors;
   $data['messageError'] = 'Please check the fields in red';
 } else {
   // if there are no errors, return a message
   $data['success'] = true;
   $data['messageSuccess'] = 'Hey! Thanks for reaching out. I will get back to you soon';

   // CHANGE THE TWO LINES BELOW
   $email_to = "khalamazad@gmail.com";
   $email_subject = "From KhalamAzad Website Contact Form";

   $name = $_POST['userName']; // required
   $lname = $_POST['lastName']; // required
   $email_from = $_POST['email']; // required
   $phone = $_POST['phoneNumber']; // required
   $message = $_POST['message']; // required

   $email_message = "Feedback details below.nn";
   $email_message .= "Name: ".$name."n";
   $email_message .= "Name: ".$lname."n";
   $email_message .= "Name: ".$phone."n";
   $email_message .= "Email: ".$email_from."n";
   $email_message .= "Message: ".$message."n";

   $headers = 'From: '.$email_from."rn".
   'Reply-To: '.$email_from."rn" .
   'X-Mailer: PHP/' . phpversion();

   @mail($email_to, $email_subject, $email_message, $headers);
 }
 // return all our data to an AJAX call
 echo json_encode($data);
?>