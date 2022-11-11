<?php
	$username = $_POST['username'];
	$password = $_POST['password'];


	// Database connection
	$conn = new mysqli('us-cdbr-east-06.cleardb.net','befa68c4d5919a','d684d1fd','heroku_4ad9e7c6144206b');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(username, password) values(?, ?)");
		$stmt->bind_param("ss", $username, $password);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successful...";
		$stmt->close();
		$conn->close();
	}
?>