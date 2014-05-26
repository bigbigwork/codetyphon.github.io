function Game(){
	this.game_start=0;
	this.gameover=0;
	this.speed=20;
	this.backgroundLeft=0;
	this.f=0;
}
Game.prototype.speed_up=function(){
	game.speed-=100;
}
Game.prototype.speed_down=function(){
	game.speed+=100;
}
Game.prototype.addf=function(i){
	this.f+=i;
	document.getElementById('f').innerHTML=this.f;
}
Game.prototype.moveYun=function(){
	if(this.gameover==1){
		
	}else{
		this.backgroundLeft-=1;
		document.getElementById('gamebox').style.backgroundPosition=this.backgroundLeft+'px -80px';
	}
}
Game.prototype.start=function(){
	this.game_start=1;
	document.getElementById('gamestart').style.display='none';
}
Game.prototype.gameOver=function(){
	document.getElementById('bird').style.background='url(images/bee_right_die.png)';
	this.gameover=1;
	this.game_start=0;
	document.getElementById('gameover').style.display='block';
	document.getElementById('v').value=this.f;
}


var game=new Game();
setInterval(function(){
	game.moveYun();
},game.speed);					

function Bird(){
	this.top=100;
	this.left=100;
	this.width=32;
	this.height=32;
	document.getElementById('bird').style.background='url(images/bee_right.png)';
}
Bird.prototype.toLeft=function(i){
	document.getElementById('bird').style.background='url(images/bee_left.png)';
	if(game.gameover==0){
		this.left-=i;
		if(this.left<=0){
			this.left=0;
		}
		document.getElementById('bird').style.left=this.left+'px';
	}
}
Bird.prototype.toRight=function(i){
	document.getElementById('bird').style.background='url(images/bee_right.png)';
		if(game.gameover==0){
			this.left+=i;
			if(this.left>=800){
				this.left=800;
			}
		document.getElementById('bird').style.left=this.left+'px';
	}
}
Bird.prototype.toUp=function(i){
	if(game.gameover==0){
		this.top-=i;
		if(this.top<=0){
			this.top=0;
		}
		document.getElementById('bird').style.top=this.top+'px';
	}
}
Bird.prototype.toDown=function(i){
	if(game.gameover==0){
		this.top+=i;
		if(this.top>=289){
			this.top=289;
		}
		document.getElementById('bird').style.top=this.top+'px';
	}
}
var bird=new Bird();
								
						
function Zt(){
	this.id=0;
	this.top=Math.floor(Math.random()*100)-40;
	this.left=2000;
	this.width=Math.floor(Math.random()*100)+50;
	this.height=Math.floor(Math.random()*100)+180;
}
Zt.prototype.init=function(f){
	this.left=f;
	var obj = document.createElement("DIV");
	if(this.top<=32){
		if(this.top>=0){
			this.top=50;
		}
	}
	if(this.top>=289){
		this.top=200;
	}
	this.id=Math.floor(Math.random()*100)+2000;
	obj.id='zt'+this.id;
	obj.style.position='absolute';
	obj.style.top=this.top+'px';
	obj.style.left=this.left+'px';
	obj.style.width=this.width+'px';
	obj.style.height=this.height+'px';
	obj.style.background='url(images/zt.png)';
	obj.style.display = 'block';
	document.getElementById('gamebox').appendChild(obj);
	return this;
}
Zt.prototype.run=function(){
	if(game.game_start==1){
		this.left-=1;
		if(this.left+this.width<0){
			this.left=900;
			game.addf(500);
		}
		document.getElementById('zt'+this.id).style.left=this.left+'px';
	}
}							
		
var zts=new Array();
zts.push(new Zt().init(600));	
zts.push(new Zt().init(800));	
zts.push(new Zt().init(1000));	

var game_t=setInterval(function(){
	if(game.game_start==1){
		for(i=0;i<zts.length;i++){
			zts[i].run();
			if(bird.left<zts[i].left+zts[i].width){
				if(bird.left+bird.width>zts[i].left){			
					if(bird.top+bird.height>zts[i].top){
						if(bird.top<zts[i].top+zts[i].height){
							game.gameOver();
							//clearInterval(game_t);
						}
					}
				}
			}
		}
	}else{
		//clearInterval(game_t);
	}
},game.speed);

setInterval(function(){ 
	if(game.gameOver==1){
	}else if(game.game_start==1){
		game.addf(1);
	}									
},1000); 
													
function getKeyCode(e) {
	var keyCode = 0;
	var e = e || window.event;
	keyCode = e.keyCode || e.which || e.charCode;
	//alert(keyCode);
	if(keyCode==119){
		bird.toUp(32);//w
	}
	if(keyCode==115){
		bird.toDown(32);//s
	}
	if(keyCode==97){
		bird.toLeft(32);//a
	}
	if(keyCode==100){
		bird.toRight(32);//d
	}
	if(keyCode==109){
		game.addf(1000);//w
	}
}
document.onkeypress=getKeyCode;
