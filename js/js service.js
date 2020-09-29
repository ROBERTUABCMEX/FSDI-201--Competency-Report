function initService(){
 
    $('#shower').hide();
    $('#nailscut').hide();

    $('#shower-btn').on('click',function(){
        $('#shower').show();
        $('#nailscut').hide();
        $('#fullservices').hide();
    });

    $('#nailscut-btn').on('click',function(){
        $('#shower').hide();
        $('#nailscut').show();
        $('#fullservices').hide();
    });

    $('#fullservices-btn').on('click',function(){
        $('#shower').hide();
        $('#nailscut').hide();
        $('#fullservices').show();
    });
}

window.onload=initService;