$(document).ready(function(){
	// 返回前一个页面

	$("#wedfh").click(function(){
		history.back(-1);
	});

	$("select[name=wedcs]").click(function(){
		if (this.value=="ts") {
            $("div[class=ts]").css("display","block").siblings().css("display","none");

		};
		if (this.value=="qhd") {
			$("div[class=qhd]").css("display","block").siblings().css("display","none");

        };

	})

});