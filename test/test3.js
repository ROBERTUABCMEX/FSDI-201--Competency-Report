function(){
    'use strict';
    $('main').on({
        click:function(){
            $(this).addClass('red-bg');
        },
        mouseenter:function(){
            $(this).addClass('active');
        },
        mouseleave:function(){
            $(this).removeClass('active red-bg');
        }
    });
    var text=$('main h2').text();
    console.log(text);
    $('main h2').text('<h1> Hello world</h1>');
    $('main h2').html('<h1> Hello world</h1');
}

// challenge: click on thefooter and change the h2 text

$('footer').on('click', function(){
   $('main h2') h2').html("<h1> Done!</h1>");
})