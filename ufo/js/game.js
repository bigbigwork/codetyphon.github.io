function Game(){
	this.imageGameOver='';
	this.imageUFO='';
	this.imageFire='';
	this.imageMe='';
	
	this.v=0;
	this.state='playing';
	this.x=10;
	this.y=150;
}
Game.prototype.showv=function(){
	ctx.font="30px Georgia";
	ctx.fillText(game.v,30,30);
}
Game.prototype.setImageGameOver=function(imageGameOver){
	this.imageGameOver=imageGameOver;
}
Game.prototype.setImageUFO=function(imageUFO){
	
	this.imageUFO=imageUFO;
		
}
Game.prototype.setImageFire=function(imageFire){
	this.imageFire=imageFire;
}
Game.prototype.setImageMe=function(imageMe){
	this.imageMe=imageMe;


}
Game.prototype.start=function(){
	//ctx.globalCompositeOperation="xor";
	/*animate(function(){
		rendering();
	});*/
	setTimeout(rendering, 1000 / 24);
}
Game.prototype.gameover=function(){
	this.state='gameover';
	ctx.globalCompositeOperation="source-over";
	document.getElementById("pop_game_over").style.display="block";
	//ctx.drawImage(this.imageGameOver,this.x,this.y);
}
Game.prototype.pause=function(){
	this.state='pause';
}
Game.prototype.play=function(){
	this.state='playing';
}
