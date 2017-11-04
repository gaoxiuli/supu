
//楼梯去轮播图
var num1=$(".floor1Lunbo ul").eq(0).find("li").length-2;
var num2=$(".floor1Lunbo ul").eq(4).find("li").length-2;
function Carousel(obj,num) {
    this.init(obj,num);
}
    Carousel.prototype = {
//  	init功能实现函数
        init : function(obj,num) {
            var oThis = this;
            this.obj = obj;
            this.num = num; 
            this.width = 197;
            this.index = 0;
            this.flag = true;
            this.timer = null;
            this.left = this.obj.parentNode.querySelector('.right');
            this.right = this.obj.parentNode.querySelector('.left');
            this.autoTimer = setInterval(function ()
            {
                oThis.next();
            }, 2000);
//          console.log(this.obj.parentNode)
			//划入装有ul的大盒子，停掉定时器
            this.obj.parentNode.onmouseover = function ()
            {
                clearInterval(oThis.autoTimer);
            };
            //划出停掉定时器
            this.obj.parentNode.onmouseout = function ()
            {
                oThis.autoTimer = setInterval(function ()
                {
                    oThis.next();
                }, 2000);
            };
            //点击左边left
            this.left.onclick = function() {
                oThis.prev();
            };
            //点击右边right
            this.right.onclick = function() {
                oThis.next();
            };
        },
        //点击左边实现的效果
        prev : function() {
            this.index--;
            if(this.index === -1) {
                this.index = this.num ;
                this.obj.style.left = (this.index +1) * (-this.width) +'px';
                this.index--;
            }
            this.move(this.index);
        },
        next: function ()
        {   
            this.index++;
            if(this.index === this.num) {
                this.index = 0;
                this.obj.style.left = 0;
            } 
            this.move(this.index);
        },
        move: function(index,callBack) {
            var translate = - (index +1) * this.width;
            var oThis = this;
            clearInterval(oThis.timer);
            index === -1 ? index = this.num - 1 :'';
            oThis.timer = setInterval(function () 
            {
                var iSpeed = (translate - oThis.obj.offsetLeft) / oThis.num;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                if( iSpeed === 0 ) {
                    clearInterval(oThis.timer);
                    callBack && callBack.call(oThis);
                } else {
                    oThis.obj.style.left =  oThis.obj.offsetLeft + iSpeed + 'px';
                }
            }, 25);
        }
    };

 window.onload = function ()
{
    var obj0=document.getElementById("lunBo01");
    var obj1=document.getElementById("lunBo02");
    var obj2=document.getElementById("lunBo03");
    var obj3=document.getElementById("lunBo04");
    var obj4=document.getElementById("lunBo05");
//  var indexA = document.getElementById('carousel-index').getElementsByTagName('a');
//	console.log(indexA)
    new Carousel(obj0,num1);
    new Carousel(obj1,num1);
    new Carousel(obj2,num1);
    new Carousel(obj3,num1);
    new Carousel(obj4,num2);
    
};