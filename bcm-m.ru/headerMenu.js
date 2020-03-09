(function () {

    let menuButton = document.querySelector(".menu_toggle");
    let menuH = document.querySelector(".header .menu").clientHeight;
    let menu = document.querySelector(".header .menu");
    menuButton.addEventListener("click", toggleMenu);
    function toggleMenu() {
        menu.classList.toggle("active");
        menu.style.height = "0";
        console.log('test')
        // let timer = setInterval(() => {
        //     menu.style.height += 100 + "px";
        // }, 1000)
    }

}());