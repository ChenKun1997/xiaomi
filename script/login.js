let account = document.querySelector(".account");
let password = document.querySelector(".password");
let register = document.querySelector(".register");
let login = document.querySelector(".login");
// console.log(register);
register.onclick = function(){
    let acco_val = account.value;
    let pass_val = password.value;
    var reg1 = /^(1|\+861)[3-8]{1}\d{9}$/;
    var reg2 = /^\w+@[a-z0-9]+\.[a-z]+$/;
    var reg3 = /.{8,20}/;
    console.log(reg3.test(pass_val));
    if(!(reg1.test(acco_val)||reg2.test(acco_val))){
        account.value = '';
        password.value = '';
        alert('请输入正确的手机号码或电子邮箱');
        return false;
    }
    if(!reg3.test(pass_val)){
        password.value = '';
        alert('您的密码长度不符合要求，请输入8-20位的密码');
        return false;
    }

    $.ajax({
        url:'/register?account='+acco_val+'&password='+pass_val,
        type:'get',
        dataType:'json',
        success:function(json){
            if(json.err === 0){
                account.value = '';
                password.value = '';
                alert(json.msg);
            }else if(json.err === 1){
                console.log(json);
                account.value = '';
                password.value = '';
                alert(json.msg+'赶紧去登录吧');
            }
        }
    })

        
    
}
login.onclick = function(){
    let acco_val = account.value;
    let pass_val = password.value;
    
    $.ajax({
        url:'/login?account='+acco_val+'&password='+pass_val,
        type:'get',
        dataType:'json',
        success:function(json){
            console.log(json);
            if(json.err === 1){
                alert(json.msg);
                window.location.replace("/pages/index.html?account="+json.account);
            }else{
                alert(json.msg);
            }
        }
    })
}
    // var xhr = new XMLHttpRequest();
    // xhr.open('get','./register?account='+acco_val+'&password='+pass_val,'true');
    // xhr.send(null);
    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState === 4){
    //         if(xhr.status >= 200 && xhr.status < 300){
    //             alert(xhr.responseText);
    //         }
    //     }
    // }
