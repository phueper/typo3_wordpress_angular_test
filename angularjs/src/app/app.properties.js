(function() {
  'use strict';

  angular
    .module('t3_wp_ng.appProperties', [])

    .constant('T3_BASE_URL', '/t3')
    .constant('T3_INDEX_URL', '/t3/index.php')

    .constant('WP_BASE_URL', '/wp')

})();