/**
 *初始化点击菜单
 * 业务办理
 */
$(function() {
	$(".buy_know  table > tr>td").click(function() {
		alert("开发中1");
	})
});
$(function() {
	$(".head_right").click(function() {
		alert("开发中1");
	})
		$('.tableTime tr>td').click(function() {
		$(this).css("background-color", "#FFFFFF"); //还原所有td的颜色
		//              $(this).click(function(){
		//                  $(this).css("background-color","red");//设置点击td的颜色
		//              });#FFFFFF
		$('.tableTime td').not(this).css("background-color", "#E6E6FA");
		if($(this).attr("data-type")=="calculator"){
			alert("开发中");
			$(".pic img").attr("src","picture2.jpg")
		}
			if($(this).attr("data-type")=="similar"){
			alert("开发中");
		}
				if($(this).attr("data-type")=="coment"){
			alert("开发中");
		}
					if($(this).attr("data-type")=="detail"){
			alert("开发中");
		}
	});
});
//$(function() {
//	$(".calculator").click(function() {
//		alert("开发中1");
////		$(this).css('background-color':'green');//点击的设置为绿色
//		 $(this).attr("style", "BACKGROUND-COLOR: #FFFFFF");
//		
//	})
//});
//$(function() {
//	$('.tableTime td').click(function() {
//		$(this).css("background-color", "#FFFFFF"); //还原所有td的颜色
//		//              $(this).click(function(){
//		//                  $(this).css("background-color","red");//设置点击td的颜色
//		//              });#FFFFFF
//		$('.tableTime td').not(this).css("background-color", "#E6E6FA");
//		if($(this).attr("data-type")=="calculator"){
//			alert("开发中");
//		}
//	});
//});