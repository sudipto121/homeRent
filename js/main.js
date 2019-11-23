$(document).ready(function(){
  // Super Slide
    $('#slides').superslides({
        play: 5000,
        animation:'fade',
        pagination: false
    });  
     //Counter js
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
});
