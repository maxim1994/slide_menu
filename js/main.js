// JavaScript Document

$(document).ready( function(){

    //slider
    $('.bxslider').bxSlider();
    
    //menu
    $("ul.sub").prev('a').click(function(){
        $(this).next('.sub').slideDown(250);
        return false;
    });
   
  

});//end ready 