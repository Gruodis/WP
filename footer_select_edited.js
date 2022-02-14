
// Open thumbs view straight away for demo purposes
 //jQuery.fancybox.defaults.thumbs.autoStart = false;

// ============================
// Init 1st slider and fancybox
// ============================



// ============================
// Init 2nd slider and fancybox
// ============================

// fancybox


// Slick
// =====

jQuery('.gallery').slick({
	slidesToShow: 3,
	slidesToScroll: 2,
	autoplay: false,
	autoplaySpeed: 2000,
	infinite : true,
	dots     : false,
	arrows   : true,
	adaptiveHeight: true,
	 centerMode: true,
  focusOnSelect: false,
	  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
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

jQuery(function () {
    var $src = jQuery('#mphb_first_name'),
        $dst = jQuery('#mphb_room_details-0-guest-name');
    $src.on('input', function () {
        $dst.val($src.val());
    });
});// JavaScript Document
		
///////////////////////////////////
//$(".datepicker").datepick({
//			minDate: 0,
//			numberOfMonths: [12,1],
//			beforeShowDay: function(date) {
//				var date1 = $.datepick.parseDate($.datepick._defaults.dateFormat, $("#mphb_check_in_date-mphb-search-form-60c7436032acf").val());
//				var date2 = $.datepick.parseDate($.datepick._defaults.dateFormat, $("#mphb_check_out_date-mphb-search-form-60c7436032acf").val());
//				return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];
//			},
//			onSelect: function(dateText, inst) {
//				var date1 = $.datepick.parseDate($.datepick._defaults.dateFormat, $("#mphb_check_in_date-mphb-search-form-60c7436032acf").val());
//				var date2 = $.datepick.parseDate($.datepick._defaults.dateFormat, $("#mphb_check_out_date-mphb-search-form-60c7436032acf").val());
//				if (!date1 || date2) {
//					$("#mphb_check_in_date-mphb-search-form-60c7436032acf").val(dateText);
//					$("#mphb_check_out_date-mphb-search-form-60c7436032acf").val("");
//                    $(this).datepick();
//				} else {
//					$("#mphb_check_out_date-mphb-search-form-60c7436032acf").val(dateText);
//                    $(this).datepick();
//				}
//			}
//		});
		
		
/////////////////////////////////////////////////////////////////////		
//var prevVal;
//jQuery("#mphb_room_details-0-adults").on("change",function(){
//  var val = jQuery(this).find('option:selected').val();
//  jQuery(".mphb_sc_checkout-guests-chooser").removeClass(`mphb_sc_checkout-guests-chooser-red`).addClass(`mphb_sc_checkout-guests-chooser-red`);
//});
////////////////////////////////////////////////////////////////////////		
		jQuery('.mphb_room_details-0-service-1710-id em').each(function() {
    var text = jQuery(this).text();
    jQuery(this).html(text.replace('/ Per Instance)', '/ už valandą)')); 
});


   // document.getElementById('foo').validity.customError; //false
   // document.getElementById('mphb_first_name').setCustomValidity('Netinkamas lauko uzpildymas');

//	const submit = document.getElementById(".submit");
//
//submit.addEventListener('change', validate);
//
//function validate(e) {
//  e.preventDefault();
//
//  const firstNameField = document.getElementById("mphb_first_name");
//  let valid = true;
//
//  if (!firstNameField.value) {
//    const nameError = document.getElementById("nameError");
//    nameError.classList.add("visible");
//    firstNameField.classList.add("invalid");
//    nameError.setAttribute('aria-hidden', false);
//    nameError.setAttribute('aria-invalid', true);
//
//  }
//
//
//  return valid;
//}
//	var selectobject = document.getElementById("mphb_room_details-0-adults");
//	console.log(`value`, selectobject.length , selectobject)
//for (var i=1; i<selectobject.length; i++) {
//    if ((selectobject.options[i].value != "8"))
//		
//		console.log(`value`, selectobject.options[i].value, selectobject.length)
//        selectobject.options[i].value = "NE"
////	selectobject.querySelector('[name=type]').value = '0';
//
//}
//let body = document.getElementsByTagName('body');
//	 console.log(`body`, body)
//	//body.classList.add("fixed");
//	body.classList.add("anotherclass");
	
// Rasome funkcija responsive langui

const bodyClass = document.querySelector('body');
const inputId2 = document.querySelector('[id^="mphb_check_out_date-"]');
const inputId = document.querySelector('[id^="mphb_check_in_date-"]');
let intWV2;
//let intVH2;
let responsiveWindow = () => {
    intWV2 = window.innerWidth;
  //  intVH2 = window.innerHeight;
	console.log(`YYY`, intWV2);
}
responsiveWindow();

// iskvieciame responsive funkcija su listneriu 'resize'
window.addEventListener('resize', () => {
	
	responsiveWindow();
	
	console.log(`responsive onResize`, intWV2);
setTimeout(() => {	
	scrollBlock();
	
	if(intWV2 <= 480 && inputId != null && inputId2 != null ){
		console.log(`XXX`, intWV2);
		
} else if (inputId != null && inputId2 != null) {
	console.log(`WWW`, intWV2);
	
let zzz = bodyClass.classList.contains('fixedMobileBody'); // true
	
	if(zzz === true) {
	console.log(`bodyClass`, zzz);
	document.body.classList.remove('fixedMobileBody');
	}
}
}, 600);
	
});


let scrollBlock = () => {

	console.log(`Gogogo`);
	
//let inputId3 = document.querySelector('[id^="mphb_check_out_date-"] + [type="hidden"]');
//let inputId4 = document.querySelector('[id^="mphb_check_in_date-"] + [type="hidden"]');

	//console.log( `In `, inputId, ` Out `, inputId2, `id3`, inputId3.value, `id4`, inputId4.value);
	
inputId.addEventListener("click", () => {
	//const popup = document.querySelectorAll('.datepick-popup');
const cal = document.querySelector('.datepick-popup');

//document.body.classList.add('fixedMobileBody');
	//console.log(`Add class ID1 console`);
	// setTimeout(() => {

//console.log(cal, `In `, inputId, ` Out `, inputId2, `id3`, inputId3.value, `id4`, inputId4.value);	
	// }, 500);
	
	if((cal != null) && (intWV2 <= 480 )) {
		document.body.classList.add('fixedMobileBody');
		console.log(`Add class clickInput iD1`);
		inputId.disabled = true;
	}
	
	
 });

	inputId2.addEventListener("click", () => {
	//const popup = document.querySelectorAll('.datepick-popup');
const cal = document.querySelector('.datepick-popup');	
//document.body.classList.add('fixedMobileBody');
	//console.log(`Add class ID2 console =`);
	// setTimeout(() => {

//console.log(cal, `In `, inputId, ` Out `, inputId2, `id3`, inputId3.value, `id4`, inputId4.value);	
	// }, 500);
	
	if((cal != null) && (intWV2 <= 480 )) {
		document.body.classList.add('fixedMobileBody');
		console.log(`Add class clickInput ID2 ==`);
		inputId2.disabled = true;
	}
		
 });

	
document.body.addEventListener('click', () => {
	setTimeout(() => {
const cal = document.querySelector('.datepick-popup');
		if(cal != null) {
	//	document.body.classList.add('fixedMobileBody');
		console.log(`IF body Click do nothing `);
			
	} else {
		let zzz = bodyClass.classList.contains('fixedMobileBody'); // true
	
	if(zzz === true) {

	
		document.body.classList.remove('fixedMobileBody');
		console.log(`Else body Click remove class `);
		inputId.disabled = false;
		inputId2.disabled = false;
	}
	}
	}, 600);
	
});	
//	
	

//inputId4.addEventListener("change", (f) => {
//
//document.body.classList.remove('fixedMobileBody');
//	//console.log(`remove class`, inputId3 = document.querySelector('[id^="mphb_check_out_date-"] + [type="hidden"]').value);
// });
//inputId3.addEventListener("change", (e) => {
//
//document.body.classList.remove('fixedMobileBody');
//	console.log(`remove class`);
// });
//	inputId.removeEventListener("click", scrollBlock);
//	inputId2.removeEventListener("click", scrollBlock);

}

if(intWV2 <= 480 && inputId != null && inputId2 != null ){
		console.log(`KKK`, intWV2);
		scrollBlock();
}

//const inputas = document.querySelector('[id^="mphb_check_out_date-"] + [type="hidden"]');  
//	console.log(`inputas`, inputas);
//inputas.addEventListener('change', (e) => {  
//  console.log(e.target.value);  
//});

// Select required elements from the DOM
//        const modal = document.querySelector("#modal");
//        const body = document.querySelector("body");
//  
//        const showModal = function (e) {
//            modal.classList.toggle("hidden");
//  
//            if (!modal.classList.contains("hidden")) {
//                // Disable scroll
//                body.style.overflow = "hidden";
//            } else {
//                // Enable scroll
//                body.style.overflow = "auto";
//            }
//        };
	
const theSelect = document.getElementById('mphb_room_details-0-adults');

let condition = true;
if (theSelect != null) {



    if (theSelect.length > 11) {
        condition = true; // your condition
        console.log(`value True`)
    }
    else {
        condition = false;
        console.log(`value False 1`)
    }
}
else {
    condition = false;
    console.log(`value False 2`)
}
if (condition) {

    console.log(`value`, theSelect.length, theSelect)

    let options = theSelect.getElementsByTagName('OPTION');
    console.log(`value`, options.length, options)

    for (let i = 0; i < options.length; i++) {
        if (options[i].innerHTML < 10) {
            theSelect.removeChild(options[i]);
            i--; // options have now less element, then decrease i
        }
    }


}
const theSelectChild = document.getElementById('mphb_room_details-0-children');
let condition2 = true;
if (theSelectChild != null) {

    condition2 = true; // your condition

}
else {
    condition2 = false;
    console.log(`Child False 2`)
}
if (condition2) {
    document.getElementById('mphb_room_details-0-adults').addEventListener("change", () => {
        setTimeout(() => {
            const optionsChild = theSelectChild.getElementsByTagName('OPTION');
            console.log(` Child length #1`, optionsChild.length);
            for (let i = 0; i < optionsChild.length; i++) {
                if (optionsChild.length < 3) {

                    console.log(` Child 2 value`, optionsChild[i].value);
                    document.getElementById('mphb_room_details-0-children').value = '0';
                }
            }
            console.log("Input Select", theSelect.value, ` Child 2`, optionsChild.length);
        }, 100);
    })
}
	
	//inputs.setAttribute("name", "helloButton");
let checkOut = document.querySelector('[name=mphb_check_out_date]');
console.log(`value`, checkOut);
	 //checkOut.setAttribute("class", "helloButton");

window.onload = function(){
  let tags = document.querySelectorAll('.mphb-single-room-type-attributes li .mphb-attribute-value');
	console.log(`tags`, tags);
  for(i=0;i<tags.length;i++)
    tags[i].innerHTML = tags[i].innerHTML.replace(/\,/g,'');
}
