/*
 * Screensaver tests
 */

describe('ScreenSaver', function() {
  it('finds the offset of its DOM element', function() {
    screenSaver = new ScreenSaver('#test-screensaver');
    assert.equal(screenSaver.top, 50);
  });
});
