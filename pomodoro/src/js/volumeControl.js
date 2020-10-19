export default class Volume {
    constructor() {
        this.volumeButton = document.querySelector(".volume__toggle");
        this.volumeBar = document.querySelector(".volume-slider");
        this.mutedIcon = document.querySelector(".toggle__svg--muted");
        this.unmutedIcon = document.querySelector(".toggle__svg")
        this.timerId;
        this.audio;
        this.barShows = false;
        this.muted = false;
        this._addListeners();
        this.generateAudioTag();
        this.initialSlider();
    }

    initialSlider() {
        let that = this;
        $(this.volumeBar).slider({
            orientation: "vertical",
            value: 50,
            slide: function (e, ui) {
                if (ui.value === 0) {
                    that.showMuted();
                } else {
                    that.showUnmuted();
                };
                that.audio.volume = ui.value / 100;
            }
        });
    }

    enable() {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.volumeBar.classList.add("volume-slider--active");
    }

    disable() {
        this.timerId = setTimeout(() => this.volumeBar.
            classList.remove("volume-slider--active"), 2000);
    }

    toggleVolume() {
        if (this.muted) {
            this.showUnmuted();
            $(this.volumeBar).slider("option", "value", 100);
        } else {
            this.showMuted();
            $(this.volumeBar).slider("option", "value", 0);
        }
    }

    showMuted() {
        this.unmutedIcon.style.display = "none";
        this.mutedIcon.style.display = "block";
        this.muted = true;
    }

    showUnmuted() {
        this.unmutedIcon.style.display = "block";
        this.mutedIcon.style.display = "none";
        this.muted = false;
    }

    _addListeners() {
        this.volumeButton.addEventListener("mouseenter", (e) => this.enable(this));
        this.volumeButton.addEventListener("mouseleave", (e) => this.disable(this));
        this.volumeButton.addEventListener("click", this.toggleVolume.bind(this));
        this.volumeBar.addEventListener("mouseenter", () => clearTimeout(this.timerId));
        this.volumeBar.addEventListener("mouseleave", this.disable.bind(this));
    }

    generateAudioTag() {
        this.audio = document.createElement("audio");
        this.audio.classList.add("audio");
        this.audio.src = "./alert.wav";
        document.body.prepend(this.audio);
        this.audio.volume = 0.5;
    }
}







