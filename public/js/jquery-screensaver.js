/*
 * Screen Saver
 *
 */

// Your code goes here.
//


function ScreenSaver (img) {

  var topshift = "+=1px";
  var leftshift = "-=1px";
  var img = img

  function animate_img() {

    if (parseFloat($(img).css("bottom"))==0) {
      topshift = "-=1px";
    }
    if (parseFloat($(img).css("top"))==0) {
      topshift = "+=1px";
    }
    if (parseFloat($(img).css("left"))==0) {
      leftshift = "+=1px";
    }
    if (parseFloat($(img).css("right"))==0) {
      leftshift = "-=1px";
    }
    $(img).animate({top: topshift, left: leftshift}, 10);
  }


  this.drift = function () {
    setInterval(animate_img, 20);
  }

}

