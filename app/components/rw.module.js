(function() {
    'use strict';

    angular
        .module('rw', [
            'ngSanitize',
            'ui.router',
            'rw.common'
        ])
        .run(['$templateCache', removeTemplateCache]);

    function removeTemplateCache($templateCache) {
      $templateCache.removeAll();
    }

})();
