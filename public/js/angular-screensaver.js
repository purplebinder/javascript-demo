function ScreenSaverController() {
}

var screenSaverApp = window.screenSaverApp = angular.module('screenSaverApp', [])
  .directive('screenSaver', function($timeout) {
    return function(scope, element, attrs) {
      console.log(scope);
      console.log(element);
      console.log(attrs);

      function incPosition() {
        element.css({left: (element[0].x + 1) + 'px'});
        $timeout(incPosition, 1000);
      }

      incPosition();
    }
  });
