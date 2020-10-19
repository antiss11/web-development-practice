let ProgressBar = require("progressbar.js");

export default class Progress {
    /* constructor({ focusColor, trailColor, textColor, statusString }) { */
    constructor(statusString) {
        this.bar = new ProgressBar.Circle(".progress-container", {
            easing: "easeIn",
            strokeWidth: 5,
            trailWidth: 0.5,
            text: {
                value: 1,
                style: {
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    padding: 0,
                    margin: 0,
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'inherit',
                }
            },
            svgStyle: {
                display: "block",
                width: "100%",
            },
        });
        this.centerCircle = document.querySelector(".progress-container path:first-child");
        this.progressCircle = document.querySelector(".progress-container path:last-child");
        this.centerCircle.classList.add("progress-container__center-circle");
        this.progressCircle.classList.add("progress-container__progress-circle", "progress-circle--focus")
        this.bar.set(1);
        this.animate = false;
        this.status = statusString;
        this.value = 1;
    }

    set status(string) {
        this.bar.text.innerHTML = string;
    }

    set fill(value) {
        this.bar.animate(value, {
            duration: 999,
            easing: "linear",
        })
    }

    async resetRound() {
        this.bar.stop();
        this.bar.set(1);
    }

    changeProgressCircleStatus(status) {
        let oldStatusClass = this.progressCircle.classList[1];
        let newStatusClass = oldStatusClass.split("--")[0] + "--" + status;
        this.progressCircle.classList.replace(oldStatusClass, newStatusClass);
    }
}