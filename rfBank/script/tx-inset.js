/**
 *交易 - 单页 txPage对像
 *
 */
(function(global, exportName) {
	function TxPage() {

		this.isRuning = false;

		this.clearPageCss = function(activePage) {
				//$(".tx-pages >div:eq(" + activePage + ")").removeClass("active");
				$(".tx-pages >div.noactive-right").removeClass("noactive-right");
				$(".tx-pages >div.noactive-left").removeClass("noactive-left");
				$(".tx-pages >div.active-left").removeClass("active-left");
				$(".tx-pages >div.active-right").removeClass("active-right");
				this.isRuning = false;
			}
			//上一页
		this.prePage = function() {
				if (this.isRuning)
					return;
				//var pageCnt  = $(".tx-pages > div").length;
				var activePage = $(".tx-pages > div.active").index();
				if (activePage == -1)
					activePage = 0;
				if (activePage <= 0)
					return;

				this.isRuning = true;

				if (!this.onPre(activePage, activePage - 1))
					return;
				$(".tx-pages >div:eq(" + activePage + ")").addClass("noactive-right");
				$(".tx-pages >div:eq(" + (activePage - 1) + ")").addClass("active-left");
				$(".tx-pages >div:eq(" + (activePage - 1) + ")").addClass("active");
				$(".tx-pages >div:eq(" + activePage + ")").removeClass("active");
				//this.onActive(activePage - 1);
				setTimeout("txPage.clearPageCss(" + activePage + ");txPage.onActive(" + (activePage - 1) + ");", 500);
			}
			//下一页
		this.nextPage = function() {
				if (this.isRuning)
					return;
				var pageCnt = $(".tx-pages > div").length;
				var activePage = $(".tx-pages > div.active").index();
				if (activePage == -1)
					activePage = 0;
				if (activePage >= (pageCnt - 1))
					return;
				if (!this.onNext(activePage, activePage + 1))
					return;

				this.isRuning = true;

				$(".tx-pages >div:eq(" + activePage + ")").addClass("noactive-left");
				$(".tx-pages >div:eq(" + (activePage + 1) + ")").addClass("active-right");
				$(".tx-pages >div:eq(" + (activePage + 1) + ")").addClass("active");
				$(".tx-pages >div:eq(" + activePage + ")").removeClass("active");
				//this.onActive(activePage + 1);
				setTimeout("txPage.clearPageCss(" + activePage + ");txPage.onActive(" + (activePage + 1) + ");", 500);
			}
			//gotoPage
			/**
			 * gotoPage 只会出发 onNext事件，不会出发onPre事件
			 */
		this.gotoPage = function(pageIndex) {

				if (this.isRuning)
					return;
				var pageCnt = $(".tx-pages > div").length;
				var activePage = pageIndex;
				if (activePage == -1)
					activePage = 0;
				if (activePage - 1 >= (pageCnt - 1))
					return;
				if (!this.onNext(activePage, activePage + 1))
					return;

				this.isRuning = true;

				var centerIndex = $(".tx-pages >div.active").index();
				if (activePage > centerIndex) {
					$(".tx-pages >div:eq(" + centerIndex + ")").addClass("noactive-left");
					$(".tx-pages >div:eq(" + activePage + ")").addClass("active-right");
					$(".tx-pages >div:eq(" + activePage + ")").addClass("active");
				} else {
					$(".tx-pages >div:eq(" + centerIndex + ")").addClass("noactive-right");
					$(".tx-pages >div:eq(" + activePage + ")").addClass("active-left");
					$(".tx-pages >div:eq(" + activePage + ")").addClass("active");
				}
				$(".tx-pages >div:eq(" + centerIndex + ")").removeClass("active");
				//this.onActive(activePage);
				setTimeout("txPage.clearPageCss(" + activePage + ");txPage.onActive(" + activePage + ");", 500);

			}
			//上一页事件
		this.onPre = function(from, to) {
			var fun = $(".tx-pages >div:eq(" + from + ")").data("onPre");
			if (fun != undefined && fun != null) {
				return fun(to);
			}
			return true;
		};
		//下一页事件
		this.onNext = function(from, to) {
				var fun = $(".tx-pages >div:eq(" + from + ")").data("onNext");
				if (fun != undefined && fun != null) {
					return fun(to);
				}
				return true;
			}
			//页面激活事件
		this.onActive = function(index) {
				var fun = $(".tx-pages >div:eq(" + index + ")").data("onActive");
				if (fun != undefined && fun != null) {
					fun();
				}
			}
			//向上一页面移动前事件
		this.pre = function(pageIndex, fun) {
				$(".tx-pages > div:eq(" + pageIndex + ")").data("onPre", fun);
			}
			//向下一页面移动前事件
		this.next = function(pageIndex, fun) {
				$(".tx-pages >div:eq(" + pageIndex + ")").data("onNext", fun);
			}
			//页面击活事件
		this.active = function(pageIndex, fun) {
			$(".tx-pages >div:eq(" + pageIndex + ")").data("onActive", fun);
		}

		this.onClose = function() {
			return true;
		}

		this._close = function() {
			if (!this.onClose())
				return;
			rexseeBrowser.dismiss();
		}
		$(function() {
			$.getScript("../../script/hammer.min.js", function() {
				var hammer = new Hammer(document.body, {
					prevent_default: false
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

			//上一页按钮事件
			$(".buttonbar > .pre").click(function() {
				txPage.prePage();
			});

			//下一页按钮事件
			$(".buttonbar > .next").click(function() {
				txPage.nextPage();
			});

			$("#btnExitTx").click(function() {
				txPage._close();
			});
		});

	};
	window[exportName] = new TxPage();

})(this, 'txPage');

$(function() {
	function __reLayoutPages() {
		$(".content > div.tx-pages").css("height", $(".content").height());
	};
	$(window).resize(__reLayoutPages);
	__reLayoutPages();
});