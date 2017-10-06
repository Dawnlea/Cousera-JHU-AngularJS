(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {

  var catList = this;
  catList.items = items;
  console.log("CategoriesListController, items: "+catList.items);
}

})();
