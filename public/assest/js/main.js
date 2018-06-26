
 //require('../css/font.css');
// require ('../css/style.scss');

$(document).ready(function(){
  $('.delete-ghemassage').on('click',function(e){
    $target =$(e.target);
    console.log($target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/ghemassage/'+id,
      success:function(data){
        location.reload();
      }

    })
  });
  $('.delete-user').on('click',function(e){
    $target =$(e.target);
    console.log($target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/user/'+id,
      success:function(data){
        location.reload();
      }

    })
  });
  $('.delete-order').on('click',function(e){
    $target =$(e.target);
    console.log($target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/orders/'+id,
      success:function(data){
        location.reload();
      }

    })
  });
  $('.delete-date').on('click',function(e){
    $target =$(e.target);
    console.log($target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/date/'+id,
      success:function(data){
        location.reload();
      }

    })
  });
  $('.delete-slidehome').on('click',function(e){
    $target =$(e.target);
    console.log($target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/slidehome/'+id,
      success:function(data){
        location.reload();
      }

    })
  });
  $('.delete-category').on('click',function(e){
    $target =$(e.target);
    console.log($target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/category/'+id,
      success:function(data){
        location.reload();
      }

    })
  });
  $('.delete-news').on('click',function(e){
    $target =$(e.target);
    console.log($target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/news/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-service').on('click',function(e){
    $target =$(e.target);
    console.log($target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/service/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-posts').on('click',function(e){
    $target =$(e.target);
    console.log($target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/posts/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-trademark').on('click',function(e){
    $target =$(e.target);
    console.log($target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/trademark/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-nganhhang').on('click',function(e){
    $target =$(e.target);
    console.log($target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/nganhhang/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-bannernews').on('click',function(e){
    $target =$(e.target);
    console.log($target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/bannernews/'+id,
      success:function(data){
        location.reload();
      }
    })
  })
});


//
$(document).ready(function(){

  CKEDITOR.config.extraPlugins = 'filebrowser';
  CKEDITOR.config.language = 'en';
  CKEDITOR.config.fillEmptyBlocks = false;

  CKEDITOR.replace('shortdescription' , {
    filebrowserBrowseUrl: '/javascripts/ckeditor/plugins/filemanager/browser/default/browser.html?Connector=/browser/browse',
    filebrowserUploadUrl: '/uploader/upload?Type=File',
    filebrowserImageUploadUrl: '/uploader/upload?Type=Image',
    filebrowserFlashUploadUrl: '/uploader/upload?Type=Flash'
  });
  CKEDITOR.replace('description' , {
    filebrowserBrowseUrl: '/javascripts/ckeditor/plugins/filemanager/browser/default/browser.html?Connector=/browser/browse',
    filebrowserUploadUrl: '/uploader/upload?Type=File',
    filebrowserImageUploadUrl: '/uploader/upload?Type=Image',
    filebrowserFlashUploadUrl: '/uploader/upload?Type=Flash'
  });
})
//list-item admin
$(document).ready(function(){
  $('.list-item>li').on('click',function(){
    $('.list-item>li').removeClass('active');
    $(this).addClass('active');
  })
})
//end list-item admin
//slideshow home
$(document).ready(function() {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");

  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: true,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });

  sync2.owlCarousel({
    items : 3,
    itemsDesktop      : [1199,3],
    itemsDesktopSmall     : [979,3],
    itemsTablet       : [768,2],
    itemsMobile       : [479,1.2],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 sync1.trigger('owl.play',5000);
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }

  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });

  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }

    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
  }
});
//end slideshow home
//cutdown
$(document).ready(function(){
  var getFinalDate = function (countdown, current) {
           var finalTime = moment(countdown, 'YYYY/MM/DD HH:mm:ss');
           var current = moment(current, 'YYYY/MM/DD HH:mm:ss');
           var tmp = 0;
           var diff = finalTime.diff(current);
           if (diff > 0) {
               tmp = diff;
           }
           return moment().add(tmp, 'millisecond').format('YYYY/MM/DD HH:mm:ss');
       };
       var updateVal = function (val) {
           val = parseInt(val, 10) || 0; return (val < 10 && val >= 0) ? ('0' + val) : val;
       };
       var $countDown1 = $('#count-down-1');
			 var utc = new Date();
       $countDown1.countdown(getFinalDate($countDown1.attr('data-count-down'),utc), function (event) {
       var offset = $.extend({}, event.offset);
       $countDown1.find('.days').text(updateVal(offset.totalDays));
       $countDown1.find('.hours').text(updateVal(offset.hours));
       $countDown1.find('.minutes').text(updateVal(offset.minutes));
       $countDown1.find('.seconds').text(updateVal(offset.seconds));
      });
})
//end countDown1
$(document).ready(function(){
  $("#zoom_easing").elevateZoom({easing : true});
})
$(document).ready(function() {
        $("#lightgallery").lightGallery();
});
//slide nganh hang
$(document).ready(function() {
  var owl = $("#owl-slide-nganh-hang");
  owl.owlCarousel({
      items : 2, //10 items above 1000px browser width
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //1 items between 600 and 0
      itemsMobile : [320,1] // itemsMobile disabled - inherit from itemsTablet option
  });
    owl.trigger('owl.play',4000);
});
//end slide nganh hang
//flexslider trang tin tuc
$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
//end flexslider trang tin tuc
//sort bo loc
$('#sort').click(function(){
  if($('#sort').val() =="asc"){
    $.ajax({
      type:"POST",
      data:{sort:$('#sort').val()},
      url:'/ghe-massage-ban-chay-nhat',
      success:function(data){
        console.log(data);
        var listproduct=document.getElementsByClassName('list-product')[0];
        var content=""
        for(var i=0; i<data.count;i++){
            var saleoff=Number(data.product[i].price) - Number(data.product[i].pricesale);
            content+='<li class="item-product">' +
            '<div class="img-product"><img src=/'+data.product[i].imagedefault[0].originalname+' alt='+data.product[i].imagedefault[0].originalname+'></div>' +
            '<div class="detail-product">' +
            '<div class="name-product">' +
            '<a href=/ghe-massage/'+data.product[i].nameseo +'>'+data.product[i].name +"</a></div>"+
            '<div class="sale-off"><span><span class="commas">' + saleoff  +"</span> ₫</span></div>"+
            '<div class="wrap-price-buy"><div class="wrap-price">'+
            '<div class="price-sale"><span class="commas">' +data.product[i].pricesale  +"</span> ₫</div>"+
            '<div class="price"><span class="commas">' +data.product[i].price+"</span> ₫</div>"+
            '</div>'+
            '<div class="buy">'+
            '<a href=/ghe-massage/'+data.product[i].nameseo +'>'+
            '<i class="fa fa-cart-plus"></i>'+
            '</a>'
            '</div>'
            '</div>'
            '</div>'
            '</li>'
        }
        listproduct.innerHTML="";
        listproduct.innerHTML=content;
        var commas=document.getElementsByClassName('commas');
        for(var i=0;i<commas.length;i++){
          commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
        }
      }
    });
  }
  else if($('#sort').val() =="desc"){
    $.ajax({
      type:"POST",
      data:{sort:$('#sort').val()},
      url:'/ghe-massage-ban-chay-nhat',
      success:function(data){
        console.log(data);
        var listproduct=document.getElementsByClassName('list-product')[0];
        var content=""
        for(var i=0; i<data.count;i++){
            var saleoff=Number(data.product[i].price) - Number(data.product[i].pricesale);
            content+='<li class="item-product">' +
            '<div class="img-product"><img src=/'+data.product[i].imagedefault[0].originalname+' alt='+data.product[i].imagedefault[0].originalname+'></div>' +
            '<div class="detail-product">' +
            '<div class="name-product">' +
            '<a href=/ghe-massage/'+data.product[i].nameseo +'>'+data.product[i].name +"</a></div>"+
            '<div class="sale-off"><span><span class="commas">' + saleoff  +"</span> ₫</span></div>"+
            '<div class="wrap-price-buy"><div class="wrap-price">'+
            '<div class="price-sale"><span class="commas">' +data.product[i].pricesale  +"</span> ₫</div>"+
            '<div class="price"><span class="commas">' +data.product[i].price+"</span> ₫</div>"+
            '</div>'+
            '<div class="buy">'+
            '<a href=/ghe-massage/'+data.product[i].nameseo +'>'+
            '<i class="fa fa-cart-plus"></i>'+
            '</a>'
            '</div>'
            '</div>'
            '</div>'
            '</li>'
        }
        listproduct.innerHTML="";
        listproduct.innerHTML=content;
        var commas=document.getElementsByClassName('commas');
        for(var i=0;i<commas.length;i++){
          commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
        }
      }
    });
  }
  else if($('#sort').val() =="sale"){
    $.ajax({
      type:"POST",
      data:{sort:$('#sort').val()},
      url:'/ghe-massage-ban-chay-nhat',
      success:function(data){
        console.log(data);
        var listproduct=document.getElementsByClassName('list-product')[0];
        var content=""
        for(var i=0; i<data.count;i++){
            var saleoff=Number(data.product[i].price) - Number(data.product[i].pricesale);
            content+='<li class="item-product">' +
            '<div class="img-product"><img src=/'+data.product[i].imagedefault[0].originalname+' alt='+data.product[i].imagedefault[0].originalname+'></div>' +
            '<div class="detail-product">' +
            '<div class="name-product">' +
            '<a href=/ghe-massage/'+data.product[i].nameseo +'>'+data.product[i].name +"</a></div>"+
            '<div class="sale-off"><span><span class="commas">' + saleoff  +"</span> ₫</span></div>"+
            '<div class="wrap-price-buy"><div class="wrap-price">'+
            '<div class="price-sale"><span class="commas">' +data.product[i].pricesale  +"</span> ₫</div>"+
            '<div class="price"><span class="commas">' +data.product[i].price+"</span> ₫</div>"+
            '</div>'+
            '<div class="buy">'+
            '<a href=/ghe-massage/'+data.product[i].nameseo +'>'+
            '<i class="fa fa-cart-plus"></i>'+
            '</a>'
            '</div>'
            '</div>'
            '</div>'
            '</li>'
        }
        listproduct.innerHTML="";
        listproduct.innerHTML=content;
        var commas=document.getElementsByClassName('commas');
        for(var i=0;i<commas.length;i++){
          commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
        }
      }
    });
  };
})
$('#sortmcb').click(function(){
  if($('#sortmcb').val() =="asc"){
    $.ajax({
      type:"POST",
      data:{sort:$('#sortmcb').val()},
      url:'/san-pham/may-chay-bo-ban-chay-nhat',
      success:function(data){
        console.log(data);
        var listproduct=document.getElementsByClassName('list-product')[0];
        var content=""
        for(var i=0; i<data.count;i++){
            var saleoff=Number(data.product[i].price) - Number(data.product[i].pricesale);
            content+='<li class="item-product">' +
            '<div class="img-product"><img src=/'+data.product[i].imagedefault[0].originalname+' alt='+data.product[i].imagedefault[0].originalname+'></div>' +
            '<div class="detail-product">' +
            '<div class="name-product">' +
            '<a href=/may-chay-bo/'+data.product[i].nameseo +'>'+data.product[i].name +"</a></div>"+
            '<div class="sale-off"><span><span class="commas">' + saleoff  +"</span> ₫</span></div>"+
            '<div class="wrap-price-buy"><div class="wrap-price">'+
            '<div class="price-sale"><span class="commas">' +data.product[i].pricesale  +"</span> ₫</div>"+
            '<div class="price"><span class="commas">' +data.product[i].price+"</span> ₫</div>"+
            '</div>'+
            '<div class="buy">'+
            '<a href=/may-chay-bo/'+data.product[i].nameseo +'>'+
            '<i class="fa fa-cart-plus"></i>'+
            '</a>'
            '</div>'
            '</div>'
            '</div>'
            '</li>'
        }
        listproduct.innerHTML="";
        listproduct.innerHTML=content;
        var commas=document.getElementsByClassName('commas');
        for(var i=0;i<commas.length;i++){
          commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
        }
      }
    });
  }
  else if($('#sortmcb').val() =="desc"){
    $.ajax({
      type:"POST",
      data:{sort:$('#sortmcb').val()},
      url:'/san-pham/may-chay-bo-ban-chay-nhat',
      success:function(data){
        console.log(data);
        var listproduct=document.getElementsByClassName('list-product')[0];
        var content=""
        for(var i=0; i<data.count;i++){
            var saleoff=Number(data.product[i].price) - Number(data.product[i].pricesale);
            content+='<li class="item-product">' +
            '<div class="img-product"><img src=/'+data.product[i].imagedefault[0].originalname+' alt='+data.product[i].imagedefault[0].originalname+'></div>' +
            '<div class="detail-product">' +
            '<div class="name-product">' +
            '<a href=/may-chay-bo/'+data.product[i].nameseo +'>'+data.product[i].name +"</a></div>"+
            '<div class="sale-off"><span><span class="commas">' + saleoff  +"</span> ₫</span></div>"+
            '<div class="wrap-price-buy"><div class="wrap-price">'+
            '<div class="price-sale"><span class="commas">' +data.product[i].pricesale  +"</span> ₫</div>"+
            '<div class="price"><span class="commas">' +data.product[i].price+"</span> ₫</div>"+
            '</div>'+
            '<div class="buy">'+
            '<a href=/may-chay-bo/'+data.product[i].nameseo +'>'+
            '<i class="fa fa-cart-plus"></i>'+
            '</a>'
            '</div>'
            '</div>'
            '</div>'
            '</li>'
        }
        listproduct.innerHTML="";
        listproduct.innerHTML=content;
        var commas=document.getElementsByClassName('commas');
        for(var i=0;i<commas.length;i++){
          commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
        }
      }
    });
  }
  else if($('#sortmcb').val() =="sale"){
    $.ajax({
      type:"POST",
      data:{sort:$('#sortmcb').val()},
      url:'/san-pham/may-chay-bo-ban-chay-nhat',
      success:function(data){
        console.log(data);
        var listproduct=document.getElementsByClassName('list-product')[0];
        var content=""
        for(var i=0; i<data.count;i++){
            var saleoff=Number(data.product[i].price) - Number(data.product[i].pricesale);
            content+='<li class="item-product">' +
            '<div class="img-product"><img src=/'+data.product[i].imagedefault[0].originalname+' alt='+data.product[i].imagedefault[0].originalname+'></div>' +
            '<div class="detail-product">' +
            '<div class="name-product">' +
            '<a href=/may-chay-bo/'+data.product[i].nameseo +'>'+data.product[i].name +"</a></div>"+
            '<div class="sale-off"><span><span class="commas">' + saleoff  +"</span> ₫</span></div>"+
            '<div class="wrap-price-buy"><div class="wrap-price">'+
            '<div class="price-sale"><span class="commas">' +data.product[i].pricesale  +"</span> ₫</div>"+
            '<div class="price"><span class="commas">' +data.product[i].price+"</span> ₫</div>"+
            '</div>'+
            '<div class="buy">'+
            '<a href=/may-chay-bo/'+data.product[i].nameseo +'>'+
            '<i class="fa fa-cart-plus"></i>'+
            '</a>'
            '</div>'
            '</div>'
            '</div>'
            '</li>'
        }
        listproduct.innerHTML="";
        listproduct.innerHTML=content;
        var commas=document.getElementsByClassName('commas');
        for(var i=0;i<commas.length;i++){
          commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
        }
      }
    });
  };
})
$('#ghesortprice').click(function(){
  if($('#ghesortprice').val() =="duoi5tr"){
    $.ajax({
      type:"POST",
      data:{sortprice:$('#ghesortprice').val()},
      url:'/ghe-massage-ban-chay-nhat',
      success:function(data){
        console.log(data);
        var listproduct=document.getElementsByClassName('list-product')[0];
        var content=""
        for(var i=0; i<data.count;i++){
            var saleoff=Number(data.product[i].price) - Number(data.product[i].pricesale);
            content+='<li class="item-product">' +
            '<div class="img-product"><img src=/'+data.product[i].imagedefault[0].originalname+' alt='+data.product[i].imagedefault[0].originalname+'></div>' +
            '<div class="detail-product">' +
            '<div class="name-product">' +
            '<a href=/ghe-massage/'+data.product[i].nameseo +'>'+data.product[i].name +"</a></div>"+
            '<div class="sale-off"><span><span class="commas">' + saleoff  +"</span> ₫</span></div>"+
            '<div class="wrap-price-buy"><div class="wrap-price">'+
            '<div class="price-sale"><span class="commas">' +data.product[i].pricesale  +"</span> ₫</div>"+
            '<div class="price"><span class="commas">' +data.product[i].price+"</span> ₫</div>"+
            '</div>'+
            '<div class="buy">'+
            '<a href=/ghe-massage/'+data.product[i].nameseo +'>'+
            '<i class="fa fa-cart-plus"></i>'+
            '</a>'
            '</div>'
            '</div>'
            '</div>'
            '</li>'
        }
        listproduct.innerHTML="";
        listproduct.innerHTML=content;
        var commas=document.getElementsByClassName('commas');
        for(var i=0;i<commas.length;i++){
          commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
        }
      }
    });
  }
  else if($('#ghesortprice').val() =="duoi10tr"){
    $.ajax({
      type:"POST",
      data:{sortprice:$('#ghesortprice').val()},
      url:'/ghe-massage-ban-chay-nhat',
      success:function(data){
        console.log(data);
        var listproduct=document.getElementsByClassName('list-product')[0];
        var content=""
        for(var i=0; i<data.count;i++){
            var saleoff=Number(data.product[i].price) - Number(data.product[i].pricesale);
            content+='<li class="item-product">' +
            '<div class="img-product"><img src=/'+data.product[i].imagedefault[0].originalname+' alt='+data.product[i].imagedefault[0].originalname+'></div>' +
            '<div class="detail-product">' +
            '<div class="name-product">' +
            '<a href=/ghe-massage/'+data.product[i].nameseo +'>'+data.product[i].name +"</a></div>"+
            '<div class="sale-off"><span><span class="commas">' + saleoff  +"</span> ₫</span></div>"+
            '<div class="wrap-price-buy"><div class="wrap-price">'+
            '<div class="price-sale"><span class="commas">' +data.product[i].pricesale  +"</span> ₫</div>"+
            '<div class="price"><span class="commas">' +data.product[i].price+"</span> ₫</div>"+
            '</div>'+
            '<div class="buy">'+
            '<a href=/ghe-massage/'+data.product[i].nameseo +'>'+
            '<i class="fa fa-cart-plus"></i>'+
            '</a>'
            '</div>'
            '</div>'
            '</div>'
            '</li>'
        }
        listproduct.innerHTML="";
        listproduct.innerHTML=content;
        var commas=document.getElementsByClassName('commas');
        for(var i=0;i<commas.length;i++){
          commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
        }
      }
    });
  }
  else if($('#ghesortprice').val() =="tren10tr"){
    $.ajax({
      type:"POST",
      data:{sortprice:$('#ghesortprice').val()},
      url:'/ghe-massage-ban-chay-nhat',
      success:function(data){
        console.log(data);
        var listproduct=document.getElementsByClassName('list-product')[0];
        var content=""
        for(var i=0; i<data.count;i++){
            var saleoff=Number(data.product[i].price) - Number(data.product[i].pricesale);
            content+='<li class="item-product">' +
            '<div class="img-product"><img src=/'+data.product[i].imagedefault[0].originalname+' alt='+data.product[i].imagedefault[0].originalname+'></div>' +
            '<div class="detail-product">' +
            '<div class="name-product">' +
            '<a href=/ghe-massage/'+data.product[i].nameseo +'>'+data.product[i].name +"</a></div>"+
            '<div class="sale-off"><span><span class="commas">' + saleoff  +"</span> ₫</span></div>"+
            '<div class="wrap-price-buy"><div class="wrap-price">'+
            '<div class="price-sale"><span class="commas">' +data.product[i].pricesale  +"</span> ₫</div>"+
            '<div class="price"><span class="commas">' +data.product[i].price+"</span> ₫</div>"+
            '</div>'+
            '<div class="buy">'+
            '<a href=/ghe-massage/'+data.product[i].nameseo +'>'+
            '<i class="fa fa-cart-plus"></i>'+
            '</a>'
            '</div>'
            '</div>'
            '</div>'
            '</li>'
        }
        listproduct.innerHTML="";
        listproduct.innerHTML=content;
        var commas=document.getElementsByClassName('commas');
        for(var i=0;i<commas.length;i++){
          commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
        }
      }
    });
  };
})
$('#maychaybosortprice').click(function(){
  if($('#maychaybosortprice').val() =="duoi5tr"){
    $.ajax({
      type:"POST",
      data:{sortprice:$('#maychaybosortprice').val()},
      url:'/may-chay-bo-ban-chay-nhat',
      success:function(data){
        console.log(data);
        var listproduct=document.getElementsByClassName('list-product')[0];
        var content=""
        for(var i=0; i<data.count;i++){
            var saleoff=Number(data.product[i].price) - Number(data.product[i].pricesale);
            content+='<li class="item-product">' +
            '<div class="img-product"><img src=/'+data.product[i].imagedefault[0].originalname+' alt='+data.product[i].imagedefault[0].originalname+'></div>' +
            '<div class="detail-product">' +
            '<div class="name-product">' +
            '<a href=/may-chay-bo/'+data.product[i].nameseo +'>'+data.product[i].name +"</a></div>"+
            '<div class="sale-off"><span><span class="commas">' + saleoff  +"</span> ₫</span></div>"+
            '<div class="wrap-price-buy"><div class="wrap-price">'+
            '<div class="price-sale"><span class="commas">' +data.product[i].pricesale  +"</span> ₫</div>"+
            '<div class="price"><span class="commas">' +data.product[i].price+"</span> ₫</div>"+
            '</div>'+
            '<div class="buy">'+
            '<a href=/may-chay-bo/'+data.product[i].nameseo +'>'+
            '<i class="fa fa-cart-plus"></i>'+
            '</a>'
            '</div>'
            '</div>'
            '</div>'
            '</li>'
        }
        listproduct.innerHTML="";
        listproduct.innerHTML=content;
        var commas=document.getElementsByClassName('commas');
        for(var i=0;i<commas.length;i++){
          commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
        }
      }
    });
  }
  else if($('#maychaybosortprice').val() =="duoi10tr"){
    $.ajax({
      type:"POST",
      data:{sortprice:$('#maychaybosortprice').val()},
      url:'/may-chay-bo-ban-chay-nhat',
      success:function(data){
        console.log(data);
        var listproduct=document.getElementsByClassName('list-product')[0];
        var content=""
        for(var i=0; i<data.count;i++){
            var saleoff=Number(data.product[i].price) - Number(data.product[i].pricesale);
            content+='<li class="item-product">' +
            '<div class="img-product"><img src=/'+data.product[i].imagedefault[0].originalname+' alt='+data.product[i].imagedefault[0].originalname+'></div>' +
            '<div class="detail-product">' +
            '<div class="name-product">' +
            '<a href=/may-chay-bo/'+data.product[i].nameseo +'>'+data.product[i].name +"</a></div>"+
            '<div class="sale-off"><span><span class="commas">' + saleoff  +"</span> ₫</span></div>"+
            '<div class="wrap-price-buy"><div class="wrap-price">'+
            '<div class="price-sale"><span class="commas">' +data.product[i].pricesale  +"</span> ₫</div>"+
            '<div class="price"><span class="commas">' +data.product[i].price+"</span> ₫</div>"+
            '</div>'+
            '<div class="buy">'+
            '<a href=/may-chay-bo/'+data.product[i].nameseo +'>'+
            '<i class="fa fa-cart-plus"></i>'+
            '</a>'
            '</div>'
            '</div>'
            '</div>'
            '</li>'
        }
        listproduct.innerHTML="";
        listproduct.innerHTML=content;
        var commas=document.getElementsByClassName('commas');
        for(var i=0;i<commas.length;i++){
          commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
        }
      }
    });
  }
  else if($('#maychaybosortprice').val() =="tren10tr"){
    $.ajax({
      type:"POST",
      data:{sortprice:$('#maychaybosortprice').val()},
      url:'/may-chay-bo-ban-chay-nhat',
      success:function(data){
        console.log(data);
        var listproduct=document.getElementsByClassName('list-product')[0];
        var content=""
        for(var i=0; i<data.count;i++){
            var saleoff=Number(data.product[i].price) - Number(data.product[i].pricesale);
            content+='<li class="item-product">' +
            '<div class="img-product"><img src=/'+data.product[i].imagedefault[0].originalname+' alt='+data.product[i].imagedefault[0].originalname+'></div>' +
            '<div class="detail-product">' +
            '<div class="name-product">' +
            '<a href=/may-chay-bo/'+data.product[i].nameseo +'>'+data.product[i].name +"</a></div>"+
            '<div class="sale-off"><span><span class="commas">' + saleoff  +"</span> ₫</span></div>"+
            '<div class="wrap-price-buy"><div class="wrap-price">'+
            '<div class="price-sale"><span class="commas">' +data.product[i].pricesale  +"</span> ₫</div>"+
            '<div class="price"><span class="commas">' +data.product[i].price+"</span> ₫</div>"+
            '</div>'+
            '<div class="buy">'+
            '<a href=/may-chay-bo/'+data.product[i].nameseo +'>'+
            '<i class="fa fa-cart-plus"></i>'+
            '</a>'
            '</div>'
            '</div>'
            '</div>'
            '</li>'
        }
        listproduct.innerHTML="";
        listproduct.innerHTML=content;
        var commas=document.getElementsByClassName('commas');
        for(var i=0;i<commas.length;i++){
          commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
        }
      }
    });
  };
})
//end sort
//fix aside tin tuc chi tiet
$(document).ready(function(){
  $(window).scroll(function() {
    if($(document).scrollTop() >= 130) {
    $('.aside-right-newsdetail').animate({
      top:"0"
    },0)
  }
  else if($(document).scrollTop() < 130){
    $('.aside-right-newsdetail').animate({
      top:"250px"
    },0)
  }
  if($(document).scrollTop()>= (document.body.clientHeight -1000)){
    $('.aside-right-newsdetail').animate({
      top:"-160px"
    },0)
  }
})
})
//end fix aside
//fix aside post dich vu
$(document).ready(function(){
  $(window).scroll(function() {
    if($(document).scrollTop() >= 130) {
    $('.aside-right-postdetail').animate({
      top:"20px"
    },0)
  }
  else if($(document).scrollTop() < 130){
    $('.aside-right-postdetail').animate({
      top:"270px"
    },0)
  }
})
})
//end fix aside
