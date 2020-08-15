// top-------------------------------------------------------------------------------
//购物车效果
var top_r = document.querySelector(".top_r");
var cart = document.querySelector(".top_r .cart");
var cart2 = document.querySelector(".top_r .cart2");
top_r.onmouseenter = function(){
    cart.style.display = 'inline-block';
    cart2.style.display = 'none';
}
top_r.onmouseleave = function(){
    cart.style.display = 'none';
    cart2.style.display = 'inline-block';
}

// 导航栏鼠标划入效果
var phones = document.querySelectorAll(".nav ul li");
var product = document.querySelector(".product_wrap");


for(let i = 0, len = phones.length; i < len; i++){
    phones[i].onmouseenter = function(){
        // product.style.display = 'block';
        $(product).slideDown();
    }
}
for(let i = 0, len = phones.length; i < len; i++){
    phones[i].onmouseleave = function(){
        product.style.display = 'none';
    }
}

// 轮播图
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:{
        disableOnInteraction: false,
        autoplayDisableOnInteraction : false,
    },
    effect : 'fade',
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })   

//点击更换版本效果

let version = $('.version');
version.on('click','li',function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
})

let color = $('.color');
color.on('click','li',function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
})