(function(window,document,undefined){
		var aaa;
		var hearts = [];
		window.requestAnimationFrame = (function(){
			return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (callback){
				setTimeout(callback,1000/60);
			}
		})();
		init();
		function init(){
			css(".heart{width: 1px;height: 1px;position: fixed;");
			attachEvent();
			
			gameloop();
		}
		function gameloop(){
			for(var i=0;i<hearts.length;i++){
				if(hearts[i].alpha <= 0){
					document.body.removeChild(hearts[i].el);
					hearts.splice(i,1);
					continue;
				}
				hearts[i].y++;
				hearts[i].x+=hearts[i].xx;
				hearts[i].scale -= 0.01;
				hearts[i].alpha -= 0.008;
				hearts[i].el.style.cssText = "left:"+hearts[i].x+"px;top:"+hearts[i].y+"px;opacity:"+hearts[i].alpha+";transform:scale("+hearts[i].scale+","+hearts[i].scale+") rotate(45deg);color:"+hearts[i].color;
			}
			requestAnimationFrame(gameloop);
			
		}
		function attachEvent(){
			var old = typeof window.onmousemove==="function" && window.onmousemove;
			window.onmousemove = function(event){
				old && old();
				createHeart(event);
			}
		}
		function createHeart(event){
			var d = document.createElement("samp");
			d.className = "heart";
			d.innerHTML = '*';
			hearts.push({
				el : d,
				x : event.clientX - 8,
				y : event.clientY - 13,
				xx : Math.pow(-1,(Math.round(Math.random()))) * Math.random(),
				scale : 1.5,
				alpha : 1,
				color : randomColor()
			});
			document.body.appendChild(d);
		}
		function css(css){
			var style = document.createElement("style");
			style.type="text/css";
			try{
				style.appendChild(document.createTextNode(css));
			}catch(ex){
				style.styleSheet.cssText = css;
			}
			document.getElementsByTagName('head')[0].appendChild(style);
		}
		function randomColor(){
			return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")";
		}
})(window,document);
			