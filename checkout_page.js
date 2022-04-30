const theSelect = document.getElementById('mphb_room_details-0-adults');
const theSelectChild = document.getElementById('mphb_room_details-0-children');
const vipHouse = document.querySelector('.mphb-room-details input');
let options = [];
let optionsChild = [];

//console.log(`value`, vipHouse) promises do
let condition = true;
let condition2 = true;

if (theSelect != null) {

    options = theSelect.getElementsByTagName('OPTION');

    if (theSelect.length > 5) {
        condition = true; 
      //  console.log(`value True`)
    }
    else {
        condition = false;
      //  console.log(`value False 1`)
    }
}
else {
    condition = false;
    //console.log(`value False 2`)
}
if (vipHouse != null) {
    if (vipHouse.value === '2878') {
        console.log(`VALIO`, vipHouse.value);
        //let options = theSelect.getElementsByTagName('OPTION');
        console.log(`value`, options.length, options)

    for (let i = 0; i < options.length; i++) {
        if (options[i].innerHTML < 8) {
            theSelect.removeChild(options[i]);
            i--; // options have now less element, then decrease i
        }
    }
    document.getElementById('mphb_room_details-0-adults').value = '8';
}
else if (condition) {
        if (options.length > 11) {
            for (let i = 0; i < options.length; i++) {
                if (options[i].innerHTML < 10) {
                    theSelect.removeChild(options[i]);
                    i--; // options have now less element, then decrease i
                }
            }

        }
        else if (options.length > 5) {
            for (let i = 0; i < options.length; i++) {
                if (options[i].innerHTML < 4) {
                    theSelect.removeChild(options[i]);
                    i--; // options have now less element, then decrease i
                }
            }

        } else {

   // console.log(`value`, theSelect.length, theSelect)

    //let options = theSelect.getElementsByTagName('OPTION');
  //  console.log(`value`, options.length, options)

    for (let i = 0; i < options.length; i++) {
        if (options[i].innerHTML < 10) {
            theSelect.removeChild(options[i]);
            i--; // options have now less element, then decrease i
        }
    }
}
    }
}


if (theSelectChild != null) {
    condition2 = true; // your condition
    optionsChild = theSelectChild.getElementsByTagName('OPTION');
}
else {
    condition2 = false;
   // console.log(`Child False 2`)
}
if (condition2) {
    document.getElementById('mphb_room_details-0-adults').addEventListener("change", () => {
        setTimeout(() => {
            optionsChild = theSelectChild.getElementsByTagName('OPTION');
            console.log(` Child length #1`, optionsChild.length, optionsChild);

            for (let i = 0; i < optionsChild.length; i++) {
                if (optionsChild.length < 3) {
                  //  console.log(` Child 2 value`, optionsChild[i].value);
                    document.getElementById('mphb_room_details-0-children').value = '0';
                }
            }
          //  console.log("Input Select", theSelect.value, ` Child 2`, optionsChild.length);
        }, 200);
    })
}

/**
 * 
 * 
 *  Form validation
 * 
 * 
 * */

const forms = document.getElementsByTagName('form')[0];
if (forms) {

    document.getElementById("mphb_phone").attributes["type"].value = "tel";
    const submitButton = forms.querySelector('input[type="submit"]');

    submitButton.addEventListener("click", () => {
        errorCloneRemover();
        const invalidInputs = document.querySelectorAll(':invalid');
        console.log(`DOES `, invalidInputs[1])
        if (invalidInputs[1] !== undefined) {
            scrollToInvalid();
        }
    });

    //console.log(`Rem `, forms, forms.length, submitButton);


    function errorCloneRemover() {
        let rem = document.querySelectorAll('span.form-errors-wrapper');
        // console.log(`Rem 2`, rem, `length`, rem.length);
        document.querySelectorAll('span.form-errors-wrapper:not(.success)').forEach(e => e.remove());
    }

    // check for invalid fields and add
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('invalid', function (e) {
            e.preventDefault(); // prevent default validation check
            // console.log(`Works || ===`, forms[i], `=== END`)



            const parentDiv = forms[i].parentNode;
            // console.log(`parent `, parentDiv)
            const span = document.createElement('span');
            span.classList.add('form-errors-wrapper');
            let text;
            if (forms[i].type === 'email') { //Neteisingai įvestas el.pašto adresas.
                text = document.createTextNode('Neteisingai įvestas el.pašto adresas.');
                console.log(`text email`, text);
            } else if (forms[i].type === 'checkbox') {
                text = document.createTextNode('Būtina susipažinti su sodybos taisyklėmis ir pažymėti varnelę.');
                console.log(`text check`, text);
            }
            // else if (forms[i].tagName === 'SELECT') {
            else if (forms[i].id === theSelect.id) {
                text = document.createTextNode('Būtina nurodyti suaugusiųjų skaičių.');
                document.querySelector('p.mphb-errors-wrapper').textContent = 'Būtina nurodyti suaugusiųjų skaičių.';
                console.log(`text select adults `, text);
            }
            else if (forms[i].id === theSelectChild.id) {
                text = document.createTextNode('Būtina nurodyti vaikų skaičių.');
                document.querySelector('p.mphb-errors-wrapper').textContent = 'Būtina nurodyti vaikų skaičių.';
                console.log(`text select children `, text, document.querySelector('p.mphb-errors-wrapper'), ` end children`);
            }
            else if (forms[i].type === 'tel') {
                text = document.createTextNode('Neteisingai įvestas telefono numeris.');
                document.querySelector('p.mphb-errors-wrapper').textContent = 'Neteisingai įvestas telefono numeris.';
                console.log(`text select `, text);
            }
            else {
                text = document.createTextNode('Būtina užpildyti.');
                console.log(`text else `, text);
            }
            span.appendChild(text);
            parentDiv.insertBefore(span, forms[i])

        }, true);
        forms[i].addEventListener('change', function () {

            console.log(`value`, forms[i].value, ` Child `, theSelectChild.value, ` end child`);
            console.log(`type`, forms[i].type);





            if (forms[i].type === 'tel') {

                let telFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4,8}$/im;
                if (forms[i].value.match(telFormat)) {
                    console.log(`CONGRATS valid tel `, forms[i])
                    forms[i].focus();
                    // reik parasyt, kad input:invalid
                    //mphb_phone

                    document.querySelector('[type="tel"]').invalid = false;
                    const inc = document.querySelector('[type="tel"]');
                    inc.setCustomValidity("");
                    const el = forms[i].parentNode.className;
                    const trx = document.querySelector(`${'.' + el} span.form-errors-wrapper`);
                    if (forms[i].validity.valid && trx != null) {
                        trx.classList.add("success");
                        trx.textContent = 'Patikrinta.';
                    }
                    return true;
                }
                else {
                    //console.log(`Invalid email `, forms[i])
                    //alert("You have entered an invalid email address!");
                    forms[i].focus();
                    //document.querySelector('[type="email"]').invalid = true;
                    const inc = document.querySelector('[type="tel"]');
                    inc.setCustomValidity("Patikrinkite ar teisingai įvestas telefono numeris.");

                    const el = forms[i].parentNode.className;
                    const trx = document.querySelector(`${'.' + el} span.form-errors-wrapper`);
                    if (trx != null) {
                        trx.classList.remove("success");
                        trx.textContent = 'Neteisingai įvestas telefono numeris.';
                    }

                    //console.log(`Invalid email `, document.querySelector('[type="email"]').validity)
                    return false;
                }

            }

            if (forms[i].type === 'email') {

                let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (forms[i].value.match(mailformat)) {
                    console.log(`CONGRATS valid email `, forms[i])
                    forms[i].focus();
                    // reik parasyt, kad input:invalid
                    //mphb_phone

                    document.querySelector('[type="email"]').invalid = false;
                    const inc = document.querySelector('[type="email"]');
                    inc.setCustomValidity("");
                    const el = forms[i].parentNode.className;
                    const trx = document.querySelector(`${'.' + el} span.form-errors-wrapper`);
                    if (forms[i].validity.valid && trx != null) {
                        trx.classList.add("success");
                        trx.textContent = 'Patikrinta.';
                    }
                    return true;
                }
                else {
                    //console.log(`Invalid email `, forms[i])
                    //alert("You have entered an invalid email address!");
                    forms[i].focus();
                    //document.querySelector('[type="email"]').invalid = true;
                    const inc = document.querySelector('[type="email"]');
                    inc.setCustomValidity("Patikrinkite ar teisingai įvestas el.pašto adresas.");

                    const el = forms[i].parentNode.className;
                    const trx = document.querySelector(`${'.' + el} span.form-errors-wrapper`);
                    if (trx != null) {
                        trx.classList.remove("success");
                        trx.textContent = 'Neteisingai įvestas el.pašto adresas.';
                    }

                    //console.log(`Invalid email `, document.querySelector('[type="email"]').validity)
                    return false;
                }
            };
            //chidren error validation

            setTimeout(() => {

                let trx = document.querySelector(`${'.' + theSelectChild.parentNode.className} span.form-errors-wrapper`);

                if (theSelectChild.value != '' && trx != null) {
                    trx = document.querySelector(`${'.' + theSelectChild.parentNode.className} span.form-errors-wrapper`);

                    trx.classList.add("success");
                    trx.textContent = 'Patikrinta.';

                    //test
                    console.log(`value cild on change Ok`, theSelectChild.parentNode.className)
                }
                else if (theSelectChild.value === '' && trx != null) {
                    trx.classList.remove("success");
                    trx.textContent = 'Būtina nurodyti vaikų skaičių.';

                    console.log(`value cild on change klaida`, theSelectChild.parentNode.className)
                }
            }, 300);


        const el = forms[i].parentNode.className;
        // console.log(`Works EL`, el)
        let trx;
        if (el === "") {
            //  console.log(`GGGGGGGGGG`)
            trx = document.querySelector(`label span.form-errors-wrapper`);
        } else {
            trx = document.querySelector(`${'.' + el} span.form-errors-wrapper`);
            };
            // console.log(`trx`, trx)

            if (forms[i].validity.valid && trx != null && trx != null) {
                //trx.remove(); // Remove
                trx.classList.add("success");
                trx.textContent = 'Patikrinta.';
            };


            if (forms[i].validity.valid === false && trx != null) {
                trx.classList.remove("success");

                if (forms[i].type === 'email') { //Neteisingai įvestas el.pašto adresas.
                    trx.textContent = 'Neteisingai įvestas el.pašto adresas.';

                } else if (forms[i].type === 'checkbox') {
                    trx.textContent = 'Būtina susipažinti su sodybos taisyklėmis ir pažymėti varnelę.';

                }
                // else if (forms[i].tagName === 'SELECT') {
                else if (forms[i].id === theSelect.id) {
                    trx.textContent = 'Būtina nurodyti suaugusiųjų skaičių.';
                    document.querySelector('p.mphb-errors-wrapper').textContent = 'Būtina nurodyti suaugusiųjų skaičių.';

                }
                else if (forms[i].id === theSelectChild.id) {
                    trx.textContent = 'Būtina nurodyti vaikų skaičių.';
                    document.querySelector('p.mphb-errors-wrapper').textContent = 'Būtina nurodyti vaikų skaičių.';

                }
                else {
                    trx.textContent = 'Būtina užpildyti.';

                }

                //console.log(`validility `, forms[i].validity.valid)

            };
        });
    }

    function scrollToInvalid() {
        const invalidInputs = document.querySelectorAll(':invalid');

        invalidInputs[1].scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

        // console.log(`Scroll `, invalidInputs[1])

    }
}

