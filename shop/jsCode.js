"use strict";

(function() {
    //    Код слайдера
    const totalSlides = document.querySelectorAll(".slide").length - 1;
    let counter = 0;
    let nextButton = document.querySelector(".slider__button.next");
    let prevButton = document.querySelector(".slider__button.prev");

    nextButton.onclick = nextSlide;
    prevButton.onclick = prevSlide;

    function nextSlide() {
        counter++;
        if (counter > totalSlides) {
            counter = 0;
        }
        document.querySelector(".slide.active").classList.toggle("active");
        document.querySelectorAll(".slide").item(counter).classList.toggle("active");
    }

    function prevSlide() {
        counter--;
        if (counter < 0) {
            counter = totalSlides;
        }
        document.querySelector(".slide.active").classList.toggle("active");
        document.querySelectorAll(".slide").item(counter).classList.toggle("active");
    }
})();

(function() {
    // Код подменю
    let submenus = document.querySelectorAll(".categories__second-level-list");
    submenus.forEach(function(submenu) {
        let menuItems = submenu.querySelectorAll("li");
        let menuHeight = 0;
        menuItems.forEach(function(item) {
            menuHeight += item.clientHeight;
        });
        // console.log(menuHeight)
        submenu.parentElement.addEventListener("click", function(e) {
            if (submenu.clientHeight === 0) {
                submenu.style.height = menuHeight + "px";
            }
            else {
                submenu.style.height = 0;
            }
        })
    });

    // function toggle()

    // let submenuItems = submenu.querySelectorAll("li");
    // let submenuHeight = 0;
    // submenuItems.forEach(function(el) {
    //     submenuHeight += el.clientHeight;
    // });
    // console.log(submenuHeight)
})();

