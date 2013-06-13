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
    this.going_down = true;
    this.going_right = true;

    this.setPosition = function(offset_top, offset_left) {
      this.top = offset_top;
      this.left = offset_left;
      this.element.offset({top:offset_top, left:offset_left});
    };

    this.move = function() {
      var new_top = this.getNewTop();
      var new_left = this.getNewLeft();
      this.setPosition(new_top, new_left);
    };

    this.getNewTop = function() {
      if(this.going_down)
        return this.top + 1;
      else
        return this.top -1;
    };

    this.getNewLeft = function() {
      if(this.going_right)
        return this.left + 1;
      else
        return this.left -1;
    };

    this.setDirection = function() {
      this.setGoingDown();
      this.setGoingRight();
    }

    this.setGoingDown = function() {
      if (this.top <= 0) {
        this.going_down = true;
      }
      if (this.top + this.height >= $(window).height()) {
        this.going_down = false;
      }
    }

    this.setGoingRight = function() {
      if (this.left <= 0) {
        this.going_right = true;
      }
      if (this.left + this.width >= $(window).width()) {
        this.going_right = false;
      }
    }

    this.drift = function() {
      this._drift(this);
    }

    this._drift = function(that) {
      that.move();
      that.setDirection();
      setTimeout(function() {that._drift(that)}, 10);
    }

};

/*
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
*/
