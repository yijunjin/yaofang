/* 
* @Author: Marte
* @Date:   2018-08-26 23:35:13
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-27 19:10:46
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
                            <img src="${goodslist[idx].imgurl}" />
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


document.addEventListener('DOMContentLoaded',()=>{
    /*
        购物车页
        * 读取cookie -> 显示到页面
        * 删除cookie -> 显示到页面
            * 清除所有商品
            * 删除单个商品
     */
    var table02 = document.querySelector('.table02');
    var currentTbody = table02.children[0];
    var goodslist = Cookie.get('goodslist');//'[{}]',''
    console.log(goodslist);
    if(goodslist.length<=0){
        goodslist = [];
    }else{
        goodslist = JSON.parse(goodslist);
    }


    render();


    // 删除单个商品
    // * 找出删除的商品 -> 从数组中移除 -> 重写cookie -> 渲染页面
    currentTbody.onclick = function(e){
        if(e.target.className==='remove'){

              // 获取当前tr
            var currentTr = e.target.parentNode.parentNode;
            // 获取当前商品的id
            var dataId = currentTr.getAttribute('data-id');

            // 找出数组中对应商品并移除
            for(var i=0;i<goodslist.length;i++){
                if(goodslist[i].id === dataId){
                    goodslist.splice(i,1);
                    break;
                }
            }

            // 重写cookie
            Cookie.set('goodslist',JSON.stringify(goodslist),{path:'\/'});

            // 重新渲染页面
            render();
        }
        
        if(e.target.className === 'btnadd'){
            //获取当前商品的qty
            var currentQty = e.target.previousElementSibling;
            currentQty.innerText ++;

              // 获取当前tr
            var currentTr = e.target.parentNode.parentNode.parentNode;
            // 获取当前商品的id
            var dataId = currentTr.getAttribute('data-id');

            // 找出数组中对应商品并添加qty
            for(var i=0;i<goodslist.length;i++){
                if(goodslist[i].id === dataId){
                    goodslist[i].qty = currentQty.innerText;
                    break;
                }
            }

            // 重写cookie
            Cookie.set('goodslist',JSON.stringify(goodslist),{path:'\/'});

            // 重新渲染页面
            render();
        }

        if(e.target.className === 'btnred'){
            //获取当前商品的qty
            var currentQty = e.target.nextElementSibling;
            currentQty.innerText --;

              // 获取当前tr
            var currentTr = e.target.parentNode.parentNode.parentNode;
            // 获取当前商品的id
            var dataId = currentTr.getAttribute('data-id');

            // 找出数组中对应商品并添加qty
            for(var i=0;i<goodslist.length;i++){
                if(goodslist[i].id === dataId){
                    goodslist[i].qty = currentQty.innerText;
                    break;
                }
            }

            // 重写cookie
            Cookie.set('goodslist',JSON.stringify(goodslist));

            // 重新渲染页面
            render();

            if(currentQty.innerText === '1'){console.log(11)
                // e.target.disabled = 'disabled';
                e.target.disabled = 'disabled';
            }
        }
      
    }




    function render(){

        // 根据数据生成html结构


        currentTbody.innerHTML = goodslist.map(function (goods,idx){
            return `<tr data-id="${goodslist[idx].id}"><td class="w1">
                        <div class="ck"><input type="checkbox" /></div>
                    </td>
                    <td class="w2">
                        <a href="#"><img src="../${goodslist[idx].imgurl}" /></a>
                    </td>
                    <td class="w3">
                        <a href="#">${goodslist[idx].name}</a>
                        <p>${goodslist[idx].tip}</p>
                    </td>
                    <td class="w4">
                        <span>￥${goodslist[idx].price}</span>
                    </td>
                    <td class="w5">
                        <div>
                            <button class="btnred">-</button><span class="qty">${goodslist[idx].qty}</span><button class="btnadd">+</button>
                        </div>
                    </td>
                    <td class="w6">
                        ￥<span class="total">${Number(goodslist[idx].price)*Number(goodslist[idx].qty)}</span>
                    </td>
                    <td class="w7">
                        <span class="remove">删除</span>
                    </td></tr>`
        }).join('\n');
        
        var totalAll = document.querySelector('#ordertotal');
        var total = document.querySelectorAll('.total');console.log(total)
        var resu = 0;
        for(var n =0;n<total.length;n++){
            resu+=Number(total[n].innerHTML);
        }
        totalAll.innerText = resu; 
    }

})