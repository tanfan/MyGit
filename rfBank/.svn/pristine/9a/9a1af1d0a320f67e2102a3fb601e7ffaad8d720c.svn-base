$(function() {
	$(".header > div.button").click(function() {
		rexseeBrowser.dismiss();
	});
});
function getAppInfos() {
	//		rexseeProgressDialog.currentProgress = 1;
	//		rexseeProgressDialog.show("搜索设备，请稍后。。。");
	//		GgDev.searchDev(function(json) {
	var testJson = GetAppInfos.getAppInfoJson();
	var myobj = eval(testJson);
	$(".applist > ul").html("");
	for (var i = 0; i <myobj.length; i++) {
//	$(".applist>ul").append("<li><table><td><img  class=\"icon\" src=\"data:image/png;base64,"+myobj[i].icon+"\"/></td><td><p>" + myobj[i].name + " </p><p>" + myobj[i].packageName + "</p></td></table></li>");
	$(".applist>ul").append("<li><img src=\"data:image/png;base64,"+myobj[i].icon+"\"/>" + myobj[i].name + "</li>");
	}
	var li=document.getElementsByTagName("li");
	for (var i = 0; i < li.length; i++) {
		(function(x) {
			li[x].onclick = function() {
					var packageName=myobj[x].packageName;
					var activityName=myobj[x].activityName;
					StartAppByAppInfo.Start(packageName,activityName);
			}
		})(i);
	}
	//			rexseeProgressDialog.hide();
	//			$("#btnBund").attr("disabled", true);
	//
	//		});

}
