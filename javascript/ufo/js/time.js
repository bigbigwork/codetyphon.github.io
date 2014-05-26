//
requestAnimationFrame = window.requestAnimationFrame
|| window.mozRequestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame
|| window.oRequestAnimationFrame
|| function(callback) {
setTimeout(callback, 1000 / 24);
};


function animate(callback,time) {
    time = time || 1000/24; // 默认0.8秒
    var startTime = (new Date()).getTime();
    function go(timestamp) {
		timestamp = timestamp || (new Date()).getTime();
        var progress = timestamp - startTime;
        if (progress >= time) {
            return;
        }
		callback();
        requestAnimationFrame(go);
    }
    requestAnimationFrame(go);
}

/*
use:
animate(function(){
	rendering();
});
*/
