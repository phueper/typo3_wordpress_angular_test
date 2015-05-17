(function(){
  'use strict';

  angular
    .module('t3_wp_ng.navigation', ['ngResource', 't3_wp_ng.appProperties'])
    .factory('NavigationFactory', navigationFactory);

  navigationFactory.$inject = ['$resource', 'T3_INDEX_URL'];

  function navigationFactory($resource, T3_INDEX_URL){
    return $resource(T3_INDEX_URL, {}, {
      'getMainNavigation':       {method: 'GET', params: {'type': 1}, isArray: false, cache: true} // type 1 fetches the navigation xml
    });
  }
})();