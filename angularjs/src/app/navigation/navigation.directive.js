(function() {
  'use strict';

  angular
    .module('t3_wp_ng.navigation')

    .directive('myNavigation', ['$log', 'navigationService', '$state', initNavigation]);

  function initNavigation($log, navigationService, $state) {
    return {
      restrict:    'E',
      scope:       {},
      templateUrl: 'app/navigation/navigation.tpl.html',
      link:        function(scope, element, attrs, ctrl) {
        navigationService.getMainNavigation().$promise.then(function(result) {
          $log.debug(result);
          scope.menu = result.menu;
        });
      }

    };
  }
})();