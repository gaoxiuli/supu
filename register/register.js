function rand(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
//找回密码
$(".zhmm-x").click(function(){
	$(".zzc").css("display","none");
})
$(".jz").find("span").click(function(){
	$(".zzc").css("display","block");
})
var flagHuadong=false;
$(".huakuai").mousedown(function(e){
	var e=e||event;
	var disx = e.pageX - $(this).offset().left;
	if(!flagHuadong){
		$(document).bind("mousemove",function(e){
			var e=e||event;
			window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
			x=e.pageX-disx-$(".zhuce2").offset().left;
			maxL=$(".huadong").width()-$(".huakuai").width()-3;
			x=Math.min(maxL,Math.max(3,x));
			$(".huakuai").css("left",x);
			
		})
		$(document).bind("mouseup",function(){
			$(document).unbind("mousemove");
			if(x<maxL){
				$(".huakuai").animate({"left":3},1000);
			}else{
				$(".huadong").css({"background":"#a6e69a"});
				$(".huadong").find("span").html("验证通过");
				flagHuadong=true;
				$(".huakuai").css("background","url(img-register/bg_draggable_qaptcha_2.png)")
			}
			$(document).unbind("mouseup");
			
		})
	}
})
//登录注册页面切换
$(".zhuce2").find(".top").find("a").click(function(){
	$(".zhuce2").animate({"left":"1300","opacity":0},1000,function(){
		$(".zhuce2").animate({"left":400},1000)
	});
	$(".zhuce").animate({"left":800,"opacity":1},1000)
})
$(".zhuce").find(".top").find("a").click(function(){
	$(".zhuce").animate({"left":"1300","opacity":0},1000,function(){
		$(".zhuce").animate({"left":400},1000)
	});
	$(".zhuce2").animate({"left":800,"opacity":1},1000)
})
//用户注册
//验证码
function yzm(){
	var arr=[];
	for(var i=0;i<6;i++){
		var code=rand(48,122);
		if(code>=58&&code<=64||code>=91&&code<=96){
			i--;
		}else{
			arr.push(String.fromCharCode(code));
		}
	}
	return arr.join("");
}
$(".yzmImg").html(yzm());
$("#yzmSpan").click(function(){
	$(".yzmImg").html(yzm());
})
function check(){
	var flagUname=true;
	var flagPwd=true;
	var flagQpwd=true;
	var flagEmail=true;
	var flagYanzhengma=true;
	var flagTy=true;
	//用户名
	var strUname1=$("#uname").val();
	var regUname1=/[\u4e00-\u9fa5\w]{4,20}/;
	if(!regUname1.test(strUname1)){
		$(".bozi").slideDown(1000);
		$(".bozi").html("账户格式错误");
		$("#uname").val("");
		 flagUname=false;
	}
	//密码
	var strPwd1=$("#pwd").val();
	var regPwd1=/^[a-zA-Z\d_]{6,16}$/;
	if(!regPwd1.test(strPwd1)){
		$(".bozi").slideDown(1000)
		$(".bozi").html("密码输入错误");
		$("#pwd").val("");
		flagPwd=false;
	}
	//确认密码
	var strQpwd1=$("#qpwd").val();
	if(strQpwd1!=strPwd1){
		$(".bozi").slideDown(1000)
		$(".bozi").html("密码验证错误");
		$("#qpwd").val("");
		flagQpwd=false;
	}
	//电子邮箱
	var strEmail1=$("#email").val();
	var regEmail1=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	if(!regEmail1.test(strEmail1)){
		$(".bozi").slideDown(1000)
		$(".bozi").html("邮箱输入有误");
		$("#email").val("");
		flagEmail=false;
	}
	//验证码
	var strYanzhenma1=$("#yzm").val();
	if($(".yzmImg").html()!=strYanzhenma1){
		$(".bozi").slideDown(1000)
		$(".bozi").html("验证码输入有误");
		$("#yzm").val("");
		flagYanzhengma=false;
	}
	//是否同意用户协议
	if(!$("#cbx").prop("checked")){
		$(".bozi").slideDown(1000)
		$(".bozi").html("请阅读并同意用户协议");
		flagTy=false;
	}
	//综合验证
	if(flagUname&&flagPwd&&flagQpwd&&flagEmail&&flagTy&&flagYanzhengma&&flagPwd){
		return true;
	}else{
		return false;
	}
}
//点击提交验证
	$("#btn").click(function(){
		if(check()){
			var _json={
				"uname":$("#uname").val(),
				"pwd":$("#pwd").val()
			}
			setCookie("user",JSON.stringify(_json));
			$(".zhuce").animate({"left":"1300","opacity":0},700,function(){
				$(".zhuce").animate({"left":400},1000);
			});
			$(".zhuce2").animate({"left":800,"opacity":1},700);
		}
	})
//用户登录
	denglu()
function denglu(){
	var user=getCookie("user");
	console.log(user);
	var str=user.split(",")[0];
	console.log(str)
	var uname2=$(".zhuce2 #uname").val();
	var upwd2=$(".zhuce2 #pwd").val();
//	if(uname2==)
}
