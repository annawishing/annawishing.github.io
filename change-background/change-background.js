// $(document).ready(function(){

// 	$("#button").on("click",function(){
// 		var a = "#" + Math.random().toString(16).slice(2,8);
// 		$("body").css({background:a})
// 	})
// })


$(document).ready(function(){

	document.getElementById("button").addEventListener("click", function(){
		var color = "#" + Math.random().toString(16).slice(2,8);
		document.body.style.background = color;
	})
})