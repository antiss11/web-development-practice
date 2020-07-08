$(function() {
    let sliderWidth = $(".slider_main_container").width();       
    // const $sliderBody = $(".we_slider");
    // const len = $("slide").length;
    const animTime = 200;    

    initialSlider();   
    initialButtons();
    
    function initialSlider() {
        $(".slide").each(function() {
            $(this).css("transform", "translateX(-" + sliderWidth + "px)");            
        });
        $(".slider_tab:first").on("click", function() {
            $(".slider_wrapper.we:last").removeClass("active");
            $(".slider_wrapper.we:first").addClass("active");
            $(".slider_tab:last").removeClass("active");
            $(".slider_tab:first").addClass("active");           
        }); 

        $(".slider_tab:last").on("click", function() {
            $(".slider_wrapper.we:first").removeClass("active");
            $(".slider_wrapper.we:last").addClass("active");
            $(".slider_tab:first").removeClass("active");
            $(".slider_tab:last").addClass("active");
        });
        $(".slider_wrapper").height($(".slide").outerHeight());
    }

    function initialButtons() {
        let $weSlidersContainer = $(".slider_main_container.we");
        // let $projectsSlider = $
        $(".slider_button.we.prev").on("click", prev.bind($weSlidersContainer));
        $(".slider_button.we.next").on("click", next.bind($weSlidersContainer));
    }

    
    function resizeCallback(currentSlideN) {
        sliderWidth = $(".slider_main_container").width();
    }

    function prev() {
        let $activeSliderWrapper = $(this).find(".slider_wrapper.active");
        // let $slides = $(this).find(".slider_wrapper.active .slide");
        let $slides = $activeSliderWrapper.find(".slide");
        let offset = sliderWidth;
        $slides.each(function() {
            $(this).animate({
                "left": offset
            }, animTime)
            offset += sliderWidth;
        });
        prependLastSlide($activeSliderWrapper);
    }

    function next() {
        let $activeSliderWrapper = $(this).find(".slider_wrapper.active");
        // let $slides = $(this).find(".slider_wrapper.active .slide");
        let $slides = $activeSliderWrapper.find(".slide");
        let offset = -sliderWidth;
        $slides.each(function() {  
            $(this).animate({
                "left": offset 
            }, animTime)
            offset += sliderWidth;
        });
        appendFistSlide($activeSliderWrapper);
    }

  
    function prependLastSlide(sliderWrapper) {
        let $lastSlide = $(sliderWrapper).find(".slide:last");
        let firstSlideOffset = $(sliderWrapper).find(".slide:first").offset();
        firstSlideOffset.right -= sliderWidth;
        $lastSlide.finish();
        $lastSlide.offset(firstSlideOffset);
        $lastSlide.prependTo(sliderWrapper);
    }

    function appendFistSlide(sliderWrapper) {
        // let $firstSlide = $(".slider_wrapper.active .slide:first");
        // let lastSlideOffset = $(".slider_wrapper.active .slide:last").offset();
        let $firstSlide = $(sliderWrapper).find(".slide:first");
        let lastSlideOffset = $(sliderWrapper).find(".slide:last").offset();
        // console.log(lastSlideOffset)
        lastSlideOffset.left += sliderWidth;
        $firstSlide.finish();
        $firstSlide.offset(lastSlideOffset);
        $firstSlide.appendTo(sliderWrapper);
        // $firstSlide.appendTo(".slider_wrapper.active .slider_body");
    }  
});