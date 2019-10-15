(function () {

    let index = 1;

    let Slider = function () {
        this.box = document.querySelector(".slider_wrapper");
        this.slidesBox = document.getElementById("slider");
        this.slides = document.querySelectorAll(".slide");
        this.buttons = document.querySelectorAll(".slider_button");
        this.boxSize = this.box.clientWidth;
        this.initial();
        this.carousel();
    };

    Slider.prototype.initial = function() {
        this.slidesBox.style.transform = "translateX(" + (-index*this.boxSize) + "px";
    };


    Slider.prototype.carousel = function () {
        for (let button of this.buttons) {
            button.addEventListener("click", Slider[button.id].bind(this));
        }

    };

    Slider.next = function() {
        this.slidesBox.style.transition = "transform 2s ease-in-out";
        index++;
        this.slidesBox.style.transform = "translateX(" + (-index*this.boxSize) + "px";
    }

    Slider.prev = function () {
        console.log('prev')
    }

    new Slider();
})();

