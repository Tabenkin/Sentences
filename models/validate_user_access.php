<?php

	require_once('../config/connect.php');
	require_once('../validation/validator.php');
	
	$MAX_ALLOWABLE_SESSIONS = 1000;
	
	
	
	$validator = new Validator();
	
	
	if(!isset($_POST['access_code'])){
		
		return false;
		exit;
						
	}
	
	if(empty($_POST['access_code'])){
		
		echo "Please enter a valid access code";
		exit;	
	}
	
	
	
	$access_code = $validator->escape_string($_POST['access_code']);
	$access_code = $validator->strip_html_entities($access_code);
	
	
	$query = "SELECT * FROM access_table WHERE access_code = '" . $access_code . "'";
	$result = mysql_query($query) or die(mysql_error());
	
	$row = mysql_fetch_array($result);
	
	
	if(empty($row)){
		
		echo "This is not a valid access code";
		exit;
		
	}
	
	
	$isActive = $row['is_active'];
	
	
	if($isActive == 0){
		
		
		echo "This is not an active access code";
		exit;
	}
	
	
	$query = "SELECT count(access_id) 'sessions' FROM session_manager WHERE access_id = " . $row['access_id'];
	$result = mysql_query($query) or die(mysql_error());
	$row = mysql_fetch_array($result);
	
	if($row['sessions'] > $MAX_ALLOWABLE_SESSIONS){
		
		echo "This account has exceeded its maximum number of sessions";
		exit;		
	}
	
	
	//I will implement this later on in the life of the website.
	//session_start();
	//$_SESSION['ACCESS_CODE'] = $access_code;
	
	//$query = "INSERT INTO `session_manager`(`access_id`) VALUES (" . $row['access_id']  . ")";
	//mysql_query($query) or die(mysql_error());
	
	
	
	echo true;


?>