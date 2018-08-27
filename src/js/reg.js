/* 
* @Author: Marte
* @Date:   2018-08-24 11:19:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-27 02:26:43
*/

//头部
jQuery(function($){
    $('.wxcj').hover(function(){
        $('.wxbig').css('display','block');
    },function(){
        $('.wxbig').css('display','none');
    })
    $('.app').hover(function(){
        $('.appbig').css('display','block');
    },function(){
        $('.appbig').css('display','none');
    })
    
    $('.wzdh').hover(function(){
        $('.other').css('display','block');
    },function(){
        $('.other').css('display','none');
    })
})


document.addEventListener('DOMContentLoaded',()=>{
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let btnReg = document.querySelector('#btnReg');
    let span = document.querySelectorAll('.err');
    let status = [200,304];

    let isok = false;

    // // 注册
    btnReg.onclick = ()=>{
        if(!isok){
            return false;
        }

        // 获取用户名/密码
        let _username = username.value;
        let _password = password.value;

        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){

                 window.location.href='http://localhost:1111/src/html/login.html';
            }
        }
        xhr.open('post','../api/reg.php',true);

        // 设置请求头，以便后端接收post数据
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


        xhr.send(`username=${_username}&password=${_password}`);
    }

// 验证用户名是否存在
    username.onchange = ()=>{
        let _username = username.value;

        let xhr = new XMLHttpRequest();

        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                if(xhr.responseText === 'yes'){
                    isok = true;
                    // 成功
                    // span[0].style.display = 'inline';
                    // span[0].previousSibling.style.display = 'block';
                    // span[0].previousSibling.className = 'iconfont icon-chenggong';
                    span[0].innerHTML = '√';
                    span[0].style.color = 'green';
                }else if(xhr.responseText === 'no'){
                    isok = false;
console.log(44)
                    //不成功
                    // span[0].style.display = 'inline';
                    // span[0].previousSibling.style.display = 'block';

                    // span[0].previousSibling.className='iconfont icon-henggang';

                    span[0].innerHTML = '用户名已存在';
                }
            }
        }
        xhr.open('get','../api/check_username.php?username='+_username,true);
        xhr.send();

    }
});