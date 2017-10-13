(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'userInfo'];
function MyInfoController(MenuService, userInfo) {
  var $ctrl = this;

  if (userInfo) {
    $ctrl.userInfo = userInfo;
    MenuService.getDish(userInfo.shortname)
      .then(function(response) {
        $ctrl.menuItem = response;
      })
      .catch(function(response) {
        console.log(response);
      });
  }
};

})();
