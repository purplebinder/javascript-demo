/*
 * Screen Saver
 *
 */

// Your code goes here.
//
//

function ScreenSaver (img) {

  this.topshift = "+=10px";
  this.leftshift = "-=10px";
  this.img = img

  function animate_img() {

    console.log("animate function called");
    if (parseFloat($(this.img).css("bottom"))<=0) {
      this.topshift = "-=10px";
    }
    if (parseFloat($(this.img).css("top"))<=0) {
      this.topshift = "+=10px";
    }
    if (parseFloat($(this.img).css("left"))<=0) {
      this.leftshift = "+=10px";
    }
    if (parseFloat($(this.img).css("right"))<=0) {
      this.leftshift = "-=10px";
    }
    $(this.img).animate({top: this.topshift, left: this.leftshift}, 100);
  }


  this.drift = function () {
    setInterval(animate_img, 100);
  }

}
