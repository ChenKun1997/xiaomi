"use strict";var top_r=document.querySelector(".top_r"),cart=document.querySelector(".top_r .cart"),cart2=document.querySelector(".top_r .cart2");top_r.onmouseenter=function(){cart.style.display="inline-block",cart2.style.display="none"},top_r.onmouseleave=function(){cart.style.display="none",cart2.style.display="inline-block"};for(var phones=document.querySelectorAll(".nav ul li"),product=document.querySelector(".product_wrap"),i=0,len=phones.length;i<len;i++)phones[i].onmouseenter=function(){$(product).slideDown()};for(var _i=0,_len=phones.length;_i<_len;_i++)phones[_i].onmouseleave=function(){product.style.display="none"};var tit=$(".tit_wrap .tit dt"),imgs=$(".swiper-wrapper img"),info=$(".info"),version=$(".version"),color=$(".color"),key=getQueryString("id");$.ajax({url:"../data/goods.json",type:"get",dataType:"json",cache:!1,success:function(i){tit.text(i[key].title),imgs.each(function(e,n){$(n).prop("src",i[key].detail_image[0][e])}),i[key].version.forEach(function(e,n){0===n?version.append('<li which="0" class="active">'.concat(e,"</li>")):version.append('<li which="'.concat(n,'">').concat(e,"</li>"))}),i[key].color.forEach(function(e,n){0===n?color.append('<li which="0" class="active">'.concat(e,"</li>")):color.append('<li which="'.concat(n,'">').concat(e,"</li>"))}),info.prepend('<h2 class="title"><img src="../image/forgiveDay.jpg" alt="">'.concat(i[key].title,'</h2>\n        <p class="long_disc">\n            <font class="good_info" color="#ff4a00">').concat(i[key].good_info,"</font>\n            <span> ").concat(i[key].long_disc,'</span>\n        </p>\n        <p class="data-v">小米自营</p>\n        <div class="price">').concat(i[key].price,' 元</div>\n        <div class="line"></div>\n        <div class="address_box">\n            <i><img src="../image/address.png" alt=""></i>\n            <div class="address_con">\n                <p>北京 北京市 海淀区 清河街道 <a href="#">修改</a></p>\n                <p class="haveGood">有现货</p>\n            </div>\n        </div>\n        <p class="choose_version_title">选择版本</p>\n        '))}});var mySwiper=new Swiper(".swiper-container",{direction:"horizontal",autoplay:{disableOnInteraction:!1,autoplayDisableOnInteraction:!1},effect:"fade",pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});version.on("click","li",function(){$(this).addClass("active"),$(this).siblings().removeClass("active")}),color.on("click","li",function(){$(this).addClass("active"),$(this).siblings().removeClass("active");var o=$(this).attr("which");$.ajax({url:"../data/goods.json",type:"get",dataType:"json",cache:!1,success:function(i){imgs.each(function(e,n){$(n).prop("src",i[key].detail_image[o][e])})}})});