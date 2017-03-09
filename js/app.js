$(function() {
	var tag=true;
	$(".good").on("click",function(e){
		e.stopPropagation();
		if (tag) {
			var num = parseInt($(".good span").text());
			$(".good span").text(++num);
			//这个需要换图片
//			$(".good img").css("color","red");
		} else {
			//取消点赞
			var num = parseInt($(".good span").text());
			$(".good span").text(--num);
			//这个需要换图片
//			$(".good img").css("color","red");
		}
		tag = !tag;
	});
	$(".point").hide();
	$("#btn2").tap (function(e){
		e.stopPropagation();
		
		$(".point").show();

		mui.toast('有新消息出现');
		
	})
	$("#delete").on('tap', function() {
		mui.confirm('您确定要删除它吗？', '评论',function(e) {
			if (e.index == 1) {
				$("#com").remove();//不知尊上让我删除那个我就全删了，若有什么删除的不对的地方望理解。。。
			} else {
				mui.toast('保留再看看！');
			}
		})
				
	})
	$("#kz").hide();
	$("#sq").hide();
	$("#more").tap(function(){
		$("#kz").show();
		$("#sq").show();
		$("#more").hide();
	})
	$("#sq").tap(function(){
		$("#kz").hide();
		$("#sq").hide();
		$("#more").show();
	})

});