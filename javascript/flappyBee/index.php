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
<title>pascalchina 游戏</title>
<script type="text/javascript"> 
</script>
</head>
<body>
<div style="width:100%;height:auto;text-align:center;">
	
	<div style="width:850px;height:auto;margin:10px 0px 0px 0px;margin:0 auto;text-align:left;">
	
		<?php //require_once 'top.php';?>
		<style>
			#gamebox{
				background:url(images/yun.png) 0px -80px;
			}
			#bird{
				width:32px;
				height:32px;
				float:left;clear:left;
				position:absolute;
				left:100px;
				top:100px;
				background:url(images/bee.png);
			}
			
			#zhuzi1{
				width:50px;
				height:100px;
				float:left;clear:left;
				position:absolute;
				left:600px;
				top:100px;
				background:#ccc;
				background:url(images/zt.png);
			}
			#gamestart{
				width:500px;
				height:200px;
				text-align:center;
				
				float:left;clear:left;
				position:absolute;
				left:150px;
				top:50px;
				background:#ccc;
				color:#f00;
				z-index:900;
				moz-opacity:0.5;
				opacity:0.5;
				filter:alpha(opacity=50); 
			}
			#gameover{
				width:500px;
				height:200px;
				text-align:center;
				
				float:left;clear:left;
				position:absolute;
				left:150px;
				top:50px;
				background:#ccc;
				display:none;
				color:#f00;
				z-index:900;
				moz-opacity:0.8;
				opacity:0.8;
				filter:alpha(opacity=80); 
			}
			#cp{
				position:absolute;
				left:50px;
				top:70px;
				z-index:1000;
				
				
				width:150px;
				height:150px;
				moz-opacity:0.3;
				opacity:0.3;
				filter:alpha(opacity=30); 
				display:none;
			}
			#caodi{
				width:830px;
				height:32px;
				float:left;clear:left;
				position:relative;
				left:0px;
				top:280px;
				background:url(images/caodi.png);
				display:none;
			}
			
		</style>
		<div style="float:left;clear:left;width:850px;height:auto;margin:0px 0px 0px 0px;text-align:left;">

				<div style="float:left;clear:left;width:850px;height:auto;background:#0B93D6;margin:10px 0px 0px 0px;padding:0px 0px 10px 0px;">
					<a href="" style="text-decoration:none;display:block;color:#fff;width:830px;height:30px;margin:10px 0px 0px 10px;">pascalchina 游戏 Flappy bee </a>
					
					
					<div style="width:830px;height:auto;float:left;clear:left;margin:0px 10px 0px 10px;background:#D4E1EC;">
						<div style="width:810px;height:15px;float:left;clear:left;margin:10px 0px 0px 10px;padding:0px 0px 10px 0px;">
							<a href="" style="color:#105289;text-decoration:none;float:left;clear:left;width:200px;">当前得分（<span id="f">0</span>）</a>
							<a href="top.php" style="color:#105289;text-decoration:none;float:left;clear:none;width:200px;">查看排行榜</a>
						</div>
					</div>
					<div style="position:relative;width:830px;height:auto;float:left;clear:left;margin:10px 10px 0px 10px;background:#AED7F9;overflow:hidden;">
						<div id="gamebox" style="width:830px;height:300px;float:left;clear:left;margin:10px 0px 0px 0px;padding:0px 0px 10px 0px;overflow:hidden;">
							
							<div id="bird"></div>
							<div id="gamestart">
								<div style="color:#f00;float:left;clea:left;width:500px;font-size:70px;height:80px;margin:50px 0px 0px 0px;">准备开始游戏</div>
								<div style="float:left;clea:left;width:500px;">
									<button onclick="game.start();">开始</button>
								</div>
							</div>
							<div id="gameover">
								<div style="color:#f00;float:left;clea:left;width:500px;font-size:70px;height:80px;margin:50px 0px 0px 0px;">GAME OVER</div>
								<div style="float:left;clea:left;width:500px;">
									<form action="up.php" method="post">
									您的姓名:<input type="text" name="name" />
									<input id="v" name="v" type="hidden" value="" />
									<input type="submit" value="提交" />
									</form>
								</div>
							</div>
							<div id="cp">
								<div style="position:relative;background:#f00;width:50px;height:50px;top:0px;left:50px;cursor:pointer;" onclick="bird.toUp(32);"></div>
								<div style="position:relative;background:#f00;width:50px;height:50px;top:0px;left:0px;cursor:pointer;" onclick="bird.toLeft(32);"></div>
								<div style="position:relative;background:#f00;width:50px;height:50px;top:0px;left:50px;cursor:pointer;" onclick="bird.toDown(32);"></div>
								<div style="position:relative;background:#f00;width:50px;height:50px;top:-100px;left:100px;cursor:pointer;" onclick="bird.toRight(32);"></div>
							</div>
							
						</div>
					</div>
					<div style="width:830px;height:auto;float:left;clear:left;margin:10px 10px 0px 10px;background:#D4E1EC;">
						<div style="width:810px;height:auto;float:left;clear:left;margin:10px 0px 0px 10px;padding:0px 0px 10px 0px;">
							说明：按 "w" "s" "a" "d" 键分别控制上下左右。
							<a style="cursor:pointer" onclick="document.getElementById('cp').style.display='block';">使用鼠标控制</a>
							<a style="cursor:pointer" onclick="document.getElementById('cp').style.display='none';">取消鼠标控制</a>
							<a style="cursor:pointer" onclick="game.speed_up();">速度+</a>
							<a style="cursor:pointer" onclick="game.speed_down();">速度-</a>
						<script src="game.js"></script>
						</div>
					</div>
				</div>

		</div>
<?php
mysql_query("INSERT INTO `game_ips` (`id` ,`ip` ,`time` )VALUES (NULL , '$ip', CURRENT_TIMESTAMP );");
?>
		<div style="width:100%;height:auto;background:#CADCEB;font-size:16px;color:#105289;text-align:center;float:left;clear:left;margin:20px 0px 0px 0px;padding:10px 0px 10px 0px;">
			Copyrights © 2013-2014 , pascalchina.com  All Rights Reserved. viewed:<?php echo mysql_num_rows(mysql_query("select * from `game_ips`")) ;?></div>
		</body>
	</div>

</div>
</html>
