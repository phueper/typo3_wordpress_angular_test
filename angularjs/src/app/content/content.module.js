(function() {
  'use strict';

  angular
    .module('t3_wp_ng.content', ['ngResource', 'ngSanitize', 't3_wp_ng.appProperties'])
    /* Configures routes to the different views from different content deliveries */
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $stateProvider
        /* home state */
        .state('home', {
          url:  '/',
          data: {
            title:   '',
            content: ''
          }
        })
        /* content state */
        .state('content', {
          url:    'content',
          templateUrl: 'app/content/tpl/content.tpl.html'
        })
        /* content from typo3 */
        .state('content.typo3', {
          url:     '/t3/:id',
          parent:  'content',
          views:   {
            header: {
              templateUrl: 'app/content/tpl/header.tpl.html',
              controller:  'headerCtrl'
            },
            body:   {
              templateUrl: 'app/content/tpl/body.tpl.html',
              controller:  'bodyCtrl'
            }
          },
          resolve: {
            /* fetch content before controllers are running 'content' is injectable into Controllers
             since it is a promise, it will be resolved _before_ the controller is instantiated
             */
            content: ['contentService', '$stateParams', '$log', function(contentService, $stateParams, $log) {
              $log.debug('calling contentService.getContent');
              return contentService.getContent({id: $stateParams.id}).$promise;
            }]
          }
        });
    }])
})();