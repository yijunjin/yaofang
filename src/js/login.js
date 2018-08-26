/* 
* @Author: Marte
* @Date:   2018-08-24 01:28:36
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-24 11:07:01
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

// tab标签切换
jQuery(function($){
    $('.tab-item.lgn').click(function(){console.log(33)
        $('.form-tab').children('.tab-item').removeClass('active');
        $('.tab-item.lgn').addClass('active');
        $('.form_l').css('display','block');
        $('.form_r').css('display','none');

    })
    $('.tab-item.rgt').click(function(){console.log(33)
        $('.form-tab').children('.tab-item').removeClass('active');
        $('.tab-item.rgt').addClass('active');
        $('.form_r').css('display','block');
        $('.form_l').css('display','none');
    })
})

// 登陆页
/*
    实现注册成功后跳转到登录页面，并输入用户名密码登录
 */
document.addEventListener('DOMContentLoaded',()=>{
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let btnReg = document.querySelector('.btnReg');

    let status = [200,304];

    let isok = false;

    // 注册
    btnReg.onclick = ()=>{
        if(!isok){
            return false;
        }

        // 获取用户名/密码
        let _username = username.value;
        var _password = password.value;

        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                console.log(xhr.responseText);
            }
        }
        xhr.open('post','../api/reg.php',true);

        // 设置请求头，以便后端接收post数据
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


        xhr.send(`username=${_username}&password=${_password}`);
    }


    // 验证用户名是否存在
    username.onblur = ()=>{
        let _username = username.value;

        let xhr = new XMLHttpRequest();
        
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                var formGroup = username.parentNode;
                if(xhr.responseText === 'yes'){
                    isok = true;

                    // 成功：添加has-success类
                    formGroup.classList.remove('has-error');
                    formGroup.classList.add('has-success');
                    username.nextElementSibling.innerText = '';
                }else if(xhr.responseText === 'no'){
                    isok = false;
                    formGroup.classList.remove('has-success');
                    formGroup.classList.add('has-error');
                    username.nextElementSibling.innerText = '用户名已存在';
                }
            }
        }
        xhr.open('get','../api/check_username.php?username='+_username,true);
        xhr.send();

    }
});