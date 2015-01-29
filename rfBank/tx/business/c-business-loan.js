					$(function() {
				$(".c-business-menu  ul > li").click(function() {
		if ($(this).attr("data-url") != null) {
			$(".iframe").attr("src",$(this).attr("data-url"));
		}
				else {
			alert("功能开发中");
			
		}
	})
			});