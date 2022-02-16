
const form = document.getElementsByTagName('form')[0];

const name = document.getElementById('mphb_first_name');
const lastName = document.getElementById('mphb_last_name');
const email = document.getElementById('mphb_email');
const phone = document.getElementById('mphb_phone');



let forms = document.querySelector('.mphb_sc_checkout-form');
for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('invalid', function (e) {
        e.preventDefault();
        //Possibly implement your own here.
        console.log(`Works`,)

        const parentDiv = document.getElementsByTagName('mphb_first_name').parentNode;
        console.log(`parent `, parentDiv)
        const span = document.createElement('span');
        span.classList.add('alert-form', 'form-errors-wrapper');
        let text = document.createTextNode('Testas error');
        span.appendChild(text);
        parentDiv.insertBefore(span, email)

    }, true);
}


if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.innerHTML = ''; // Reset the content of the message
    emailError.className = 'hide'; // Reset the visual state of the message
} else {
    // If there is still an error, show the correct error
    showError();
}


email.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (email.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.innerHTML = ''; // Reset the content of the message
        emailError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});

form.addEventListener('submit', function (event) {
    // if the form contains valid data, we let it submit

    if (!email.validity.valid) {
        // If it isn't, we display an appropriate error message
        showError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});

function showError() {
    const emailError = document.querySelector('span.form-errors-wrapper');


    if (email.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        emailError.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address
        // display the following error message.
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if (email.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }

    // Set the styling appropriately
    emailError.className = 'error active';
}