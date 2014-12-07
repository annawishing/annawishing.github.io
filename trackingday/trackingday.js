$(document).ready(function(){
	var d = new Date();
	var day = d.getDay();
	var tips =["今日系礼拜天，玩得开心吧！",
			   "不是吧。。又礼拜一了。。。",
			   "怎么才礼拜二啊，shit！",
			   "礼拜三，日子过得还是挺快的嘛。",
			   "又到礼拜四咯，再坚持一下下就行了。",
			   "Yes!终于等到礼拜五了！",
			   "好好享受难得的礼拜六吧~"]

	$("#day" + day).addClass("today");
	$("#todayis").text(tips[day]);

	$(".day").on("click", function(){
		$(".today").removeClass("today");
		$(this).addClass("today");
		var a = $(this).attr('id');
		var day = a[3];
		$("#todayis").text( tips[day] );
	})
})