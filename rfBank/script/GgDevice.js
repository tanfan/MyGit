/**
 *
 * 外设调用接口（支持异步调用）
 *
 * 例：GgDev.readIdCard([arg1,arg2,...],[回调方法，如果没有回调方法即是同步调用]);
 *
 * @author youxz
 */
(function(exportName) {
	window[exportName] = new function() {
		//读取二代身份证信息
		this.readIdCard = function readIdCard() {
				var args = Array.prototype.slice.call(arguments);
				args.unshift("serialDevice.readIdCard");
				return window.asyncall.apply(this, args);
			}
			//刷银行卡读取卡信息（二三磁道信息）
		this.readMagCard = function() {
				var args = Array.prototype.slice.call(arguments);
				args.unshift("serialDevice.readMagCard");
				return window.asyncall.apply(this, args);
			}
			//激活密码键盘，获取通过密码键盘输入信息
		this.getPin = function() {
				var args = Array.prototype.slice.call(arguments);
				args.unshift("serialDevice.getPin");
				return window.asyncall.apply(this, args);
			}
			//IC卡信息读取
		this.readIccard = function() {
				var args = Array.prototype.slice.call(arguments);
				args.unshift("serialDevice.readIccard");
				return window.asyncall.apply(this, args);
			}
			//打印数据
		this.printData = function() {
				var args = Array.prototype.slice.call(arguments);
				args.unshift("serialDevice.printData");
				return window.asyncall.apply(this, args);
			}
			//搜索蓝牙设备
		this.searchDev = function() {
				var args = Array.prototype.slice.call(arguments);
				args.unshift("serialDevice.searchDev");
				return window.asyncall.apply(this, args);
			}
			//连接蓝牙设备
		this.connectBlueteeth = function(addressAndNameJson, callback) {
				var args = Array.prototype.slice.call(arguments);
				args.unshift("serialDevice.connectBlueteeth");
				return window.asyncall.apply(this, args);
			}
			//断开蓝牙设备
		this.disConnectBlueteeth = function(callback) {
				var args = Array.prototype.slice.call(arguments);
				args.unshift("serialDevice.disConnectBlueteeth");
				return window.asyncall.apply(this, args);
			}
			//获取连接状态
		this.getConnectFlag = function(callback) {
			var args = Array.prototype.slice.call(arguments);
			args.unshift("serialDevice.getConnectFlag");
			return window.asyncall.apply(this, args);
		}

	};
})('GgDev');