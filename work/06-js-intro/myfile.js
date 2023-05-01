"use strict";
(function() {
    
    const buttonEl = document.getElementById("menu_button");
    
    buttonEl.addEventListener("click", function() {
        const listEl = document.querySelector(".header__menu__list");
        const menuEl = document.querySelector(".header__menu");
        listEl.classList.toggle("open__list");
        menuEl.classList.toggle("open__menu");
    });
    
})();