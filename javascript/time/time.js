document.getElementById('box').style.width='600px';
document.getElementById('box').style.height='auto';
document.getElementById('box').style.position='absolute';
document.getElementById('box').style.top='0px';
document.getElementById('box').style.left='0px';
document.getElementById('box').style.fontSize='12px';
document.getElementById('box').style.textAlign='center';
var _bk_color='#fff';
var _p_w=30;
function init(){
	var id=0;
	_p_w--;
	
	for(i=0;i<27;i++){
		
		for (ii=0;ii<5;ii++){
			id++;
		
			var obj=document.createElement('obj');
			obj.id="obj_"+id;
			obj.whoat='';
			
			obj.start=0;			

			obj.style.display='block';
			obj.style.width=_p_w+'px';
			obj.style.height=_p_w+'px';
			obj.style.top=ii*_p_w;
			obj.style.left=_p_w*i;
			obj.style.border='solid 1px '+_bk_color;
			obj.style.position='absolute';
			obj.style.background=_bk_color;
			//obj.innerHTML=id;
			obj.style.display
			document.getElementById('box').appendChild(obj);
		}
	}
	
	var obj=document.createElement('obj');
	obj.id='cp';
	obj.style.width='500px';
	obj.style.top='300px';
	obj.style.left='0px';
	obj.style.position='absolute';
	document.getElementById('box').appendChild(obj);

	var obj=document.createElement('obj');
	obj.id='down_button';
	obj.top='500px;';
	obj.style.width='500px';
	obj.style.height='50px';
	obj.innerHTML='www.codeTyphon.com';
	document.getElementById('cp').appendChild(obj);	
}
init();

var base=new Array();
for(i=0;i<11;i++){
	base[i]=new Array();
}
base[0]=[1,2,3,4,5,6,10,11,12,13,14,15];
base[1]=[11,12,13,14,15];
base[2]=[1,6,11,12,3,8,13,4,5,10,15];
base[3]=[1,6,11,12,3,8,13,14,5,10,15];
base[4]=[1,2,3,8,11,12,13,14,15];
base[5]=[1,6,11,2,3,8,13,14,15,10,5];
base[6]=[1,6,11,2,3,4,5,8,13,14,15,10];
base[7]=[1,6,11,12,13,14,15];
base[8]=[1,2,3,4,5,6,8,10,11,12,13,14,15];
base[9]=[1,2,3,6,8,11,12,13,14,15,5,10];
function clear(){
	for(i=1;i<136;i++){
		document.getElementById('obj_'+i).style.background=_bk_color;
	}
	document.getElementById('obj_42').style.background='#f00';
	document.getElementById('obj_44').style.background='#f00';
	document.getElementById('obj_92').style.background='#f00';
	document.getElementById('obj_94').style.background='#f00';
}



function show(arr){
	for(i=0;i<arr.length;i++){
		var at=arr[i];
		document.getElementById('obj_'+at).style.background='#f00';
	}
}




function show_number(base_v,left_v){
	
	left_v--;
	var tmp_arr=new Array();
	for(i=0;i<base[base_v].length;i++){
		tmp_arr.push(base[base_v][i]+left_v);
	}
	show(tmp_arr);
}


function h(v){
	v+='';
	if(v.length==1){
		v='0'+v
	}
	var a=v.substring(0,1);
	var b=v.substring(1,2);
	show_number(a,1);
	show_number(b,21);
}
function m(v){
	v+='';
	if(v.length==1){
		v='0'+v
	}
	var a=v.substring(0,1);
	var b=v.substring(1,2);
	show_number(a,51);
	show_number(b,71);
}

function s(v){
	v+='';
	if(v.length==1){
		v='0'+v
	}
	var a=v.substring(0,1);
	var b=v.substring(1,2);
	show_number(a,101);
	show_number(b,121);
}


clear();
//h(2);
//m(9);
//s(2);

setInterval(function(){
	clear();
	var d=new Date();
	h(d.getHours());
	m(d.getMinutes());
	s(d.getSeconds());
},1000);
