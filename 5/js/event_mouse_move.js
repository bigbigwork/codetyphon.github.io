function on_mouse_move(){
	p = getEventPosition(event);
	switch(mousedown){
	case true:
		console.log(gotowhere);
		switch(gotowhere){	
			case 'over':
				select_obj.left=p.x-select_obj.width/2;
				select_obj.top=p.y-select_obj.height/2;
				update(); 
				select_obj.select();
				select_obj.prinText();
				break;
			case 'out':
				break;
			case 'linedown':
				if(select_obj.pd==null){
					showPoint();
					ctx.lineWidth=3;
					ctx.beginPath();
					ctx.moveTo(select_obj.pointDown().left,select_obj.pointDown().top);
					//ctx.lineTo(p.x+50,select_obj.pointLeft().top);
					//ctx.lineTo(p.x+50,p.y);
					ctx.lineTo(p.x,p.y);
					ctx.strokeStyle="red";
					ctx.stroke();
					ctx.lineWidth=1;
					//
					for(i=0;i<objs.length;i++){
						if(objs[i].type!='Line'){
							if(objs[i].pu==null){
							objs[i].selectUp();
								if(ctx.isPointInPath(p.x,p.y)){
									$('myCanvas').style("cursor","crosshair");
									objs[i].selectUpOver();
									target_obj=objs[i];
									target_at="up";
									
									break;
								}
							}
							if(objs[i].pl==null){
								objs[i].selectLeft();
								if(ctx.isPointInPath(p.x,p.y)){
									$('myCanvas').style("cursor","crosshair");
									objs[i].selectLeftOver();
									target_obj=objs[i];
									target_at="left";
									
									break;
								}
							}
							if(objs[i].pr==null){
								objs[i].selectRight();
								if(ctx.isPointInPath(p.x,p.y)){
									$('myCanvas').style("cursor","crosshair");
									objs[i].selectRightOver();
									target_obj=objs[i];
									target_at="right";
									
									break;
								}
							}
						}
					}
				}
				break;
			case 'lineup':
				showPoint();
				break;
			case 'lineleft':
				console.log('left!');
				if(select_obj.pl==null){
					showPoint();
					ctx.lineWidth=3;
					ctx.beginPath();
					ctx.moveTo(select_obj.pointLeft().left,select_obj.pointLeft().top);
					//ctx.lineTo(p.x+50,select_obj.pointLeft().top);
					//ctx.lineTo(p.x+50,p.y);
					ctx.lineTo(p.x,p.y);
					ctx.strokeStyle="red";
					ctx.stroke();
					ctx.lineWidth=1;
					//
					for(i=0;i<objs.length;i++){
						if(objs[i].type!='Line'){
							if(objs[i].pu==null){
							objs[i].selectUp();
								if(ctx.isPointInPath(p.x,p.y)){
									$('myCanvas').style("cursor","crosshair");
									objs[i].selectUpOver();
									target_obj=objs[i];
									target_at="up";
									
									break;
								}
							}
							if(objs[i].pl==null){
								objs[i].selectLeft();
								if(ctx.isPointInPath(p.x,p.y)){
									$('myCanvas').style("cursor","crosshair");
									objs[i].selectLeftOver();
									target_obj=objs[i];
									target_at="left";
									
									break;
								}
							}
							if(objs[i].pr==null){
								objs[i].selectRight();
								if(ctx.isPointInPath(p.x,p.y)){
									$('myCanvas').style("cursor","crosshair");
									objs[i].selectRightOver();
									target_obj=objs[i];
									target_at="right";
									
									break;
								}
							}
						}
					}
				}
				break;
			case 'lineright':
				if(select_obj.pr==null){
					showPoint();
					ctx.lineWidth=3;
					ctx.beginPath();
					ctx.moveTo(select_obj.pointRight().left,select_obj.pointRight().top);
					//ctx.lineTo(p.x+50,select_obj.pointRight().top);
					//ctx.lineTo(p.x+50,p.y);
					ctx.lineTo(p.x,p.y);
					ctx.strokeStyle="red";
					ctx.stroke();
					ctx.lineWidth=1;
					//
					for(i=0;i<objs.length;i++){
						if(objs[i].type!='Line'){
							if(objs[i].pu==null){
							objs[i].selectUp();
								if(ctx.isPointInPath(p.x,p.y)){
									$('myCanvas').style("cursor","crosshair");
									objs[i].selectUpOver();
									target_obj=objs[i];
									target_at="up";
									
									break;
								}
							}
							if(objs[i].pr==null){
								objs[i].selectRight();
								if(ctx.isPointInPath(p.x,p.y)){
									$('myCanvas').style("cursor","crosshair");
									objs[i].selectRightOver();
									target_obj=objs[i];
									target_at="right";
									
									break;
								}
							}if(objs[i].pl==null){
								objs[i].selectLeft();
								if(ctx.isPointInPath(p.x,p.y)){
									$('myCanvas').style("cursor","crosshair");
									objs[i].selectLeftOver();
									target_obj=objs[i];
									target_at="left";
									break;
								}
							}
						}
					}
				}
				//
				break;
			case 'a':
				var bottom=select_obj.top+select_obj.height;
				select_obj.top=p.y;
				select_obj.height=bottom-select_obj.top;
				var xright=select_obj.left+select_obj.width;
				var xleft=select_obj.left
				select_obj.left=p.x;
				select_obj.width=xleft-p.x+select_obj.width;
				update();
				select_obj.select();
				break;
			case 'b':
				var bottom=select_obj.top+select_obj.height;
				select_obj.top=p.y;
				select_obj.height=bottom-select_obj.top;
				select_obj.width=p.x-select_obj.left;
				update();
				select_obj.select();
				break;
			case 'c':
				var xright=select_obj.left+select_obj.width;
				var xleft=select_obj.left
				select_obj.left=p.x;
				select_obj.width=xleft-p.x+select_obj.width;
				select_obj.height=p.y-select_obj.top;
				update();
				select_obj.select();
				break;
			case 'd':
				select_obj.width=p.x-select_obj.left;
				select_obj.height=p.y-select_obj.top;
				update();
				select_obj.select();
				break;
		}
		break;
	case false:
	  	//is over?
		switch(select_obj){
			case null:
					clearCanvas();
					for(i=0;i<objs.length;i++){
						if(objs[i].type!='Line'){
							objs[i].path();
							if(ctx.isPointInPath(p.x,p.y)){
								on_obj=objs[i];
								gotowhere="over";
								$('myCanvas').style("cursor","move");
								break;
							}else{
								$('myCanvas').style("cursor","default");
								on_obj=null;
								gotowhere="out";
							}
						}
					}
					clearCanvas();
					update();
			break;
			case '':
			console.log("no obj selected too");
			break;
			default:
					clearCanvas();
					for(i=0;i<objs.length;i++){
						if(objs[i].type!='Line'){
							objs[i].update();
							if(ctx.isPointInPath(p.x,p.y)){
								on_obj=objs[i];
								gotowhere="over";
								$('myCanvas').style("cursor","move");
								break;
							}else{
								$('myCanvas').style("cursor","default");
								on_obj=null;
								gotowhere="out";
							}
						}
					}
					clearCanvas();
					update();
					//
					select_obj.select();
					select_obj.prinText();
					select_obj.selectUp();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","crosshair");
						select_obj.selectUpOver();
						gotowhere="lineup";
					}
					select_obj.selectDown();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","crosshair");
						select_obj.selectDownOver();
						gotowhere="linedown";
					}
					select_obj.selectLeft();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","crosshair");
						select_obj.selectLeftOver();
						gotowhere="lineleft";
					}
					select_obj.selectRight();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","crosshair");
						select_obj.selectRightOver();
						gotowhere="lineright";
					}
					select_obj.selectA();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","nw-resize");
						gotowhere="a";	
					}
					select_obj.selectB();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","ne-resize");
						gotowhere="b";	
					}
					select_obj.selectC();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","sw-resize");
						gotowhere="c";		
					}
					select_obj.selectD();
					if(ctx.isPointInPath(p.x,p.y)){
						$('myCanvas').style("cursor","se-resize");
						gotowhere="d";	
					}
					//
					select_obj.select();
					select_obj.prinText();		
		}
	default:
	}		
}
