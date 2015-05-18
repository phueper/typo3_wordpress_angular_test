(function() {
  'use strict';

  angular
    .module('t3_wp_ng', [
      'ui.router',
      't3_wp_ng.appProperties',
      't3_wp_ng.content',
      't3_wp_ng.navigation',
      'xml', /* angular-xml */
      'ngSanitize' /* angular-sanitize */
    ])

    .config(['$logProvider', '$urlRouterProvider', '$httpProvider',
             function($logProvider, $urlRouterProvider, $httpProvider) {
               $logProvider.debugEnabled(true);
               /* if no routes match... fallback to root */
               $urlRouterProvider.otherwise('/');
               $httpProvider.interceptors.push('xmlHttpInterceptor')
             }])
})();