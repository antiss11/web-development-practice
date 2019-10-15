(function () {

    let Slider = function () {
        this.box = document.querySelector(".slider_wrapper");
        this.slidesBox = document.getElementById("slider");
        this.slides = document.querySelectorAll(".slide");
        this.buttons = document.querySelectorAll(".slider_button");
        this.boxSize = this.box.clientWidth;
        this.index = 1;
        this.initial();
        this.carousel();
    };

    Slider.prototype.initial = function() {
        this.slidesBox.style.transform = "translateX(" + (-this.index*this.boxSize) + "px";
        this.slidesBox.addEventListener("transitionend", () => this.indexListener());
    };


    Slider.prototype.carousel = function () {
        for (let button of this.buttons) {
            button.addEventListener("click", Slider[button.id].bind(this))
        }
    };

    Slider.prototype.indexListener = function() {
        if (this.slides[this.index].id === "firstClone") {
            this.index = 1;
            this.slidesBox.style.transition = "none";
            this.slidesBox.style.transform = "translateX(" + (-this.index * 100) + "%)";
        }
        else if (this.slides[this.index].id === "lastClone") {
            this.index = this.slides.length-2;
            this.slidesBox.style.transition = "none";
            this.slidesBox.style.transform = "translateX(-300%)";
            this.slidesBox.style.transform = "translateX(" + (-this.index * 100) + "%)";
        }

    };

    Slider.next = function() {
        this.slidesBox.style.transition = "transform 0.2s ease-in-out";
        this.index++;
        this.slidesBox.style.transform = "translateX(" + (-this.index*this.boxSize) + "px";
    };

    Slider.prev = function () {
        this.slidesBox.style.transition = "transform 0.2s ease-in-out";
        this.index--;
        this.slidesBox.style.transform = "translateX(" + (-this.index*this.boxSize) + "px";
    };

    new Slider();
})();

