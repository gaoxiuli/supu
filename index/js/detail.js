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

console.log($("#bigImg").width())
console.log($("#small").width())
console.log($(".detail-fd-big").width())
console.log($(".detail-fd-zzc").width())


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
