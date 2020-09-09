import "./stylesheets/main.scss";

const CATALOG = document.querySelector(".header-nav__catalog-list");
const WRITE_US = document.querySelector(".modal-write-us");
const MAP_MODAL = document.querySelector(".modal-map");

const SERVICES = ["delivery", "credit", "warranty"];
const TOP_ITEMS = document.querySelectorAll(".slide");

function switchService(element, event) {
  event.preventDefault();
  document.querySelector(".services__item--active")
    .classList.toggle("services__item--active");
  element.classList.toggle("services__item--active");
  document.querySelector(".service__description--active")
    .classList.toggle("service__description--active");
  element.classList.forEach((v) => {
    if (SERVICES.includes(v)) {
      document.querySelector(`.service__description.${v}`)
        .classList.toggle("service__description--active");
    };
  })
};

function switchSlide(element, event) {
  let slideN = parseInt(element.id.split("").reverse().join(""));
  document.querySelector(".slide--active").classList.toggle("slide--active");
  document.querySelector(".slides__control--checked").classList.toggle("slides__control--checked");
  document.querySelector(".top-items__slide-num").innerHTML = `0${slideN}`;
  element.classList.toggle("slides__control--checked");
  TOP_ITEMS[--slideN].classList.toggle("slide--active");
}

function modalToggle(element, event) {
  event.preventDefault();
  element.classList.toggle("is-open");
}

document.querySelector(".header-nav__catalog-toggle")
  .addEventListener("click", (e) => modalToggle(CATALOG, e));

document.querySelector(".contacts__write-us-button")
  .addEventListener("click", (e) => modalToggle(WRITE_US, e));

document.querySelector(".contacts__map-link")
  .addEventListener("click", (e) => modalToggle(MAP_MODAL, e));

document.querySelectorAll(".modal__close")
  .forEach((v) => v.addEventListener("click", (e) => modalToggle(v.parentElement, e)));

document.querySelectorAll(".services__item")
  .forEach((v) => v.addEventListener("click", (e) => switchService(v, e)));

document.querySelectorAll(".slides__control")
  .forEach((v) => v.addEventListener("change", (e) => switchSlide(v, e)));