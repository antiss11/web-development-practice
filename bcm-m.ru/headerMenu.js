(function () {

    let menuButton = document.querySelector(".menu_toggle");
    menuButton.addEventListener("click", toggleMenu);

    function toggleMenu() {
        document.querySelector(".header .menu").classList.toggle("active");
    }

})();