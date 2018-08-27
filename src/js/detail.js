/* 
* @Author: Marte
* @Date:   2018-08-25 18:59:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-27 19:52:44
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

// top购物车
document.addEventListener('DOMContentLoaded',()=>{
    /*
        购物车页
        * 读取cookie -> 显示到页面
     */
    
    var cart_box = document.querySelector('.cart_box');
    var goodslist = Cookie.get('goodslist');//'[{}]',''
    console.log(goodslist);
    if(goodslist.length<=0){
        goodslist = [];
    }else{
        goodslist = JSON.parse(goodslist);
    }

    render();

    function render(){

        // 根据数据生成html结构


        cart_box.children[0].innerHTML = goodslist.map(function (goods,idx){
            return `<dl data-id="${goodslist[idx].id}">
                        <dt>                             
                            <img src="../${goodslist[idx].imgurl}" />
                            <a href="#">${goodslist[idx].name}</a>
                        </dt>
                        <dd><span class="money">￥${goodslist[idx].price}</span> × ${goodslist[idx].qty}</dd>
                    </dl>`

        }).join('\n');
        var money = document.querySelector('.carttotal>.money');
        var resAll = 0;
        var qtyAll = 0;
        for(var n=0;n<goodslist.length;n++){
            resAll+=goodslist[n].price*goodslist[n].qty;
            qtyAll += goodslist[n].qty*1;
        }
        money.innerHTML = '￥'+resAll;
        var qtyTop = document.querySelector('.qtyTop');
        qtyTop.innerHTML = qtyAll;

    }
        

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
    let idname = document.querySelector('.idname');
    let goodname = document.querySelector('.goodname');
    let conmonname = document.querySelector('.w2.l strong');
    let goodtip = document.querySelector('#tip');
    let sale = document.querySelector('#sale');
    let picList = document.querySelector('.pic-list');



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
            for(let i = 0;i<=6;i++){
                let div = document.createElement('div');
                div.className = 'p';
                let smallimg = document.createElement('img');
                smallimg.src='../'+res[0].imgurl;
                div.appendChild(smallimg);
                picList.appendChild(div);
                // smallimg[i].src='../'+res[0].imgurl;
                // smallimg[i].setAttribute('src','../'+res[0].imgurl);
            }
            picList.children[0].className = 'p first';
            goodname.innerText = res[0].name;
            conmonname.innerText = res[0].name;
            goodtip.innerText = res[0].tip;
            sale.innerText = res[0].price;

            //添加到购物车
            let btnBuy = document.querySelector('.btnBuy');
            // 声明一个变量，用于存放所有添加的商品信息
            var goodslist = Cookie.get('goodslist');//'[{},{}..]' 或 ''

            if(goodslist === ''){
                goodslist = []
            }else{
                goodslist = JSON.parse(goodslist);//goodslist必须为json字符串
            }

            // goodslist = JSON.parse(goodslist);//

            btnBuy.onclick = function(e){

                
                let params = decodeURI(location.search);
                let id = params.slice(4);
                // 判断当前商品是否已经添加过
                // * 已添加：找出这个商品，数量+1
                // * 未添加：创建对象，商量为1，写入数组

                var currentGoods = goodslist.filter(function(g){
                    return g.id === id;
                });//[{}]或[]

                if(currentGoods.length>0){
                    // 存在，数量+1
                    currentGoods[0].qty++;
                }else{
                    // 不存在，添加商品

                    // 获取商品信息
                    // 把goods保持外观，存入cookie(只能字符串)：json字符串
                    var goods = {
                        id:id,
                        imgurl:res[0].imgurl,
                        name:res[0].name,
                        tip:res[0].tip,
                        price:res[0].price,
                        qty:1
                        // total:res[0].price * qty
                    }

                    // 当前商品添加到数组
                    goodslist.push(goods);


                    // Object->json string
                    // JSON.stringify()
                    // 
                    // document.cookie = 'goodslist=' + JSON.stringify(goodslist);
                    Cookie.set('goodslist',JSON.stringify(goodslist),{path:'\/'});
                }
                window.location.href = '../html/cart.html';
            }

            var btnAdd = document.querySelector('.btnAdd');
            btnAdd.onclick = function(){
                var webox = document.querySelector('.webox')

            }
        }   
    }
    xhr.open('get','../api/detail.php?id='+_id,true);
    xhr.send();

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
 





