//head
$(".head-li").hover(function(){
	$(this).find("ul").css("display","block");
},function(){
	$(this).find("ul").css("display","none");
})
//banner
var index=0;
function banner(){
	$(".banner ul li").eq(index).animate({"opacity":1},3000)
					.siblings()
					.animate({"opacity":0},3000);
	index++;
	if(index==$(".banner ul li").length){
		index=0;
	}
}
banner();
setInterval(function(){
	banner();
},3000)