(function() {
  'use strict';

  angular
    .module('exampleAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
