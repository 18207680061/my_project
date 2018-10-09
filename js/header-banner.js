    var num=0;
    var timer;
    function setTime(){
        clearInterval(timer); //先清后设
        timer= setInterval(function () {
            num =num+1;
            if(num>3 ){
                num =0;
            }
            go();

        },3300);
    }
 setTime();
 //点击圈圈
    $('.olcircle li').click(function () {
        clearInterval(timer);
        setTimeout('setTime()',10);
        var index =$(this).index();
        num =index;
    $('.ulimg li').eq(index).stop().fadeIn(1200).siblings().fadeOut();
    $(this).addClass('current').siblings().removeClass('current');
    });
// 点击左右
    //左
$('.bannerout .left').click(function () {

    if(num ==0){
        num =3;
    }else {
        num--;
    }
    go();
    clearInterval(timer);
    setTimeout('setTime()',10);
});
//右
    $('.bannerout .right').click(function () {
        clearInterval(timer);
        setTimeout('setTime()',10);
        if(num ==3){
            num =0;
        }else {
            num++;
        }
        go();

    });

//封装
    function go() {
        $('.ulimg').children().eq(num).stop().fadeIn(1200).siblings().fadeOut();
        $('.olcircle').children().eq(num).addClass('current').siblings().removeClass('current');
        //头部变色
        $('.header span').toggleClass('white');
        $('.header a').toggleClass('white');
        $('.header .logon').toggleClass('logowhite');
    }
