(function() {

   function Anchor(anchor) {
       this.anchor = anchor;
       window.addEventListener("scroll", this.checkPos.bind(this));
       this.anchor.addEventListener("click", this.toTop);
       this.anchor.style.display = "none";
       this.percentH = document.body.scrollHeight / 100;
   }
   
   Anchor.prototype.checkPos = function () {
       // console.log(this)
       if (window.pageYOffset >= 30*this.percentH) {
           this.anchor.style.display = "block";
       }
   };

   Anchor.prototype.toTop = function() {
       function scroll() {
           if (window.pageYOffset === 0) {
               clearInterval(scroller)
           }
           else {
               window.scrollBy(0, -10)
           }
       }
       let scroller = setInterval(scroll, 1)


   };

   new Anchor(document.getElementById("to_top"))
})();