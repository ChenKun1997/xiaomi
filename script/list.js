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


//请求数据,渲染列表页的商品
let list_goods = $('.list_goods')
$.ajax({
    url:"../data/goods.json",
    type:'get',
    dataType:'json',
    cache:false,
    success:function(jsonArr){
        if(jsonArr.length <= 0){
            return;
        }else{
            jsonArr.forEach((item,index)=>{
                if(index === 0){
                    list_goods.append(
                        `<div class="max section">
                            <div class="image">
                                <a href="./detail.html?id=0" target="_blank"><img src="${item.list_image}" alt=""></a>
                            </div>
                            <div class="content">
                                <div class="con">
                                    <h3 class="title"><a href="./detail.html?id=0" target="_blank">${item.title}</a></h3>
                                    <p class="short_disc">${item.short_disc}</p>
                                    <p class="price">
                                        ${item.price}<span>元起</span>
                                    </p>
                                    <em>立即预约</em>
                                </div>
                            </div>
                        </div>`)
                }else{
                    list_goods.append(
                        `<div class="min section">
                        <div class="image">
                            <a href="./detail.html?id=${index}" target="_blank"><img src="${item.list_image}" alt=""></a>
                        </div>
                        <div class="content">
                            <div class="con">
                                <h3 class="title"><a href="./detail.html?id=${index}" target="_blank">${item.title}</a></h3>
                                <p class="short_disc">${item.short_disc}</p>
                                <p class="price">
                                ${item.price} <span>元起</span>
                                </p>
                            </div>
                        </div>
                    </div>`
                    )
                }
            })
        }
    }
})
