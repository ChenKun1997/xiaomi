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

//动态渲染数据
let tit = $('.tit_wrap .tit dt');//头部的一个标题
let imgs = $('.swiper-wrapper img');//轮播图的五张图片
let info = $('.info');
let version = $('.version');
let color = $('.color');
// let title = $('.info .title');//商品标题
// let good_info = $('.long_disc font');
// let long_disc = $('.long_disc span');
// let price = $('.info .price');
// let version = $('.info .version');
// let color = $('.info .color');
// 首先判断列表页点击的是哪个元素
let key = getQueryString('id');//获取点击元素的id
$.ajax({
    url:"../data/goods.json",
    type:'get',
    dataType:'json',
    cache:false,
    success:function(jsonArr){
        tit.text(jsonArr[key].title);
        imgs.each(function(index,item){
            $(item).prop('src',jsonArr[key].detail_image[0][index]);
        });
        jsonArr[key].version.forEach((item,index)=>{
            if(index === 0){
                version.append(`<li which="0" class="active">${item}</li>`);
            }else{
                version.append(`<li which="${index}">${item}</li>`);
            }
            
        });
        jsonArr[key].color.forEach((item,index)=>{
            if(index === 0){
                color.append(`<li which="0" class="active">${item}</li>`);
            }else{
                color.append(`<li which="${index}">${item}</li>`);
            }
        });
        info.prepend(`<h2 class="title"><img src="../image/forgiveDay.jpg" alt="">${jsonArr[key].title}</h2>
        <p class="long_disc">
            <font class="good_info" color="#ff4a00">${jsonArr[key].good_info}</font>
            <span> ${jsonArr[key].long_disc}</span>
        </p>
        <p class="data-v">小米自营</p>
        <div class="price">${jsonArr[key].price} 元</div>
        <div class="line"></div>
        <div class="address_box">
            <i><img src="../image/address.png" alt=""></i>
            <div class="address_con">
                <p>北京 北京市 海淀区 清河街道 <a href="#">修改</a></p>
                <p class="haveGood">有现货</p>
            </div>
        </div>
        <p class="choose_version_title">选择版本</p>
        `)
    }
})

// 轮播图
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    // loop: true, // 循环模式选项
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


version.on('click','li',function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
})

color.on('click','li',function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    let which = $(this).attr("which");
    $.ajax({
        url:"../data/goods.json",
        type:'get',
        dataType:'json',
        cache:false,
        success:function(jsonArr){
            imgs.each(function(index,item){
                $(item).prop('src',jsonArr[key].detail_image[which][index]);
            });
        }
    })
})