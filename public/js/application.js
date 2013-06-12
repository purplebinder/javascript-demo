var WhiteSquare = {
    offset_top: 0,
    offset_left: 0
}

var record_offset = function() {
  offset = $('#white-square').offset();
  WhiteSquare.offset_top = offset.top;
  WhiteSquare.offset_left = offset.left;
}

var get_offset = function() {
  return $('#white-square').offset();
};

var set_offset = function(offset_top, offset_left) {
  return $('#white-square').offset({top: offset_top, left: offset_left});
};

var log_offset = function() {
  console.log(get_offset());
}

var log_offset_loop = function() {
  //log_offset();
  console.log($('#white-square').offset());
  setTimeout(log_offset_loop, 5000);
  return null
}

var log_window_size = function() {
  console.log($(window).height(),', ', $(window).width());
}

var drift_down = function() {
    record_offset();
    set_offset(WhiteSquare.offset_top + 1, WhiteSquare.offset_left);
    record_offset();
    setTimeout(drift_down, 1000);
}
