/*
 * Screen Saver applications
 *
 */

var ScreenSaver = function(selector) {
    this.element = $(selector);
    var offset = this.element.offset();
    this.top = offset.top;
    this.left = offset.left;
    this.width = this.element.width();
    this.height = this.element.height();
    this.going_down = right;
    this.going_right = true;

    this.setPosition = function(offset_top, offset_left) {
      this.top = offset_top;
      this.left = offset_left;
      this.element.offset({top:offset_top, left:offset_left});
    }

    this.move = function() {
      var new_top = this.getNewTop();
      var new_left = this.getNewLeft();
      this.setPosition(new_top, new_left);
    };

    this.getNewTop = function() {
      return this.top + 1;
    }

    this.getNewLeft = function() {
      return this.left + 1;
    }
}

/*
var drift;
$(document).ready(function() {

  var Mooninites = new ScreenSaver('img');
  var width = $(window).width();
  var height = $(window).height();
  var going_down = false;
  var going_right = true;

  var record_offset = function() {
    offset = $('img').offset();
    Mooninites.top = offset.top;
    Mooninites.left = offset.left;
  }

  var get_offset = function() {
    return $('img').offset();
  };

  var set_offset = function(offset_top, offset_left) {
    return $('img').offset({top: offset_top, left: offset_left});
  };

  var log_offset = function() {
    console.log(get_offset());
  }

  var log_offset_loop = function() {
    console.log($('img').offset());
    setTimeout(log_offset_loop, 5000);
    return null
  }

  var log_window_size = function() {
    console.log($(window).height(),', ', $(window).width());
  }

  var drift = function() {
      record_offset();

      // Going down
      if (Mooninites.top + Mooninites.height < height && going_down) {
          if (Mooninites.left + Mooninites.width < width && going_right) {
              // Going down and right
              set_offset(Mooninites.top + 1, Mooninites.left + 1);
          }
          else {
              // Going down and left
              set_offset(Mooninites.top + 1, Mooninites.left -1);
          }
      }
      // Going up
      else {
          if (Mooninites.left + Mooninites.width < width && going_right) {
              // Going up and right
              set_offset(Mooninites.top -1, Mooninites.left + 1);
          }
          else {
              // Going up and left
              set_offset(Mooninites.top -1, Mooninites.left -1);
          }
      }

      // Set direction for next moonimove
      if (Mooninites.top + Mooninites.height == height)
          going_down = false
      if (Mooninites.left + Mooninites.width == width)
          going_right = false
      if (Mooninites.top == 0)
          going_down = true
      if (Mooninites.left == 0)
          going_right = true
      record_offset();
      setTimeout('window.drift', 10);
  }();
});
*/
