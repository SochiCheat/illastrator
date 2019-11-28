$(document).ready(function(){		
  $('footer').css('opacity', 0);
  $('footer').hover(
    
    function () {
      $(this).fadeTo("slow", .7);
    }, 
    function () {
      $(this).css('opacity', .7);
      $(this).fadeTo("slow", 0);
    }    
       
 );

});