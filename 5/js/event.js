state='selectNone';
on_obj=null;
select_obj=null;
mousedown=false;
gotowhere='none';
function on_title_text_change(){
	$('setTitleCP').hide();
	select_obj.text=$('title').val();
	$('title').focus();
}
function getKeyCode(e) {
	var keyCode = 0;
	var e = e || window.event;
	keyCode = e.keyCode || e.which || e.charCode;
	if(keyCode==46){
		if(select_obj!=null){
			del(select_obj);
		}
	}
}
function allowDrop(ev){
	ev.preventDefault();
}
function drag(ev){
	ev.dataTransfer.setData("id",ev.target.id);
}
function drop(ev){
	ev.preventDefault();
	var id=ev.dataTransfer.getData("id");
	switch(id){
		case "obj_1":
			var obj=new Obj_1();
			addobjs(obj);
			var bbox =canvas.getBoundingClientRect();
			obj.left=ev.pageX-bbox.left *(canvas.width / bbox.width);
			obj.top=ev.pageY- bbox.top  * (canvas.height / bbox.height);
			obj.left-=obj.width/2;
			obj.top-=obj.height/2;
			obj.update();
		break;
		case "obj_2":
			var obj=new Obj_2();
			addobjs(obj);
			var bbox =canvas.getBoundingClientRect();
			obj.left=ev.pageX-bbox.left *(canvas.width / bbox.width);
			obj.top=ev.pageY- bbox.top  * (canvas.height / bbox.height);		
			obj.left-=obj.width/2;
			obj.top-=obj.height/2;
			obj.update();
		break;
		case "obj_3":
			var obj=new Obj_3();
			addobjs(obj);
			var bbox =canvas.getBoundingClientRect();
			obj.left=ev.pageX-bbox.left *(canvas.width / bbox.width);
			obj.top=ev.pageY- bbox.top  * (canvas.height / bbox.height);
			obj.left-=obj.width/2;
			obj.top-=obj.height/2;
			obj.update();
		break;
		default:
			alert(id+" 工具正在开发中，请稍后。。。");
	}
}
function getEventPosition(ev){
	var x, y;
	if (ev.layerX || ev.layerX == 0) {
		x = ev.layerX;
		y = ev.layerY;
	} else if (ev.offsetX || ev.offsetX == 0) { // Opera
		x = ev.offsetX;
		y = ev.offsetY;
	}
	return {x: x, y: y};
}
/* actions */
function on_mouse_down(){
	p = getEventPosition(event);
	mousedown=true;
	if(gotowhere=='over'){
		select_obj=on_obj;
		gotowhere=='move';
		clearCanvas();
		update();
		if(select_obj.type!='Line'){
			select_obj.select();
			select_obj.prinText();
			$('text').val(select_obj.text);
			$('left').val(select_obj.left);
			$('top').val(select_obj.top);
			$('width').val(select_obj.width);
			$('height').val(select_obj.height);
		}
		
	}
	if(gotowhere=="out"){
		state='selectNone';	
		select_obj=null;
	}
	/*
	if(select_obj!=''){
		if(on_obj!=''){
			on_obj.update();
			if(ctx.isPointInPath(p.x,p.y)){
				select_obj=on_obj;
				clearCanvas();
				update();
				select_obj.select();
				select_obj.prinText();
			}else{
				clearCanvas();
				update();
			}
		}
	}*/
}
function on_mouse_up(){
	console.log('on up select_obj:'+select_obj);
	mousedown=false;
	switch(gotowhere){
		case 'linedown':
			if(select_obj.pd==null){
				showPoint();
				var line=new Line();
				line.moveA(select_obj.pointDown().left,select_obj.pointDown().top);
				//line.moveB(p.x+50,select_obj.pointRight().top);
				//line.moveC(p.x+50,p.y);
				line.moveD(p.x,p.y);
				addobjs(line);
				update();
				select_obj.pd={'lineId':line.id,'at':'A'};
				select_obj.pdline=line;
				select_obj.pdat='A';
				gotowhere="none";
				select_obj=null;
				if(target_obj!=null){
					if(target_at=='up'){
						target_obj.pu={'lineId':line.id,'at':'D'};
						target_obj.puline=line;
						target_obj.puat='D';
					}
					if(target_at=='right'){
						target_obj.pr={'lineId':line.id,'at':'D'};
						target_obj.prline=line;
						target_obj.prat='D';
					}
					if(target_at=='left'){
						target_obj.pl={'lineId':line.id,'at':'D'};
						target_obj.plline=line;
						target_obj.plat='D';
					}
				
				}
			}
		break;
		case 'lineright':
			if(select_obj.pr==null){
				showPoint();
				var line=new Line();
				line.moveA(select_obj.pointRight().left,select_obj.pointRight().top);
				//line.moveB(p.x+50,select_obj.pointRight().top);
				//line.moveC(p.x+50,p.y);
				line.moveD(p.x,p.y);
				addobjs(line);
				update();
				select_obj.pr={'lineId':line.id,'at':'A'};
				select_obj.prline=line;
				select_obj.prat='A';
				gotowhere="none";
				select_obj=null;
				if(target_obj!=null){
					if(target_at=='up'){
						target_obj.pu={'lineId':line.id,'at':'D'};
						target_obj.puline=line;
						target_obj.puat='D';
					}
					if(target_at=='right'){
						target_obj.pr={'lineId':line.id,'at':'D'};
						target_obj.prline=line;
						target_obj.prat='D';
					}
				
				}
			}
		break;
		case 'lineleft':
			if(select_obj.pl==null){
				showPoint();
				var line=new Line();
				line.moveA(select_obj.pointLeft().left,select_obj.pointLeft().top);
				//line.moveB(p.x+50,select_obj.pointRight().top);
				//line.moveC(p.x+50,p.y);
				line.moveD(p.x,p.y);
				addobjs(line);
				update();
				select_obj.pl={'lineId':line.id,'at':'A'};
				select_obj.plline=line;
				select_obj.plat='A';
				gotowhere="none";
				select_obj=null;
				if(target_obj!=null){
					if(target_at=='up'){
						target_obj.pu={'lineId':line.id,'at':'D'};
						target_obj.puline=line;
						target_obj.puat='D';
					}
					if(target_at=='left'){
						target_obj.pl={'lineId':line.id,'at':'D'};
						target_obj.plline=line;
						target_obj.plat='D';
					}
				
				}
			}
		break;
		default:
		gotowhere="none";
		
	}
}
function on_mouse_double_click(){
	if(select_obj!=null){
		$('title').val(select_obj.text);
		$('setTitleCP').style("top",p.y+"px");
		$('setTitleCP').style("left",p.x+"px");
		$('setTitleCP').show();
		$('title').focus();
	}	

}
function on_mouse_move(){
	p = getEventPosition(event);
	//
	switch(mousedown){
	case true:
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
									console.log(target_obj);
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
									console.log(target_obj);
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
									console.log(target_obj);
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
									console.log(target_obj);
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
									console.log(target_obj);
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
									console.log(target_obj);
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
									console.log(target_obj);
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
		//console.log("mouse undown and moving");
		switch(select_obj){
			case null:
				
				//
				console.log("select null");
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
					
				//
			break;
			case '':
			console.log("no obj selected too");
			break;
			default:
				
				console.log(select_obj.type);
					
					clearCanvas();
					for(i=0;i<objs.length;i++){
						if(objs[i].type!='Line'){
							objs[i].update();
							if(ctx.isPointInPath(p.x,p.y)){
								on_obj=objs[i];
								gotowhere="over";
								//console.log('selected:'+select_obj.type+' and over at:'+on_obj.id+' of '+on_obj.type);
								$('myCanvas').style("cursor","move");
								//console.log("who selected"+select_obj.type);
								//console.log("who on"+on_obj.type);
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
	  //与 case 1 和 case 2 不同时执行的代码
	}		
}
