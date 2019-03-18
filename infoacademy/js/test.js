(function ($) {
  $('.dd_toggle').click(function () {
    $(this).children('ul').slideToggle(300);
    $(this).find('i').toggleClass('rotate');
  });
});
