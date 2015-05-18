(function(){
  'use strict';

  angular
    .module('t3_wp_ng.content')
    .factory('contentService', contentService);

  contentService.$inject = ['$resource', 'T3_INDEX_URL'];

  function contentService($resource, T3_INDEX_URL){
    return $resource(T3_INDEX_URL, {}, {
      'getContent':       {method: 'GET', params: {'type': 2}, isArray: false, cache: true} // type 2 fetches the content xml
    });
  }
})();