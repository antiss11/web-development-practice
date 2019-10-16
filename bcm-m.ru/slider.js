(function () {

    let Slider = function (
        box, slidesBox, slides, buttonNext, buttonPrev
    ) {
        this.box = box;
        this.slidesBox = slidesBox;
        this.slides = slides;
        this.buttonNext = buttonNext || null;
        this.buttonPrev = buttonPrev || null;
        this.boxSize = this.box.clientWidth;
        this.index = 1;
        // console.log(this.buttonNext)
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

    function sliderSwitcher(container) {
        let disabledSlider = container.querySelector(".slider_wrapper:not(.active)");
        let activeSlider = container.querySelector(".slider_wrapper.active");
        disabledSlider.classList.toggle("active");
        activeSlider.classList.toggle("active")
    }

    function tabsSwitcher(event) {
        let activeTab = document.querySelector(".we_tab.active")
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
            let sliders = sliderContainer.querySelectorAll(".we_slider");
            for (let tab of sliderTabs) {
                tab.addEventListener("click", tabsSwitcher )
            }
        }
        initialFirstSlider()

    }
    //

    initialSliders()
})();

