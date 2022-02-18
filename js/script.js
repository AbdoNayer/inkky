// Window Load screen

$(window).on('load', function () {

    // Loading Page
    $(".loader").fadeOut(500,function(){
        $(".loading").delay(1000).fadeOut(500);
    });
    $("body").css("overflow-y", "auto");

    // Animation Page
    AOS.init();

});


$(document).ready(function () {

    // Click Open Nav Mobile

    $(document).on("click", ".click-nav",function() {
        $(".handle").toggleClass("closed bgDefault");
        $(".click-nav").toggleClass("m-0");
        $(".list-item").toggleClass("back");
    });

    // Owl Slider

    $('#sliderHome').owlCarousel({
        loop:true,
        margin:0,
        center:true,
        autoplay:true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 7000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arrow-left"></i>',
            '<i class="icon-arrow-right"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});