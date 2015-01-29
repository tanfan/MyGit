/*
 * 页面调用设备方法 需要知道 触发事件的按钮需要 设置 targetId属性 指向 需要显示返回结果的dom的id
 */
function readIdCard(obj) {
	var flag = GgDev.getConnectFlag();
	var rc = $.parseJSON(flag);
	if (rc.result) {
		GgDev.readIdCard(function(json) {
			var idCardResult = $.parseJSON(json);
			if (idCardResult.result) {
				//alert(idCardResult.number);
				var targetId = $(obj).attr("targetId");
				//alert(targetId);
				$('#' + targetId).val(idCardResult.number);
				//窗口级数据保存
				windowData.set("idCard.number", idCardResult.number)
				windowData.set("idCard.name", idCardResult.name)
				windowData.set("idCard.nation", idCardResult.nation)
				windowData.set("idCard.address", idCardResult.address)
				windowData.set("idCard.sex", idCardResult.sex)
				windowData.set("idCard.issueDepartmanet", idCardResult.issueDepartmanet)
				windowData.set("idCard.photo", idCardResult.photo)
				windowData.set("idCard.startDate",idCardResult.startDate)
				windowData.set("idCard.endDate",idCardResult.endDate)
			} else {
				rexseeDialog.toast(idCardResult.resultMsg);
			}
		})
	} else {
		rexseeDialog.toast("未连接设备，请先连接设备");
		return;
	}
}

function readCard(obj) {
	var flag = GgDev.getConnectFlag();
	var rc = $.parseJSON(flag);
	if (rc.result) {
		var readCardType = $('input:radio[name="readCardType"]:checked').val();
		switch (readCardType) {
			case '0':
				GgDev.readMagCard(function(json) {
					var magCardResult = $.parseJSON(json);
					if (magCardResult.result) {
						//alert(magCardResult.id);
						var targetId = $(obj).attr("targetId");
						$('#' + targetId).val(magCardResult.id);
						//窗口级数据存储
						windowData.set(targetId + ".cardNo", magCardResult.id)
					} else {
						rexseeDialog.toast("磁条卡读取失败！");
					}
				})
				break;
			case '1':
				GgDev.readIccard([1], function(json) {
					var icCardResult = $.parseJSON(json);
					if (icCardResult.result) {
						//alert(icCardResult.id)
						var targetId = $(obj).attr("targetId");
						$('#' + targetId).val(icCardResult.id);
						//窗口级数据存储
						windowData.set(targetId + ".cardNo", icCardResult.id)
					} else {
						rexseeDialog.toast(icCardResult.resultMsg);
					}
				})
				break;
			case '2':
				GgDev.readIccard([2], function(json) {
					var icCardResult = $.parseJSON(json);
					if (icCardResult.result) {
						//alert(icCardResult.id)
						var targetId = $(obj).attr("targetId");
						$('#' + targetId).val(icCardResult.id);
						//窗口级数据存储
						windowData.set(targetId + ".cardNo", icCardResult.id)
					} else {
						rexseeDialog.toast(icCardResult.resultMsg);
					}
				})
				break;

		}
	} else {
		rexseeDialog.toast("未连接设备，请先连接设备");
		return;
	}
}

function readPin(obj) {
	var flag = GgDev.getConnectFlag();
	var rc = $.parseJSON(flag);
	if (rc.result) {
		GgDev.getPin(function(json) {
			var pinResult = $.parseJSON(json);
			if (pinResult.result) {
				var targetId = $(obj).attr("targetId");
				$('#' + targetId).val(pinResult.resultMsg);
				//窗口级数据存储
				windowData.set(targetId + ".password", pinResult.resultMsg)
			} else {
				rexseeDialog.toast(pinResult.resultMsg);
			}
		})
	} else {
		rexseeDialog.toast("未连接设备，请先连接设备");
		return;
	}
}

/**
 * 页面跳转前检查 index为当前页的索引值
 */
function turnCheck(index) {
	var checkFlag = true;
	//如果输入项包含 emptyCheck属性 将进行非空检查
	$(".tx-pages >div:eq(" + index + ") input[emptyCheck]").each(function() {
		if ($.trim($(this).val()) == "") {
			checkFlag = false;
			//alert($(this).attr('id'));
			rexseeDialog.toast($(this).attr("emptyCheck"));
		}
	})
	return checkFlag;
}