(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['userRegistration', 'MenuService'];
function SignUpController(userRegistration, MenuService) {
  var sign = this;

// Creates User template
  sign.user = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    menu: "",
  }

// Veridates Menu Option (short_name)
  sign.validate = function () {
    var response = MenuService.getMenuItem(sign.user.menu);
    response.then(function(result) {
        sign.menu_invalid = false;
        sign.saveuser();
    },
    function (result) {
      sign.menu_invalid = true;
      sign.saved = false;
    });
  };

  // Saves the user on local Service
  sign.saveuser = function functionName() {
    //calls Service
    userRegistration.register(sign.user)
    //sets view model to reflect succes
    sign.saved = true;
  }

};

})()
