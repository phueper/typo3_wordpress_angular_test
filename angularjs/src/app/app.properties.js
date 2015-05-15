(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name t3_wp_ng.appProperties
   * @description Specific module to store all necessary app properties
   *
   */

  angular
    .module('t3_wp_ng.appProperties', [])

    .constant('T3_BASE_URL', '/t3')

    .constant('WP_BASE_URL', '/wp')

})();