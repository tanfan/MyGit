$(function() {
	$(".header > div.button").click(function() {
		rexseeWiFi.stopListenerForBroadcast()
		rexseeBrowser.dismiss();
	});

	if (rexseeWiFi.isEnabled()) {
		$(".content .state span").html("WIFI已开启")
	} else {
		$(".content .state span").html("WIFI已关闭")
	}

	rexseeWiFi.startListenerForBroadcast();

	//wifi连接断开事件 测试发现该事件无法触发
	//	window.onWiFiSupplicantConnectionChanged = function(connected){
	//		alert("onWiFiSupplicantConnectionChanged:"+connected)
	//	}

	window.onWiFiNetworkChanged = function() {
		//alert("onWiFiNetworkChanged")
	}

	window.onWiFiNetworkIdsChanged = function() {
		//alert("onWiFiNetworkIdsChanged")
	}

	//associated、associating、completed、disconnected、dormant、four_way_handshake、group_handshake、inactive、scanning、uninitialized、invalid
	window.onWiFiSupplicantStateChanged = function(state) {
		//alert(state);
		if (state == "disconnected") {
			showWifiList()
		} else if (state == "completed") {
			showWifiList()
		}
	}

	window.onWiFiScanFinished = function() {
		showWifiList();
	}
	window.onWiFiStateChanged = function(state, previousState) {
		//alert(state)
		//alert(previousState)
		//alert("onWiFiStateChanged")
	}
	
	//设置wifilist高度
	function setWifiListHeight(){
		//alert($(".header").height())
		//alert($(".state").height())
		//alert(document.body.clientHeight)
		$(".wifiList").height(document.body.clientHeight - $(".header").height() -$(".state").height() -30)
	}
	$(window).resize(setWifiListHeight)
	setWifiListHeight();
})

function openWifi() {
	if (rexseeWiFi.enable()) {
		$(".content .state span").html("WIFI已开启")
	};
}

function closeWifi() {
	if (rexseeWiFi.disable()) {
		$(".content .state span").html("WIFI已关闭")
	};
}

//调用scan后 会一直定期扫描wifi触发scanfinished事件 更新wifi信息
function serchWifi() {
	if (rexseeWiFi.scan()) {
		showWifiList();
	}
}

function showWifiList() {
	$(".wifiList ul").empty();
	//bssid 物理地址 ssid 名称 frequency level security rememberedid
	//alert(rexseeWiFi.getScanResults());
	var result = $.parseJSON(rexseeWiFi.getScanResults());
	for (var i = 0; result != null && i < result.length; i++) {
		$(".wifiList ul").append("<li bssid='" + result[i].BSSID + "' rememberedId='" + result[i].rememberedId + "' ssid='" + result[i].SSID + "' security='" + result[i].security + "'><div><span>" + result[i].SSID + "</span></br><span id='security'>" + result[i].security + "</span></div><div><img level='" + result[i].level + "'></img></div></li>")
	}
	//获取当前的wifi
	var currentWifi = rexseeWiFi.getSSID();
	//alert(currentWifi); // 如果未有当前连接的 返回未yeah 断开连接后当前wifi还是断开前的 扫描后才为空
	if (currentWifi != "yeah") {
		if (rexseeWiFi.getSupplicantState() != "disconnected") {
			$("ul li[ssid='" + currentWifi + "']").find("#security").html("已连接");
		}
	}

	//注册列表点击事件
	$("ul li").click(connect)
		//根据level值显示对于wifi强度图标
	$("ul li img").each(function() {
		var level = $(this).attr("level");
		var rssiLevel;
		//alert(typeof(level))
		level = Number(level);
		if (level > -50) {
			rssiLevel = 4
		} else if (level > -70) {
			rssiLevel = 3
		} else {
			rssiLevel = 2
		}
		$(this).attr("width", $("ul li >div:first-child").innerHeight());
		$(this).attr("height", $("ul li >div:first-child").innerHeight());
		$(this).attr("src", rssiLevel + ".png");
	})

	//必须设置li高度 不然浮动会出现在同一行
	$("ul li").css({
		"height": $("ul li >div:first-child").outerHeight()+10,
		"margin-top": "10px",
		"padding":"5px"
	});
}

function connect() {
	var bssid = $(this).attr("bssid");
	var ssid = $(this).attr("ssid");
	var rememberedId = $(this).attr("rememberedId");
	var security = $(this).attr("security");
	var networkId;
	//已连接的再点击直接返回
	var currentWifi = rexseeWiFi.getSSID();
	if(ssid==currentWifi && rexseeWiFi.getSupplicantState() == "completed"){
		return;
	}
	if (rememberedId == -1) {
		var pwd = prompt('prompt', 'title=输入框;message=请输入密码：;defaultValue=test;singleLine=false;cancel=true;');
		if (pwd != null && pwd != undefined && pwd != "") {
			networkId = rexseeWiFi.remember(ssid, security, pwd)
		} else {
			return;
		}
	} else {
		networkId = rememberedId;
	}
	if (networkId != -1) {
		//注意 connect必须传 number类型 否则传字符串 networkid会被设置为0
		//alert("networkid:"+networkId);
		//alert(typeof networkId)
		
		
		rexseeWiFi.connect(Number(networkId))
		$(this).find("#security").html("正在连接中...");
	} else {
		rexseeDialog.toast("连接失败！");
	}
}

function disConnect() {
	rexseeWiFi.disconnect();
}

//定义连接状态处理类
function connectStateHandle() {
	this.connectCompletedHandle;
	this.disConnectedHandle;
}

var handle = new connectStateHandle();

function getSupplicantState() {
	alert(rexseeWiFi.getSupplicantState())
}

function connect7() {
	rexseeWiFi.connect(7);
}