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

    // Set Lang On Page Load
    const lang = localStorage.getItem("langPage");

    if(lang === 'ar'){
        $( "html" ).attr("dir", "rtl");
        document.getElementsByClassName("btn-lang").value =  'en';
        $(".btn-lang").text('EN');
    }else if(lang === 'en'){
        $( "html" ).attr("dir", "ltr");
        document.getElementsByClassName("btn-lang").value =  'ar';
        $(".btn-lang").text('AR')
    }else {
        $( "html" ).attr("dir", "rtl");
        document.getElementsByClassName("btn-lang").value =  'en';
        $(".btn-lang").text('EN');
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

    // Click Add class Link
    $(document).on("click", ".header ul li",function(e) {
        e.preventDefault()
        $(this).addClass('active').siblings().removeClass('active');
        const marker            = document.querySelector(".header ul .marker");
        marker.style.left       = e.target.offsetLeft  - 10     + "px";
        marker.style.width      = e.target.offsetWidth + 20     + "px";
    });

    // Change Color Theme
    $(document).on("click", ".theme-color button",function() {
        let root = document.querySelector(':root');
        root.style.setProperty('--mainColor', $(this).data('color'));
        localStorage.setItem('valColor',  $(this).data('color'));
    });
    
    // Change Lang
    $(document).on("click", ".btn-lang",function() {
        location.reload();
        const LangVal   = document.getElementsByClassName("btn-lang").value;
        localStorage.setItem("langPage", LangVal);
    });
    
    // Click Setting Color Page
    $(document).on("click", ".btn-setting",function() {
        $('.theme-color').toggleClass('back')
    });

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