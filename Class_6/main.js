    $(document).ready(function(){
        $('.carousel').carousel({interval: 500, keyboard:true});
    //keyboard: false means that it will not react to the keyboard event. 
    //({parameter1:
      //parameter2:  
        //})
    });

    $(".carousel-pauser").click(function() {
        $('.carousel').carousel('pause');
    });

    $('.carousel').on('slid.bs.carousel', function(event){
        console.log(event);
        //console.log info what happened on the page
    });

    $('.modal-popper').click(function(){
      $('.modal').modal({
        backdrop: 'static'
        //backdrop; 'static' will not close it if you click outside, 'true' will close it 
    });
});
