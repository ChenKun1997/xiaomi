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
        // $(product).slideUp();
    }
}

//轮播图效果

var imgs = document.querySelectorAll(".banner img");
var nums = document.querySelectorAll(".nums a");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

let timer = 0;
//当前显示图片的下标
let imgIndex = 0;
// 上一次显示图片的下标
let prevIndex = 0;

function autoMove(){
    clearInterval(timer);
    timer = setInterval(()=>{
        movePrev();
    },3000)
}
// 自动播放
autoMove();

function moveNext(){
    imgIndex++;
    if(imgIndex > imgs.length-1){
        imgIndex = 0;
    }
    nums[prevIndex].classList.remove('active');
    nums[imgIndex].classList.add('active');
    animate(imgs[prevIndex],{"opacity":"0"});
    animate(imgs[imgIndex],{"opacity":"1"});
    prevIndex = imgIndex;
}
function movePrev(){
    imgIndex--;
    if(imgIndex < 0){
        imgIndex = imgs.length - 1;
    }
    nums[prevIndex].classList.remove('active');
    nums[imgIndex].classList.add('active');
    animate(imgs[prevIndex],{"opacity":"0"});
    animate(imgs[imgIndex],{"opacity":"1"});
    prevIndex = imgIndex;
}

prev.onclick = function(){
    clearInterval(timer);
    clearInterval(imgs[imgIndex].timer);
    clearInterval(imgs[prevIndex].timer);
    movePrev();
    autoMove();
}
next.onclick = function(){
    clearInterval(timer);
    clearInterval(imgs[imgIndex].timer);
    clearInterval(imgs[prevIndex].timer);
    moveNext();
    autoMove();
}

for(let i = 0, len = nums.length; i < len; i++){
    // nums[i].index = i;
    nums[i].onclick = function(){
        clearInterval(timer);
        clearInterval(imgs[imgIndex].timer);
        clearInterval(imgs[prevIndex].timer);
        imgIndex = i;
        nums[prevIndex].classList.remove('active');
        nums[imgIndex].classList.add('active');
        animate(imgs[prevIndex],{"opacity":"0"});
        animate(imgs[imgIndex],{"opacity":"1"});
        prevIndex = imgIndex;
        autoMove();
    }
}

//鼠标划入侧边导航栏弹出框效果

let lis = document.querySelectorAll(".subNav>ul>li");

let subs = document.querySelectorAll(".subNav>ul>li>div");
// 鼠标移入弹出
function show(){
    for(let i = 0, len = lis.length; i < len; i++){
        lis[i].onmouseenter = function(){
            subs[i].style.display = 'block';
        }
        subs[i].onmouseenter = function(){
            subs[i].style.display = 'block';
        }
    }
}
// 鼠标移出隐藏
function hide(){    
    for(let i = 0, len = lis.length; i < len; i++){
        lis[i].onmouseleave = function(){
            subs[i].style.display = 'none';
        }
        subs[i].onmouseleave = function(){
            subs[i].style.display = 'none';
        }
    }
}
show();
hide();



//手动按钮轮播图

var carousel = document.querySelector(".carousel");
var to_left = document.querySelector(".fSale .to_left");
var to_right = document.querySelector(".fSale .to_right");
var fSale_lis = document.querySelectorAll(".con li");
var f_index = 0;

to_right.onclick = function(){
    f_index += 4;
    if(f_index >= 40){
        f_index = 36;
    }
    animate(carousel,{"scrollLeft":fSale_lis[0].clientWidth*f_index+40});
}
to_left.onclick = function(){
    f_index -= 4;
    if(f_index <= 0){
        animate(carousel,{"scrollLeft":0});
        f_index = 0
    }
    animate(carousel,{"scrollLeft":fSale_lis[0].clientWidth*f_index+40});
}




















