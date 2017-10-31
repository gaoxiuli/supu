//head
$(".head-li").mouseover(function(){
	$(this).find("ul").css("display","block");
})
$(".head-li ul").mouseout(function(){
	$(this).css("display","none");
})
