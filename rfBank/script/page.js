/**
 * 页面布局调整
 */
function setLayout() {
	$(".content").height($(window).height() - $(".header").height());
}

$(function() {
	$(window).resize(setLayout);
	setLayout();
});