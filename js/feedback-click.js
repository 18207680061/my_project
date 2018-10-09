$('.fixicon3').click(function () {
    $('.bodymask').show();
    $('.pop-box-feed').show();
    var tops = $(document).scrollTop();//当页面滚动时，把当前距离赋值给页面，这样保持页面滚动条不动
    $(document).bind("scroll",function (){$(document).scrollTop(tops); });
});
$('.pop-close').click(function () {
    $('.bodymask').hide();
    $('.pop-box-feed').hide();
    $(document).unbind("scroll");//可以滚动
});
//0--500字
$('.js-fbcontent').keyup(function () {
   $('#js-fblen').html($(this).val().length);
   if ( Number($('#js-fblen').html())>500){
       $('#js-fblen').html('500');
   }
});

