

$(document).ready(function () {

    $('#testmonial').owlCarousel({
        autoplay: true,
        rtl: true,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        center: true,
        margin: 10,
        transitionStyle: true,
        autoplayTimeout: 2000,
        navText: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('#works').owlCarousel({
        autoplay: true,
        rtl: true,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        center: true,
        margin: 40,
        transitionStyle: true,
        autoplayTimeout: 2000,
        navText: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('#client').owlCarousel({
        autoplay: true,
        rtl: true,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        margin: 10,
        transitionStyle: true,
        autoplayTimeout: 10000,
        navText: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 7
            }
        }
    });


});




