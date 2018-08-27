/* 
* @Author: Marte
* @Date:   2018-08-20 14:04:12
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-27 19:14:30
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
        cart_box.innerHTML = '您的购物车目前没有任何商品，建议您 <a href="html/login.html">[登录]</a> 查看';
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
    //轮播图
document.addEventListener('DOMContentLoaded',()=>{
     
    var Carousel = function(options){
        // 属性
        // 默认值
        let defaults = {
            ele:'',//必填参数
            imgs:[],//必传参数
            // width:100%,
            // height:390,
            index:0,
            page:true,//是否显示分页
            button:true,//是否显示左右按钮
            type:'fade',//动画类型：vertical(垂直)，horizontal(水平),fade(淡入淡出)
            seamless:true,//是否无缝滚动,
            duration:3000,//轮播间隔时间
        }
        
        // 扩展默认参数
        this.opt = Object.assign({},defaults,options);
        this.len = this.opt.imgs.length;

        // 初始化并传递参数
        this.init();
     }


    // 方法：
    Carousel.prototype.init = function(){
        var opt = this.opt;
        /*
            * 获取/生成元素
            * 绑定事件
         */
        
        var ele = document.querySelector(opt.ele);



        // 设置样式（宽高）
        ele.style.width = opt.width + 'px';
        ele.style.height = opt.height + 'px';

        // 生成图片(ul,li,img)
        let ul = document.createElement('ul');
        
        // 给ul添加类型：设置轮播类型
        ul.className = opt.type;//horizontal,vertical,fade

        // 水平轮播需要给ul添加宽度
        if(opt.type === 'horizontal'){
            ul.style.width = opt.width*this.len + 'px';
        }else if(opt.type === 'fade'){
            ul.style.width = opt.width + 'px';
            ul.style.height = opt.height + 'px';
        }

        ul.innerHTML = opt.imgs.map(url=>{
            return '<li><a href="#"><img src="'+url+'"/></a></li>';
        }).join('');

        // 写入页面
        ele.appendChild(ul);


        // 分页
        if(opt.page){
            this.page = document.createElement('div');
            this.page.className = 'clist';
            this.ul = document.createElement('ul');
            for(var i=0;i<this.len;i++){
                var li = document.createElement('li');

                var span = document.createElement('span');
                span.innerText = i+1;

                // 高亮
                if(i===opt.index){
                    span.className = 'active';
                }
                li.appendChild(span);
                this.ul.appendChild(li);
            }
            this.page.appendChild(this.ul);
            ele.appendChild(this.page);


        }

        // 左右按钮
        if(opt.button){
            let btnPrev = document.createElement('span');
            btnPrev.className = 'btn-prev';
            btnPrev.innerHTML = '&lt;';

            let btnNext = document.createElement('span');
            btnNext.className = 'btn-next';
            btnNext.innerHTML = '&gt;';

            ele.appendChild(btnPrev);
            ele.appendChild(btnNext);
        }

        // 传递参数
        this.ul = ul;
        this.ele = ele;



        // 初始化
        // 页面进入自动轮播
        this.timer = setInterval(this.autoPlay.bind(this),opt.duration);
        this.play();

        // 鼠标移入移出
        ele.onmouseover = ()=>{
            this.stop();
        }
        ele.onmouseout = ()=>{
            this.timer = setInterval(this.autoPlay.bind(this),opt.duration);
        }

        // 点击分页切换
        ele.onclick = e=>{
            if(e.target.parentNode.className === 'clist'){
                opt.index = e.target.innerText-1;

                this.play();
            }else if(e.target.className === 'btn-prev'){
                opt.index--;
                this.play();
            }else if(e.target.className === 'btn-next'){
                opt.index++;
                this.play();
            }
        }
        
        
    }

    Carousel.prototype.autoPlay = function(){
                this.opt.index++;
                this.play();
    }

    // 播放
    Carousel.prototype.play = function(){
        let opt = this.opt;

        // 到达最后一张后重置到第一张
        if(opt.index>=this.len){
            opt.index = 0;
        }else if(opt.index<0){
            opt.index = this.len-1;
        }

        // var type = {vartical:'top',horizontal:'left',fade:'opacity'}

        var obj = {}

        // 水平
        if(opt.type === 'horizontal'){
            obj.left = -opt.index*opt.width;
            animate(this.ul,obj);
        }else if(opt.type === 'vertical'){
            obj.top = -opt.index*opt.height;
            animate(this.ul,obj);
        }else if(opt.type === 'fade'){
            for(var i=0;i<this.len;i++){
                animate(this.ul.children[i],{opacity:0});
                this.ul.children[i].style.display='none';
            }
                this.ul.children[0].style.background='rgb(157, 227, 252)';
                this.ul.children[1].style.background='rgb(83, 126, 237)';
                this.ul.children[2].style.background='rgb(157, 227, 344)';
                this.ul.children[3].style.background='rgb(202, 227, 247)';
                this.ul.children[4].style.background='rgb(255, 78, 90)';
            this.ul.children[opt.index].style.display='block';
            animate(this.ul.children[opt.index],{opacity:1});

        }else if(opt.type === 'fade1'){
            for(var i=0;i<this.len;i++){
                animate(this.ul.children[i],{opacity:0});
                this.ul.children[i].style.display='none';
            }
            this.ul.children[opt.index].style.display='block';
            animate(this.ul.children[opt.index],{opacity:1});
        }

        

        // 页码高亮
        if(this.page){
            for(var i=0;i<this.len;i++){
                this.page.children[0].children[i].className = '';
            }
            this.page.children[0].children[opt.index].className = 'active';
        }
    }

    // 停止
    Carousel.prototype.stop = function(){
        clearInterval(this.timer);
    }

    
    

     new Carousel({
        ele:'#banner',

        index:4,
        page:true,
        button:true,
        type:'fade',
        seamless:true,
        imgs:["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg","img/banner5.jpg"]
     });

     //1F
     new Carousel({
        ele:'.banner1',
        index:1,
        page:false,
        button:false,
        type:'fade1',
        imgs:["img/1F-1.jpg","img/1F-2.jpg"]
     });
     // 2F
     new Carousel({
        ele:'.banner2',
        index:1,
        page:false,
        button:false,
        type:'fade1',
        imgs:["img/F2-1.jpg","img/F2-2.jpg"]
     });
     // 3F
     new Carousel({
        ele:'.banner3',
        index:1,
        page:false,
        button:false,
        type:'fade1',
        imgs:["img/F3-1.jpg","img/F3-2.jpg"]
     });
     // 4F
     new Carousel({
        ele:'.banner4',
        index:1,
        page:false,
        button:false,
        type:'fade1',
        imgs:["img/F4-1.jpg","img/F4-2.jpg"]
     });
     // 5F
     new Carousel({
        ele:'.banner5',
        index:1,
        page:false,
        button:false,
        type:'fade1',
        imgs:["img/F5-1.jpg","img/F5-2.jpg"]
     });
     // 6F
     new Carousel({
        ele:'.banner6',
        index:1,
        page:false,
        button:false,
        type:'fade1',
        imgs:["img/F6-1.jpg","img/F6-2.jpg"]
     });
})


        

    //抢购 数据库生成结构
document.addEventListener('DOMContentLoaded',()=>{
    
    let status = [200,304];
    
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){

        if(status.indexOf(xhr.status)>=0){
            let res = JSON.parse(xhr.responseText)
            // 根据数据生成html页面
 
            let cont = document.querySelector('.cont');
            let qianggou = document.createElement('div');
            qianggou.innerHTML = res.map(function (item,idx){
                return `<div class="item right fl">
                            <a href="#">
                                <img src="${res[idx].imgurl}"/>
                                <div class="sheng">
                                    <span><small>￥</small>${(res[idx].price-res[idx].sale).toFixed(2)}</span>
                                </div>
                            </a>
                            <a href="#" class="name">${res[idx].name}</a>
                            <div class="sale">
                                <small>￥</small>${res[idx].sale}
                                <del>${res[idx].price}</del>
                            </div>
                        </div>`
            }).join('');
            cont.appendChild(qianggou);

        }
    }
    xhr.open('get','api/qianggou.php',true);
    xhr.send();
})



//content部分 F1-F6 数据库生成结构
document.addEventListener('DOMContentLoaded',()=>{

    let content = document.querySelectorAll('.content .right');
    let status = [200,304];

    //中西药品--家庭常用
    
    let xhr1 = new XMLHttpRequest();

    xhr1.onload = function(){

        if(status.indexOf(xhr1.status)>=0){
            let res1 = JSON.parse(xhr1.responseText)

            // 根据数据生成html页面
            
            let ul = document.createElement('ul');
            ul.className = '_jiating good vis';
            ul.innerHTML = res1.map(function (item,idx){
                return `<li data-id="${res1[idx].id}">
                <a href="#"><img src="${res1[idx].imgurl}"/></a>
                <a href="#" class="txt">${res1[idx].name}</a>
                <p class="ps">${res1[idx].tip}</p>
                <p class="price">￥${res1[idx].price}</p>

                        </li>`
            }).join('');

            content[0].appendChild(ul);
        }
    

    }

    xhr1.open('get','api/zxyp_jtcy.php',true);
    xhr1.send();

    //中西药品--胃肠常用
    
    let xhr2 = new XMLHttpRequest();

    xhr2.onload = function(){

        if(status.indexOf(xhr2.status)>=0){
            let res2 = JSON.parse(xhr2.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_weichang good';
            ul.innerHTML = res2.map(function (item,idx){
                return `<li data-id="${res2[idx].id}">
                <a href="#"><img src="${res2[idx].imgurl}"/></a>
                <a href="#" class="txt">${res2[idx].name}</a>
                <p class="ps">${res2[idx].tip}</p>
                <p class="price">￥${res2[idx].price}</p>

                        </li>`
            }).join('');

            content[0].appendChild(ul);
        }
    

    }

    xhr2.open('get','api/weichangyao.php',true);
    xhr2.send();


    //中西药品--心脑血管
    
    let xhr3 = new XMLHttpRequest();

    xhr3.onload = function(){

        if(status.indexOf(xhr3.status)>=0){
            let res3 = JSON.parse(xhr3.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_xinnao good';
            ul.innerHTML = res3.map(function (item,idx){
                return `<li data-id="${res3[idx].id}">
                <a href="#"><img src="${res3[idx].imgurl}"/></a>
                <a href="#" class="txt">${res3[idx].name}</a>
                <p class="ps">${res3[idx].tip}</p>
                <p class="price">￥${res3[idx].price}</p>

                        </li>`
            }).join('');

            content[0].appendChild(ul);
        }
    

    }

    xhr3.open('get','api/xinnao.php',true);
    xhr3.send();


    //中西药品--五官科药
    
    let xhr4 = new XMLHttpRequest();

    xhr4.onload = function(){

        if(status.indexOf(xhr4.status)>=0){
            let res4 = JSON.parse(xhr4.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_wuguan good';
            ul.innerHTML = res4.map(function (item,idx){
                return `<li data-id="${res4[idx].id}">
                <a href="#"><img src="${res4[idx].imgurl}"/></a>
                <a href="#" class="txt">${res4[idx].name}</a>
                <p class="ps">${res4[idx].tip}</p>
                <p class="price">￥${res4[idx].price}</p>

                        </li>`
            }).join('');

            content[0].appendChild(ul);
        }
    

    }

    xhr4.open('get','api/zxyp_jtcy.php',true);
    xhr4.send();



    //中西药品--皮肤科药
    
    let xhr5 = new XMLHttpRequest();

    xhr5.onload = function(){

        if(status.indexOf(xhr5.status)>=0){
            let res5 = JSON.parse(xhr5.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_pifu good';
            ul.innerHTML = res5.map(function (item,idx){
                return `<li data-id="${res5[idx].id}">
                <a href="#"><img src="${res5[idx].imgurl}"/></a>
                <a href="#" class="txt">${res5[idx].name}</a>
                <p class="ps">${res5[idx].tip}</p>
                <p class="price">￥${res5[idx].price}</p>

                        </li>`
            }).join('');

            content[0].appendChild(ul);
        }
    

    }

    xhr5.open('get','api/weichangyao.php',true);
    xhr5.send();



    //中西药品--呼吸科药
    
    let xhr6 = new XMLHttpRequest();

    xhr6.onload = function(){

        if(status.indexOf(xhr6.status)>=0){
            let res6 = JSON.parse(xhr6.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_huxi good';
            ul.innerHTML = res6.map(function (item,idx){
                return `<li data-id="${res6[idx].id}">
                <a href="#"><img src="${res6[idx].imgurl}"/></a>
                <a href="#" class="txt">${res6[idx].name}</a>
                <p class="ps">${res6[idx].tip}</p>
                <p class="price">￥${res6[idx].price}</p>

                        </li>`
            }).join('');

            content[0].appendChild(ul);
        }
    

    }

    xhr6.open('get','api/xinnao.php',true);
    xhr6.send();


    //中西药品--神经科药
    
    let xhr7 = new XMLHttpRequest();

    xhr7.onload = function(){

        if(status.indexOf(xhr7.status)>=0){
            let res7 = JSON.parse(xhr7.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_shenjing good';
            ul.innerHTML = res7.map(function (item,idx){
                return `<li data-id="${res7[idx].id}">
                <a href="#"><img src="${res7[idx].imgurl}"/></a>
                <a href="#" class="txt">${res7[idx].name}</a>
                <p class="ps">${res7[idx].tip}</p>
                <p class="price">￥${res7[idx].price}</p>

                        </li>`
            }).join('');

            content[0].appendChild(ul);
        }
    

    }

    xhr7.open('get','api/zxyp_jtcy.php',true);
    xhr7.send();




    // 2F 青少年健康
    
    let xhr21 = new XMLHttpRequest();

    xhr21.onload = function(){

        if(status.indexOf(xhr21.status)>=0){
            let res21 = JSON.parse(xhr21.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_qsn good_ys vis';
            ul.innerHTML = res21.map(function (item,idx){
                return `<li data-id="${res21[idx].id}">
                <a href="#"><img src="${res21[idx].imgurl}"/></a>
                <a href="#" class="txt">${res21[idx].name}</a>
                <p class="ps">${res21[idx].tip}</p>
                <p class="price">￥${res21[idx].price}</p>

                        </li>`
            }).join('');

            content[1].appendChild(ul);
        }
    }

    xhr21.open('get','api/ysbj_qsn.php',true);
    xhr21.send();


    // 2F 中老年健康
    
    let xhr22 = new XMLHttpRequest();

    xhr22.onload = function(){

        if(status.indexOf(xhr22.status)>=0){
            let res22 = JSON.parse(xhr22.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_zln good_ys';
            ul.innerHTML = res22.map(function (item,idx){
                return `<li data-id="${res22[idx].id}">
                <a href="#"><img src="${res22[idx].imgurl}"/></a>
                <a href="#" class="txt">${res22[idx].name}</a>
                <p class="ps">${res22[idx].tip}</p>
                <p class="price">￥${res22[idx].price}</p>

                        </li>`
            }).join('');

            content[1].appendChild(ul);
        }
    }

    xhr22.open('get','api/ysbj_zln.php',true);
    xhr22.send();

    // 2F 女性保健
    
    let xhr23 = new XMLHttpRequest();

    xhr23.onload = function(){

        if(status.indexOf(xhr23.status)>=0){
            let res23 = JSON.parse(xhr23.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_nv good_ys';
            ul.innerHTML = res23.map(function (item,idx){
                return `<li data-id="${res23[idx].id}">
                <a href="#"><img src="${res23[idx].imgurl}"/></a>
                <a href="#" class="txt">${res23[idx].name}</a>
                <p class="ps">${res23[idx].tip}</p>
                <p class="price">￥${res23[idx].price}</p>

                        </li>`
            }).join('');

            content[1].appendChild(ul);
        }
    }

    xhr23.open('get','api/ysbj_qsn.php',true);
    xhr23.send();

    // 2F 男性保健
    
    let xhr24 = new XMLHttpRequest();

    xhr24.onload = function(){

        if(status.indexOf(xhr24.status)>=0){
            let res24 = JSON.parse(xhr24.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_nan good_ys';
            ul.innerHTML = res24.map(function (item,idx){
                return `<li data-id="${res24[idx].id}">
                <a href="#"><img src="${res24[idx].imgurl}"/></a>
                <a href="#" class="txt">${res24[idx].name}</a>
                <p class="ps">${res24[idx].tip}</p>
                <p class="price">￥${res24[idx].price}</p>

                        </li>`
            }).join('');

            content[1].appendChild(ul);
        }
    }

    xhr24.open('get','api/ysbj_zln.php',true);
    xhr24.send();

    // 2F 大众保健    
    let xhr25 = new XMLHttpRequest();

    xhr25.onload = function(){

        if(status.indexOf(xhr25.status)>=0){
            let res25 = JSON.parse(xhr25.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_dz good_ys';
            ul.innerHTML = res25.map(function (item,idx){
                return `<li data-id="${res25[idx].id}">
                <a href="#"><img src="${res25[idx].imgurl}"/></a>
                <a href="#" class="txt">${res25[idx].name}</a>
                <p class="ps">${res25[idx].tip}</p>
                <p class="price">￥${res25[idx].price}</p>

                        </li>`
            }).join('');

            content[1].appendChild(ul);
        }
    }

    xhr25.open('get','api/ysbj_qsn.php',true);
    xhr25.send();

    // 3F     家庭常备
    let xhr31 = new XMLHttpRequest();

    xhr31.onload = function(){

        if(status.indexOf(xhr31.status)>=0){
            let res31 = JSON.parse(xhr31.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_cb good_qx vis';
            ul.innerHTML = res31.map(function (item,idx){
                return `<li data-id="${res31[idx].id}">
                <a href="#"><img src="${res31[idx].imgurl}"/></a>
                <a href="#" class="txt">${res31[idx].name}</a>
                <p class="ps">${res31[idx].tip}</p>
                <p class="price">￥${res31[idx].price}</p>

                        </li>`
            }).join('');

            content[2].appendChild(ul);
        }
    }

    xhr31.open('get','api/zxyp_jtcy.php',true);
    xhr31.send();


    // 3F     检测设备
    let xhr32 = new XMLHttpRequest();

    xhr32.onload = function(){

        if(status.indexOf(xhr32.status)>=0){
            let res32 = JSON.parse(xhr32.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_jc good_qx';
            ul.innerHTML = res32.map(function (item,idx){
                return `<li data-id="${res32[idx].id}">
                <a href="#"><img src="${res32[idx].imgurl}"/></a>
                <a href="#" class="txt">${res32[idx].name}</a>
                <p class="ps">${res32[idx].tip}</p>
                <p class="price">￥${res32[idx].price}</p>

                        </li>`
            }).join('');

            content[2].appendChild(ul);
        }
    }

    xhr32.open('get','api/ysbj_zln.php',true);
    xhr32.send();


    // 3F     康复理疗
    let xhr33 = new XMLHttpRequest();

    xhr33.onload = function(){

        if(status.indexOf(xhr33.status)>=0){
            let res33 = JSON.parse(xhr33.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_kf good_qx';
            ul.innerHTML = res33.map(function (item,idx){
                return `<li data-id="${res33[idx].id}">
                <a href="#"><img src="${res33[idx].imgurl}"/></a>
                <a href="#" class="txt">${res33[idx].name}</a>
                <p class="ps">${res33[idx].tip}</p>
                <p class="price">￥${res33[idx].price}</p>

                        </li>`
            }).join('');

            content[2].appendChild(ul);
        }
    }

    xhr33.open('get','api/xinnao.php',true);
    xhr33.send();


    // 3F     医疗用品
    let xhr34 = new XMLHttpRequest();

    xhr34.onload = function(){

        if(status.indexOf(xhr34.status)>=0){
            let res34 = JSON.parse(xhr34.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_yl good_qx';
            ul.innerHTML = res34.map(function (item,idx){
                return `<li data-id="${res34[idx].id}">
                <a href="#"><img src="${res34[idx].imgurl}"/></a>
                <a href="#" class="txt">${res34[idx].name}</a>
                <p class="ps">${res34[idx].tip}</p>
                <p class="price">￥${res34[idx].price}</p>

                        </li>`
            }).join('');

            content[2].appendChild(ul);
        }
    }

    xhr34.open('get','api/weichangyao.php',true);
    xhr34.send();


    // 3F     外用贴膏
    let xhr35 = new XMLHttpRequest();

    xhr35.onload = function(){

        if(status.indexOf(xhr35.status)>=0){
            let res35 = JSON.parse(xhr35.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_tg good_qx';
            ul.innerHTML = res35.map(function (item,idx){
                return `<li data-id="${res35[idx].id}">
                <a href="#"><img src="${res35[idx].imgurl}"/></a>
                <a href="#" class="txt">${res35[idx].name}</a>
                <p class="ps">${res35[idx].tip}</p>
                <p class="price">￥${res35[idx].price}</p>

                        </li>`
            }).join('');

            content[2].appendChild(ul);
        }
    }

    xhr35.open('get','api/zxyp_jtcy.php',true);
    xhr35.send();


    // 4F     避孕用品
    let xhr41 = new XMLHttpRequest();

    xhr41.onload = function(){

        if(status.indexOf(xhr41.status)>=0){
            let res41 = JSON.parse(xhr41.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_by good_js vis';
            ul.innerHTML = res41.map(function (item,idx){
                return `<li data-id="${res41[idx].id}">
                <a href="#"><img src="${res41[idx].imgurl}"/></a>
                <a href="#" class="txt">${res41[idx].name}</a>
                <p class="ps">${res41[idx].tip}</p>
                <p class="price">￥${res41[idx].price}</p>

                        </li>`
            }).join('');

            content[3].appendChild(ul);
        }
    }

    xhr41.open('get','api/zxyp_jtcy.php',true);
    xhr41.send();



        // 4F     检测用品
    let xhr42 = new XMLHttpRequest();

    xhr42.onload = function(){

        if(status.indexOf(xhr42.status)>=0){
            let res42 = JSON.parse(xhr42.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_jcyp good_js';
            ul.innerHTML = res42.map(function (item,idx){
                return `<li data-id="${res42[idx].id}">
                <a href="#"><img src="${res42[idx].imgurl}"/></a>
                <a href="#" class="txt">${res42[idx].name}</a>
                <p class="ps">${res42[idx].tip}</p>
                <p class="price">￥${res42[idx].price}</p>

                        </li>`
            }).join('');

            content[3].appendChild(ul);
        }
    }

    xhr42.open('get','api/xinnao.php',true);
    xhr42.send();


        // 5F     名贵中药
    let xhr51 = new XMLHttpRequest();

    xhr51.onload = function(){

        if(status.indexOf(xhr51.status)>=0){
            let res51 = JSON.parse(xhr51.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_mg good_yp vis';
            ul.innerHTML = res51.map(function (item,idx){
                return `<li data-id="${res51[idx].id}">
                <a href="#"><img src="${res51[idx].imgurl}"/></a>
                <a href="#" class="txt">${res51[idx].name}</a>
                <p class="ps">${res51[idx].tip}</p>
                <p class="price">￥${res51[idx].price}</p>

                        </li>`
            }).join('');

            content[4].appendChild(ul);
        }
    }

    xhr51.open('get','api/zxyp_jtcy.php',true);
    xhr51.send();



            // 5F     中药材
    let xhr52 = new XMLHttpRequest();

    xhr52.onload = function(){

        if(status.indexOf(xhr52.status)>=0){
            let res52 = JSON.parse(xhr52.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_zyc good_yp';
            ul.innerHTML = res52.map(function (item,idx){
                return `<li data-id="${res52[idx].id}">
                <a href="#"><img src="${res52[idx].imgurl}"/></a>
                <a href="#" class="txt">${res52[idx].name}</a>
                <p class="ps">${res52[idx].tip}</p>
                <p class="price">￥${res52[idx].price}</p>

                        </li>`
            }).join('');

            content[4].appendChild(ul);
        }
    }

    xhr52.open('get','api/xinnao.php',true);
    xhr52.send();


            // 5F     中药粉末
    let xhr53 = new XMLHttpRequest();

    xhr53.onload = function(){

        if(status.indexOf(xhr53.status)>=0){
            let res53 = JSON.parse(xhr53.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_fm good_yp';
            ul.innerHTML = res53.map(function (item,idx){
                return `<li data-id="${res53[idx].id}">
                <a href="#"><img src="${res53[idx].imgurl}"/></a>
                <a href="#" class="txt">${res53[idx].name}</a>
                <p class="ps">${res53[idx].tip}</p>
                <p class="price">￥${res53[idx].price}</p>

                        </li>`
            }).join('');

            content[4].appendChild(ul);
        }
    }

    xhr53.open('get','api/weichangyao.php',true);
    xhr53.send();



            // 5F     茶
    let xhr54 = new XMLHttpRequest();

    xhr54.onload = function(){

        if(status.indexOf(xhr54.status)>=0){
            let res54 = JSON.parse(xhr54.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_cha good_yp';
            ul.innerHTML = res54.map(function (item,idx){
                return `<li data-id="${res54[idx].id}">
                <a href="#"><img src="${res54[idx].imgurl}"/></a>
                <a href="#" class="txt">${res54[idx].name}</a>
                <p class="ps">${res54[idx].tip}</p>
                <p class="price">￥${res54[idx].price}</p>

                        </li>`
            }).join('');

            content[4].appendChild(ul);
        }
    }

    xhr54.open('get','api/ysbj_qsn.php',true);
    xhr54.send();


                // 6F     药妆
    let xhr61 = new XMLHttpRequest();

    xhr61.onload = function(){

        if(status.indexOf(xhr61.status)>=0){
            let res61 = JSON.parse(xhr61.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_yz good_mr vis';
            ul.innerHTML = res61.map(function (item,idx){
                return `<li data-id="${res61[idx].id}">
                <a href="#"><img src="${res61[idx].imgurl}"/></a>
                <a href="#" class="txt">${res61[idx].name}</a>
                <p class="ps">${res61[idx].tip}</p>
                <p class="price">￥${res61[idx].price}</p>

                        </li>`
            }).join('');

            content[5].appendChild(ul);
        }
    }

    xhr61.open('get','api/ysbj_qsn.php',true);
    xhr61.send();




                // 6F     药妆
    let xhr62 = new XMLHttpRequest();

    xhr62.onload = function(){

        if(status.indexOf(xhr62.status)>=0){
            let res62 = JSON.parse(xhr62.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_cz good_mr';
            ul.innerHTML = res62.map(function (item,idx){
                return `<li data-id="${res62[idx].id}">
                <a href="#"><img src="${res62[idx].imgurl}"/></a>
                <a href="#" class="txt">${res62[idx].name}</a>
                <p class="ps">${res62[idx].tip}</p>
                <p class="price">￥${res62[idx].price}</p>

                        </li>`
            }).join('');

            content[5].appendChild(ul);
        }
    }

    xhr62.open('get','api/xinnao.php',true);
    xhr62.send();




                // 6F     身体护理
    let xhr63 = new XMLHttpRequest();

    xhr63.onload = function(){

        if(status.indexOf(xhr63.status)>=0){
            let res63 = JSON.parse(xhr63.responseText)

            // 根据数据生成html页面
           
            let ul = document.createElement('ul');
            ul.className = '_hl good_mr';
            ul.innerHTML = res63.map(function (item,idx){
                return `<li data-id="${res63[idx].id}">
                <a href="#"><img src="${res63[idx].imgurl}"/></a>
                <a href="#" class="txt">${res63[idx].name}</a>
                <p class="ps">${res63[idx].tip}</p>
                <p class="price">￥${res63[idx].price}</p>

                        </li>`
            }).join('');

            content[5].appendChild(ul);
        }
    }

    xhr63.open('get','api/weichangyao.php',true);
    xhr63.send();
})




// F1-F6 tab标签切换

jQuery(function($){

    //1F
    
    $('.snav .jiating').hover(function(){
        $('.zx').children('a').removeClass('active');
        $('.good').removeClass('vis');
        $('._jiating').addClass('vis');
        $('.jiating').addClass('active');

    })
    $('.snav .weichang').hover(function(){
        $('.zx').children('a').removeClass('active');
        $('.good').removeClass('vis');
        $('._weichang').addClass('vis');
        $('.weichang').addClass('active');
        // $('.jiating ::before').addClass('active');
    })
    $('.snav .xinnao').hover(function(){
        $('.zx').children('a').removeClass('active');

        $('.good').removeClass('vis');
        $('._xinnao').addClass('vis');
        $('.xinnao').addClass('active');
    })
    $('.snav .wuguan').hover(function(){
        $('.zx').children('a').removeClass('active');

        $('.good').removeClass('vis');
        $('._wuguan').addClass('vis');
        $('.wuguan').addClass('active');
    })
    $('.snav .pifu').hover(function(){
        $('.zx').children('a').removeClass('active');

        $('.good').removeClass('vis');
        $('._pifu').addClass('vis');
        $('.pifu').addClass('active');
    })
    $('.snav .huxi').hover(function(){
        $('.zx').children('a').removeClass('active');

        $('.good').removeClass('vis');
        $('._huxi').addClass('vis');
        $('.huxi').addClass('active');
    })
    $('.snav .shenjing').hover(function(){
        $('.zx').children('a').removeClass('active');

        $('.good').removeClass('vis');
        $('._shenjing').addClass('vis');
        $('.shenjing').addClass('active');
    })


    // 2F
        
    $('.snav .qsn').hover(function(){
        $('.ys').children('a').removeClass('active');

        $('.good_ys').removeClass('vis');
        $('._qsn').addClass('vis');
        $('.qsn').addClass('active');
    })
    $('.snav .zln').hover(function(){
        $('.ys').children('a').removeClass('active');

        $('.good_ys').removeClass('vis');
        $('._zln').addClass('vis');
        $('.zln').addClass('active');
    })
    $('.snav .nv').hover(function(){
        $('.ys').children('a').removeClass('active');

        $('.good_ys').removeClass('vis');
        $('._nv').addClass('vis');
        $('.nv').addClass('active');
    })
    $('.snav .nan').hover(function(){
        $('.ys').children('a').removeClass('active');

        $('.good_ys').removeClass('vis');
        $('._nan').addClass('vis');
        $('.nan').addClass('active');
    })
    $('.snav .dz').hover(function(){
        $('.ys').children('a').removeClass('active');

        $('.good_ys').removeClass('vis');
        $('._dz').addClass('vis');
        $('.dz').addClass('active');
    })

    //3F
    $('.snav .cb').hover(function(){
        $('.qx').children('a').removeClass('active');

        $('.good_qx').removeClass('vis');
        $('._cb').addClass('vis');
        $('.cb').addClass('active');
    })
    $('.snav .jc').hover(function(){
        $('.qx').children('a').removeClass('active');

        $('.good_qx').removeClass('vis');
        $('._jc').addClass('vis');
        $('.jc').addClass('active');
    })
    $('.snav .kf').hover(function(){
        $('.qx').children('a').removeClass('active');

        $('.good_qx').removeClass('vis');
        $('._kf').addClass('vis');
        $('.kf').addClass('active');
    })
    $('.snav .yl').hover(function(){
        $('.qx').children('a').removeClass('active');

        $('.good_qx').removeClass('vis');
        $('._yl').addClass('vis');
        $('.yl').addClass('active');
    })
    $('.snav .tg').hover(function(){
        $('.qx').children('a').removeClass('active');

        $('.good_qx').removeClass('vis');
        $('._tg').addClass('vis');
        $('.tg').addClass('active');
    })

    // 4F
    $('.snav .by').hover(function(){
        $('.js').children('a').removeClass('active');

        $('.good_js').removeClass('vis');
        $('._by').addClass('vis');
        $('.by').addClass('active');
    })
    $('.snav .jcyp').hover(function(){
        $('.js').children('a').removeClass('active');
        $('.good_js').removeClass('vis');
        $('._jcyp').addClass('vis');
        $('.jcyp').addClass('active');
    })


    // 5F
    $('.snav .mg').hover(function(){
        $('.yp').children('a').removeClass('active');
        $('.good_yp').removeClass('vis');
        $('._mg').addClass('vis');
        $('.mg').addClass('active');
    })
    $('.snav .zyc').hover(function(){
        $('.yp').children('a').removeClass('active');
        $('.good_yp').removeClass('vis');
        $('._zyc').addClass('vis');
        $('.zyc').addClass('active');
    })
    $('.snav .fm').hover(function(){
        $('.yp').children('a').removeClass('active');
        $('.good_yp').removeClass('vis');
        $('._fm').addClass('vis');
        $('.fm').addClass('active');
    })
    $('.snav .cha').hover(function(){
        $('.yp').children('a').removeClass('active');
        $('.good_yp').removeClass('vis');
        $('._cha').addClass('vis');
        $('.cha').addClass('active');
    })


    // 6F
    $('.snav .yz').hover(function(){
        $('.mr').children('a').removeClass('active');
        $('.good_mr').removeClass('vis');
        $('._yz').addClass('vis');
        $('.yz').addClass('active');
    })
    $('.snav .cz').hover(function(){
        $('.mr').children('a').removeClass('active');
        $('.good_mr').removeClass('vis');
        $('._cz').addClass('vis');
        $('.cz').addClass('active');
    })
    $('.snav .hl').hover(function(){
        $('.mr').children('a').removeClass('active');
        $('.good_mr').removeClass('vis');
        $('._hl').addClass('vis');
        $('.hl').addClass('active');
    })




    // 图片hover效果
    $('.content .right img*').hover(function(){
        $(this).css('transform','translateX(-8px)');
    },function(){
        $(this).css('transform','translateX(8px)');

    })
    

})

// 抢购

jQuery(function($){
    $('.cont .right img*').hover(function(){
       
        $(this).animate({width:'190px',height:'120%'},300);
    },function(){
        $(this).animate({width:'171px',height:'100%'},300);
    })
})



//links tab标签切换

jQuery(function($){
    $('._remen').hover(function(){
        //高亮
        
        $('.hnav').children('li').removeClass('hover');
        $(this).addClass('hover');

        $('.linktxt').css('display','none');
        $('.remen').css('display','block');
    })
    $('._youqing').hover(function(){
        $('.hnav').children('li').removeClass('hover');
        $(this).addClass('hover');
        $('.linktxt').css('display','none');
        $('.youqing').css('display','block');
    })
})


// 跳转到详情页
jQuery(function($){
    $('.content>.right').on('click','a',function(){
        let id = $(this).parent().attr('data-id');console.log(id)
        window.location.href='html/detail.html?'+'id='+id;
    })
})
