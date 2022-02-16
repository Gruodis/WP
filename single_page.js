// Slick
// =====

jQuery('.gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    centerMode: true,
    focusOnSelect: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                autoplay: false,
            }
        }
    ]
});
//jQuery(".gallery .slick-slide.slick-cloned a").removeAttr("data-fancybox");

// ================================================
// Attach custom click event on cloned elements,
// trigger click event on corresponding link.
// Note: This will work for all sliders on the page
// ================================================

// jQuery(document).on('click', '.slick-cloned', function(e) {
//  var $slides =  jQuery(this)
//    .parent()
//    .children('.slick-slide:not(.slick-cloned)');
//
//  $slides
//    .eq( (  jQuery(this).attr("data-slick-index") || 0) % $slides.length )
//    .trigger("click.fb-start", { $trigger:  jQuery(this) });
//
//  return false;
//});
// jQuery implementation



// remove commas from custom atrributes in room summary
const forms = document.getElementsByTagName('form')[0];
if (forms) {
let tags = document.querySelectorAll('.mphb-single-room-type-attributes li .mphb-attribute-value');
console.log(`tags`, tags);
for (i = 0; i < tags.length; i++) {
    tags[i].innerHTML = tags[i].innerHTML.replace(/\,/g, '');
}

// block page scrolling when datepick opened for small devices

const bodyClass = document.querySelector('body');
const inputId2 = document.querySelector('[id^="mphb_check_out_date-"]');
const inputId = document.querySelector('[id^="mphb_check_in_date-"]');
    let windowInnerWidth;
//let intVH2;
let responsiveWindow = () => {
    windowInnerWidth = window.innerWidth;
    //  intVH2 = window.innerHeight;
    console.log(`YYY`, windowInnerWidth);
}
responsiveWindow();

// iskvieciame responsive funkcija su listneriu 'resize'
window.addEventListener('resize', () => {

    responsiveWindow();

    console.log(`responsive onResize`, windowInnerWidth);
    setTimeout(() => {
        scrollBlock();

        if (windowInnerWidth <= 480) {
            console.log(`XXX`, windowInnerWidth);

        } else {
            console.log(`WWW`, windowInnerWidth);

            let zzz = bodyClass.classList.contains('fixedMobileBody'); // true

            if (zzz === true) {
                console.log(`bodyClass`, zzz);
                document.body.classList.remove('fixedMobileBody');
            }
        }
    }, 600);

});


let scrollBlock = () => {

    console.log(`Gogogo`);

    inputId.addEventListener("click", () => {

        const cal = document.querySelector('.datepick-popup');

        if ((cal != null) && (windowInnerWidth <= 480)) {
            document.body.classList.add('fixedMobileBody');
            console.log(`Add class clickInput iD1`);
            inputId.disabled = true;
        }


    });

    inputId2.addEventListener("click", () => {

        const cal = document.querySelector('.datepick-popup');

        if ((cal != null) && (windowInnerWidth <= 480)) {
            document.body.classList.add('fixedMobileBody');
            console.log(`Add class clickInput ID2 ==`);
            inputId2.disabled = true;
        }

    });


    document.body.addEventListener('click', () => {
        setTimeout(() => {
            const cal = document.querySelector('.datepick-popup');
            if (cal != null) {
                //	document.body.classList.add('fixedMobileBody');
                console.log(`IF body Click do nothing `);

            } else {
                let zzz = bodyClass.classList.contains('fixedMobileBody'); // true

                if (zzz === true) {


                    document.body.classList.remove('fixedMobileBody');
                    console.log(`Else body Click remove class `);
                    inputId.disabled = false;
                    inputId2.disabled = false;
                }
            }
        }, 600);

    });
}
    if (windowInnerWidth <= 480) {
        console.log(`First Go Scroll`, windowInnerWidth);
    scrollBlock();
}

    // scroll to Booking button

    const checkAvailabilityBtn = document.querySelector('.mphb-reserve-btn');

    checkAvailabilityBtn.addEventListener("click", () => {

        console.log(`BTN scroll `, checkAvailabilityBtn);
        checkAvailabilityBtn.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

    });
}