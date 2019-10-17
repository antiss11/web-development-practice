(function () {

    let Slider = function (
         slidesBox, slides, buttonNext, buttonPrev, size
    ) {

        this.slidesBox = slidesBox;
        this.slides = slides;
        this.buttonNext = buttonNext;
        this.buttonPrev = buttonPrev;
        // this.boxSize = this.slidesBox.clientWidth;
        this.boxSize = size;
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

        if (this.slides[this.index].classList.contains("firstClone")) {
            this.index = 1;
            this.slidesBox.style.transition = "none";
            this.slidesBox.style.transform = "translateX(" + (-this.index * 100) + "%)";
        }
        else if (this.slides[this.index].classList.contains("lastClone")) {
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

    function sliderSwitcher(container) {
        let disabledSlider = container.querySelector(".slider_wrapper:not(.active)");
        let activeSlider = container.querySelector(".slider_wrapper.active");
        disabledSlider.classList.toggle("active");
        activeSlider.classList.toggle("active");
        document.querySelector(".slider_button.next").removeEventListener("click", Slider.next);
        document.querySelector(".slider_button.next").addEventListener("click", Slider.next)
    }

    function tabsSwitcher(event) {
        let activeTab = document.querySelector(".we_tab.active");
        if ( !event.target.classList.contains("active") ) {
            event.target.classList.toggle("active");
            activeTab.classList.toggle("active");
            sliderSwitcher(event.target.parentNode.parentElement)
        }
    }

    function initialSliders() {
        function initialFirstSlider() {
            let sliderContainer = document.querySelector(".we");
            let sliderTabs = sliderContainer.querySelectorAll(".we_tab");
            let sliderWrappers = sliderContainer.querySelectorAll(".slider_wrapper");

            for (let tab of sliderTabs) {
                tab.addEventListener("click", tabsSwitcher )
            }

            let size = document.querySelector(".slider_wrapper.active").clientWidth;
            for (let slider of sliderWrappers) {

                new Slider(slider.querySelector(".we_slider"),
                    slider.querySelectorAll(".slide"),
                    slider.querySelector(".slider_button.next"),
                    slider.querySelector(".slider_button.prev"), size)
            }
        }
        initialFirstSlider()

    }
    //

    initialSliders()
})();

