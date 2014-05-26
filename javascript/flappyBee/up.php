<?php require_once 'conn.php';
if(isset($_POST['name'])){
	$name=$_POST['name'];
	$v=$_POST['v'];
	mysql_query("INSERT INTO `tops` (
`id` ,
`ip` ,
`name` ,
`v` ,
`time` 
)
VALUES (
NULL , '$ip', '$name', '$v', 
CURRENT_TIMESTAMP 
);

");
}
header("location:top.php");
?>
