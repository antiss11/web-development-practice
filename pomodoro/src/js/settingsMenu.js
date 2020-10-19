import { DEFAULT_SETTINGS } from "./defaultSettings.js";

let ProgressBar = require("progressbar.js");




export default class SettingsMenu {
    constructor() {
        this.toggleSettingsButton = document.querySelector(".toggle-menu__open-button");
        this.menuBody = document.querySelector(".toggle-menu__menu-body");
        this.timerSettingsButton = document.querySelector(".open-timer-settings");
        this.themesSettingsButton = document.querySelector(".open-theme-settings");
        this.timerSettings = new TimerConfiguration;
        this.themesSettings = new ThemesConfiguration;
        this.toggleSettingsButton.addEventListener("click", (e) => this.toggleSettingsButtonOnClick(e));
        this.timerSettingsButton.addEventListener("click", (e) => this.toggleTimerSettings(e));
        this.themesSettingsButton.addEventListener("click", (e) => this.toggleThemesSettings(e));
        this.initialSettingsButtons();
    }

    toggleSettingsButtonOnClick(e) {
        this.menuBody.classList.toggle("toggle-menu__menu-body--hidden");
        e.target.classList.toggle("toggle-menu__open-button--active");
    }

    initialSettingsButtons() {
        document.querySelectorAll(".settings-list__settings-item").forEach((e) => {
            e.addEventListener("click", () => {
                document.querySelector(".settings-list__settings-item--active")
                    .classList.toggle("settings-list__settings-item--active");
                e.classList.toggle("settings-list__settings-item--active");
            })
        })
    }

    toggleTimerSettings(e) {
        this.themesSettings.container.classList.remove("menu-body__setting--active");
        this.timerSettings.container.classList.add("menu-body__setting--active");
    }

    toggleThemesSettings(e) {
        this.timerSettings.container.classList.remove("menu-body__setting--active");
        this.themesSettings.container.classList.add("menu-body__setting--active");
    }
}

class ThemesConfiguration {
    constructor() {
        this.container = document.querySelector(".setting-themes");
        this.initialThemesButtons();
    }

    initialThemesButtons() {
        document.querySelectorAll(".theme-item__button").forEach((e) => {
            e.addEventListener("click", () => {
                let themeName = e.classList[1].split("-")[0];
                let nowThemeName = document.body.classList[1];
                document.body.classList.replace(nowThemeName, themeName);
            })
        });
    }
}

class TimerConfiguration {
    constructor() {
        this.container = document.querySelector(".setting-timer");
        this.focusSliderContainer = document.getElementById("settings-item__focus-slider");
        this.shortBreakSliderContainer = document.getElementById("settings-item__shortBreak-slider");
        this.longBreakSliderContainer = document.getElementById("settings-item__longBreak-slider");
        this.roundsSliderContainer = document.getElementById("settings-item__rounds-slider");
        this.focusValueField = document.querySelector(".setting-value__focus");
        this.shortBreakValueField = document.querySelector(".setting-value__shortBreak");
        this.longBreakValueField = document.querySelector(".setting-value__longBreak");
        this.roundsValueField = document.querySelector(".setting-value__rounds");
        this.resetButton = document.querySelector(".setting__reset-button");
        this.maxDuration = 90;
        this.minDuration = 1;
        this.maxRounds = 12;
        this.minRounds = 1;
        this.initialSliders();
        this.resetButton.addEventListener("click", (e) => this.reset());
    }

    setColors({ focusColor, shortBreakColor, longBreakColor, roundsColor, emptyFillingColor }) {
        this._setFilling(this.focusSlider, focusColor, emptyFillingColor);
        this._setFilling(this.shortBreakSlider, shortBreakColor, emptyFillingColor);
        this._setFilling(this.longBreakSlider, longBreakColor, emptyFillingColor);
        this._setFilling(this.roundsSlider, roundsColor, emptyFillingColor);
    }

    initialSliders() {
        this.focusSlider = this._initialSlider({
            sliderElement: this.focusSliderContainer,
            initialValue: DEFAULT_SETTINGS.focusDuration,
            maxValue: this.maxDuration,
            minValue: this.minDuration,
            callbackField: this.focusValueField,
            isTime: true,
        });
        this.shortBreakSlider = this._initialSlider({
            sliderElement: this.shortBreakSliderContainer,
            initialValue: DEFAULT_SETTINGS.shortBreakDuration,
            maxValue: this.maxDuration,
            minValue: this.minDuration,
            callbackField: this.shortBreakValueField,
            isTime: true,
        });
        this.longBreakSlider = this._initialSlider({
            sliderElement: this.longBreakSliderContainer,
            initialValue: DEFAULT_SETTINGS.longBreakDuration,
            maxValue: this.maxDuration,
            minValue: this.minDuration,
            callbackField: this.longBreakValueField,
            isTime: true,
        });
        this.roundsSlider = this._initialSlider({
            sliderElement: this.roundsSliderContainer,
            initialValue: DEFAULT_SETTINGS.rounds,
            maxValue: this.maxRounds,
            minValue: this.minRounds,
            callbackField: this.roundsValueField,
        })
    }

    _initialSlider({ sliderElement, initialValue, maxValue, minValue, callbackField, isTime }) {
        let subContainer = $(sliderElement).find("span");
        subContainer.empty().slider({
            range: "min",
            animate: "fast",
            orientation: "horizontal",
            value: initialValue,
            max: maxValue,
            min: minValue,
            slide: function (event, ui) {
                if (isTime) callbackField.textContent = formatTime(ui.value);
                else callbackField.textContent = ui.value;
            }
        })
        return subContainer.slider("widget");
    }

    _setFilling(sliderElement, fillingColor, emptyFillingColor) {
        set();
        function set() {
            let percentage = sliderElement.querySelector("span").style.left;
            sliderElement.style.background = `linear-gradient(to right, ${fillingColor}
                                ${percentage}, ${emptyFillingColor} ${percentage})`;
        }
    }

    reset() {
        this.focusSlider.slider("value", DEFAULT_SETTINGS.focusDuration);
        this.shortBreakSlider.slider("value", DEFAULT_SETTINGS.shortBreakDuration);
        this.longBreakSlider.slider("value", DEFAULT_SETTINGS.longBreakDuration);
        this.roundsSlider.slider("value", DEFAULT_SETTINGS.rounds);
        this.focusValueField.textContent = formatTime(DEFAULT_SETTINGS.focusDuration);
        this.shortBreakValueField.textContent = formatTime(DEFAULT_SETTINGS.shortBreakDuration);
        this.longBreakValueField.textContent = formatTime(DEFAULT_SETTINGS.longBreakDuration);
        this.roundsValueField.textContent = DEFAULT_SETTINGS.rounds;
    }
}

function formatTime(string) {
    return `${string}:00`;
}





