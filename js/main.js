(function($) {
    $(function() {
        $('.button-collapse').sideNav();
        // $('.scrollspy').scrollSpy({scrollOffset:0});

        // $('.modal-trigger').leanModal();

        // $('#lightgallery').lightGallery();

        $('.scrollspy').scrollSpy({scrollOffset: 50});




// menu collapse
        $('.button-collapse').sideNav({
            menuWidth: 240,
            edge: 'left',
            closeOnClick: true
        });
// animation
        new WOW().init();
    });
})(jQuery);

// preloader
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(500).fadeOut('slow');

	$('.preloader-wrapper')
		.delay(500)
		.fadeIn();
});



$(document).ready(function(){
         $('ul.tabs').tabs();
       });


// video
var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
    // only functional if "loop" is removed
     vid.pause();
	// to capture IE10
	vidFade();
});
pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
	if (vid.paused) {
vid.play();
		pauseButton.innerHTML = "II";
	} else {
        vid.pause();
        pauseButton.innerHTML = "►";
	}
})

// scroll to top button
$(document).ready(function() {
if ($('.mbr-arrow-up').length) {
    var $scroller = $('#scrollToTop'),
        $main = $('body,html'),
        $window = $(window);
    $scroller.css('display', 'none');
    $window.scroll(function () {
    if ($(this).scrollTop() > 0) {
        $scroller.fadeIn();
    } else {
        $scroller.fadeOut();
    }
    });
    $scroller.click(function() {
        $main.animate({
            scrollTop: 0
        }, 400);
        return false;
    });
}
});

// Owl Carousel init
$(document).ready(function()
{
  var carousel = $(".owl-carousel");
	if(carousel.length > 0)
	{
		var data = carousel.data();
		$(".owl-carousel").owlCarousel(data);
	}
});

// slider mtz
$(document).ready(function(){
  $('.slider').slider({full_width: true});
});
