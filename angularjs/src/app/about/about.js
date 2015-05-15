(function(){
  'use strict';

  angular
    .module('t3_wp_ng.about', ['ui.bootstrap'])
    /* Configures routes to the different views in about section */
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('about', {
          url:         '/',
          templateUrl: 'app/about/about.tpl.html',
          controller:  'AboutCtrl',
          data:        {
            title: 'About'
          }
        });
    }]);
})();