window.addEventListener('DOMContentLoaded', (event) => {
    const firstName = document.querySelector('#first')
    const lastName = document.querySelector('#last')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const instagram = document.querySelector('#instagram')
    const loginButton = document.querySelector('#button')

    // loginButton.addEventListener('click', validate)

    function validate() {
        if(firstName.value.trim().length === 0) {
            firstName.style.border = '1px solid red';
        } else {
            firstName.style.border = '0.063rem solid #ccc'
        }
        if(lastName.value.trim().length === 0) {
            lastName.style.border = '1px solid red';
        } else {
            lastName.style.border = '0.063rem solid #ccc'
        }
        if(email.value.trim().length === 0) {
            email.style.border = '1px solid red';
        } else {
            email.style.border = '0.063rem solid #ccc'
        }
        if(password.value.trim().length === 0) {
            password.style.border = '1px solid red';
        } else {
            password.style.border = '0.063rem solid #ccc'
        }
        if(instagram.value.trim().length === 0) {
            instagram.style.border = '1px solid red';
        } else {
            instagram.style.border = '0.063rem solid #ccc'
        }
    }
    loginButton.addEventListener('click', validate)
});