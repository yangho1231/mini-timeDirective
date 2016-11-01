angular.module('timeApp').directive('showTime', function() {
  return {
    restrict: 'E',
    template: '<div>Hello {{dname}} the current time is {{time}} </div>',
    scope: {
      dname: "=aname"
    },
    link: function(scope, elem, attr) {
      var currentTime = new Date();
      scope.time = currentTime.toString();

    }

  }
})
