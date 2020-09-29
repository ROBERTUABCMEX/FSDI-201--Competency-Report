$(function(){
    'use strict';
     console.log('ready');

    $('nav a:last').hide();
    $('main').hide();
    $('main').show();
    
    //var copy=$('main').clone();
    //$('main').append(copy);
   // $('header').prepend(copy);
   // $('h1').html("Hello");
    //var text= "<ul> <li> hello </li></ul>";
    //$("#petSection").appende(text);

    $('h1').on('click', function(){
         console.log('click');
         $(this).addClass('bordered');
    });

    $('h1').on('mouseenter', function(){
        console.log('mouse over the h1');
    });
    
    $('h1').on('mouseleave', function(){
        console.log('mouse leave the h1');
    });

    // create an ul with 3 li
