var timer;
var num=0;
var timerout;
       function setTime(){
            timer=setInterval(function () {
               num+=1;
               if (num==2)num=0;
               $('.banner li').eq(num).stop().fadeIn(1000).siblings('li').stop().hide();
               $('.olcircle li').eq(num).css('background',' url("../join-us-img/focus_checked.png")');
                $('.olcircle li').eq(num).siblings().css('background',' url("../join-us-img/focus.png")');
            },1500);
       }
setTime();
$('.olcircle li').hover(function () {
   clearInterval(timer);
    num =$(this).index();
    $('.banner li').eq(num).stop().fadeIn(1000).siblings('li').stop().hide();
    $(this).css('background',' url("../join-us-img/focus_checked.png")');
    $(this).siblings().css('background',' url("../join-us-img/focus.png")');
},function () {
    clearTimeout(timerout);
    timerout=setTimeout('setTime()',10);
});

$('.three-des ul li a').hover(function () {
        $(this).siblings('span').css('background','#22AC38');
         console.log(1);
},function () {
    $(this).siblings('span').css('background','transparent');
});

