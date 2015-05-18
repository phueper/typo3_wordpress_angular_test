(function() {
  'use strict';

  angular
    .module('t3_wp_ng.content')

    /* 'content' injection is from the resolve of the ui-router states! */
    .controller('headerCtrl', ['$scope', '$log', 'content', '$sce', headerCtrl])
    .controller('bodyCtrl', ['$scope', '$log', 'content', '$sce', bodyCtrl]);

  function headerCtrl($scope, $log, content, $sce) {
    $log.debug("headerCtrl: ", content);
    $scope.title = content.content.header.toString();
  }

  function bodyCtrl($scope, $log, content, $sce) {
    $log.debug("bodyCtrl: ", content);
    $scope.content = $sce.trustAsHtml(content.content.text.toString());
  }
})();