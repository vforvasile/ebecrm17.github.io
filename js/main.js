(function($) {
    $(function() {
        $('.button-collapse').sideNav();
        // $('.scrollspy').scrollSpy({scrollOffset:0});
        $('#lightgallery').lightGallery();


        $('.button-collapse').sideNav({
            menuWidth: 240,
            edge: 'left',
            closeOnClick: true
        });
        // $('.parallax').parallax();
        // var card = document.querySelectorAll('.card-work');
        // var transEndEventNames = {
        //         'WebkitTransition': 'webkitTransitionEnd',
        //         'MozTransition': 'transitionend',
        //         'transition': 'transitionend'
        //     },
        //     transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];

    });
    // $(document).ready(function(){
    //     $(window).scroll(function(){
    //         if ($(this).scrollTop() > 450) {
    //             $('#nav_f').fadeIn(700);
    //         } else {
    //             $('#nav_f').fadeOut(700);
    //         }
    //     });
    // });
})(jQuery);
