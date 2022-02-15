const theSelect = document.getElementById('mphb_room_details-0-adults');
const theSelectChild = document.getElementById('mphb_room_details-0-children');
let condition = true;
let condition2 = true;

if (theSelect != null) {
    if (theSelect.length > 11) {
        condition = true; 
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
        }, 200);
    })
}

const forms = document.forms[0];
let selectElement = forms.querySelector('input[type="submit"]');

console.log(`Rem `, forms, forms.length, selectElement);
selectElement.addEventListener("click", myFunction);

function myFunction() {
    const rem = document.querySelectorAll('span.form-errors-wrapper');
    console.log(`Rem 2`, rem, rem.length);
    document.querySelectorAll('span.form-errors-wrapper').forEach(e => e.remove());
}





for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('invalid', function (e) {
        e.preventDefault();
        //Possibly implement your own here.
        console.log(`Works || ===`, forms[i], `=== END`)

        const parentDiv = forms[i].parentNode;
        console.log(`parent `, parentDiv)
        const span = document.createElement('span');
        span.classList.add('form-errors-wrapper');
        let text = document.createTextNode('Būtina užpildyti.');
        span.appendChild(text);
        parentDiv.insertBefore(span, forms[i])

    }, true);
    forms[i].addEventListener('input', function (event) {
        // Each time the user types something, we check if the
        // form fields are valid.
        const el = forms[i].parentNode.className;
        console.log(`Works EL`, el)
        let trx;
        if (el === "") {
            console.log(`GGGGGGGGGG`)
            trx = document.querySelector(`label span.form-errors-wrapper`);
        } else {
            trx = document.querySelector(`${'.' + el} span.form-errors-wrapper`);
        }
        console.log(`trx`, trx)
        //if (forms[i].validity.valid && trx != null) {
        if (forms[i].validity.valid && trx != null) {
            // In case there is an error message visible, if the field
            // is valid, we remove the error message.
            //        emailError.innerHTML = ''; // Reset the content of the message
            //        emailError.className = 'error'; // Reset the visual state of the message
            //		editSelect.remove();

            trx.remove(); // Removes the div with the 'div-02' id
        }
    });
}