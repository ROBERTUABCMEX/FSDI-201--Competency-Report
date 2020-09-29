$(function(){
'use strict';

$('img#logo').css({'width':'100px'});
$('header h2').css({
    'color':'#858584',
    'text-transform':'uppercase'
});

function changeColor(){
    $('nav.menu').css({'background-color':'red'});
}

function defaultcolor(){
    $('nav.menu').css({'background-color':'white'});
}
  $('nav.menu').on('nouseenter', changeColor);
  $ ('nav.menu').on('nouseenter', changeColor);
})