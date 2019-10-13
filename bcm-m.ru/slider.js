let slides = document.getElementsByClassName("slide");
let index = 0;
slideW = parseFloat(window.getComputedStyle(document.getElementById("slider")).getPropertyValue("width"));
leftPos = slideW;

for (let i=0; i<slides.length; i++) {
    if (i !== 0) {
        slides[i].style.display = "none";
        slides[i].style.position = "absolute";
        slides[i].style.left = leftPos + "px";
        slides[i].style.top = 0 + "px";
        leftPos += slideW;
    }
}

function next() {
   slides[index].style.display = "none";
   slides[index].style.position = "absolute";
   slides[++index].style.left = 0 + "px";
   slides[index].style.display = "block";

}