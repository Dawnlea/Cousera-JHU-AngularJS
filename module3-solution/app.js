(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.inject = ['MenuSearchService'];

function NarrowItDownController (MenuSearchService) {
  var list = this;

  list.searchTerm = '';

  list.narrowItDown = function () {
    if (list.searchTerm === "") {
      list.foundItems = [];
      return;
    }
    var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
      promise
        .then(function(response) {
          list.foundItems = response;
        })
        .catch(function(error) {
          console.log("an error has occurred", error);
      });
    };

    list.removeItem = function(index) {
      list.foundItems.splice(index, 1);
    };
}

MenuSearchService.inject = ['$http','ApiBasePath'];

function MenuSearchService ($http, ApiBasePath) {

  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
    }).then(function(result) {

      var retItems = result.data.menu_items;

      var foundItems=[]; // Create empty found array ready for population

      for (var i = 0; i < retItems.length; i++) {
        if (retItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
          foundItems.push(retItems[i]);
        }
      }
      return foundItems;
    });
  };
}

function FoundItemsDirective() {

  var ddo = {
    templateUrl: 'foundItem.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  list.isEmpty = function() {
    return list.foundItems != undefined && list.foundItems.length === 0;
  }
}

})();
