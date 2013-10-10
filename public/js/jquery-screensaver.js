/*
 * Screen Saver
 *
 */

// Your code goes here.
//


function ScreenSaver (img) {

  var topshift = "+=10px";
  var leftshift = "-=10px";
  var img = img

  function animate_img() {

    if (parseFloat($(img).css("bottom"))<=0) {
      topshift = "-=10px";
    }
    if (parseFloat($(img).css("top"))<=0) {
      topshift = "+=10px";
    }
    if (parseFloat($(img).css("left"))<=0) {
      leftshift = "+=10px";
    }
    if (parseFloat($(img).css("right"))<=0) {
      leftshift = "-=10px";
    }
    $(img).animate({top: topshift, left: leftshift}, 100);
  }


  this.drift = function () {
    setInterval(animate_img, 100);
  }

}

