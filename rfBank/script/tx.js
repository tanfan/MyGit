(function(exportName) {
	function TxPage() {
		$.getScript("../../script/json2.js", function() {
			//alert("jsonLoad");
		});

		this.setData = function(key, value) {
			try {
				windowData.set(key, value);
			} catch(e) {

			}
		}

		this.getData = function(key) {
			try {
				return windowData.get(key);
			} catch(e) {
				return null;
			}
		}

		this.getAllData = function() {
			return windowData.getAll();
		}
		//将txForm数据存储到windowData中
		this.saveTxFormData = function() {
			$(".tx-form input").each(function(i, e) {
				var name = $(this).attr("name");
				txPage.setData(name, $(this).val())
			});
		}
		//将windowData中的数据显示到txForm
		this.updataTxFormDate = function() {

			$(".tx-form input").each(function(i, e) {
				var name = $(this).attr("name");
				var value = txPage.getData(name);
				value = value == null || value == undefined ? "" : value;
				$(this).val(value);
			});
		}
		//上一页事件
		this.onPre = function() {
			return true;
		};
		//下一页事件
		this.onNext = function() {
			return true;
		}
		//上一页
		this.prePage = function() {
			var pre = $(document.body).attr("data-PrePage");
			if (pre == undefined || pre == null || pre == "") {
				return;
			}
			if (!this.onPre()) {
				return;
			}
			this.saveTxFormData();

			rexseeTransition.clearStyle();
			rexseeTransition.clearPostStyle();
			rexseeTransition.setStyle('animation-repeat:repeat;background-color:#000000;animation-type:translate;animation-translate-x-from:0;animation-translate-x-to:100;animation-translate-y-from:0;animation-translate-y-to:0;animation-translate-repeat-count:0;animation-translate-duration:500;');
			rexseeTransition.setPostStyle('animation-post-start:start;animation-repeat:repeat;background-color:#000000;animation-type:translate;animation-translate-x-from:-100;animation-translate-x-to:0;animation-translate-y-from:0;animation-translate-y-to:0;animation-translate-repeat-count:0;animation-translate-duration:500;');
			rexseeTransition.load(pre, '');

			//rexseeBrowser.load(pre);
		}
		//下一页
		this.nextPage = function() {
			var next = $(document.body).attr("data-NextPage");
			if (next == undefined || next == null || next == "") {
				return;
			}
			if (!this.onNext()) {
				return;
			}
			this.saveTxFormData();
			rexseeTransition.clearStyle();
			rexseeTransition.clearPostStyle();
			rexseeTransition.setStyle('animation-repeat:repeat;background-color:#000000;animation-type:translate;animation-translate-x-from:0;animation-translate-x-to:-100;animation-translate-y-from:0;animation-translate-y-to:0;animation-translate-repeat-count:0;animation-translate-duration:500;');
			rexseeTransition.setPostStyle('animation-post-start:start;animation-repeat:repeat;background-color:#000000;animation-type:translate;animation-translate-x-from:100;animation-translate-x-to:0;animation-translate-y-from:0;animation-translate-y-to:0;animation-translate-repeat-count:0;animation-translate-duration:500;');
			rexseeTransition.load(next, '');
			//rexseeProgressDialog.show("下在载入，请稍后。。。");
			//rexseeBrowser.load(next);
		}
	};

	window[exportName] = new TxPage();

})('txPage');

$(function() {
	txPage.updataTxFormDate();
	//上一页按钮事件
	$(".buttonbar > .pre").click(function() {
		txPage.prePage();
	});

	//下一页按钮事件
	$(".buttonbar > .next").click(function() {
		txPage.nextPage();
	});

	//初如化手势
	$(function() {
		$.getScript("../../script/hammer.min.js", function() {
			var hammer = new Hammer(document.body, {
				prevent_default : false
			});
			hammer.on("panright", function(e) {
				e.preventDefault();
				if (e.isFinal) {
					txPage.prePage();
				}
			});
			hammer.on("panleft", function(e) {
				e.preventDefault();
				if (e.isFinal) {
					txPage.nextPage();
				}
			});
		});
	});
	//取消按钮
	$("#btnExitTx").click(function() {
		rexseeBrowser.dismiss();
	});

	var pre = $(document.body).attr("data-PrePage");
	if (pre == undefined || pre == null || pre == "") {
		$(".buttonbar > .pre").hide();
	}

	var next = $(document.body).attr("data-NextPage");
	if (next == undefined || next == null || next == "") {
		$(".buttonbar > .next").hide();
	}

});