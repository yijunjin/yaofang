/* 
* @Author: Marte
* @Date:   2018-08-25 18:59:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-26 19:41:08
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
    $('.cart').hover(function(){
        $('.cart_box').css('display','block');
    },function(){
        $('.cart_box').css('display','none');
    })
    $('.person').hover(function(){
        $('.menu_list').css('display','block');
    },function(){
        $('.menu_list').css('display','none');
    })
    $('.wzdh').hover(function(){
        $('.other').css('display','block');
    },function(){
        $('.other').css('display','none');
    })
})

//搜索框
jQuery(function($){
    $('.opt_list').hover(function(){
        $('.opt_list').children('li').css('display','block');
    },function(){
        $('.opt_list').children('li').css('display','none');
        $('.opt_list').children('li:first').css('display','block');
    })

    $('.opt_list').children('li').click(function(){
        $('.opt_list').children('li').css('display','none');console.log($(this))
        $('.opt_list li:first-child').text($(this).html())
    })
})



//导航

jQuery(function($){
    $('.mainnav>.first').hover(function(){
        $('.catlist').css('display','block');
    },function(){
        $('.catlist').css('display','none');
    })
    $('.catlist').hover(function(){
        $(this).css('display','block');
    },function(){
        $(this).css('display','none');
    })

    $('.erji .zxyp').on('mouseover',function(){
        $('._first').css('display','block');
    })
    $('.erji .zxyp').on('mouseout',function(){
        $('._first').css('display','none');
    })
    $('._first').hover(function(){
        $(this).css('display','block');
    },function(){
        $(this).css('display','none');
    })

    $('.erji .ylqx').on('mouseover',function(){
        $('._second').css('display','block');
    })
    $('.erji .ylqx').on('mouseout',function(){
        $('._second').css('display','none');
    })
    $('._second').hover(function(){
        $(this).css('display','block');
    },function(){
        $(this).css('display','none');
    })

    $('.erji .ysbj').on('mouseover',function(){
        $('._third').css('display','block');
    })
    $('.erji .ysbj').on('mouseout',function(){
        $('._third').css('display','none');
    })
    $('._third').hover(function(){
        $(this).css('display','block');
    },function(){
        $(this).css('display','none');
    })

})

//根据传入商品ID获取信息 写入页面
document.addEventListener('DOMContentLoaded',()=>{
    var params = decodeURI(location.search);
    var _id = params.slice(4);
    
    let status = [200,304];
    let goods = document.querySelector('.goods');
    let tip = document.querySelector('.tip');
    let smallimg = document.querySelectorAll('.pic-list img');
    let idname = document.querySelector('.idname');
    let goodname = document.querySelector('.goodname');
    let conmonname = document.querySelector('.w2.l strong');
    let goodtip = document.querySelector('#tip');
    let sale = document.querySelector('#sale');


    let xhr = new XMLHttpRequest();

    xhr.onload = function(){

        if(status.indexOf(xhr.status)>=0){
            let res = JSON.parse(xhr.responseText);
            // 根据数据生成html页面
            
            let img = document.createElement('img');
            img.className = 'picTop';
            img.src = '../'+res[0].imgurl;
            // img.setAttribute('data-big','img.src')；
            //插入到goods
            goods.insertBefore(img,tip);

            idname.innerHTML = _id;

            // 小图src更换
            // for(let i = 0;i<=smallimg.length;i++){
            //     smallimg[i].src='../'+res[0].imgurl;
            //     // smallimg[i].setAttribute('src','../'+res[0].imgurl);
            // }

            goodname.innerText = res[0].name;
            conmonname.innerText = res[0].name;
            goodtip.innerText = res[0].tip;
            sale.innerText = res[0].price;
        }
    }
    xhr.open('get','../api/detail.php?id='+_id,true);
    xhr.send();
})


jQuery(function($){
        console.log(66)
    $('button#add').click(function(){
        console.log(66)
    })
})


// 放大镜
// jQuery(function($){
//     // 插件是否支持链式调用

//     $('.goods').lxzoom({width:500,height:200}).addClass('box');

//     $('.small').on('click','img',function(){
//         $('.goods img').attr({
//             'src':this.src,
//             'data-big':this.dataset.big
//         });
//     })
// });
 





