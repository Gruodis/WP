const forms = document.getElementsByTagName('form')[0];
const submitButton = forms.querySelector('input[type="submit"]');

//console.log(`Rem `, forms, forms.length, submitButton);
submitButton.addEventListener("click", () => {
    errorCloneRemover();
    scrollToInvalid();
});

function errorCloneRemover() {
    let rem = document.querySelectorAll('span.form-errors-wrapper');
    // console.log(`Rem 2`, rem, `length`, rem.length);
    document.querySelectorAll('span.form-errors-wrapper').forEach(e => e.remove());
}

// check for invalid fields and add
for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('invalid', function (e) {
        e.preventDefault(); // prevent default validation check
        // console.log(`Works || ===`, forms[i], `=== END`)
        const parentDiv = forms[i].parentNode;
        console.log(`parent `, parentDiv)
        const span = document.createElement('span');
        span.classList.add('form-errors-wrapper');
        let text = document.createTextNode('Būtina užpildyti.');
        span.appendChild(text);
        parentDiv.insertBefore(span, forms[i])

    }, true);
    forms[i].addEventListener('input', function (event) {

        const el = forms[i].parentNode.className;
        // console.log(`Works EL`, el)
        let trx;
        if (el === "") {
            //  console.log(`GGGGGGGGGG`)
            trx = document.querySelector(`label span.form-errors-wrapper`);
        } else {
            trx = document.querySelector(`${'.' + el} span.form-errors-wrapper`);
        }
        // console.log(`trx`, trx)

        if (forms[i].validity.valid && trx != null) {
            trx.remove(); // Remove
        }
    });
}

function scrollToInvalid() {
    const invalidInputs = document.querySelectorAll(':invalid');
    invalidInputs[1].scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    console.log(`Scroll `, invalidInputs[1])

}


let test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list


// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    event.target.style.backgroundColor = "orange";

    // reset the color after a short delay

}, false);