$(document).ready(function(){
    $('.carousel').carousel({interval: 3000, keyboard:true});
    $('.modal').modal({
        backdrop: 'static',    
       
    });
    
});


$('.carousel').on('slid.bs.carousel', function(event){
    console.log(event);
  
});