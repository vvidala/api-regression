<?php
	$comments = (int)$argv[1];
	$success = (int)$argv[2];
	$conn = mssql_pconnect('beta_database', 'readonly', 'readonly') or die("Couldn't connect to SQL Server\n");
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