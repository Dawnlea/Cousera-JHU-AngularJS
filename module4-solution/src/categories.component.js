(function () {
'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: '/src/templates/categoriesComponent.html',
    bindings: {
    items: '<'
    }
  });
})();
