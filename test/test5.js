$(function(){
    'use strict';

    $('img#logo').on('click',function(){
        $(this).amimate({'width':'500px'});
    });

    //challenge-> increase the width /
   // mouseenter and decrease the width/
   // mouseleave



   $('img#logo').on('mouseenter',increaseImg);
       
   $('img#logo').on('mouseleave',decreaseImg);
      
    function increaseImg(){
       $(this).amimate({'width':'80%'});
   }

     function decreaseImg(){
        $(this).animate({'width':'350px'});   
     }

     $('img#logo').on('click',function(){
        $('#petSection').slideUp(1000);
    });
     
     $('header h1').on('click', function(){
         $$('#petSection').slideDown(1000);
     }

});