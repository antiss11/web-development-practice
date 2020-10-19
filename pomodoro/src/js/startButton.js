export default class StartButton {
    constructor() {
        this.button = document.querySelector(".start-button");
        this.pauseIcon = document.querySelector(".start-button__svg-pause");
        this.playIcon = document.querySelector(".start-button__svg-start");
        this.onPause = false;
        this.animTime = 500;
        this.setEventHandlers();
    };

    setEventHandlers() {
        this.button.addEventListener("click", (e) => this.onclick(e));
    };

    onclick() {
        this.animation();
        this.toggle();
    };

    async animation() {
        this.button.style.opacity = 0;
        await new Promise((res, rej) => setTimeout(res, this.animTime));
        this.button.style.opacity = 1;
    };

    toggle() {
        if (this.onPause) {
            this.showContinueIcon();
        } else if (!this.onPause) {
            this.showPauseIcon();
        }
    };

    showContinueIcon() {
        this.pauseIcon.style.display = "none";
        this.playIcon.style.display = "block";
        this.onPause = false;
    };

    showPauseIcon() {
        this.pauseIcon.style.display = "block";
        this.playIcon.style.display = "none";
        this.onPause = true;
    };
}