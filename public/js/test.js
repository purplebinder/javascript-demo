/*
 * Screensaver tests
 */

describe('ScreenSaver', function() {
  var screenSaver;
  var screenSaverDOM;

  beforeEach(function() { 
    screenSaver = new ScreenSaver('#test-screensaver'); 
    screenSaverDOM = $('#test-screensaver');
  });

  it('finds the offset top of its DOM element', function() {
    assert.equal(screenSaver.top, 50);
  });

  it('finds the offset left of its DOM element', function() {
    assert.equal(screenSaver.left, 50);
  });

  it('knows the width of its DOM element', function() {
    assert.equal(screenSaver.width, 300);
  });

  it('knows the height of its DOM element', function() {
    assert.equal(screenSaver.height, 200);
  });

  describe('#setPosition()', function() {
    beforeEach(function() {
      screenSaver.setPosition(600,700);
    });
    it('sets screenSaver.top', function() {
      assert.equal(screenSaver.top, 600);
    });
    it('sets screenSaver.left', function() {
      assert.equal(screenSaver.left, 700);
    });
    it('sets screenSaver.top', function() {
      assert.equal(screenSaverDOM.offset().top, 600);
    });
    it('sets screenSaver.left', function() {
      assert.equal(screenSaverDOM.offset().left, 700);
    });
  });

  describe('#move()', function() {
    it('if its going down and right', function() {
      screenSaver.going_down = true;
      screenSaver.going_right = true;
      var starting_top = screenSaver.top;
      var starting_left = screenSaver.left;
      screenSaver.move();
      assert.equal(screenSaver.top, starting_top + 1);
      assert.equal(screenSaver.left, starting_left + 1);
    });
    it('if its going down and left', function() {
      screenSaver.going_down = true;
      screenSaver.going_right = false;
      var starting_top = screenSaver.top;
      var starting_left = screenSaver.left;
      screenSaver.move();
      assert.equal(screenSaver.top, starting_top + 1);
      assert.equal(screenSaver.left, starting_left - 1);
    });
    it('if its going up and left', function() {
      screenSaver.going_down = false;
      screenSaver.going_right = false;
      var starting_top = screenSaver.top;
      var starting_left = screenSaver.left;
      screenSaver.move();
      assert.equal(screenSaver.top, starting_top - 1);
      assert.equal(screenSaver.left, starting_left - 1);
    });
    it('if its going up and right', function() {
      screenSaver.going_down = false;
      screenSaver.going_right = true;
      var starting_top = screenSaver.top;
      var starting_left = screenSaver.left;
      screenSaver.move();
      assert.equal(screenSaver.top, starting_top - 1);
      assert.equal(screenSaver.left, starting_left + 1);
    });

  });

  describe('#setDirection', function() {
    describe('moving left', function() {
      it('keeps moving left', function() {
        screenSaver.going_right = false;
        screenSaver.setPosition(50, 50);  // left = 50 ... not the edge of the screen
        screenSaver.setDirection();
        assert.equal(screenSaver.going_right, false);
      });
      it('unless it hits the left edge of the window', function() {
        screenSaver.going_right = false;
        screenSaver.setPosition(50, 0);  // left = 0
        screenSaver.setDirection();
        assert.equal(screenSaver.going_right, true);
      });
    });

    describe('moving right', function() {
      it('keeps moving right', function() {
        screenSaver.setPosition(50, 50);  // right = 50 ... not the edge of the screen
        screenSaver.going_right = true;
        screenSaver.setDirection();
        assert.equal(screenSaver.going_right, true);
      });
      it('unless it hits the right edge of the window', function() {
        screenSaver.setPosition(50, $(window).width() - screenSaver.width);  // right = ... edge of screen
        screenSaver.going_right = true;
        screenSaver.setDirection();
        assert.equal(screenSaver.going_right, false);
      });

    });
    describe('moving up', function() {
      it('keeps moving up', function() {
        screenSaver.setPosition(50, 50);  // top = 50 ... not the edge of the screen
        screenSaver.going_down = false;
        screenSaver.setDirection();
        assert.equal(screenSaver.going_down, false);
      });
      it('unless it hits the top edge of the window', function() {
        screenSaver.setPosition(0, 50);  // top = 0
        screenSaver.going_down = false;
        screenSaver.setDirection();
        assert.equal(screenSaver.going_down, true);
      });

    });
    describe('moving down', function() {
      it('keeps moving down', function() {
        screenSaver.setPosition(50, 50);  // bottom = 50 + screen saver height ... not the edge of the screen
        screenSaver.going_down = true;
        screenSaver.setDirection();
        assert.equal(screenSaver.going_down, true)
      });
      it('unless it hits the bottom edge of the window', function() {
        screenSaver.setPosition($(window).height() - screenSaver.height, 50);  // bottom = ... edge of screen
        screenSaver.going_down = true;
        screenSaver.setDirection();
        assert.equal(screenSaver.going_down, false)
      });

    });
  });

});
