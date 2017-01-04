(function($) {
    $(function() {
        $('.button-collapse').sideNav();
        // $('.scrollspy').scrollSpy({scrollOffset:0});

        // $('.modal-trigger').leanModal();

        // $('#lightgallery').lightGallery();

        $('.scrollspy').scrollSpy({scrollOffset: 50});





        $('.button-collapse').sideNav({
            menuWidth: 240,
            edge: 'left',
            closeOnClick: true
        });

        new WOW().init();
    });
})(jQuery);


document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');

	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});
