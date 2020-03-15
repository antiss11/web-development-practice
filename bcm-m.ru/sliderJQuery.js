$(function() {
    let sliderWidth = $(".we").width();       
    // const $sliderBody = $(".we_slider");
    // const len = $("slide").length;
    const animTime = 200;    

    initialSlider();   
    initialButtons(); 
    
    function initialSlider() {
        $(".slide").each(function() {
            $(this).css("transform", "translateX(-" + sliderWidth + "px)");            
        });
        $(".we_tab:first").click(function() {
            $(".slider_wrapper:last").removeClass("active");
            $(".slider_wrapper:first").addClass("active"); 
            $(".we_tab:last").removeClass("active");
            $(".we_tab:first").addClass("active");           
        }); 

        $(".we_tab:last").click(function() {
            $(".slider_wrapper:first").removeClass("active");
            $(".slider_wrapper:last").addClass("active");
            $(".we_tab:first").removeClass("active");
            $(".we_tab:last").addClass("active");
        });
    }

    function initialButtons() {
        $(".slider_button.prev").click(prev);
        $(".slider_button.next").click(next);
    }

    
    function resizeCallback(currentSlideN) {
        sliderWidth = $(".we").width();
    }

    function prev() {      
        let $slides = $(".slider_wrapper.active .slide");
        let offset = sliderWidth;
        $slides.each(function() {  
            $(this).animate({
                "left": offset
            }, animTime)
            offset += sliderWidth;
        });
        prependLastSlide()      
    }

    function next() {      
        let $slides = $(".slider_wrapper.active .slide");
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
        let $lastSlide = $(".slider_wrapper.active .slide:last");      
        let firstSlideOffset = $(".slider_wrapper.active .slide:first").offset();
        firstSlideOffset.right -= sliderWidth; 
        $lastSlide.finish();
        $lastSlide.offset(firstSlideOffset);
        $lastSlide.prependTo(".slider_wrapper.active .we_slider");
    }

    function appendFistSlide() {
        let $firstSlide = $(".slider_wrapper.active .slide:first");      
        let lastSlideOffset = $(".slider_wrapper.active .slide:last").offset();
        lastSlideOffset.left += sliderWidth; 
        $firstSlide.finish();
        $firstSlide.offset(lastSlideOffset);
        $firstSlide.appendTo(".slider_wrapper.active .we_slider");
    }  
});