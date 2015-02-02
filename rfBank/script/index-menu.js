/**
 *初始化业务介绍菜单
 * 
 */
$(function() {
	$(".tx-menu  ul > li").click(function() {
			if ($(this).attr("data-url") != null) {
			rexseePopupWindow.show($(this).attr("data-url"), 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:true;window-modeless:false;window-dim-amount:1;window-style:transparent;window-animation:right;border-width:0px;window-align:center;window-vertical-align:middle;width:fillparent;height:fillparent;');
			
		}
	})
});
/**
 * 理财产品
 */
$(function() {
	$(".manage  ul > li").click(function() {
		if ($(this).attr("data-url") != null) {
			 var url="file:///android_asset/tx/ManageM/Manage.html?"+"index="+$(this).attr("index");
			rexseePopupWindow.show(url, 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:true;window-modeless:false;window-dim-amount:1;window-style:transparent;window-animation:right;border-width:0px;window-align:center;window-vertical-align:middle;width:fillparent;height:fillparent;');
//			rexseePopupWindow.show($(this).attr("data-url"), 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:false;window-modeless:false;window-dim-amount:1;window-style:transparent;window-animation:right;border-width:0px;window-align:center;window-vertical-align:middle;width:fillparent;height:fillparent;');
		}
//		else if ($(this).attr("data-type")=="DIR" && $(this).attr("data-url") != null){
//			rexseePopupWindow.show($(this).attr("data-url"), 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:true;window-outside-cancelable:true;window-modeless:false;window-dim-amount:0.5;window-style:light;window-animation:center;border-width:0;window-align:center;window-vertical-align:middle;width:520;height:480;');
//
//		}
				else {
			alert("功能开发中");
			
		}
	})
});
/**
 * 基金产品
 */
$(function() {
	$(".fund  ul > li").click(function() {
		if ($(this).attr("data-type")!="DIR" && $(this).attr("data-url") != null) {
			rexseePopupWindow.show($(this).attr("data-url"), 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:true;window-modeless:false;window-dim-amount:1;window-style:transparent;window-animation:right;border-width:0px;window-align:center;window-vertical-align:middle;width:fillparent;height:fillparent;');
		}else if ($(this).attr("data-type")=="DIR" && $(this).attr("data-url") != null){
			rexseePopupWindow.show($(this).attr("data-url"), 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:true;window-outside-cancelable:true;window-modeless:false;window-dim-amount:0.5;window-style:light;window-animation:center;border-width:0;window-align:center;window-vertical-align:middle;width:520;height:480;');

		}
				else {
			alert("功能开发中");
			
		}
	})
});
/**
 * 贵金属产品
 */
$(function() {
	$(".Noblemetal  ul > li").click(function() {
		if ($(this).attr("data-type")!="DIR" && $(this).attr("data-url") != null) {
			rexseePopupWindow.show($(this).attr("data-url"), 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:true;window-modeless:false;window-dim-amount:1;window-style:transparent;window-animation:right;border-width:0px;window-align:center;window-vertical-align:middle;width:fillparent;height:fillparent;');
		}else if ($(this).attr("data-type")=="DIR" && $(this).attr("data-url") != null){
			rexseePopupWindow.show($(this).attr("data-url"), 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:true;window-outside-cancelable:true;window-modeless:false;window-dim-amount:0.5;window-style:light;window-animation:center;border-width:0;window-align:center;window-vertical-align:middle;width:520;height:480;');

		}
				else {
			alert("功能开发中");
			
		}
	})
});
/**
 * 需求分析
 */
$(function(){
	$(".xqfx > div.item").click(function(){
		if ($(this).attr("data-type")!="DIR" && $(this).attr("data-url") != null) {
			rexseePopupWindow.show($(this).attr("data-url"), 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:false;window-modeless:false;window-dim-amount:1;window-style:transparent;window-animation:right;border-width:0px;window-align:center;window-vertical-align:middle;width:fillparent;height:fillparent;');
		}else if ($(this).attr("data-type")=="DIR" && $(this).attr("data-url") != null){
			rexseePopupWindow.show($(this).attr("data-url"), 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:true;window-outside-cancelable:true;window-modeless:false;window-dim-amount:0.5;window-style:light;window-animation:center;border-width:0;window-align:center;window-vertical-align:middle;width:520;height:480;');

		}
	});
});

/**
 * 首页
 */
$(function(){
	$(".h-tx-menu > ul > li").click(function(){
		if ($(this).attr("data-url") != null) {
			 var url=$(this).attr("data-url")+"?index="+$(this).attr("index");
			rexseePopupWindow.show(url, 'browser-progress-dialog:visible;window-moveable:false;window-cancelable:true;window-modeless:false;window-dim-amount:1;window-style:transparent;background-color:blue;window-animation:right;border-width:0px;window-align:center;window-vertical-align:middle;width:fillparent;height:fillparent;');
		}

	});
});
