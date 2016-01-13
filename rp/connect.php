<?php

	$host="localhost";
	$user="b10_17111991";
	$pass="aditya123";
	$dbname="b10_17111991_rp";
	
	$con=mysqli_connect($host, $user, $pass, $dbname);
	
	if(!$con)
	{
		echo 'Not Connected! Please Contact admin@eclectika.org';
		die();
	}
?>