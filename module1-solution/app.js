(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.lunchEntry = "";
  $scope.checkMessage = "";

  $scope.checkLunchEntry = function () {
    var lunchItems = $scope.lunchEntry.split(',');
    var noOfItems = lunchItems.length;
    var returnMsg = "";
// remove entry items from the list
    for (var i = 0; i < lunchItems.length; i++) {
      if (lunchItems[i].trim() == "") {
        noOfItems--
      }
    }

    if ($scope.lunchEntry.trim() == "") {
      returnMsg = "Please enter data first"
    }
    else if (noOfItems <= 3) {
      returnMsg = "Enjoy!"
    }
    else {
      returnMsg = "Too much!"
    }
    $scope.checkMessage = returnMsg;
  };
};

})();
