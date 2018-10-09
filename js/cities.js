$('.city').hover(function () {
    $(this).css('backgroundColor','white');
    $('.citiesgroup').show();
},function () {
    $(this).css('backgroundColor','transparent');
    $('.citiesgroup').hide();
});
//克隆标签li
for (var i=0;i<cities.length;i++){
    if (i==0){
        $('.countrycity li').eq(0).children('span').html(cities[i].title);
        //克隆标签a
        for(var j=0;j<cities[0].titlecites.length;j++){
            if (j==0){
                $('.countrycity li ').eq(0).children('a').html(cities[0].titlecites[j]);
              
            } else{
                var newa=$('.countrycity li').eq(0).children('a').eq(0).clone(true);
                newa.html(cities[0].titlecites[j]);
                $('.countrycity li').append(newa);
            }

        }
    }else{
    	var newli =$("<li><span></span><a></a></li>");//不可以复制，否则会出现鞍山，安阳
    	newli.children('span').html(cities[i].title);
    	//克隆a标签
		for(m=0;m<cities[i].titlecites.length;m++){
			if (m==0) {
				newli.eq(0).children('a').eq(0).html(cities[i].titlecites[m]);
			}else{
				var newlia =newli.eq(0).children('a').eq(0).clone(true);
				newlia.html(cities[i].titlecites[m]);
				newli.append(newlia);
				
			}
		}
    	  $('.countrycity').append(newli);
   }
}
