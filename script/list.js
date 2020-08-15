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

//鼠标进入全部商品，弹出全部商品分类
