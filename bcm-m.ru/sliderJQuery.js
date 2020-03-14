(function() {
    let sliderWidth = $(".we").width();       
    const $sliderBody = $(".we_slider");
    const len = $("slide").length;
    const animTime = 1000;

    initialSlider();   
    initialButtons(); 
    
    function initialSlider() {
        $(".slide").each(function() {
            $(this).css("transform", "translateX(-" + sliderWidth + "px)");            
        })
    }

    function initialButtons() {
        $(".slider_button.prev").click(prev);
        $(".slider_button.next").click(next);
    }

    
    function resizeCallback(currentSlideN) {
        sliderWidth = $(".we").width();
    }

    function next() {      
        let $slides = $(".slide");
        let offset = sliderWidth;
        $slides.each(function() {  
            $(this).animate({
                "left": offset
            }, animTime)
            offset += sliderWidth;
        });
        prependLastSlide()      
    }

    function prev() {      
        let $slides = $(".slide");
        let offset = -sliderWidth;
        $slides.each(function() {  
            $(this).animate({
                "left": offset 
            }, animTime)
            offset += sliderWidth;
        });
        appendFistSlide(); 
    }

  
    function prependLastSlide() {
        let $lastSlide = $(".slide:last");      
        let firstSlideOffset = $(".slide:first").offset();
        firstSlideOffset.right -= sliderWidth; 
        $lastSlide.finish();
        $lastSlide.offset(firstSlideOffset);
        $lastSlide.prependTo(".we_slider");
    }

    function appendFistSlide() {
        let $firstSlide = $(".slide:first");      
        let lastSlideOffset = $(".slide:last").offset();
        lastSlideOffset.left += sliderWidth; 
        $firstSlide.finish();
        $firstSlide.offset(lastSlideOffset);
        $firstSlide.appendTo(".we_slider");
    }
})();