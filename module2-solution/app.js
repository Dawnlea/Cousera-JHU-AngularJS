(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];

function ToBuyController (ShoppingListCheckOffService) {

  var list = this;

  list.itemsToBuy = ShoppingListCheckOffService.getItems('toBuy');

  list.purchaseItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

function AlreadyBoughtController (ShoppingListCheckOffService) {

  var list = this;

  list.boughtItems = ShoppingListCheckOffService.getItems('bought');
}

 function ShoppingListCheckOffService () {
  var service = this;

  // List of shopping items
  var itemsToBuy = [{
    name: "Cookies",
    quantity: 10
  },
  { name: "Milk",
    quantity: 2
  },
  { name: "Bread",
    quantity: 1
  },
  { name: "Meat",
    quantity: 1
  },
  { name: "Crisps",
    quantity: 1
  }];

  var itemsBought = [];

  service.buyItem = function (itemIndex) {
    itemsBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItems = function (listType) {
    if (listType === 'toBuy') {
        return itemsToBuy;
    }
    else {
      return itemsBought;
    }
  }
};

})();
