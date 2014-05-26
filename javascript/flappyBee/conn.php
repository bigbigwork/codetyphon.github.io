<?php
session_start();
define('mysql_server','localhost');
define('mysql_root','pingzili_pascal');
define('mysql_pass','sfH11f0h');//7OGySHv5
define('mysql_bass','pingzili_pascal');
$con = mysql_connect(mysql_server,mysql_root,mysql_pass);
if (!$con){
  die('Could not connect: ' . mysql_error());
  exit;
}
mysql_select_db(mysql_bass,$con);
mysql_query("set names utf8");
$ip = ip2long($_SERVER["REMOTE_ADDR"]);//ip
?>