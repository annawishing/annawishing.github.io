$(document).ready(function(){

	$("#button").on("click",function(){
		var a = "#" + Math.random().toString(16).slice(2,8)
		$("body").css({background:a})
	})
})