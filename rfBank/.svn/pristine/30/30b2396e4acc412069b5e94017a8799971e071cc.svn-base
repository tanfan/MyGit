$(function() {
	$(".header > div.button").click(function() {
		rexseeBrowser.dismiss();
	});
	
	if(rexseeBluetooth.isEnabled()){
		$(".blueteethState span").html("蓝牙状态：已开启")
	}else{
		$(".blueteethState span").html("蓝牙状态：已关闭")
		$("#serchDev").attr("disabled", true);
	}
});
function findDev() {
	try {
		//rexseeProgressDialog.currentProgress = 1;
		rexseeProgressDialog.show("搜索设备，请稍后。。。");
		GgDev.searchDev(function(json) {
			var devs = $.parseJSON(json);
			$(".devlist > ul").html("");
			for (var i = 0; devs != null && i < devs.length; i++) {
				$(".devlist > ul").append("<li data-devname=\"" + devs[i].name + "\" data-address=\"" + devs[i].address + "\">" + devs[i].name + " - " + devs[i].address);

			}
			$(".devlist > ul > li").click(function() {
				$(".dev-selected").removeClass("dev-selected");
				$(this).addClass("dev-selected");
				$("#btnBund").attr("disabled", false);

			});
			rexseeProgressDialog.hide();
			$("#btnBund").attr("disabled", true);

		});
	} catch(e) {
		alert(e.message);
	}
}

function bundDev() {

	var address = $(".dev-selected").attr("data-address");
	var name = $(".dev-selected").attr("data-devname");

	var flag = GgDev.getConnectFlag();
	var rc = $.parseJSON(flag);
	if (rc.result) {
		if (rc.address == address) {
			rexseeDialog.toast("设备已邦定");
			return;
		} else {
			rexseeDialog.toast("断开当前设备");
			delBund();
		}
	}

	rexseeProgressDialog.show("连接设备，请稍后。。。");
	GgDev.connectBlueteeth("{\"name\":\"" + name + "\",\"address\":\"" + address + "\"}", function(jsonStr) {
		rexseeProgressDialog.hide();
		var rc = $.parseJSON(jsonStr);
		if (rc.result) {
			rexseePreference.set("deviceAddress", "{\"name\":\"" + name + "\",\"address\":\"" + address + "\"}");
			$("#btnBund").attr("disabled", true);
			$("#delBund").attr("disabled", false);
			rexseeDialog.toast("邦定设备成功");
			updateBondDevInfoShow();
		} else {
			rexseeDialog.toast("邦定设备失败");
		}
	});
}

function closeWin() {
	rexseeBrowser.dismiss();
}

function delBund() {
	GgDev.disConnectBlueteeth();
	rexseePreference.remove("deviceAddress");
	$("#delBund").attr("disabled", true);
	updateBondDevInfoShow();

}

function updateBondDevInfoShow() {
	var exitsts = rexseePreference.exists("deviceAddress");
	if (!exitsts) {
		$("#lb_devName").text("--");
		$("#lb_devAddress").text("--");
		$("#lb_linkState").text("--");
		return;
	}
	try {
		var exitAddress = rexseePreference.get("deviceAddress");
		var jsonAddress = $.parseJSON(exitAddress);
		$("#lb_devName").text(jsonAddress.name);
		$("#lb_devAddress").text(jsonAddress.address);
		$("#delBund").attr("disabled", false);

		var flag = GgDev.getConnectFlag();
		var rc = $.parseJSON(flag);
		if (rc.result) {
			$("#lb_linkState").text("已连接");
		} else {
			$("#lb_linkState").text("未连接");
		}

	} catch(e) {
		alert(e.message);
		//rexseePreference.remove("deviceAddress");
	}
}

$(updateBondDevInfoShow);

function openBlueTeeth() {
	if (!rexseeBluetooth.isEnabled()) {
		//rexseeBluetooth.startListenerForBroadcast();
		if (rexseeBluetooth.forceEnable()) {
			$(".blueteethState span").html("蓝牙状态：已开启")
			$("#serchDev").attr("disabled", false);
		};
	} else {
		rexseeDialog.toast("蓝牙已开启");
	}
}

function closeBlueTeeth() {
	if (rexseeBluetooth.isEnabled()) {
		//rexseeBluetooth.startListenerForBroadcast();
		if (rexseeBluetooth.disable()) {
			$(".blueteethState span").html("蓝牙状态：已关闭")
			$("#serchDev").attr("disabled", true);
		};
	}else{
		rexseeDialog.toast("蓝牙已关闭");
	}
}
