$(function(){
    'use strict';

    var services=['Nails cut', 'Shower', 'Full service', 'Gold service'];
    console.log(sevices);

    $.each(services,function(i,v){
        if(i==0){
            $('#services').append('<h3> services </h3>');
        }
        $('services').append (<li> ${v} </li>);
            
        });
})