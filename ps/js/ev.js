function help(){
			$('help').show();
		}
		function savetoimage(){
			clearCanvas();
			update();
			var data = canvas.toDataURL(); 
			window.open(data);
		}
		function clearCanvas(i){
			if(!i){
				ctx.clearRect(0,0,660,520);
			}else{
				ctx.clearRect(0,0,660,520);
				for(ii=0;ii<objs.length;ii++){
					if(ii==i){
					}else{
						objs[ii].update();
					}
				}
			}
		}
		function clearAll(){
			ctx.clearRect(0,0,660,520);
			objs=new Array();
		}
		function update(){
			clearCanvas();
			for(i=0;i<objs.length;i++){
				objs[i].update();
			}
		}
		function del(id){
			for(i=0;i<objs.length;i++){
				if(objs[i].id==id){
					objs.splice(i,1);
					break;
				}
			}
			update();
		}
		function addobjs(obj){
			id++;
			obj.id=id;
			objs.push(obj);
			for(i=0;i<objs.length;i++){
			  if(objs[i].id==id){
			      obj_index=i;
			      break;
			  }
			}
			objs[obj_index].select();
			objs[obj_index].prinText();	
			$('layers').append('<div onclick="select_layer('+id+')" style="width:150px;height:20px;margin:5px;background:#fff;color:#ccc;" id="layer'+id+'">'+id+'</div>');
		}
		/* p edit*/
		function setText(text){
			objs[obj_index].text=text;
			update();
		}
		function setTop(top){
			objs[obj_index].top=parseInt(top);
			update();
		}
		function setLeft(left){
			objs[obj_index].left=parseInt(left);
			update();
		}
		function setWidth(width){
			objs[obj_index].width=parseInt(width);
			update();
		}
		function setHeight(height){
			objs[obj_index].height=parseInt(height);
			update();
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
			//alert(id);

			if(id=="obj_1"){
				img = new Image(); 
				//img.crossOrigin = "*";
				img.onload = function() { 
					//
					//canvas.width=this.width;
					//canvas.height = img.height;
					var obj=new Obj_1(this);
					console.log("...");
					addobjs(obj);
					//
					var bbox =canvas.getBoundingClientRect();
					obj.left=ev.pageX-bbox.left *(canvas.width / bbox.width);

					obj.top=ev.pageY- bbox.top  * (canvas.height / bbox.height);
				
					obj.left-=obj.width/2;
					obj.top-=obj.height/2;
					//
					obj.update();
					//
				} 
				img.src = "3-strawberries.jpg";
				
			}else if(id=="obj_2"){
				var obj=new Obj_2();
				addobjs(obj);
				//
				var bbox =canvas.getBoundingClientRect();

				obj.left=ev.pageX-bbox.left *(canvas.width / bbox.width);

				obj.top=ev.pageY- bbox.top  * (canvas.height / bbox.height);
				
				obj.left-=obj.width/2;
				obj.top-=obj.height/2;
				//
				obj.update();
			}else{
				alert(id+" 工具正在开发中，请稍后。。。");
			}
			//ev.target.appendChild(document.getElementById(data));
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
		
		function getKeyCode(e) {
			var keyCode = 0;
			var e = e || window.event;
			keyCode = e.keyCode || e.which || e.charCode;
			if(keyCode==46){
				del(objs[obj_index].id);
			}
		}
		function select_layer(id){
		    
		   clearCanvas();
		   update();
		   for(i=0;i<objs.length;i++){
		     if(objs[i].id==id){
			obj_index=i;
			break;
		     }
		   }
		   
		   objs[obj_index].select();
		   objs[obj_index].prinText();	
		}