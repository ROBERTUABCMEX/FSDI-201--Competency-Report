$(function(){
   /* $('img#logo').on('click',function(){
        $('main').load('../services.html');
    });
})*/

$('main').on('click',loadAjax);

function loadAjax(){
    $.ajax("test/pets.txt",{
        success:addContent,
        type:"GET",
        dataType:'text'
    });
 }
  
 function addContent(data,status,jqxhr){
    $('footer'),text(data);
      console.log(status);
 }

});