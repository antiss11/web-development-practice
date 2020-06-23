"use strict";

let cards = document.querySelectorAll(".card");
let cardsTotal = cards.length;
let offsetStepDeg = 10;
let maxOffset = Math.floor(cardsTotal/2) * offsetStepDeg;

cards[cardsTotal - 1].onmouseenter = function(e) {
    cards.forEach(function (card, i) {
        if (i < Math.floor(cardsTotal / 2)) {
            card.style.transform = `rotate(${-maxOffset + offsetStepDeg * i}deg`;
        }
        else if (i > Math.floor(cardsTotal / 2)) {
            card.style.transform = `rotate(${offsetStepDeg * i - maxOffset}deg`;
        }
    });
};

cards.forEach(function (card) {
    card.addEventListener("mouseout", function(e) {
        e.target.parentNode.classList.remove("hover");
        setTimeout(function() {
            if (document.querySelectorAll(".card.hover").length === 0) {
                cards.forEach(card => card.style.transform = "rotate(0deg)");
            }
        }, 200);
    })
});

cards.forEach(function(card) {
    card.addEventListener("mouseenter", function (e) {
        e.target.classList.add("hover");
    })
});

