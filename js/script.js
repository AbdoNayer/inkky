// Window Load screen

$(window).on('load', function () {

    // Color Theme Page
    let valColor    = localStorage.getItem('valColor');
    let root        = document.querySelector(':root');
    if(valColor){
        root.style.setProperty('--mainColor', valColor);
    }else{
        root.style.setProperty('--mainColor', '#0E77FF');
    }

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

    // Change Color Theme

    $(document).on("click", ".theme-color button",function() {
        let root = document.querySelector(':root');
        root.style.setProperty('--mainColor', $(this).data('color'));
        localStorage.setItem('valColor',  $(this).data('color'));
    });
    
    // Change Lang



    // Owl Slider

    // $('#sliderHome').owlCarousel({
    //     loop:true,
    //     margin:0,
    //     center:true,
    //     autoplay:true,
    //     autoplayTimeout: 7000,
    //     smartSpeed: 1000,
    //     animateOut: 'fadeOut',
    //     dragEndSpeed: 7000,
    //     pagination : false,
    //     nav:true,
    //     navText: [
    //         '<i class="icon-arrow-left"></i>',
    //         '<i class="icon-arrow-right"></i>'
    //     ],
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         900:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // });

});