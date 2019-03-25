$(function() {
   $('.nv_top').on('click', function() {
    $('.nv_top').addClass('anime01');
    $(this).click(function() {
     $('.nv_top').delay(1000).queue(function() {
      $(this).removeClass('anime01').dequeue();
     });
    });
   });
   $('.nv_about').on('click', function() {
    $('.nv_about').addClass('anime01');
    $(this).click(function() {
     $('.nv_about').delay(1000).queue(function() {
      $(this).removeClass('anime01').dequeue();
     });
    });
   });
   $('.nv_works').on('click', function() {
    $('.nv_works').addClass('anime01');
    $(this).click(function() {
     $('.nv_works').delay(1000).queue(function() {
      $(this).removeClass('anime01').dequeue();
     });
    });
   });
   $('.nv_contact').on('click', function() {
    $('.nv_contact').addClass('anime01');
    $(this).click(function() {
     $('.nv_contact').delay(1000).queue(function() {
      $(this).removeClass('anime01').dequeue();
     });
    });
   });
  });
