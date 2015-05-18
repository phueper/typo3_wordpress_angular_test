(function() {
  'use strict';

  angular
    .module('t3_wp_ng')

    .controller('appCtrl', ['$scope', '$rootScope', '$state', '$log', appCtrl])

  function appCtrl($scope, $rootScope, $state, $log) {
    /* to debug ui-router state transitions */
    $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
      $log.debug('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
    });

    $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
      $log.debug('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
    });

    $rootScope.$on('$viewContentLoaded',function(event){
      $log.debug('$viewContentLoaded - fired after dom rendered',event);
    });

    /* state transition error states */
    $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
      $log.error('$stateChangeError - fired when an error occurs during transition.');
      $log.error('arguments: ', arguments);
    });
    $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
      $log.warn('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
      $log.warn(unfoundState, fromState, fromParams);
    });
  }
})();