$('#app_download').hover(function () {
    $('.app-guide').show();
    $('.app-guide').css({'right':'0','top':'100%'});
},function () {
    $('.app-guide').hide();
});

//点击关于我们/联系我们
$('#content_aboutus').click(function () {
    $(this).css('color','#000');
    $('#content_contactus').css('color','#666');
    $('.content1-aboutus').show();
    $('.contact').hide();
    $(this).children('i').css('backgroundPosition','right -155px');
    $('#content_contactus').children('i').css('backgroundPosition','right -100px');
    return false;
    if ($('#content_contactus').css('color') =='rgb(102, 102, 102)'){
        $('#content_contactus').hover(function () {
            $('#content_contactus').css({'color':'black'});
            $('#content_contactus .icon3').css('backgroundPosition','right -275px');
            return false;
        },function () {
            $('#content_contactus').css('color','#666');
            $('#content_contactus .icon3').css('backgroundPosition','right -100px');
            return false;
        })
    }

});
$('#content_contactus').click(function () {
    $(this).css('color','#000');
    $('#content_aboutus').css('color','#666');
    $('.content1-aboutus').hide();
    $('.contact').show();
    $(this).children('i').css('backgroundPosition','right -275px');
    $('#content_aboutus').children('i').css('backgroundPosition','right 20px');
    return false;
    if ($('#content_aboutus').css('color') =='rgb(102, 102, 102)'){
        $('#content_aboutus').hover(function () {
            $('#content_aboutus').css({'color':'black'});
            $('#content_aboutus .icon1').css('backgroundPosition','right -155px');
            return false;
        },function () {
            $('#content_aboutus').css('color','#666');
            $('#content_aboutus .icon1').css('backgroundPosition','right 20px');
            return false;
        })
    }

});

// 点击登录
$('#about_logon').click(function () {
    $('.bodymask').show();
    $('.logonclick').show();
    var tops = $(document).scrollTop();//当页面滚动时，把当前距离赋值给页面，这样保持页面滚动条不动
    $(document).bind("scroll",function (){$(document).scrollTop(tops); });
});
$('#closeLogin').click(function () {
    $('.bodymask').hide();
    $('.logonclick').hide();
    $(document).unbind("scroll");//可以滚动
});
//头部输入框
$('.search-box .search-input').focus(function () {
    $('.autocomplete-dropdown').show();
});
$('.search-box .search-input').blur(function () {
    $('.autocomplete-dropdown').hide();
});