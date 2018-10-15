
var numm=0;

//点击下面的图片
$('.left ol>li').click(function(){
	numm=$(this).index()
//	console.log(num)
    $('.left ul>li').eq(numm).fadeIn(200);
    $('.left ul>li').eq(numm).siblings().fadeOut(200);
	$(this).addClass('li-one')
	$(this).siblings().removeClass('li-one')
})
//后一张图片
$('.left .min-right').click(function(){
	numm++;
	if(numm>6){
	numm=0;
	}
//	console.log(num)
    $('.left ul>li').eq(numm).fadeIn(200);
    $('.left ul>li').eq(numm).siblings().fadeOut(200);
	$('.left ol>li').eq(numm).addClass('li-one')
	$('.left ol>li').eq(numm).siblings().removeClass('li-one')
})
//前一张图片
$('.left .min-left').click(function(){
	numm--;
	if(numm<0){
	numm=6;
	}
//	console.log(num)
	$('.left ul>li').eq(numm).fadeIn(500);
    $('.left ul>li').eq(numm).siblings().fadeOut(500);
	$('.left ol>li').eq(numm).addClass('li-one')
	$('.left ol>li').eq(numm).siblings().removeClass('li-one')
})


//详细信息和尺寸的显示与隐藏
$('.left-two li').click(function(){
	$(this).addClass('li-two')
	$(this).siblings().removeClass('li-two')
	var a = $(this).index()
	$('.left-two').children('div').eq(a).stop().fadeIn()	
	$('.left-two').children('div').eq(a).siblings('div').hide()
	
})

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
