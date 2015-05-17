(function(){
  'use strict';

  angular
    .module('t3_wp_ng.navigation')

    .directive('myNavigation', ['$log', initNavigation]);

  function initNavigation($log){
    return {
      restrict: 'E',
      scope: {
      },
      templateUrl: 'app/navigation/navigation.tpl.html',
      controller: ['$scope', 'NavigationFactory', function($scope, NavigationFactory) {
        NavigationFactory.getMainNavigation().$promise.then(function(result){
          $log.debug(result);
          $scope.menu = result.menu;
        });
      }],
      link: function(scope, element, attrs, ctrl) {
      }
    };

  }

})();