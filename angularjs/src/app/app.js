(function() {
  'use strict';

  angular
    .module('t3_wp_ng', [
      'ui.router',
      't3_wp_ng.appProperties',
      't3_wp_ng.home',
      't3_wp_ng.about',
    ])

    .config(['$logProvider', '$urlRouterProvider', function($logProvider, $urlRouterProvider) {
      $logProvider.debugEnabled(true);
      /* if no routes match... fallback to root (dashboard) */
      $urlRouterProvider.otherwise('/');
    }]);

})();