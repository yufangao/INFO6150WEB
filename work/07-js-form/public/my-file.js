"use strict";
(function() {

    const formEl = document.querySelector('.register');
    const nameErrorEl = document.querySelector('.form-name__error');
    const nameInputEl = document.querySelector('.name');
    const emailErrorEl = document.querySelector('.form-email__error');
    const emailInputEl = document.querySelector('.email');
    const confirmErrorEl = document.querySelector('.form-confirm__error');
    const confirmInputEl = document.querySelector('.confirm');

    nameInputEl.addEventListener('input', (event) => {
        if(!event.target.value) {
            nameErrorEl.classList.add('form-name--invalid');
        }else {
            nameErrorEl.classList.remove('form-name--invalid');
        }
    });

    formEl.addEventListener('submit', (event) => {
        let isValid = true;
        nameErrorEl.classList.remove('form-name--invalid');
        emailErrorEl.innerText = "";
        confirmErrorEl.innerText = "";

        if(!nameInputEl.value) {
            nameErrorEl.classList.add('form-name--invalid');
            isValid = false;
        }

        if(!emailInputEl.value) {
            emailErrorEl.innerText = "* This field is required!";
            isValid = false;
        }

        if(!confirmInputEl.value || (confirmInputEl.value !== emailInputEl.value)) {
            confirmErrorEl.innerText = "* This field must match the email!";
            isValid = false;
        }

        if(!isValid) {
            event.preventDefault();
        }
    });

})();