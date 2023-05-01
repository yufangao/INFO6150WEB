"use strict";
(function() {

    // For menu navigation
    const buttonEl = document.getElementById("menu_button");

    buttonEl.addEventListener("click", function() {
        const listEl = document.querySelector(".header__menu__list");
        const menuEl = document.querySelector(".header__menu");
        listEl.classList.toggle("open__list");
        menuEl.classList.toggle("open__menu");
        listEl.classList.toggle("display__nav");
    });


    // For Subscribe button
    const modalEl = document.querySelector(".modal");
    const opens = document.querySelectorAll(".open");
    const closes = document.querySelectorAll(".close");

    for (let i = 0; i < opens.length; i++) {
        opens[i].addEventListener("click", () => {
            modalEl.showModal();
        });
    }
    for (let i = 0; i < closes.length; i++) {
        closes[i].addEventListener("click", () => {
            modalEl.close();
        });
    }
    //
    // opens.addEventListener("click", () => {
    //    modalEl.showModal();
    // });
    //
    // closes.addEventListener("click", () => {
    //    modalEl.close();
    // });


    // For form validation
    const formEl = document.querySelector('.register');
    const emailErrorEl = document.querySelector('.form-email__error');
    const emailInputEl = document.querySelector('.email');
    const confirmErrorEl = document.querySelector('.form-confirm__error');
    const confirmInputEl = document.querySelector('.confirm');

    emailInputEl.addEventListener('input', (event) => {
        emailErrorEl.innerText = "";
        if(!event.target.value) {
            emailErrorEl.innerText = "* This field is required!";
        }else if(!event.target.value.includes("@")) {
            emailErrorEl.innerText = "* Email INVALID!";
        }else{
            emailErrorEl.innerText = "";
        }
    });

    confirmInputEl.addEventListener('input', (event) => {
        confirmErrorEl.innerText = "";
        if(!event.target.value || (confirmInputEl.value !== emailInputEl.value)) {
            confirmErrorEl.innerText = "* This field must match the email!";
        }else {
            confirmErrorEl.innerText = "";
        }
    });

    formEl.addEventListener('submit', (event) => {
        let isValid = true;
        emailErrorEl.innerText = "";
        confirmErrorEl.innerText = "";

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