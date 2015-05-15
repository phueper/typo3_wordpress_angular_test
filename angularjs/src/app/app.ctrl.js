(function() {
  'use strict';

  angular
    .module('t3_wp_ng')

  /**
   * @ngdoc function
   * @name t3_wp_ng.AppCtrl
   * @requires $scope
   * @requires $rootScope
   * @requires $localStorage
   * @description Application main controller who saves session informations in local
   *              storage and navigate between page sections.
   **/

    .controller('AppCtrl', AppCtrl)

  AppCtrl.$inject = ['$scope', '$rootScope'];

  /**
   * @ngDoc function
   * @private
   * @constructor
   * @name reportsShowModalCtrl
   * @param {$scope} references to controllers scope
   * @param {$rootScope} references to the application root scope
   * @param {$localStorage} references to the $localStorage service to interact with localStorage api of the browser
   * @description Function to initialize the application main controller.
   */

  function AppCtrl($scope, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', onStateChangedSuccesful);

    function onStateChangedSuccesful(event, toState, toParams, fromState, fromParams) {
      $scope.title = toState.data.title;
    }
  }
})();