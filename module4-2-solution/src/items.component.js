(function() {
'use strict';

angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/itemscomponent.html',
    bindings: {
      items: '<'
    }
  });

})();
