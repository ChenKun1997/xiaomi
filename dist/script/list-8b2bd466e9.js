"use strict";var top_r=document.querySelector(".top_r"),cart=document.querySelector(".top_r .cart"),cart2=document.querySelector(".top_r .cart2");top_r.onmouseenter=function(){cart.style.display="inline-block",cart2.style.display="none"},top_r.onmouseleave=function(){cart.style.display="none",cart2.style.display="inline-block"};for(var phones=document.querySelectorAll(".nav ul li"),product=document.querySelector(".product_wrap"),i=0,len=phones.length;i<len;i++)phones[i].onmouseenter=function(){$(product).slideDown()};for(var _i=0,_len=phones.length;_i<_len;_i++)phones[_i].onmouseleave=function(){product.style.display="none"};