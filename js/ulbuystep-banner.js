$('.firbuypro').click(function () {
    //点击买车流程初始状态
    $('.buyprogress').show();
    $('.salecarprogress').hide();
    $('.ulsalestep').fadeOut();
    $('.ulbuystep').fadeIn();
    $(this).addClass('borderbottom').siblings().removeClass('borderbottom');
    $('.maskbg').css('z-index','2000');
    $('.buyprogress').css('z-index','2001');
    $('.buysallpro').css('z-index','2001');
    $('.ulbuyproicon .watchcar').children('.icon5667').css('backgroundPosition','2px -57px');
    $('.ulbuyproicon .watchcar').children('span').addClass('color22ac38');
    $('.ulbuyproicon .watchcar').siblings().children('span').removeClass('color22ac38');
    $('.ulbuyproicon .watchcar').siblings('.personwatch').children('.icon5667').css('backgroundPosition','-40px -21px');
    $('.ulbuyproicon .watchcar').siblings('.signcontract').children('.icon5667').css('backgroundPosition','-85px -21px');
    $('.ulbuyproicon .watchcar').siblings('.tradetoperson').children('.icon5667').css('backgroundPosition','-121px -21px');
    $('.buyprogress p').eq(0).html('预约看车');
    $('.buyprogress p').eq(1).html('拨打400-060-8632或在线预约');
    $('.ulbuystep li').eq($(this).index()).children().stop().fadeIn();
    $('.ulbuystep li').eq($(this).index()).siblings().children().stop().fadeOut();
    $('.maskbg').show();
    $('.ulbuystep li').eq($(this).index()).children().stop().fadeIn();
    $('.ulbuystep li').eq($(this).index()).siblings().children().stop().fadeOut();
})
//点击预约看车
$('.buyprogress .ulbuyproicon .watchcar').click(function () {
    $(this).children('.icon5667').css('backgroundPosition','2px -57px');
    $(this).children('span').addClass('color22ac38');
    $(this).siblings().children('span').removeClass('color22ac38');
//其余图标变回原来
    $(this).siblings('.personwatch').children('.icon5667').css('backgroundPosition','-40px -21px');
    $(this).siblings('.signcontract').children('.icon5667').css('backgroundPosition','-85px -21px');
    $(this).siblings('.tradetoperson').children('.icon5667').css('backgroundPosition','-121px -21px');
    //描述变化
    $('.buyprogress p').eq(0).html('预约看车');
    $('.buyprogress p').eq(1).html('拨打400-060-8632或在线预约');
    //图片显示
    $('.maskbg').show();
    $('.ulbuystep li').eq($(this).index()).children().stop().fadeIn();
    $('.ulbuystep li').eq($(this).index()).siblings().children().stop().fadeOut();
    $('.maskbg').css('z-index','2000');
    $('.buyprogress').css('z-index','2001');
    $('.buysallpro').css('z-index','2001');
});

//点击专人带看
$('.buyprogress .ulbuyproicon .personwatch').click(function () {
    $(this).children('.icon5667').css('backgroundPosition','-40px -57px');
    $(this).children('span').addClass('color22ac38');
    $(this).siblings().children('span').removeClass('color22ac38');
    $(this).siblings('.watchcar').children('.icon5667').css('backgroundPosition','2px -21px');
    $(this).siblings('.signcontract').children('.icon5667').css('backgroundPosition','-85px -21px');
    $(this).siblings('.tradetoperson').children('.icon5667').css('backgroundPosition','-121px -21px');
    //描述变化
    $('.buyprogress p').eq(0).html('专人带看');
    $('.buyprogress p').eq(1).html('瓜子将安排售车顾问陪同您看车');
    //图片显示
    $('.maskbg').show();
    $('.maskbg').css('z-index','2000');
    $('.ulbuystep li').eq($(this).index()).children().stop().fadeIn();
    $('.ulbuystep li').eq($(this).index()).siblings().children().stop().fadeOut();
    $('.buyprogress').css('z-index','2001');
    $('.buysallpro').css('z-index','2001');
});

//点击签署合同
$('.buyprogress .ulbuyproicon .signcontract').click(function () {
    $(this).children('.icon5667').css('backgroundPosition','-85px -57px');
    $(this).children('span').addClass('color22ac38');
    $(this).siblings().children('span').removeClass('color22ac38');
    $(this).siblings('.personwatch').children('.icon5667').css('backgroundPosition','-40px -21px');
    $(this).siblings('.watchcar').children('.icon5667').css('backgroundPosition','2px -21px');
    $(this).siblings('.tradetoperson').children('.icon5667').css('backgroundPosition','-121px -21px');
    //描述变化
    $('.buyprogress p').eq(0).html('签署合同');
    $('.buyprogress p').eq(1).html('署三方合同（买家、卖家、瓜子二手车），支付定金');
    //图片显示
    $('.maskbg').show();
    $('.maskbg').css('z-index','2000');
    $('.ulbuystep li').eq($(this).index()).children().stop().fadeIn();
    $('.ulbuystep li').eq($(this).index()).siblings().children().stop().fadeOut();
    $('.buyprogress').css('z-index','2001');
    $('.buysallpro').css('z-index','2001');

});
// 点击交易过户
$('.buyprogress .ulbuyproicon .tradetoperson').click(function () {
    $(this).children('.icon5667').css('backgroundPosition','-121px -57px');
    $(this).children('span').addClass('color22ac38');
    $(this).siblings().children('span').removeClass('color22ac38');

    $(this).siblings('.personwatch').children('.icon5667').css('backgroundPosition','-40px -21px');
    $(this).siblings('.signcontract').children('.icon5667').css('backgroundPosition','-85px -21px');
    $(this).siblings('.watchcar').children('.icon5667').css('backgroundPosition','2px -21px');
    //描述变化

    $('.buyprogress p').eq(0).html('交易过户');
    $('.buyprogress p').eq(1).html('协助过户，支付车款，好车开回家');
    //图片显示
    $('.maskbg').show();
    $('.maskbg').css('z-index','2000');
    $('.buyprogress').css('z-index','2001');
    $('.ulbuystep li').eq($(this).index()).children().stop().fadeIn();
    $('.ulbuystep li').eq($(this).index()).siblings().children().stop().fadeOut();
    $('.buysallpro').css('z-index','2001');
});
