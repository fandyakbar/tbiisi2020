<?php
	$host = "localhost";
	$user = "postgres";
	$pass = "fandy1113";
	$port = "5432";
	$dbname = "bdl";
	$conn = pg_connect("host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$pass) or die("Gagal");
?>