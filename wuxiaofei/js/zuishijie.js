
$(document).ready(function(){
	console.log("wocao")
	//放大镜搜索
		$("#clickImg").mousemove(function(){
			$("#clickImg").css("display","none");
			$("#seekLi div").slideDown(200);
			$("#seekLi div").css("display","inline-block");
		})
		$("#seekLi div").mousemove(function(){
			$("#clickImg").css("display","none");
			$("#seekLi div").css("display","inline-block");
		});
		$("#seekLi div").mouseout(function(){
			$("#seekLi div").css("display","none");
			$("#clickImg").css("display","inline-block");
		})


	$("#CommunityLi").mouseenter(function(){
		$("#CommunityDiv").show();
	})
	$("#CommunityLi").mouseleave(function(){
		$("#CommunityDiv").hide();
	})
	$("#CommunityDiv").mouseleave(function(){
		$("#CommunityDiv").hide();
		$("#ForumDiv").hide();
	})
	$("#ForumLi").mouseenter(function(){
		$("#ForumDiv").show();
	})
	$("#ForumDiv").mouseleave(function(){
		$("#ForumDiv").hide();
	})

	var GPSli = document.getElementsByTagName('GPSli');

	$(".GPSli").mouseover(function(){
		$(this).css("background","#f5f5f5")
	})
	$(".GPSli").mouseout(function(){
		$(this).css("background","none")
	})
	// 轮播图
	function changeTo(num){
		var goleft = num * 1920;
		$(".imgUl").animate({left:"-" + goleft + "px"},600);
		//$(".buttonUl").find("li").removeClass("buttonLi").eq(num).addClass("buttonLi");
	};
	var curIndex = 0,
		imgLen = $(".imgUl li").length;//图片数量

		var autoChange = setInterval(function(){
			if (curIndex < imgLen-1){
				curIndex ++;
			}else{
				curIndex = 0;
			}
			changeTo(curIndex);
		},2000);

	//左侧导航栏
	$("#NavigationDiv .NavigationLi").mouseover(function(){
		$(this).css("background","#fff").css("opacity","1");
		$(this).children('h3').css("color","#000");
		$(this).children('.subtitle-p').children('a').css("color","#000");
		$("#NavigationDiv .contentDiv").css("display","inline-block")
	});
	$("#NavigationDiv .NavigationLi").mouseout(function(){
		$(this).css("background","black").css("opacity","0.6");
		$(this).children('h3').css("color","#fff")
		$(this).children('.subtitle-p').children('a').css("color","#fff")
		$("#NavigationDiv .contentDiv").css("display","none")
	});
	$("#NavigationDiv .NavigationLi1").mouseover(function(){
		$(this).css("background","#fff").css("opacity","1");
		$(this).children('h3').css("color","#000");
		$(this).children('.subtitle-p').children('a').css("color","#000");
		$("#NavigationDiv .contentDiv1").css("display","inline-block")
	});
	$("#NavigationDiv .NavigationLi1").mouseout(function(){
		$(this).css("background","black").css("opacity","0.6");
		$(this).children('h3').css("color","#fff")
		$(this).children('.subtitle-p').children('a').css("color","#fff")
		$("#NavigationDiv .contentDiv1").css("display","none")
	})
	$("#D7 img,#D8 img, #D9 img").mouseover(function(){
		$(this).css("opacity","0.8")
	})
	$("#D7 img,#D8 img, #D9 img").mouseout(function(){
		$(this).css("opacity","1")
	})
})