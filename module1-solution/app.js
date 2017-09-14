(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject = ['$scope'];

function LunchCheckController ($scope) {

  $scope.checkMessage = "XXXX";

  $scope.checkLunchEntry = function () {
    $scope.checkMessage = "XXXX";
    return "Hello Coursera!";
  };
};

})();
