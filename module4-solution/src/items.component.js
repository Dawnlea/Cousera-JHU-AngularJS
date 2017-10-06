(function() {
'use strict';

angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/templates/itemscomponent.html',
    bindings: {
      items: '<'
    }
  });

})();
