//右邊固定條
var iconout =document.getElementById('iconout');
var fixicons =iconout.children
var fixicon1=fixicons[0];
var fixicon2=fixicons[1];
var fixicon3=fixicons[2];
var fixicon4=fixicons[3];
var fixicon5=fixicons[4];
//封裝鼠標進入圖標函數
function mouseenter(a){
    a.onmouseenter=function(){
        a.children[0].style.display ='block';
    }
    a.onmouseleave=function(){
        a.children[0].style.display ='none';
    }
}
//鼠標進入第一個圖標
mouseenter(fixicon1);
//鼠標進入第二個圖標
mouseenter(fixicon2);
//鼠標進入第三個圖標
mouseenter(fixicon3);
//鼠標進入第四個圖標
mouseenter(fixicon4);

//工具栏显示
toolShow();
$(window).resize(function () {
    toolShow();
});
//点击工具栏
$('.toolbar').click(function () {
    if ($('.rightfixed').css('display') =='none') {
        $('.rightfixed').show();
        $(this).css({'right': '40px'});
        $(this).append("<style> a.toolbar::after{background-position:-252px -1px}</style>");
    }else {
        $('.rightfixed').hide();
        $(this).css({'right': '0px'});
        $(this).append("<style> a.toolbar::after{background-position:-252px -18px}</style>");
    }
})
//封装函数 toolShow
 function toolShow() {
     if ($(window).width()<1250) {
         $('.rightfixed').hide();
         $('.toolbar').show();
     }else {
         $('.rightfixed').show();
         $('.toolbar').hide();
     }
 }
