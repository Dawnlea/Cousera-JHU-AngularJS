(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = [];
function UserService() {
  var srv = this;

  srv.storeUserInfo = function (userInfo) {
    srv.userInfo = userInfo;
  };

  srv.getUserInfo = function() {
    return srv.userInfo;
  }
};

})();
