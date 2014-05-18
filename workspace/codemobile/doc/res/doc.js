//取消浏览器的所有事件，使得active的样式在手机上正常生效
document.addEventListener( "touchstart", function(e) {
    return false;
}, false );
// 屏蔽选择函数
function shield() {
	return false;
}
document.oncontextmenu = shield;
// H5 plus事件处理
document.addEventListener( "plusready", function() {
	// Android处理返回键
	plus.ui.getSelfWindow().addEventListener( "back", function(){
		back();
	}, false );
	// iOS平台使用滚动的div
	if ( "iOS" == plus.os.name ) {
		document.getElementById("content").className = "scontent";
	}
}, false );
document.addEventListener( "DOMContentLoaded", function () {
	document.body.onselectstart = shield;
	prettyPrint();
}, false );
// 处理返回事件
function back() {
	if ( window.plus ) {
		plus.ui.getSelfWindow().close();
	} else if ( history.length > 1 ) {
		history.back();
	} else {
		window.close();
	}
}