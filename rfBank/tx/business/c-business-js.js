			$(function() {
				$(".header > div.button").click(function() {
					rexseeBrowser.dismiss();
				});
			});
					$(function() {
				$(".c-business-menu  ul > li").click(function() {
		if ($(this).attr("data-url") != null) {
			rexseePopupWindow.show($(this).attr("data-url"), 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:false;window-modeless:false;window-dim-amount:1;window-style:transparent;window-animation:right;border-width:0px;window-align:center;window-vertical-align:middle;width:fillparent;height:fillparent;');
		}
				else {
			alert("功能开发中");
			
		}
	})
			});