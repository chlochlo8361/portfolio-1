window.addEventListener('DOMContentLoaded', (event) => {
    // Creating Constants
    const firstName = document.querySelector('#first')
    const lastName = document.querySelector('#last')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const instagram = document.querySelector('#instagram')
    const loginButton = document.querySelector('#button')

    // Event Listeners
    loginButton.addEventListener('click', validate)

    // Functions
    function validate() {
        var passes = false;

        if(firstName.value.trim().length === 0) {
            firstName.style.border = '1px solid red';
            passes = false;
        } else {
            firstName.style.border = '0.063rem solid #ccc';
            passes = true;
        }
        if(lastName.value.trim().length === 0) {
            lastName.style.border = '1px solid red';
            passes = false;
        } else {
            lastName.style.border = '0.063rem solid #ccc';
            passes = true;
        }
        if(email.value.trim().length === 0) {
            email.style.border = '1px solid red';
            passes = false;
        } else {
            email.style.border = '0.063rem solid #ccc';
            passes = true;
        }
        if(instagram.value.trim().length === 0) {
            instagram.style.border = '1px solid red';
            passes = false;
        } else {
            instagram.style.border = '0.063rem solid #ccc';
            passes = true;
        }
        if(password.value === 'password') {
            password.style.border = '0.063rem solid #ccc';
            passes = true;
        } else {
            password.style.border = '1px solid red';
            passes = false;
        }
        if(passes === true) {
            window.open('index2.html');
            console.log('You did it all areas are filled out')
        }
    }
});

