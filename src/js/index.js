/* 
* @Author: Marte
* @Date:   2018-08-20 14:04:12
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-20 16:39:21
*/
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