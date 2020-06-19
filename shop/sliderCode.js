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
    let isOpen = false;

})();

