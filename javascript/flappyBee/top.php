<?php require_once 'conn.php' ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="style.scc" type="text/css" rel="stylesheet" />
<style>
* {
	margin:0;
	padding:0;
}
h2{
	font-size:16px;
	margin:5px 0px 0px 5px;
}
</style>
<title>pascal中文社区 游戏排行</title>
<script type="text/javascript"> 
</script>
</head>
<body>
<div style="width:100%;height:auto;text-align:center;">
	
	<div style="width:850px;height:auto;margin:10px 0px 0px 0px;margin:0 auto;text-align:left;">
	
		
		<div style="float:left;clear:left;width:850px;height:auto;margin:0px 0px 0px 0px;text-align:left;">

				<div style="float:left;clear:left;width:850px;height:auto;background:#0B93D6;margin:10px 0px 0px 0px;padding:0px 0px 10px 0px;">
					<a href="index.php" style="text-decoration:none;display:block;color:#fff;width:830px;height:30px;margin:10px 0px 0px 10px;">pascal中文社区 游戏 Flappy bee </a>
					<div style="width:830px;height:auto;float:left;clear:left;margin:0px 10px 0px 10px;background:#D4E1EC;">
						<div style="width:810px;height:15px;float:left;clear:left;margin:10px 0px 0px 10px;padding:0px 0px 10px 0px;">
							<div style="color:#105289;text-decoration:none;">游戏排行榜：</div>
						</div>
					</div>
				
				<?php
				$i=0;
				$tops_result=mysql_query("select * from `tops` order by `v` desc limit 0,100");
				while($tops_row = mysql_fetch_array($tops_result)){
					$i++;
					$name=strip_tags($tops_row['name']);
					$name=str_replace("共产党","***",$name);
					$name=str_replace("宫","***",$name);
					$name=str_replace("你妈","***",$name);
					$name=str_replace("逼","***",$name);
					$name=str_replace("操","***",$name);
					$name=str_replace("肏","***",$name);
					$name=str_replace("你大爷","***",$name);
					$name=str_replace("","***",$name);
					?>
					<div style="width:830px;height:auto;float:left;clear:left;margin:10px 10px 0px 10px;background:#D4E1EC;">
						<div style="width:810px;height:auto;float:left;clear:left;margin:10px 0px 0px 10px;padding:0px 0px 10px 0px;">
							(<?php echo $i; ?>) 姓名：<?php echo $name; ?> 分数：<?php echo $tops_row['v']; ?>
						</div>
					</div>
					<?php
					}
				?>
					
				</div>

		</div>
<?php
mysql_query("INSERT INTO `game_ips` (`id` ,`ip` ,`time` )VALUES (NULL , '$ip', CURRENT_TIMESTAMP );");
?>
		<div style="width:100%;height:auto;background:#CADCEB;font-size:16px;color:#105289;text-align:center;float:left;clear:left;margin:20px 0px 0px 0px;padding:10px 0px 10px 0px;">
			Copyrights © 2013-2014 , pascal中文社区  All Rights Reserved. viewed:<?php echo mysql_num_rows(mysql_query("select * from `game_ips`")) ;?></div>
		</body>
	</div>

</div>
</html>
