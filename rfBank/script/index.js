try {
	//初始化应用程序菜单
	function initRexsee() {
		rexseeLayoutStyle.setStyle('margin:0px;padding:0px;border-width:0px;');
		rexseeMenu.clearOptionsMenu();
		var normalStyle = "background-color:#7b7b7b+#000000/0;width:fillparent;height:fillparent;weight:1;white-space:normal;border-width:0;padding:2 10 3 10;font-size:24;color:#FFFFFF;icon-visibility:visible;";
		var pressedStyle = "background-color:#ccffcc;";
		rexseeMenu.create("botomBar", "bar-position:bottom; height:70;width:fillparent;background-color:#7b7b7b+#000000/0;border-width:0;fading-edge-length:60;fading-edge-color:#444444;");
		//rexseeMenu.addItem("botomBar", "rexsee:reload", "label:刷新;" + normalStyle, pressedStyle, "");
		rexseeMenu.addItem("botomBar", "javascript:devSetup()", "label:设置;" + normalStyle, pressedStyle, "");
		rexseeMenu.addItem("botomBar", "rexsee:quit", "label:退出;" + normalStyle, pressedStyle, "");
		rexseeMenu.setOptionsMenuId("botomBar");
	}

	initRexsee();
} catch(e) {

}
/*window.onPause = function() {

}*/

/*window.onDestroy = function() {

}*/
/*window.onResume = function(){

}*/

/**
 * 设备管理
 */
function devSetup() {
	rexseePopupWindow.show('file:///android_asset/device/device_mgr.html', 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:true;window-modeless:true;window-dim-amount:1;window-style:transparent;window-animation:right;border-width:0px;window-align:center;window-vertical-align:middle;width:fillparent;height:fillparent;');
}

/**
 * 页面布局调整
 */
function setLayout() {
	$(".content").height($(window).height() - $(".header").height() - $(".menu").height());
	$(".content > .swipe").height($(window).height() - $(".header").height() - $(".menu").height());
	$(".content > .swipe > .swipe-wrap").height($(window).height() - $(".header").height() - $(".menu").height());
	$(".content > .swipe > .swipe-wrap > .wrap").height($(window).height() - $(".header").height() - $(".menu").height());
	//$("#parent").height($(window).height() - $(".header").height() - $(".menu").height());
}

var slider = null;

$(function() {
	//实始化布局
	$(window).resize(setLayout);
	setLayout();

	//面面滑动初始化
//	slider = Swipe(document.getElementById('slider'), {
//		auto : 0,
//		continuous : true,
//		callback : function(pos) {
//
//			$(".li-active").removeClass("li-active");
//			$(".menu > div > div[index=" + pos + "]").addClass("li-active");
//		}
//	});

	//注册菜单按钮事件
	$(".menu > div > div").click(function() {
		$(".li-active").removeClass("li-active");
		var index = $(this).attr("index") * 1 - slider.getPos();
//		alert($(this).attr("index"));	
//		alert(slider.getPos());
		for (var i = Math.abs(index); i > 0; i--) {
			if (index > 0) {
				slider.next();
			} else {
				slider.prev();
			}
		}
		$(this).addClass("li-active");
	});

	//上一页按钮事件
	/*	$(".NavButtonBar > .pre").click(function() {
	 slider.prev();
	 });

	 //下一页按钮事件
	 $(".NavButtonBar > .next").click(function() {
	 slider.next();
	 });*/

});

/**
 *初始化点击菜单
 */
/*$(function() {
$(".swipe-wrap > .wrap ul > li").click(function() {
if ($(this).attr("data-type")!="DIR" && $(this).attr("data-url") != null) {
rexseePopupWindow.show($(this).attr("data-url"), 'browser-progress-dialog:visible;window-moveable:false;window-cancelable:true;window-modeless:false;window-dim-amount:1;window-style:transparent;window-animation:right;border-width:0px;window-align:center;window-vertical-align:middle;width:fillparent;height:fillparent;');
}else if ($(this).attr("data-type")=="DIR" && $(this).attr("data-url") != null){
rexseePopupWindow.show($(this).attr("data-url"), 'browser-progress-dialog:visible;window-moveable:false;window-cancelable:true;window-outside-cancelable:true;window-modeless:false;window-dim-amount:0.5;window-style:light;window-animation:center;border-width:0;window-align:center;window-vertical-align:middle;width:560;height:480;');

}
})
});*/

/**
 * 连接到设备
 */
//function devConnect() {
//	var flag = serialDevice.getConnectFlag();
//	var rc = $.parseJSON(flag);
//	if (rc.result) {
//		rexseeDialog.toast("设备已连接");
//		return;
//	}
//	var exitsts = rexseePreference.exists("deviceAddress");
//	if (exitsts) {
//		var devAddress = rexseePreference.get("deviceAddress");
//		rexseeProgressDialog.show("连接设备，请稍后。。。");
//		//rexseeDialog.toast("连接设备...");
//		GgDev.connectBlueteeth(devAddress, function(jsonStr) {
//			rexseeProgressDialog.hide();
//			var rc = $.parseJSON(jsonStr);
//
//			if (!rc.result) {
//				rexseeDialog.toast("连接设备失败");
//				return;
//			}
//			rexseeDialog.toast("连接设备成功");
//		});
//	} else {
//		rexseeDialog.toast("未绑定设备");
//	}
//}

//$(function() {
//	setTimeout(devConnect, 500);
//});

//签到答退按钮事件
$(function() {
	$("#btnLogin").click(function() {
		if ($("#btnLogin").attr("state") == "login") {
			rexseeDialog.confirm('询问', '确定要签退？', 'javascript:onLogout();');
		} else {
			rexseePopupWindow.show("file:///android_asset/tx/login/login.html", 'browser-progress-dialog:hidden;window-moveable:false;window-cancelable:true;window-modeless:false;window-dim-amount:0.5;window-style:light;window-animation:center;border-width:0px;window-align:center;window-vertical-align:middle;width:560;height:360;');
		}
	})
});

function onLogout() {
	$("#btnLogin> img").attr("src", "img/icon-login.png");
	$("#btnLogin > span").text("登录");
	$("#btnLogin").attr("state", "logout");
}

function onLogin(json) {
	$("#btnLogin> img").attr("src", "img/icon-logout.png");
	$("#btnLogin > span").text("签退");
	$("#btnLogin").attr("state", "login");
}
