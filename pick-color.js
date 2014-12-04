$(document).ready(function(){

	var a = "";

	$(".color").on("click",function(){
		a = $(this).css("background-color");
	})

	$(".box").on("click", function(){
		$(this).css("background-color",a);
	})

})