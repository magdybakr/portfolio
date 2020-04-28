

// navbar background color change on scroll
$(window).on('load', function() {
    $('#inner').delay(10000).fadeOut();
    $('#preloader').delay(800).fadeOut();

    // start navbar shuffle



});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll < 100) {
    $("#mainNav").css("background", "transparent");
  } else {
    $("#mainNav").css("background", "rgba(0, 0, 0, 0.75)");
  }
});
