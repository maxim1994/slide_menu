// JavaScript Document

$(document).ready( function(){

    //slider
    $('.bxslider').bxSlider();
    
    //menu
    $('.a-nav',this).toggle(function(){
        $('ul.sub').slideDown(300);
        $(this).css({
         '-webkit-box-shadow': '0px 10px 6px -11px rgba(0,0,0,0.75)',
        '-moz-box-shadow': '0px 10px 6px -11px rgba(0,0,0,0.75)',
        'box-shadow': '0px 10px 6px -11px rgba(0,0,0,0.75)',
        'color': '#ffffff',
        'text-shadow': '-1px -1px 30px rgba(255, 255, 255, 0.72)',
        'background': 'url(./img/img-noise-170x53.png)',
    });}
    ,function(){
        $('ul.sub').slideUp(300);
        $(this).css({
            'background': 'none',
            'color': '#454444'
        });
    });
  
     $('.bg-kip').click(function(){
        $('.sub').slideUp(500)
        $('.a-nav').css({
            'background': 'none',
            'color': '#454444'
        });
        });
        
  //radio button 
  $('input').iCheck({
    checkboxClass: 'icheckbox_polaris',
    radioClass: 'iradio_polaris',
  }); 

});//end ready 