function rendering(){
	if(game.state=='playing' && all_images_load_finish==all_images){
			ctx.clearRect(0, 0, canvas.width,canvas.height);
			canvas.top+=0.2;
			canvas.style.backgroundPosition='0px '+canvas.top+'px';
			//document.getElementById('v').innerHTML=canvas.top;
			//
			for(i=0;i<fucks.length;i++){
				fucks[i].show();
				
				if(fucks[i].live==0){
					fucks.splice(i,1);
					fucks.push(new Fuck());
				}
			}
			for(i=0;i<fires.length;i++){
				fires[i].show();
				if(fires[i].live==0){
					fires.splice(i,1);
				}
			}
			//
			tom.show();
			game.showv(); // fenshu
			
			
			//   paodan
					game.pause();
					for(x=0;x<fires.length;x++){
						for(i=0;i<fucks.length;i++){
							var ff_bj=Math.abs(fucks[i].y-fires[x].y);
							var ff_jianju=(fucks[i].height+fires[x].height)/2;	
							var xf_bj=Math.abs(fucks[i].x-fires[x].x);
							var xf_jianju=(fucks[i].width+fires[x].width)/2;
							//document.getElementById('v').innerHTML=ff_bj-ff_jianju;
							if((ff_bj-ff_jianju<0)&&(xf_bj-xf_jianju<0)){
								fires[x].live--;
								fucks[i].live--;
								game.v+= (20-fucks[i].speed);
								x=fires.length
								break;
							}
						}
					}
					game.play();

			for(i=0;i<fucks.length;i++){
				var f_bj=Math.abs(fucks[i].y-tom.y);
				var f_jianju=(fucks[i].height+tom.height)/2-10;
				
				var x_bj=Math.abs(fucks[i].x-tom.x);
				var x_jianju=(fucks[i].width+tom.width)/2-10;
				
				//document.getElementById('v').innerHTML=(f_bj-f_jianju<0)&&(x_bj-x_jianju<0);
				//(f_bj-f_jianju<0)&&(x_bj-x_jianju<0)
				if((f_bj-f_jianju<0)&&(x_bj-x_jianju<0)){
					game.gameover();
					//
						//game.pause();
						//var pixels='';
						
						//pixels.onload = function() {
							//alert(pixels);
						//}
						//alert(pixels.onload());
						//pixels=ctx.getImageData(tom.x,tom.y,tom.width,tom.height);
						//document.getElementById('v').innerHTML='p';
						//var d = pixels.data;
						/*
						for(i=0;i<d.length;i+=4){
							if(d[i+3]==0){
								//ctx.globalCompositeOperation="source-over";
								document.getElementById('v').innerHTML=d[i+3];
								break;
								game.gameover();
								break;
							}else{
								
							}
						}*/
						//game.play();
					//
				}
			}
	}
}