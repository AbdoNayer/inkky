$(window).on('load', function () {

    let lang    = localStorage.getItem("langPage");

    function valName(val, text){
        document.getElementById(val).innerHTML = text;
    }

    if(lang === 'ar'){
        valName(`logo`,                     `Sh3wZa`);
        valName(`nameHome`,                 `الرئيسية`);
        valName(`nameAbout`,                `من نحن`);
        valName(`nameServices`,             `خدمات`);
        valName(`nameStudies`,              `دراسات الحالة`);
        valName(`nameTestimonials`,         `الشهادات`);
        valName(`nameContact`,              `إتصل بنا`);
        valName(`doneChoose`,               `اهلا بك ف الآختيار الصحيح`);
        valName(`infoChoose`,               `أولهما : أن كل ثقافة حقيقية هي ” اختيار ” و ” مجهود ” ، وأنت لا تختار ما تسمعه في المذياع ولا ما تراه في السينما أو التلفاز`);
        valName(`titleAbout`,               `من نحن`);
        valName(`infoAbout`,                `منتجاتنا مصنوعة خصيصًا بالكامل ومصممة بأحدث التقنيات وبنيات السحابة.`);
        valName(`li1`,                      `تصميم المواقع وتصميم الابلكيشن`);
        valName(`li2`,                      `كتابه كود من آحسن التقنيات الحديثه`);
        valName(`li3`,                      `عمل خلفيات من آحدث الخلفيات`);
        valName(`li4`,                      `منظمات وتحديثات وتحديات ف كل مجال`);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
    }else if(lang === 'en'){
        valName(`logo`,                     `Sh3wZa`);
        valName(`nameHome`,                 `Home`);
        valName(`nameAbout`,                `About`);
        valName(`nameServices`,             `Services`);
        valName(`nameStudies`,              `Studies`);
        valName(`nameTestimonials`,         `Testimonials`);
        valName(`nameContact`,              `Contact`);
        valName(`doneChoose`,               `Welcome To The Right Choice`);
        valName(`infoChoose`,               `The first is that every true culture is a “choice” and an “effort.” You don't choose what you hear on the radio or what you see in the movies or on TV`);
        valName(`titleAbout`,               `About Us`);
        valName(`infoAbout`,                `Our products are fully custom-made, built with the latest technologies and cloud-architectures.`);
        valName(`li1`,                      `Website design and app design`);
        valName(`li2`,                      `Writing a code is one of the best modern technologies`);
        valName(`li3`,                      `Make wallpapers from the latest backgrounds`);
        valName(`li4`,                      `Organizations, updates and challenges in every field`);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
    }else {
        valName(`nameHome`,                 `الرئيسية`);
        valName(`nameAbout`,                `من نحن`);
        valName(`nameServices`,             `خدمات`);
        valName(`nameStudies`,              `دراسات الحالة`);
        valName(`nameTestimonials`,         `الشهادات`);
        valName(`nameContact`,              `إتصل بنا`);
        valName(`doneChoose`,               `اهلا بك ف الآختيار الصحيح`);
        valName(`infoChoose`,               `أولهما : أن كل ثقافة حقيقية هي ” اختيار ” و ” مجهود ” ، وأنت لا تختار ما تسمعه في المذياع ولا ما تراه في السينما أو التلفاز`);
    }
});
