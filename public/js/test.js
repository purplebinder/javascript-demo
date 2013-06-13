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
  });

});
