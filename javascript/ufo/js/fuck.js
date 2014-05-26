function Fuck(){
	this.x=Math.floor(Math.random() * (800));
	this.y=20;
	this.live=1;
	this.speed=1+Math.floor(Math.random() * (2));
	this.width=game.imageUFO.width;
	this.height=game.imageUFO.height;
	this.time=0;
}
Fuck.prototype.randColor=function(){
	var r = Math.floor(Math.random() * (254)),
	   	g = Math.floor(Math.random() * (254)),
	    b = Math.floor(Math.random() * (254));
	this.color = "rgba("+r+", "+g+", "+b+",1)";
}
Fuck.prototype.show=function(){
	
	ctx.fillStyle=this.color;
	

	if(this.live>0){
		if(tom.getX()>this.x){
		  this.x+=this.speed;
		  
		}
		if(tom.getX()<this.x){
		  this.x-=this.speed;
		}
		if(tom.getX()==this.x){
		  //this.y+=this.speed;//
		  
		  
		}else{
		  //this.y+=this.speed;
		  
		}
		this.time+=0.01;
		this.y+=this.time*1.98
		if(this.y>500){
			
			this.live--;
		}
		ctx.drawImage(game.imageUFO,this.x,this.y);
		//
		/*
		for(i=0;i<fires.length;i++){
			if(ctx.isPointInPath(fires[i].x,fires[i].y)){
				fires[i].live=0;
				this.live=0;
				break;
			}
		}*/
		//
	}
}