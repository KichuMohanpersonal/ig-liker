

<?php
header("Access-Control-Allow-Origin: *");



$con=mysqli_connect('localhost','root','') or die(mysql_error());  
mysqli_select_db($con,'React_Like') or die("cannot select DB");  
$recText = $_POST['tx'];
$rec = $_POST['val'];
$query = "INSERT INTO p_post (post_url,no_like) VALUES('$recText','$rec')";

if(mysqli_query($con,$query)){
    echo 'Data has been inserted';
}
else{
    echo 'Error';
}
?>
