var Mooninites = {
    offset_top: 0,
    offset_left: 0
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
    if (Mooninites.offset_top + 230 < height && going_down) {
        record_offset();
        if (Mooninites.offset_left + 300 < width && going_right) {
            set_offset(Mooninites.offset_top + 1, Mooninites.offset_left + 1);
        }
        else {
            set_offset(Mooninites.offset_top + 1, Mooninites.offset_left -1);
        }
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
    else {
        record_offset();
        if (Mooninites.offset_left +300 < width && going_right) {
            set_offset(Mooninites.offset_top -1, Mooninites.offset_left + 1);
        }
        else {
            set_offset(Mooninites.offset_top -1, Mooninites.offset_left -1);
        }
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
}



