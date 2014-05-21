<?php
	/**
	 * Example Usage:
	 * 		php confirmGcDatabase.php needle number_of_guestcards
	 **/

	$comments = (int)$argv[1];
	$success = (int)$argv[2];

	//Finding the server env
	defined('APPLICATION_ENV') || define('APPLICATION_ENV', (getenv('ServerEnvironment') ? getenv('ServerEnvironment') : 'live'));
	$databaseHost = 'live_database';
	switch (APPLICATION_ENV) {
		case 'dev':
			$databaseHost = 'dev_database';
			break;
		case 'beta': 
			$databaseHost = 'beta_database';
			break;
		default:
			$databaseHost = 'live_database';
			break;
	}

	$conn = mssql_pconnect($databaseHost, 'readonly', 'readonly') or die("Couldn't connect to SQL Server\n");
	$connectDB = mssql_select_db('FRC', $conn)or die("Couldn't open database.\n");
	$getGc = " ";
	$query = "select count(*) gcs from dbo.guest_card (nolock) where  guest_card_date > dateadd(day,-2,getdate()) and Comments LIKE '%" .$comments."%'";
	$getGc = mssql_query($query);
	if($getGc){
		$response = mssql_fetch_array($getGc);
	}
	if($response["gcs"] === $success){
		echo "Success, All guestcards found in database";
		exit(0);
	}
	else{
		echo "Failure, All guestcards not found in database";
		exit(1);
	}
	
?>