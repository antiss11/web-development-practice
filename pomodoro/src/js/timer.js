export default class Timer {
    constructor(focusDuration, shortBreakDuration, longBreakDuration) {
        this.focusDuration = focusDuration; // minutes
        this.shortBreakDuration = shortBreakDuration; // minutes
        this.longBreakDuration = longBreakDuration; // minutes
        this.minutes = this.focusDuration;
        this.seconds = 0;
        this.working = true;
        this.container = document.querySelector(".progress-container");
        this.timerChangeEvent = new CustomEvent("timerchanged");
        this.breakEvent = new CustomEvent("break");
        this.focusEvent = new CustomEvent("focus");
        this.timerId;
    }

    toggle() {
        if (this.timerId) {
            this.disable();
        } else {
            this.enable()
        }
    }

    reset(status) {
        if (status === "FOCUS") {
            this.minutes = this.focusDuration;
        } else if (status === "BREAK") {
            this.minutes = this.shortBreakDuration;
        } else if (status === "LONG BREAK") {
            this.minutes = this.longBreakDuration;
        }
        this.seconds = 0;
    }

    disable() {
        clearInterval(this.timerId);
        this.timerId = undefined;
        this.working = false;
    }

    enable() {
        this.timerId = setInterval(() => {
            if (this.minutes === 0 && this.seconds === 1) {
                if (this.working) {
                    this.working = false;
                    this.container.dispatchEvent(this.breakEvent);
                    this.minutes = this.focusDuration;
                } else {
                    this.working = true;
                    this.minutes = this.focusDuration;
                    this.container.dispatchEvent(this.focusEvent);
                }
            };
            if (this.seconds !== 0) {
                this.seconds--;
            } else {
                this.minutes--;
                this.seconds = 59;
            }
            this.container.dispatchEvent(this.timerChangeEvent);
        }, 1000);
    }
};

