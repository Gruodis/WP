// Rasome funkcija responsive langui
let intWV2;
const bodyClass = document.querySelector('body');
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

        if (intWV2 <= 480) {
            console.log(`XXX`, intWV2);

        } else {
            console.log(`WWW`, intWV2);

            let zzz = bodyClass.classList.contains('fixedMobileBody'); // true

            if (zzz === true) {
                console.log(`bodyClass`, zzz);
                document.body.classList.remove('fixedMobileBody');
            }
        }
    }, 1000);

});

const inputId2 = document.querySelector('[id^="mphb_check_out_date-"]');
const inputId = document.querySelector('[id^="mphb_check_in_date-"]');
let scrollBlock = () => {

    console.log(`Gogogo`);


    inputId.addEventListener("click", () => {

        const cal = document.querySelector('.datepick-popup');

        if ((cal != null) && (intWV2 <= 480)) {
            document.body.classList.add('fixedMobileBody');
            console.log(`Add class clickInput iD1`);
            inputId.disabled = true;
        }


    });

    inputId2.addEventListener("click", () => {

        const cal = document.querySelector('.datepick-popup');


        if ((cal != null) && (intWV2 <= 480)) {
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
    //	
}

if (intWV2 <= 480) {
    console.log(`KKK`, intWV2);
    scrollBlock();
}

inputId2.removeEventListener("click", scrollBlock);


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
