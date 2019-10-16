(function () {

    let Slider = function (
        box, slidesBox, slides, buttonNext, buttonPrev
    ) {
        this.box = box;
        this.slidesBox = slidesBox;
        this.slides = slides;
        this.buttonNext = buttonNext;
        this.buttonPrev = buttonPrev;
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
        this.buttonNext.addEventListener("click", Slider.next.bind(this));
        this.buttonPrev.addEventListener("click", Slider.prev.bind(this))
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

    function initialSliders() {

        let sliderWrappers = document.querySelectorAll(".slider_wrapper");
        for (let sliderWrapper of sliderWrappers) {
            let slidesBox = sliderWrapper.querySelector(".we_slider");
            let slides = sliderWrapper.querySelectorAll(".slide");
            let buttonNext = sliderWrapper.querySelector(".slider_button.next");
            let buttonPrev = sliderWrapper.querySelector(".slider_button.prev");
            new Slider(sliderWrapper, slidesBox, slides, buttonNext, buttonPrev)
        }
    }


    function bindSliderTabs() {
        let tabs = document.querySelectorAll(".we_tab");
        tabs[0].addEventListener("click", )
    }

    bindSliderTabs()

})();

