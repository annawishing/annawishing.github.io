// $(document).ready(function(){

// 	var a = "";

// 	$(".color").on("click",function(){
// 		a = $(this).css("background-color");
// 	})

// 	$(".box").on("click", function(){
// 		$(this).css("background-color",a);
// 	})

// })

// 重要知识点，困扰之处：如何获取元素真正的样式，这里使用window.getComputedStyle(element)解决。注意：element.style.xxx 取到的是内联的样式。
$(document).ready(function(){
	var color;
	var colors = document.querySelectorAll(".color");
	for (var i = 0; i < colors.length; i++) {
		colors[i].addEventListener("click",function(){
			color = window.getComputedStyle(this).backgroundColor;
		})
	};
		
	var boxs = document.querySelectorAll(".box");
	for (var l = 0; l < boxs.length; l++) {
		boxs[l].addEventListener("click",function(){
			this.style.backgroundColor = color;
		})
	};
	
})


// function getConstructorName(obj){
// 	return obj && obj.constructor && obj.constructor.toString().match(/function\s*([^(]*)/)[1];
// }