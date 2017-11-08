//页面加载 请求ajax加载数据
$.ajax({
	type:"get",
	url:"list.json",
	success:function(json){
		var html="";
//			console.log(json.list[1])
			for(var i=0;i<json.list.length;i++){
				var item=json.list[i];
				html+=`<li class="list01-rightLi">
								<a href="detail.html" >
									<img src="list-img/${item.src}" />
								</a>
									<div class="list01-rightDiv01"><span>满99立减15/</span><span>${item.name}</span></div>
									<div class="list01-rightDiv02"><span>￥${item.price}</span><span>满额立减</span></div>
									<div class="list01-rightDiv03">
										<div class="list01-rightDiv031">
											<span>1</span>
											<div class="list01-right-jia">+</div>
											<div class="list01-right-jian">-</div>
										</div>
										<div class="list01-rightDiv031 list01-rightDiv032">加入购物车</div>
										<div class="list01-rightDiv031 list01-rightDiv033">收藏</div>
									</div>
									<div class="shangpin"><img style="width:100%;height:100%" src="list-img/${item.src}"/></div>
							</li>`;
			}
		$(".list01-rightUl").html(html);
		//划过li变化
		$(".list01-rightUl").find("li").mouseenter(function(){
			$(".list01-rightDiv032").css({"background":"#f6f6f6","color":"#646464"});
			$(this).find(".list01-rightDiv032").css({"background":"#D01744","color":"#fff"});
		})
		$(".list01-rightUl").find("li").mouseleave(function(){
			$(".list01-rightDiv032").css({"color":"#646464","background":"#f6f6f6"})
		})
		//点击页码换页
		var num2=6;
		var num3=6;
		$(".fenye").find("li").click(function(){
			var count=$(".fenye").find("li").length;
			var index=$(this).index();
			var num1=index;//这一次点击的页码
			if(index==7){
				num2=6;
				num3=6;
			}
			if(index==0){
				num3=2;
				num2=2;
			}
			if(index!=1&&index!=7&&index!=0){
				if(num1!=num2){
					num3=num2;//num3记录上一次点击的页码
					num2=num1;//num2中间桥梁
				}
			}
			console.log(num3)
			
			$(this).css("border-color","#D01744")
					.siblings()
					.css("border-color","#666666");
//			alert(index)  0  1  2  3  4  5 6 7
//						  7  6  5  4  3  2 1 0
			if(index>=6){
				for(var k=0;k<$(".list01-rightUl").find("li").length;k++){
					$(".list01-rightUl").find("li").eq(k).css("display","block");
				}
				$(".list01-rightUl").find("li").eq(i).css("display","block");
			}else if(index>1&&index<6){
				for(var i=0;i<(8-index-2)*24;i++){
						$(".list01-rightUl").find("li").eq(i).css("display","none");
					}
				for(var j=((8-index-2)*24);j<$(".list01-rightUl").find("li").length;j++){
					$(".list01-rightUl").find("li").eq(j).css("display","block");
					
				}
			}else if(index==1){
				num3--;
				if(num3<=1){
					for(var q=0;q<(4*24);q++){
						$(".list01-rightUl").find("li").eq(q).css("display","none");
					}
					num3++;
					$(".fenye").find("li").eq(num3).css("border-color","#D01744")
						.siblings()
						.css("border-color","#666666");
				}else{
					for(var i=0;i<(8-num3-2)*24;i++){
						$(".list01-rightUl").find("li").eq(i).css("display","none");
					}
					$(".fenye").find("li").eq(num3).css("border-color","#D01744")
						.siblings()
						.css("border-color","#666666");
				}
				
			}else if(index==0){
				for(var q=0;q<(4*24);q++){
					$(".list01-rightUl").find("li").eq(q).css("display","none");
				}
			}
		})
		//点击加减,增减商品购买的数量
		$(".list01-right-jia").click(function(){
			var jia=parseInt($(this).parent().find("span").html())
			$(this).parent().find("span").html(jia+1);//$(".list01-rightDiv031")
		})
		$(".list01-right-jian").click(function(){
			var jian=parseInt($(this).parent().find("span").html())
			if(jian<=1){
				$(this).parent().find("span").html(1);
			}else{
				$(this).parent().find("span").html(jian-1);
			}
		})
		//点击加入购物车 购物车数量增加
		var num=0;
		$(".list01-rightDiv032").click(function(){
				var gw=parseInt($("#gouwuche").html());
				gw+=parseInt($(this).prev().find("span").html());
				$("#gouwuche").html(gw);
			/*	var x=$(this).parent().next().position().left;
				var y=$(this).parent().next().position().top;*/
				var width=$(this).parent().next().width();
				var height=$(this).parent().next().height();
				var left=$(this).parent().next().offset().left;
				var top=$(this).parent().next().offset().top;
				$(this).parent().next().css("display","block")
				$(this).parent().next().stop().animate({"left":-left,"top":-top,"width":(10),"height":(10)},1000,function(){
					$(this).parent().next().css({"display":"none","top":"353px","left":"125px","width":"50px","height":"50px"})
				}.bind(this));
		})
	}
});
//分页
//划过变效果
$(".fenye").find("li").hover(function(){
	$(this).css({"background":"#D01744","color":"#FFFFFF"})
			.siblings()
			.css({"background":"","color":"#005AA0"});
})
$(".fenye").mouseout(function(){
	$(".fenye").find("li").css({"background":"","color":"#005AA0"})
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
