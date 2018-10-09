$('#header_logon').click(function () {
    $('.bodymask').show();
    $('.logonclick').show();
    var tops = $(document).scrollTop();//当页面滚动时，把当前距离赋值给页面，这样保持页面滚动条不动
    $(document).bind("scroll",function (){$(document).scrollTop(tops); });
})
$('#closeLogin').click(function () {
    $('.bodymask').hide();
    $('.logonclick').hide();
    $(document).unbind("scroll");//可以滚动
});