function Fire(x,y){
	this.x=x;
	this.y=y;
	this.live=1;
	this.tom_y=y;
	this.width=game.imageFire.width;
	this.height=game.imageFire.height;
}
Fire.prototype.show=function(){
	if(this.live==1){
		
		this.y-=3;
		if(this.y<0){
			this.live--;
		}else{
			
			ctx.drawImage(game.imageFire,this.x,this.y);
		}
	}
}