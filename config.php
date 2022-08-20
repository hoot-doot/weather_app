<?php
$servername = "127.0.0.1";
$database = "weather";
$username = "root";
$password = "####";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
  die("<b>Connection failed: </b>" . mysqli_connect_error());
}
// echo "<b>Database Connected successfully</b>";

$apiKey = '#################';

?>
