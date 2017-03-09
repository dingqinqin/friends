
$(function() {
	
	$.ajax({
		"url" : "data/data.json",
		"type" : "GET",
		"dataType" : "json",
		"timeout" : 100000,
		"success" : function(data) {
			if (data.status == 200) {
				var allData = data.data;
				for (var i = 0; i < allData.length; i++) {
					$(".ls>img").eq(i).attr("src",allData[i].photo);
					$(".lis>a>p>span").eq(i).text(allData[i].name);
					$(".lis>a>p>i").eq(i).text(allData[i].signature);
					$(".good span").eq(i).text(allData[i].goodCount);
					/**
					 * 首先判断类型
					 */
					if (allData[i].lastArticle.status == 0) {
						//图文显示
//						var str = "<div class='mui-media-object mui-pull-left lss'>dd<img src='"+allData[i].lastArticle.artPhoto[0]+"' />
//								  "</div><div class='mui-media-body rss'>"+allData[i].lastArticle.title+"</div>";
//						$(".reply a").append(str);
						$(".reply .lss>img").eq(i).attr("src",allData[i].lastArticle.artPhoto[0]);
						$(".rss").eq(i).text(allData[i].lastArticle.title);
					}
					
					//TODO 实在没时间了回复就不再解析了
					if (allData[i].lastArticle.status == 1) {
						/**
						 * 实在没时间了~~
						 */
//						$(".imgs-list").css("background","red")

//						for (var j = 0; j < allData[i].lastArticle.artPhoto.length; j++) {
//							$(".reply-img").eq(j)
//							$(".reply-img").eq(j).find("img").eq(j).attr("src",allData[i].lastArticle.artPhoto[j]);
//						}
					}
				}
				
			}
		},
		"error" : function(data) {
			console.info(data);
		}
	});
	
	var tag=true;
	$(".good").on("click",function(e){
		e.stopPropagation();
		/**
		 * 这里仅仅是模拟点赞功能，真正的点赞需要发送数据去后台完成点赞
		 * 成功后在修改数据
		 */
		if (tag) {
			var num = parseInt($(".good .num").text());
			$(".good .num").text(++num);
			//这个需要换图片
//			$(".good img").css("color","red");
		} else {
			//取消点赞
			var num = parseInt($(".good .num").text());
			$(".good .num").text(--num);
			//这个需要换图片
//			$(".good img").css("color","red");
		}
		tag = !tag;
	});
	
	$(".point").hide();
	$("#btn2").tap(function(e){
		e.stopPropagation();
		/**
		 * 没有后台支持，所以就没有实现增加数据的功能，
		 * 只是toast一下表示表示
		 */
		$(".point").show();
		mui.toast('有新消息出现');
		
	});
	
	$("#delete").on('click', function() {
		mui.confirm('您确定要删除吗？', '警告',function(e) {
			console.log(e)
			if (e.index == 1) {
				/**
				 * 这里发生ajax在后台删除数据
				 * 如果成功就在页面移除对应的数据
				 * 因为没有后台支持，所以就只删除了页面
				 */
				$("#com").remove();
			} else {
				mui.toast('保留再看看！');
			}
		});
				
	});
	
	$("#kz").hide();
	$("#sq").hide();
	
	$("#more").tap(function(){
		$("#kz").show();
		$("#sq").show();
		$("#more").hide();
	});
	
	$("#sq").tap(function(){
		$("#kz").hide();
		$("#sq").hide();
		$("#more").show();
	});

});