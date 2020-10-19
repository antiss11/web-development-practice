export default class Counter {
    constructor(initialStatus) {
        this.field = document.querySelector(".counter__value");
        this.resetButton = document.querySelector(".counter__reset-button");
        this.fieldValue = initialStatus;
    }

    set fieldValue(string) {
        this.field.innerHTML = string;
    }
}