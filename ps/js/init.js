
function init(){
			id=1;
			tool="obj_1";
			objs=new Array();
			obj_index=0;
			over_obj_index=0;
			canvas=document.getElementById('myCanvas');
			canvas.top=0;
			canvas.width=660;
			canvas.height=520;
			ctx=canvas.getContext('2d');
			mousedown=false;
//
window.addEventListener('keydown', getKeyCode,true);
		$('obj_2').bind('dragstart',function(){drag(event)});
		$('obj_1').bind('dragstart',function(){drag(event)});
		
		$('myCanvas').bind('mousedown',function(){
			p = getEventPosition(event);
			mousedown=true;//
/*
			console.log(over_obj_index);
			objs[over_obj_index].path();
			if(ctx.isPointInPath(p.x,p.y)){
				obj_index=over_obj_index;
				clearCanvas();
				update();
				objs[over_obj_index].select();
				objs[over_obj_index].prinText();
			}else{
				clearCanvas();
				update();
			}
		*/	

		});
		$('myCanvas').bind('mousemove',function(){
			p = getEventPosition(event);
			
			if(!mousedown){
			clearCanvas();
				// move
				var tmp_index=-1;
				var i=obj_index;
				
					objs[i].path();
						if(ctx.isPointInPath(p.x,p.y)){
						tmp_index=i;
						over_obj_index=i;
						gotowhere="move";
						$('myCanvas').style("cursor","move");
						objs[i].select();
						
					}else{
						$('myCanvas').style("cursor","default");
						gotowhere="none";
						over_obj_index=-0;
					}


				
				//lashen

					objs[i].selectUp();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","n-resize");
						gotowhere="up";
					
					}
					objs[i].selectDown();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","s-resize");
						gotowhere="down";
					
					}
					objs[i].selectLeft();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","w-resize");
						gotowhere="left";
				
					}
					objs[i].selectRight();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","e-resize");
						gotowhere="right"
					
					}
					

					objs[i].selectA();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","nw-resize");
						gotowhere="a"
					
					}
					objs[i].selectB();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","ne-resize");
						gotowhere="b"
				
					}
					objs[i].selectC();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","sw-resize");
						gotowhere="c"
			
					}
					objs[i].selectD();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","se-resize");
						gotowhere="d"
		
					}
					//


				//
				
				if(tmp_index==-1){
					clearCanvas();
					update();
				}else{
					clearCanvas();
					update();
					var i=tmp_index;
					objs[i].over();
					objs[i].selectUp();
					objs[i].selectDown();
					objs[i].selectLeft();
					objs[i].selectRight();
					objs[i].selectA();
					objs[i].selectB();
					objs[i].selectC();
					objs[i].selectD();
					objs[i].prinText();	
				}
			}
			//update();
			if(mousedown==true){
				if(gotowhere=="move"){
					console.log('move');
					objs[obj_index].left=p.x-objs[obj_index].width/2;
					objs[obj_index].top=p.y-objs[obj_index].height/2;
					update();
					objs[obj_index].select();
					//edit

					
				}
				if(gotowhere=="up"){
					var bottom=objs[obj_index].top+objs[obj_index].height;
					objs[obj_index].top=p.y;
					objs[obj_index].height=bottom-objs[obj_index].top;
					update();
					objs[obj_index].select();
				}
				if(gotowhere=="down"){
					objs[obj_index].height=p.y-objs[obj_index].top;
					update();
					objs[obj_index].select();
				}
				if(gotowhere=="left"){
					var xright=objs[obj_index].left+objs[obj_index].width;
					var xleft=objs[obj_index].left
					objs[obj_index].left=p.x;
					objs[obj_index].width=xleft-p.x+objs[obj_index].width;
					update();
					objs[obj_index].select();
				}
				if(gotowhere=="right"){
					objs[obj_index].width=p.x-objs[obj_index].left;
					update();
					objs[obj_index].select();
				}
				
				if(gotowhere=="a"){
					var bottom=objs[obj_index].top+objs[obj_index].height;
					objs[obj_index].top=p.y;
					objs[obj_index].height=bottom-objs[obj_index].top;
					var xright=objs[obj_index].left+objs[obj_index].width;
					var xleft=objs[obj_index].left
					objs[obj_index].left=p.x;
					objs[obj_index].width=xleft-p.x+objs[obj_index].width;
					update();
					objs[obj_index].select();
				}
				
				if(gotowhere=="b"){
					var bottom=objs[obj_index].top+objs[obj_index].height;
					objs[obj_index].top=p.y;
					objs[obj_index].height=bottom-objs[obj_index].top;
					objs[obj_index].width=p.x-objs[obj_index].left;
					update();
					objs[obj_index].select();
				}
				
				if(gotowhere=="c"){
					var xright=objs[obj_index].left+objs[obj_index].width;
					var xleft=objs[obj_index].left
					objs[obj_index].left=p.x;
					objs[obj_index].width=xleft-p.x+objs[obj_index].width;
					objs[obj_index].height=p.y-objs[obj_index].top;
					update();
					objs[obj_index].select();
				}
				
				if(gotowhere=="d"){
					objs[obj_index].width=p.x-objs[obj_index].left;
					objs[obj_index].height=p.y-objs[obj_index].top;
					update();
					objs[obj_index].select();
				}
			}
			//update();
					objs[obj_index].select();
					objs[obj_index].prinText();	
		});
		$('myCanvas').bind('mouseup',function(){
			//alert('up');
			mousedown=false;
			gotowhere="none";
		});
		$('myCanvas').bind('dblclick',function(){
			if(over_obj_index==obj_index){
				//console.log("d "+over_obj_index);
				//console.log("d "+obj_index);
				//console.log("d "+gotowhere);
				//console.log("d click");
				$('title').val(objs[obj_index].text);
				$('setTitleCP').style("top",p.y+"px");
				$('setTitleCP').style("left",p.x+"px");
				$('setTitleCP').show();
				$('title').focus();
				
			}
		});
		$('title').bind('change',function(ev){
			$('setTitleCP').hide();
			objs[obj_index].text=$('title').val();
			$('title').focus();
			//$('obj_1').focus();
		});
		$('btnTitle').bind('click',function(ev){
			$('setTitleCP').hide();
			objs[obj_index].text=$('title').val();
			$('title').focus();
			//$('obj_1').focus();
		});		
//
		}
		window.onload=init;
