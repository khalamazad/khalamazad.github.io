
<?php
/**
 * @filesource : feedback.php
 * @author : Abul khalam Azad
 * @abstract : simple submission php form
 *  */

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);


//saving to database
//save query

//now i am just printing the values
echo "First Name : ".$data->FirstName."n";
echo "Last Name : ".$data->LastName."n";
echo "Email : ".$data->Email."n";
echo "Phone Number : ".$data->PhoneNumber."n";
echo "Message : ".$data->message."n";
?>