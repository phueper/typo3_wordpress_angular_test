(function(){
  'use strict';

  angular
    .module('t3_wp_ng.navigation')
    .factory('navigationService', navigationService);

  navigationService.$inject = ['$resource', 'T3_INDEX_URL'];

  function navigationService($resource, T3_INDEX_URL){
    return $resource(T3_INDEX_URL, {}, {
      'getMainNavigation':       {method: 'GET', params: {'type': 1}, isArray: false, cache: true} // type 1 fetches the navigation xml
    });
  }
})();