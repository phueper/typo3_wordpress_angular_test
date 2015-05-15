(function(){
  'use strict';

  angular
    .module('t3_wp_ng.home', ['ui.bootstrap'])
    /* Configures routes to the different views in home section */
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('home', {
          url:         '/',
          templateUrl: 'app/home/home.tpl.html',
          controller:  'HomeCtrl',
          data:        {
            title: 'Typo3 WordPress AngularJS Test'
          }
        });
    }]);
})();