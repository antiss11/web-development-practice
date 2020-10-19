import Timer from "./timer";
import StartButton from "./startButton";
import Volume from "./volumeControl.js";
import Progress from "./progressBar.js";
import audio from "../alert.wav";
import Counter from "./counter";
import Skip from "./skipButton";
import SettingsMenu from "./settingsMenu";
import { DEFAULT_SETTINGS } from "./defaultSettings";

class Pomodoro {
    constructor() {
        this.settingsMenu = new SettingsMenu;
        this.totalRounds = 4;
        this.nowRound = 1;
        this.focusesDone = 0;
        this.status = "FOCUS";
        this.colorThemeName = "andromeda";
        this.counter = new Counter(generateCounterStatusString(this.nowRound, this.totalRounds, this.focusesDone));
        this.startButton = new StartButton;
        this.timer = new Timer(DEFAULT_SETTINGS.focusDuration, DEFAULT_SETTINGS.shortBreakDuration,
            DEFAULT_SETTINGS.longBreakDuration);
        this.progressBar = new Progress(
            generateProgressBarStatusString(this.timer.minutes, this.timer.seconds, this.status),
        );
        this.volume = new Volume;
        this.skipButton = new Skip;
        this.setCallbacks();

        this.settingsMenu.timerSettings.focusSlider.on("slide", (event, ui) => {
            this.timer.focusDuration = ui.value;
            this.resetRound(true, true);
        });
        this.settingsMenu.timerSettings.shortBreakSlider.on("slide", (event, ui) => {
            this.timer.shortBreakDuration = ui.value;
            this.resetRound(true, true);
        });
        this.settingsMenu.timerSettings.longBreakSlider.on("slide", (event, ui) => {
            this.timer.longBreakDuration = ui.value;
            this.resetRound(true, true);
        });
        this.settingsMenu.timerSettings.roundsSlider.on("slide", (event, ui) => {
            this.totalRounds = ui.value;
        });
    }

    timerChangedCallback(e) {
        let duration;
        switch (this.status) {
            case "FOCUS":
                duration = this.timer.focusDuration * 60;
                break;
            case "BREAK":
                duration = this.timer.shortBreakDuration * 60;
                break;
            case "LONG BREAK":
                duration = this.timer.longBreakDuration * 60;
                break;
        }
        let timePassed = this.timer.minutes * 60 + this.timer.seconds;
        let percentage = timePassed / duration;
        this.progressBar.fill = percentage;
        this.progressBar.status = generateProgressBarStatusString(this.timer.minutes, this.timer.seconds, this.status);
    }


    setCallbacks() {
        this.startButton.button.addEventListener("click", (e) => this.timer.toggle());
        this.timer.container.addEventListener("timerchanged", (e) => this.timerChangedCallback());
        this.timer.container.addEventListener("break", (e) => this.onStateChanged());
        this.timer.container.addEventListener("focus", (e) => this.onStateChanged());
        this.counter.resetButton.addEventListener("click", (e) => this.resetRound(true, true));
        this.skipButton.button.addEventListener("click", (e) => this.onStateChanged(true));
    }

    resetRound(changeStartButtonState = false, disableTimer = false) {
        if (changeStartButtonState) {
            this.startButton.showContinueIcon();
        }
        if (disableTimer) {
            this.timer.disable();
        }
        this.timer.reset(this.status);
        this.progressBar.status = generateProgressBarStatusString(this.timer.minutes, this.timer.seconds, this.status);
        this.progressBar.resetRound();
    }

    _setBreak() {
        this.focusesDone++;
        this.status = "BREAK";
    }

    _setFocus() {
        this.nowRound++;
        this.breaksDone++;
        this.status = "FOCUS";
    }

    _setLongBreak() {
        this.status = "LONG BREAK";
    }

    onStateChanged(reset = false) {
        this.startButton.animation();
        this.volume.audio.play();
        if (this.status === "BREAK" || this.status === "LONG BREAK") {
            this._setFocus();
            this.progressBar.changeProgressCircleStatus("focus");
        } else if (this.status === "FOCUS") {
            this._setBreak();
            if (this.nowRound === this.totalRounds) {
                this._setLongBreak();
                this.progressBar.changeProgressCircleStatus("long-break");
            } else {
                this.progressBar.changeProgressCircleStatus("short-break");
            }
        }
        this.counter.fieldValue = generateCounterStatusString(this.nowRound, this.totalRounds, this.focusesDone);
        this.progressBar.status = generateProgressBarStatusString(this.timer.minutes, this.timer.seconds, this.status);
        if (this.status === "LONG BREAK") {
            this.nowRound = 0;
        }
        if (reset) {
            this.resetRound();
        }
    }
}

window.onload = function () {
    let pomodoro = new Pomodoro;
}

function generateProgressBarStatusString(minutes, seconds, status) {
    if (minutes.toString().length < 2) minutes = "0" + minutes;
    if (seconds.toString().length < 2) seconds = "0" + seconds;
    return `${minutes}:${seconds}<br>${status}`;
}

function generateCounterStatusString(nowRound, totalRounds, focusesDone) {
    return (focusesDone === 0) ? `${nowRound}/${totalRounds}` :
        `${nowRound}/${totalRounds}<small>(${focusesDone})`;
}

function alarm() {
    AUDIO.play();
}