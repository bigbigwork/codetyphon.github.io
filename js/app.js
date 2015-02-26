window.addEventListener('load',function(){
  var ps=document.querySelector('#post').querySelectorAll('p');
  var i=0;
  for(i=0;i<ps.length;i++){
    var p=ps[i];
    var txt=p.innerHTML;
    if(txt.indexOf('<')==-1){
      //console.log(txt);
      var text='';
      var ii=0;
      for(ii=0;ii<txt.length;ii++){
        //console.log(txt[ii]);
        text+=txt[ii]+' ';
      }
      p.innerHTML=text;
    }
  }
  //
  var txt=document.querySelector('#post').innerHTML;
    var text='';
    for(i=0;i<txt.length;i++){
        var add_str=txt[i];
        if(txt[i]=='，'){
            add_str='<span class="bdfh">，</span>';
        }else if(txt[i]=='。'){
            add_str='<span class="bdfh">。</span>';
        }else if(txt[i]=='、'){
            add_str='<span class="bdfh">、</span>';
        }else if(txt[i]=='：'){
            add_str='<span class="bdfh">：</span>';
        }
        text+=add_str;
    }
    document.querySelector('#post').innerHTML=text;
    
    $(function() {
        $("img.lazy").lazyload({
            threshold : 2000,
            effect : "fadeIn"
        });
    });
  //
});
