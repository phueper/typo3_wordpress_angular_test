(function() {
  'use strict';

  angular
    .module('t3_wp_ng', [
      'ui.router',
      't3_wp_ng.appProperties',
      't3_wp_ng.navigation',
      't3_wp_ng.home',
      't3_wp_ng.about',
      'xml' /* angular-xml */
    ])

    .config(['$logProvider', '$urlRouterProvider', '$httpProvider',
             function($logProvider, $urlRouterProvider, $httpProvider) {
               $logProvider.debugEnabled(true);
               /* if no routes match... fallback to root (dashboard) */
               $urlRouterProvider.otherwise('/');
               $httpProvider.interceptors.push('xmlHttpInterceptor')
             }]);

})();