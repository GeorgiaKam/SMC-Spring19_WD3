$(document).ready(function(){
    
    $('.carousel').carousel({interval: 5000, keyboard:true});
    
    
});


$('.carousel').on('slid.bs.carousel', function(event){
    console.log(event);});



    