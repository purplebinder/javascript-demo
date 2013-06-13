/*
 * Screen Saver applications
 *
 */

var ScreenSaver = function(selector) {
    this.el = $(selector);
    var offset = this.el.offset();
    this.top = offset.top
    this.left = offset.left;
}

var record_offset = function() {
  offset = $('img').offset();
  Mooninites.offset_top = offset.top;
  Mooninites.offset_left = offset.left;
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
  //log_offset();
  console.log($('img').offset());
  setTimeout(log_offset_loop, 5000);
  return null
}

var log_window_size = function() {
  console.log($(window).height(),', ', $(window).width());
}

var width = $(window).width();
var height = $(window).height();
var going_down = false
var going_right = true
var drift = function() {
    record_offset();

    // Going down
    if (Mooninites.offset_top + 230 < height && going_down) {
        if (Mooninites.offset_left + 300 < width && going_right) {
            // Going down and right
            set_offset(Mooninites.offset_top + 1, Mooninites.offset_left + 1);
        }
        else {
            // Going down and left
            set_offset(Mooninites.offset_top + 1, Mooninites.offset_left -1);
        }
    }
    // Going up
    else {
        if (Mooninites.offset_left +300 < width && going_right) {
            // Going up and right
            set_offset(Mooninites.offset_top -1, Mooninites.offset_left + 1);
        }
        else {
            // Going up and left
            set_offset(Mooninites.offset_top -1, Mooninites.offset_left -1);
        }
    }

    // Set direction for next moonimove
    if (Mooninites.offset_top + 230 == height)
        going_down = false
    if (Mooninites.offset_left + 300 == width)
        going_right = false
    if (Mooninites.offset_top == 0)
        going_down = true
    if (Mooninites.offset_left == 0)
        going_right = true
    record_offset();
    setTimeout(drift, 10);
}



