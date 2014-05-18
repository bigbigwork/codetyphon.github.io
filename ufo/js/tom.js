function Tom(){
	this.x=300;
	this.y=470;
	this.color='';
	this.width=game.imageMe.width;
	this.height=game.imageMe.height;
}
Tom.prototype.toLeft=function(){
	this.x-=10;
	if(this.x<0){
		this.x=0;
	}
}
Tom.prototype.toRight=function(){
	this.x+=10;
	if(this.x+this.width>800){
		this.x=(800-this.width);
	}
}
Tom.prototype.toUp=function(){
	this.y-=10;
	if(this.y<0){
		this.y=0;
	}
}
Tom.prototype.toDown=function(){
	this.y+=10;
	if(this.y+this.height>500){
		this.y=(500-this.height);
	}
}
Tom.prototype.fire=function(){
	fires.push(new Fire(this.x+10,this.y));
}
Tom.prototype.randColor=function(){
	var r = Math.floor(Math.random() * (254)),
	   	g = Math.floor(Math.random() * (254)),
	    b = Math.floor(Math.random() * (254));
	this.color = "rgba("+r+", "+g+", "+b+",0.5)";
}
Tom.prototype.show=function(){
	ctx.fillStyle="rgba(255,0,0,1)";
	//ctx.globalCompositeOperation="xor";
	ctx.drawImage(game.imageMe,this.x,this.y);
}
Tom.prototype.getX=function(){
	return this.x;
}
Tom.prototype.getY=function(){
	return this.y;
}
