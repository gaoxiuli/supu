//移入加入购物车按钮,按钮背景改变
$(".detail-right16 input").mouseenter(function(){
	$(this).css("background","#FF8A00");
})
$(".detail-right16 input").mouseout(function(){
	$(this).css("background","#D01744");
})
//移入   订单满99.。。。
$(".detail-right12").mouseenter(function(){
	$(".detail-right120").css("display","block");
	$(this).css({"border":"#918888 1px solid","background-image":"url(detail-img/arrow_down.png)"})
})
$(".detail-right12").mouseout(function(){
	$(".detail-right120").css("display","none");
	$(this).css({"border":"none","background-image":"url(detail-img/arrow_up.png)"})
})
//购买的商品数量
count();
function count(){
	var count=parseInt($("#detail-right-left").next().val());
	$("#detail-right-left").click(function(){
		var count=$(this).next().val();
		if($(this).next().val()<=1){
			count=1;
		}else{
			count--;
		}
		$(this).next().val(count);
	})
	$("#detail-right-right").click(function(){
		count++;
		$(this).prev().val(count);
	})
}
//放大镜
$(".detail-item ul").find("li").mouseenter(function(){
	var arr1=["detail-img/1m.jpg","detail-img/2m.jpg","detail-img/3m.jpg","detail-img/4m.jpg","detail-img/1m.jpg","detail-img/2m.jpg","detail-img/4m.jpg"];
	var arr2=["detail-img/1b.jpg","detail-img/2b.jpg","detail-img/3b.jpg","detail-img/4b.jpg","detail-img/1b.jpg","detail-img/2b.jpg","detail-img/4b.jpg"];
	var count=$(this).index();
	$("#small").attr("src",arr1[count]);
	$(".detail-fd-big").find("img").attr("src",arr2[count]);
})
$(".detail-fd-small").mouseover(function(){
	$(".detail-fd-big").show();
	$(".detail-fd-zzc").show();
	$(document).mousemove(function(e){
		var e=e||event;
		var disX=$(".detail-fd-zzc").width()/2;
		var disY=$(".detail-fd-zzc").height()/2;
		var x=e.pageX-disX-$(".detail-fd-small").offset().left;
		var y=e.pageY-disY-$(".detail-fd-small").offset().top;
		var maxL=$(".detail-fd-small").width()-$(".detail-fd-zzc").width();
		var maxT=$(".detail-fd-small").height()-$(".detail-fd-zzc").height();
		x=Math.min(Math.max(0,x),maxL);
		y=Math.min(Math.max(0,y),maxT);
		$(".detail-fd-zzc").css({"left":(x+"px"),"top":(y+"px")});
		//大图/小图=bigx/x=大图显示区/小图显示区；
		var bigImgx=x*$("#bigImg").width()/$("#small").width();
		var bigImgy=y*$("#bigImg").height()/$("#small").height();
		$("#bigImg").css({
			'left':-bigImgx,
			"top":-bigImgy
		})
	})
}).mouseout(function(){
	$(".detail-fd-big").hide();
	$(".detail-fd-zzc").hide();
})
		/*console.log($(".detail-fd-big img").width())
		console.log($(".detail-fd-small img").width())
		console.log($(".detail-fd-big").width())
		console.log($(".detail-fd-zzc").width())*/

$("#spxq").click(function(){
	$(this).css({"background":"#ffffff","color":"#d01744"})
			.siblings()
			.css({"background":"#eaeaea","color":"#646464"});
	$("#jrgwc").css({"background":"#D01744","color":"#fff"});
	
	$(".detail-sppj").hide();
	$(".detail-cjwt").hide();
	$(".detail-spxq").show();
})
$("#sppj").click(function(){
	$(this).css({"background":"#ffffff","color":"#d01744"})
			.siblings()
			.css({"background":"#eaeaea","color":"#646464"});
	$("#jrgwc").css({"background":"#D01744","color":"#fff"});
	$(".detail-spxq").hide();
	$(".detail-cjwt").hide();
	$(".detail-sppj").show();
})
$("#cjwt").click(function(){
	$(this).css({"background":"#fff","color":"#d01744"})
			.siblings()
			.css({"background":"#eaeaea","color":"#646464"});
	$("#jrgwc").css({"background":"#D01744","color":"#fff"});
	$(".detail-spxq").hide();
	$(".detail-sppj").hide();
	$(".detail-cjwt").show();
})
//左右点击图片改变
$(".detail-fd-right").click(function(){
	var leftItem=$(".detail-item").find("ul").position().left;
	if($(".detail-item").find("ul").position().left>=16){
		$(".detail-item ul").css("left","16px");
	}else{
		$(".detail-item ul").animate({"left":(leftItem+77)},1000)
	}
})
$(".detail-fd-left").click(function(){
	var leftItem=$(".detail-item").find("ul").position().left;
	if(leftItem<=-138){
		$(".detail-item ul").css("left","-138px");
	}else{
		$(".detail-item ul").animate({"left":(leftItem-77)},1000)
	}
})
//吸顶效果
$(window).scroll(function(){
	var scr=$(document).scrollTop();
	if(scr!=0){
		$(".index-top").css({"position":"fixed"});
	}else{
		$(".index-top").css({"position":"relative"});
	}
})
$(".ad-close").click(function(){
	$(".index-top").css("display","none");
})
//收货地址选择
$(".beijing").click(function(){
	$(".detail-right110").css("display","block")
	$.ajax({
		type:"get",
		url:"addr.json",
		success:function(json){
			var html="";
			for(var i=0;i<json.shenghui.length;i++){
				var item=json.shenghui[i];
				html+=`<li>${item.shengming}</li>`;
			}
			$("#xuanze").html(html);
			bgcolorLi();
			$(".sheng").css({"background":"#fff","border-bottom":"1px solid #fff"});
			$(".detail-right110").find("div").click(function(){
				$(".detail-right110").find("div").css({"border-color":"#e3e3e3","background":"#f3f3f3"});
				$(this).css({"background":"#fff","border-bottom":"1px solid #fff"});
					for(var i=0;i<$("#xuanze").find("li").length;i++){
						$("#xuanze").find("li").eq(i).remove();
					}
					var arr=[json.shenghui,json.shixian,json.quyu];
					var html="";
					var xz=arr[$(this).index()];
					for(var i=0;i<xz.length;i++){
						var item=xz[i];
						if($(this).index()==0){
							html+=`<li>${item.shengming}</li>`;
						}
						if($(this).index()==1){
							html+=`<li>${item.shixiaqu}</li>`;
						}
						if($(this).index()==2){
							html+=`<li>${item.qu}</li>`;
						}
					}
					$("#xuanze").html(html);
					bgcolorLi();
			})
			$(".detail-right110 i").click(function(){
				$(".detail-right110").css("display","none")
			})
//			var 
			function bgcolorLi(){
				$("#xuanze").find("li").click(function(){
						$(this).css({"background":"orange","color":"#fff"})
								.siblings()
								.css({"background":"#fff","color":"#666666"});
					})
			}
			
		}
	})
})
