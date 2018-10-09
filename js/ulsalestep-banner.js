$('.secsalepro').click(function () {
    //点击卖车流程初始状态
    $('.buyprogress').hide();
    $('.salecarprogress').show();
    $(this).addClass('borderbottom').siblings().removeClass('borderbottom');
    $('.ulbuystep').fadeOut();
    $('.ulsalestep').fadeIn();
    $('.maskbg').css('z-index','2000');
    $('.salecarprogress').css('z-index','2001');
    $('.buysallpro').css('z-index','2001');
    $(this).siblings('.personwatch').children('.icon5667').css('backgroundPosition','-302px -29px');
    $(this).siblings('.signcontract').children('.icon5667').css('backgroundPosition','-302px -64px');
    $(this).siblings('.tradetoperson').children('.icon5667').css('backgroundPosition','-302px -102px');
    $('.salecarprogress p').eq(0).html('在线预约');
    $('.salecarprogress p').eq(1).html('评估师免费上门检测');
    $('.maskbg').show();
    $('.ulsalestep li').eq(0).children().stop().fadeIn();
    $('.ulsalestep li').eq(0).siblings().children().stop().fadeOut();

})
//点击在线预约
$('.salecarprogress .ulbuyproicon .watchcar').click(function () {
    $(this).children('.icon5667').css('backgroundPosition','-348px 4px');
    $(this).children('span').addClass('color22ac38');
    $(this).siblings().children('span').removeClass('color22ac38');
//其余图标变回原来
    $(this).siblings('.personwatch').children('.icon5667').css('backgroundPosition','-302px -29px');
    $(this).siblings('.signcontract').children('.icon5667').css('backgroundPosition','-302px -64px');
    $(this).siblings('.tradetoperson').children('.icon5667').css('backgroundPosition','-302px -102px');
    //描述变化
    $('.salecarprogress p').eq(0).html('在线预约');
    $('.salecarprogress p').eq(1).html('评估师免费上门检测');
    //图片显示
    $('.maskbg').show();
    $('.ulsalestep li').eq($(this).index()).children().stop().fadeIn();
    $('.ulsalestep li').eq($(this).index()).siblings().children().stop().fadeOut();
    $('.maskbg').css('z-index','2000');
    $('.salecarprogress').css('z-index','2001');
    $('.buysallpro').css('z-index','2001');
});
//点击全网代售
$('.salecarprogress .ulbuyproicon .personwatch').click(function () {
    $(this).children('.icon5667').css('backgroundPosition','-348px -29px');
    $(this).children('span').addClass('color22ac38');
    $(this).siblings().children('span').removeClass('color22ac38');
//其余图标变回原来
    $(this).siblings('.wantcar').children('.icon5667').css('backgroundPosition','-302px -29px');
    $(this).siblings('.signcontract').children('.icon5667').css('backgroundPosition','-302px -64px');
    $(this).siblings('.tradetoperson').children('.icon5667').css('backgroundPosition','-302px -102px');
    //描述变化
    $('.salecarprogress p').eq(0).html('全网代售');
    $('.salecarprogress p').eq(1).html('海量买家快速售出');
    //图片显示
    $('.maskbg').show();
    $('.ulsalestep li').eq($(this).index()).children().stop().fadeIn();
    $('.ulsalestep li').eq($(this).index()).siblings().children().stop().fadeOut();
    $('.maskbg').css('z-index','2000');
    $('.salecarprogress').css('z-index','2001');
    $('.buysallpro').css('z-index','2001');
});
//点击三方约看
$('.salecarprogress .ulbuyproicon .signcontract').click(function () {
    $(this).children('.icon5667').css('backgroundPosition','-348px -64px');
    $(this).children('span').addClass('color22ac38');
    $(this).siblings().children('span').removeClass('color22ac38');
//其余图标变回原来
    $(this).siblings('.personwatch').children('.icon5667').css('backgroundPosition','-302px -29px');
    $(this).siblings('.wantcar').children('.icon5667').css('backgroundPosition','-302px 4px');
    $(this).siblings('.tradetoperson').children('.icon5667').css('backgroundPosition','-302px -102px');
    //描述变化
    $('.salecarprogress p').eq(0).html('三方约看');
    $('.salecarprogress p').eq(1).html('平均7日成交');
    //图片显示
    $('.maskbg').show();
    $('.ulsalestep li').eq($(this).index()).children().stop().fadeIn();
    $('.ulsalestep li').eq($(this).index()).siblings().children().stop().fadeOut();
    $('.maskbg').css('z-index','2000');
    $('.salecarprogress').css('z-index','2001');
    $('.buysallpro').css('z-index','2001')
});
    //点击签约过户
    $('.salecarprogress .ulbuyproicon .tradetoperson').click(function () {
        $(this).children('.icon5667').css('backgroundPosition','-348px -102px');
        $(this).children('span').addClass('color22ac38');
        $(this).siblings().children('span').removeClass('color22ac38');
//其余图标变回原来
        $(this).siblings('.personwatch').children('.icon5667').css('backgroundPosition','-302px -29px');
        $(this).siblings('.signcontract').children('.icon5667').css('backgroundPosition','-302px -64px');
        $(this).siblings('.watchcar').children('.icon5667').css('backgroundPosition','-302px 4px');
        //描述变化
        $('.salecarprogress p').eq(0).html('签约过户');
        $('.salecarprogress p').eq(1).html('省心省时，全程陪同');
        //图片显示
        $('.maskbg').show();
        $('.ulsalestep li').eq($(this).index()).children().stop().fadeIn();
        $('.ulsalestep li').eq($(this).index()).siblings().children().stop().fadeOut();
        $('.maskbg').css('z-index','2000');
        $('.salecarprogress').css('z-index','2001');
        $('.buysallpro').css('z-index','2001');

});