(function() {
  'use strict';

  angular
    .module('t3_wp_ng.navigation')

    .directive('myNavigation', ['$log', 'NavigationFactory', initNavigation]);

  function initNavigation($log, NavigationFactory) {
    return {
      restrict:    'E',
      scope:       {},
      templateUrl: 'app/navigation/navigation.tpl.html',
      link:        function(scope, element, attrs, ctrl) {
        NavigationFactory.getMainNavigation().$promise.then(function(result) {
          $log.debug(result);
          scope.menu = result.menu;
        });
      }

    };
  }
})();