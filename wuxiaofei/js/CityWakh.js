$(document).ready(function(){
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

})
