let red = document.querySelector('div#loader .red');
let blue = document.querySelector('div#loader .blue');
let green = document.querySelector('div#loader .green');

const blueDuration = 2000;
const greenDuration = 2500;
const redDuration = 3000;

colorChanger();

function randomColor() {
    return '#'+Math.random().toString(16).substr(-6);
}

let loader = document.getElementById("loader");
let button = document.getElementById("button");
button.addEventListener("click", function() {
    if (loader.className === "loading") {
        loader.className = "";
    } else {
        loader.className = "loading";
    }
});

function colorChanger() {
    window.setInterval(function () {
        if (document.getElementById("loader").classList.contains("loading")) {
            red.style.background = randomColor();
        }
    }, redDuration);

    window.setInterval(function () {
        if (document.getElementById("loader").classList.contains("loading")) {
            green.style.background = randomColor();
        }
    }, greenDuration);

    window.setInterval(function () {
        if (document.getElementById("loader").classList.contains("loading")) {
            blue.style.background = randomColor();
        }
    }, blueDuration);
}