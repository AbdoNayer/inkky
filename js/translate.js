$(window).on('load', function () {

    let lang    = localStorage.getItem("langPage");

    function valName(val, text){
        document.getElementById(val).innerHTML = text;
    }

    function valInput(val, text){
        document.getElementById(val).placeholder = text;
    }

    if(lang === 'ar'){
        valName(`logo`,                     `Sh3wiZo`);
        valName(`nameHome`,                 `الرئيسية`);
        valName(`nameAbout`,                `من نحن`);
        valName(`nameServices`,             `خدمات`);
        valName(`projects`,                 `المشاريع`);
        valName(`nameTestimonials`,         `الشهادات`);
        valName(`nameContact`,              `إتصل بنا`);
        valName(`hello`,                    `اهلاََ بكم ...`);
        valName(`text-1`,                   `هنا موقع التصميمات الرائعة`);
        valName(`text-2`,                   `كل الآمكانيات الخاصة`);
        valName(`text-3`,                   `مشاهدة احدث العروض`);
        valName(`text-4`,                   `زيادة عدد المشاهدين`);
        valName(`text-5`,                   `نسبة الرابحين`);
        valName(`infoChoose`,               `كل الآشياء التي تريدها هنا علي اعلي مستوي من الخدمه .. وزياده عدد المشاهدين والرابحين تصفح الان  ، واشترك معنا`);
        valName(`titleAbout`,               `من نحن`);
        valName(`infoAbout`,                `منتجاتنا مصنوعة خصيصًا بالكامل ومصممة بأحدث التقنيات وبنيات السحابة.`);
        valName(`li1`,                      `تصميم المواقع وتصميم الابلكيشن`);
        valName(`li2`,                      `كتابه كود من آحسن التقنيات الحديثه`);
        valName(`li3`,                      `عمل خلفيات من آحدث الخلفيات`);
        valName(`li4`,                      `منظمات وتحديثات وتحديات ف كل مجال`);
        valName(`titleServices`,            `الخدمات`);
        valName(`all`,                      `الكل`);
        valName(`webDes`,                   `تصميم المواقع`);
        valName(`react`,                    `مواقع رياكت`);
        valName(`netive`,                   `تطبيقات`);
        valName(`sentForm`,                 `إرسال`);
        valInput(`inName`,                  `الاسم بالكامل`);
        valInput(`inMobile`,                `رقم الهاتف`);
        valInput(`inEmail`,                 `البريد الالكتروني`);
        valInput(`inInfo`,                  `الرساله`);
        // valName(``,                         ``);
    }else if(lang === 'en'){
        valName(`logo`,                     `Sh3wiZo`);
        valName(`nameHome`,                 `Home`);
        valName(`nameAbout`,                `About`);
        valName(`nameServices`,             `Services`);
        valName(`projects`,                 `projects`);
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
        valName(`titleServices`,            `Our Services`);
        valName(`all`,                      `All`);
        valName(`webDes`,                   `Web Developer`);
        valName(`react`,                    `React Js`);
        valName(`netive`,                   `React Native`);
        valName(`sentForm`,                 `Sent`);
        valInput(`inName`,                  `full name`);
        valInput(`inMobile`,                `phone`);
        valInput(`inEmail`,                 `email`);
        valInput(`inInfo`,                  `message`);
        // valName(``,                         ``);
    }else {
        valName(`logo`,                     `Sh3wiZo`);
        valName(`nameHome`,                 `الرئيسية`);
        valName(`nameAbout`,                `من نحن`);
        valName(`nameServices`,             `خدمات`);
        valName(`projects`,                 `المشاريع`);
        valName(`nameTestimonials`,         `الشهادات`);
        valName(`nameContact`,              `إتصل بنا`);
        valName(`hello`,                    `اهلاََ بكم ...`);
        valName(`text-1`,                   `هنا موقع التصميمات الرائعة`);
        valName(`text-2`,                   `كل الآمكانيات الخاصة`);
        valName(`text-3`,                   `مشاهدة احدث العروض`);
        valName(`text-4`,                   `زيادة عدد المشاهدين`);
        valName(`text-5`,                   `نسبة الرابحين`);
        valName(`infoChoose`,               `كل الآشياء التي تريدها هنا علي اعلي مستوي من الخدمه .. وزياده عدد المشاهدين والرابحين تصفح الان  ، واشترك معنا`);
        valName(`titleAbout`,               `من نحن`);
        valName(`infoAbout`,                `منتجاتنا مصنوعة خصيصًا بالكامل ومصممة بأحدث التقنيات وبنيات السحابة.`);
        valName(`li1`,                      `تصميم المواقع وتصميم الابلكيشن`);
        valName(`li2`,                      `كتابه كود من آحسن التقنيات الحديثه`);
        valName(`li3`,                      `عمل خلفيات من آحدث الخلفيات`);
        valName(`li4`,                      `منظمات وتحديثات وتحديات ف كل مجال`);
        valName(`titleServices`,            `الخدمات`);
        valName(`all`,                      `الكل`);
        valName(`webDes`,                   `تصميم المواقع`);
        valName(`react`,                    `مواقع رياكت`);
        valName(`netive`,                   `تطبيقات`);
        valName(`sentForm`,                 `إرسال`);
        valInput(`inName`,                  `الاسم بالكامل`);
        valInput(`inMobile`,                `رقم الهاتف`);
        valInput(`inEmail`,                 `البريد الالكتروني`);
        valInput(`inInfo`,                  `الرساله`);
        // valName(``,                         ``);
    }
});
