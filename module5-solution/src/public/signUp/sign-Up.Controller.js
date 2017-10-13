(function (){
    'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {

  var signUpCtrl = this;

  signUpCtrl.user = {};

  signUpCtrl.dishInvalid = false;
  signUpCtrl.formValid = false;

  signUpCtrl.signUpSubmit = function (signUpForm) {

// Validate favourite dish entry before storing details
  MenuService.getDish(signUpCtrl.user.shortname)
    .then(function(response) {
      signUpCtrl.user.favDish = response.data
      signUpCtrl.dishInvalid = false;
      signUpCtrl.formValid = true;
      UserService.storeUserInfo(signUpCtrl.user);
    }, function(error) {
        signUpCtrl.dishInvalid = true;
        signUpCtrl.formValid = false;
    });
  }
}
})()
