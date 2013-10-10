function ScreenSaverController() {
}

var foo;

var screenSaverApp = window.screenSaverApp = angular.module('screenSaverApp', [])
  .directive('screenSaver', function($timeout) {
    return function(scope, element, attrs) {
      var iHat = jHat = 1;
      var height = element[0].clientHeight,
        width = element[0].clientWidth,
        screenHeight = document.height,
        screenWidth = document.width;
        interval = (attrs.interval || 10);

      element.css({position: 'absolute'});

      function newX() {
        return element[0].x + (iHat * 1);
      }

      function newY() {
        return element[0].y + (jHat * 1);
      }

      function setDirection() {
        if (element[0].x <= 0) {
          iHat = 1;
        }
        if (element[0].y <= 0) {
          jHat = 1;
        }
        if ((element[0].x + width) >= screenWidth) {
          iHat = -1;
        }
        if ((element[0].y + height) >= screenHeight) {
          jHat = -1;
        }
      }

      function setPosition(x,y) {
        element.css({left: x + 'px', top: y + 'px'});
      }

      function incPosition() {
        setDirection();
        setPosition(newX(), newY());
        $timeout(incPosition, interval);
      }

      incPosition();
    }
  });
