
//窗口滑动，导航栏背景透明度改变
var a=0;
var b = $(window).width()
function go(){
if(a>0&&b>768){
		$('.zqfnav').css('background','#fff')
		$('.zqfnav .navbar-right>li>a').css('color',"#575e65")
		}else if(a==0&&b>768){

			$('.zqfnav').css('background','rgba(0, 0, 0, 0.15)')
			$('.zqfnav .navbar-right>li>a').css('color',"#fff")
			$('.zqfnav .navbar-right>li>.main').css('color','#16b0dc')
			
		}else{
			$('.zqfnav').css('background','none')
			$('.zqfnav .navbar-right>li>a').css('color',"#fff")
			$('.zqfnav').css('border-color','none')
		}
}  
go();

$(window).scroll(function(){
   a = $(window).scrollTop()
   go();
    })

$(window).resize(function(){
   	b = $(window).width()
   	go();
   	change();
	  })
 
  
//分辨率小于767px时，导航栏右侧按钮的转换

function change(){
         	if(b>768){
         		console.log(b)
				$('.navbar-default .btn').fadeOut()
				$('.navbar-default .zqf-btn').fadeOut()
			}
	     }

$('.navbar-default .btn').click(function(){
			$(this).fadeOut()
			$('.navbar-default .zqf-btn').fadeIn()
		})

$('.navbar-default .zqf-btn').click(function(){
			$(this).fadeOut()
			$('.navbar-default .btn').fadeIn()
		})

//优秀案例 鼠标移动显示

$(".zqful li").hover(function(){
    $(this).children('.nicediv').children('a').children('.add').stop().fadeIn(300)
},
function(){
	$(this).children('.nicediv').children('a').children('.add').css('display','none')})


//回到顶部

$(window).scroll(function(){
	var a = $(window).scrollTop()
	var b = $(window).height()
	if(a>=b){
	 $('.obtn-top').fadeIn()
}else{
	 $('.obtn-top').fadeOut()	
}
})


$('.obtn-top').click(function(){
	$('html,body').animate({'scrollTop':'0px'},1000)
})

//轮播图
		var num=0;
		var timer;
		function gogo(){
			timer=setInterval(function(){
				num++;
				if(num>1920){
					num=0;
				}
				$('.imgroll').css('left', -num+'px');
			},100)
		}
gogo();

$('.zqfteam .imgroll').hover(function(){
	clearInterval(timer)},function(){
		gogo();
	
})
