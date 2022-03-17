$(window).on('load', function () {

    let lang    = localStorage.getItem("langPage");

    function valName(val, text){
        document.getElementById(val).innerHTML = text;
    }

    if(lang === 'ar'){
        valName('nameHome',                 'الرئيسية');
        valName('nameAbout',                'من نحن');
        valName('nameServices',             'خدمات');
        valName('nameStudies',              'دراسات الحالة');
        valName('nameTestimonials',         'الشهادات');
        valName('nameContact',              'إتصل بنا');
    }else if(lang === 'en'){
        valName('nameHome',                 'Home');
        valName('nameAbout',                'About');
        valName('nameServices',             'Services');
        valName('nameStudies',              'Studies');
        valName('nameTestimonials',         'Testimonials');
        valName('nameContact',              'Contact');
    }else {
        valName('nameHome',                 'الرئيسية');
        valName('nameAbout',                'من نحن');
        valName('nameServices',             'خدمات');
        valName('nameStudies',              'دراسات الحالة');
        valName('nameTestimonials',         'الشهادات');
        valName('nameContact',              'إتصل بنا');
    }

});
