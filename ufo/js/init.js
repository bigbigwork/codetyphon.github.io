var canvas;
var ctx;
var objs=new Array();
var fucks=new Array();
var fires=new Array();

var game=new Game();
var tom='';
var all_images=4;
var all_images_load_finish=0;
var imageMe='';
var imageUFO='';
var imageGameOver='';
var imageFire='';
window.onload = function() {
	
	canvas=document.getElementById('myCanvas');
	canvas.top=0;
	canvas.left=0;
	canvas.right=0;
	canvas.buttom=0;
	canvas.width=document.body.scrollWidth;
	canvas.height=document.body.scrollHeight;
	ctx=canvas.getContext('2d');
	ctx.globalAlpha=1;
	//ctx.globalCompositeOperation='xor';
	//
	
	 imageMe = new Image(); 
		imageMe.onload = function() { 
			game.setImageMe(imageMe);
			tom=new Tom();
			all_images_load_finish++;
			ctx.font="30px Georgia";
			ctx.fillText(all_images_load_finish,30,30);
			
			//
			 imageUFO = new Image(); 
			imageUFO.onload = function() { 
				game.setImageUFO(imageUFO);	
				fucks.push(new Fuck());
				fucks.push(new Fuck());
				fucks.push(new Fuck());
				//fucks.push(new Fuck());
				all_images_load_finish++;
				ctx.fillText(all_images_load_finish,30,30);
				//
				 imageGameOver = new Image(); 
				imageGameOver.onload = function() { 
					game.setImageGameOver(imageGameOver);
					all_images_load_finish++;
					ctx.fillText(all_images_load_finish,30,30);
					//
					 imageFire = new Image(); 
					imageFire.onload = function() { 
						game.setImageFire(imageFire);
						all_images_load_finish++;
						ctx.fillText(all_images_load_finish,30,30);
						game.start();
						console.log("game start");
					} 
					imageFire.src = "images/rocket.png";
					//
				} 
				imageGameOver.src = "images/gameover.png";
				//
			} 
			imageUFO.src = "images/ufo.png";
			//
		} 
		imageMe.src = "images/airplane.png";	
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

document.getElementById("myCanvas").addEventListener('touchstart', function (e) {
        var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
        startx = parseInt(touchobj.clientX) // get x position of touch point relative to left edge of browser
        starty = parseInt(touchobj.clientY) // get x position of touch point relative to left edge of browser
        //statusdiv.innerHTML = 'Status: touchstart<br /> ClientX: ' + startx + 'px'
        e.preventDefault()
    }, false);

    document.getElementById("myCanvas").addEventListener('touchmove', function (e) {
        var touchobj = e.changedTouches[0] // reference first touch point for this event
        
        //gameCtrl.player.x+=distX;
        //gameCtrl.player.y+=distY;
        //statusdiv.innerHTML = 'Status: touchmove<br /> Horizontal distance traveled: ' + dist + 'px'
                var distX = parseInt(touchobj.clientX) - startx;
        var distY = parseInt(touchobj.clientY) - starty;
        var tmp=0;
        if (distX > document.body.scrollWidth/3) {
           tom.toRight();//w
        }
        if (distX < -document.body.scrollWidth/3) {
           tom.toLeft();
        }
        if (distY > document.body.scrollWidth/3) {
           tom.toDown();
        }
        if (distY < -document.body.scrollWidth/3) {
           tom.toUp();//w
        }
        
        e.preventDefault()
    }, false);

    document.getElementById("myCanvas").addEventListener('touchend', function (e) {
        var touchobj = e.changedTouches[0] // reference first touch point for this event
        //statusdiv.innerHTML = 'Status: touchend<br /> Resting x coordinate: ' + touchobj.clientX + 'px'
	tom.fire();//fire
        e.preventDefault()
    }, false);
