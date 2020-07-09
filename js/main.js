

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

$(function(){
    // this will get the full URL at the address bar
    var url = window.location.href; 

    // passes on every "a" tag 
    $("#mainNav a").click.each(function() {
            // checks if its the same on the address bar
        if(url == (this.href)) { 
            $(this).closest("li").addClass("live-section");
        }
    });
});
