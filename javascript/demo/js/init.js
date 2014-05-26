var canvas;
var ctx;
var objs=new Array();
var fucks=new Array();
var fires=new Array();

var game=new Game();
var tom='';

window.onload = function() {
	
	canvas=document.getElementById('myCanvas');
	canvas.top=0;
	ctx=canvas.getContext('2d');
	ctx.globalAlpha=1;
	//ctx.globalCompositeOperation='xor';
	//
	
	var imageMe = new Image(); 
		imageMe.onload = function() { 
			game.setImageMe(imageMe);
			tom=new Tom();
		} 
		imageMe.src = "images/airplane.png";
	var imageUFO = new Image(); 
		imageUFO.onload = function() { 
			game.setImageUFO(imageUFO);	
			fucks.push(new Fuck());
			fucks.push(new Fuck());
			fucks.push(new Fuck());
			fucks.push(new Fuck());
		} 
		imageUFO.src = "images/ufo.png";
	var imageGameOver = new Image(); 
		imageGameOver.onload = function() { 
			game.setImageGameOver(imageGameOver);
		} 
		imageGameOver.src = "images/gameover.png";
	var imageFire = new Image(); 
		imageFire.onload = function() { 
			game.setImageFire(imageFire);
		} 
		imageFire.src = "images/rocket.png";
	
	
};

function getKeyCode(e) {
	if(game.state=='playing'){
		var keyCode = 0;
		var e = e || window.event;
		keyCode = e.keyCode || e.which || e.charCode;
		//alert(keyCode);
		if(keyCode==119){
			tom.toUp();//w
		}
		if(keyCode==115){
			tom.toDown();//s
		}
		if(keyCode==97){
			tom.toLeft();//a
		}
		if(keyCode==100){
			tom.toRight();//d
		}
		if(keyCode==109){
			//w
		}
		if(keyCode==32){
			tom.fire();//fire
		}
	}
}
document.onkeypress=getKeyCode;