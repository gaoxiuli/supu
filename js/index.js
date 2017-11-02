//head
$(".head-li").hover(function(){
	$(this).find("ul").css("display","block");
},function(){
	$(this).find("ul").css("display","none");
})
//banner
var indexBanner=0;
function banner(){
	$(".banner ul li").eq(indexBanner).animate({"opacity":1},1000)
					.siblings()
					.animate({"opacity":0},1000);
	$(".bannerIndex span").eq(indexBanner).css("background","#D01744")
							.siblings()
							.css("background","#000000");
}
function carouse1(){
	banner();
	indexBanner++;
	if(indexBanner==$(".banner ul li").length){
		indexBanner=0;
	}
}
var timerBanner=setInterval(carouse1,3000);
$(".banner").mouseover(function(){
	$(".bannerCenter").css("display","block");
})
$(".banner").mouseout(function(){
	clearInterval(timerBanner);
	timerBanner=setInterval(carouse1,3000);
	$(".bannerCenter").css("display","none");
})
$("#bannerSpan1").click(function(){
	clearInterval(timerBanner);
	if(indexBanner==0){
		indexBanner=$(".banner ul li").length;
	}
	indexBanner--;
	console.log($(".banner ul li").length)
	console.log(indexBanner)
	banner();
})
$("#bannerSpan2").click(function(){
	clearInterval(timerBanner);
	indexBanner++;
	banner();
	if(indexBanner==$(".banner ul li").length-1){
		indexBanner=-1;
	}
})
//倒计时
timerXs();
var sTime=setInterval(timerXs,1000);
function showTime(t){
//	var endTime=new Date("2017-11-4 20:57:00");
//	var now=new Date();
//	var t=(endTime.getTime()-now.getTime())/1000;
//	t=ts*3600;
	if(t>=0){
		var h=parseInt(t/3600);
		var m=parseInt((t-h*3600)/60);
		var s=parseInt(t-h*3600-m*60);
	}else{
		h=0;
		m=0;
		s=0;
		clearInterval(sTime);
	}
	$("#hours").html(h);
	$("#minutes").html(m);
	$("#secontes").html(s);
}
function timerXs(){
	var nowTime=new Date();//现在的时间
	var hours=nowTime.getHours();//现在的小时
	var s=nowTime.getHours()*3600+nowTime.getMinutes()*60+nowTime.getSeconds();
	$(".timer").each(function(index){//遍历三个优惠时间
		var ts=parseInt($(this).html());
		if(hours<(ts+7)&&hours>=ts){
			if(ts*3600==s){
				sTime=setInterval(timerXs,1000);
			}
			var cha=(ts+7)*3600-s;
			showTime(cha);
			$(this).css("background","#D01744");
			$(".zhengTimer").eq(index).css("display","block");
		}
		
	})
}
//整点抢购物品
$(".commodity").each(function(index){
	$(this).mouseover(function(){
		$(".zzcCommodity").eq(index).css("display","block");
		$(".liji").eq(index).stop().animate({"left":"63px"},500);
		$(".liji").eq(index).css("display","block");
	})
	$(this).mouseout(function(){
		$(".zzcCommodity").eq(index).css("display","none");
		$(".zzcCommodity").eq(index).hide(100);
		$(".liji").eq(index).css("display","none");
		$(".liji").eq(index).stop().animate({"left":"-85px"},500);
	})
})
//整点抢购的轮播图
zhengLunbo();
function zhengLunbo(){
	var i=0;
	var timer=setInterval(zhengUl,10);
	function zhengUl(){
		$(".zhengUl").css("left",(i--)+"px");
		if(i==-1840){
			i=0;
		}
		
	}
	//划过li 定时器关闭
	$(".zhengQiang").mouseenter(function(){
		clearInterval(timer)
	}).mouseleave(function(){
		timer=setInterval(zhengUl,10);
	})
	$(".commodityLeft").click(function(){
		if(i<-690){
			i=-690;
			$(".zhengUl").animate({"left":i},20);
		}else{
			i-=100;
			$(".zhengUl").animate({"left":i},20);
		}
	})
	$(".commodityRight").click(function(){
		if(i>=-100){
			i=0;
			$(".zhengUl").animate({"left":i},20);
		}else{
			i+=100;
			$(".zhengUl").animate({"left":i},20);
		}
	})
}