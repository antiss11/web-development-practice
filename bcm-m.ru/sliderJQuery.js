(function() {
    let sliderWidth = $(".we").width();       
    let $sliderBody = $(".we_slider");
    let currentSlide = 1;   
    initialSlider();
    $(window).resize( () => console.log("test"))
    
    function initialSlider() {
        let sliderWidth = getSliderWidth();  
        $(".slide").css("transform", "translateX(-" + sliderWidth + "px)");
    }

    function getSliderWidth() {
        return $(".we").width()
    }

    function resizeCallback(currentSlideN) {
        let sliderWidth = getSliderWidth();
        $(".slide").css("position", "fixed");        
    }
})();