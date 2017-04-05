<?php
error_reporting(E_ALL & ~E_NOTICE);

$dblocation = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'losos';
$dbcn = mysqli_connect ($dblocation, $dbuser, $dbpass, $dbname);

if(!$dbcn){
	exit('Error serverconnect');
}?>