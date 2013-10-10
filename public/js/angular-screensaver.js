var app = angular.module('screensaver', []);

var foo;

app.directive('screenSaver', function($timeout) {
  return function(scope, element, attrs) {
    
    img = element[0];

    var xshift = 1;
    var yshift = 1;
    var signx = 1;
    var signy = 1;

    var screenWidth = document.width;
    var screenHeight = document.height;
        
    function moveLater() {

      $timeout(function() {
          move(); // update img element
          moveLater(); // schedule another update
        }, 20);
    }

    function move () {
      var x = element[0].x;
      var y = element[0].y;
      var width = element[0].clientWidth;
      var height = element[0].clientHeight;
      
      if ( (x+width) > screenWidth ){
        signx = -1;
      }
      if ( (y+height) > screenHeight ){
        signy = -1;
      }
      if (x==0) {
        signx = 1;
      }
      if (y==0) {
        signy = 1;
      }

      x += signx*xshift;
      y += signy*yshift;

      angular.element(img).css({top: y + "px", left: x + "px"});
    }

    moveLater();
  }
});

app.controller('ScreenSaverController', function($scope) {

});
