$(function () {
    let slides = $(".blog-posts__item");
    let totalSlides = slides.length;
    let slideWidth = slides.width();
    let windowWidth = $(window).width();
    let picturesInWindow = Math.floor(windowWidth / slideWidth);
    let allSlidesWidth = 0;

    // Calculate full width
    slides.each(function (index) {
        allSlidesWidth += $(this).width();
        allSlidesWidth += parseInt($(this).css("margin-right"));
        allSlidesWidth += parseInt($(this).css("margin-left"));
    });
    allSlidesWidth -= slideWidth * picturesInWindow;

    $("#slider").slider({
        step: 0.001,
        slide: moveSlide,
    });

    function moveSlide(event, ui) {
        slides.each(function (index) {
            $(this).css("transform", `translateX(-${ui.value * allSlidesWidth / 100}px)`);
        })
    }
})