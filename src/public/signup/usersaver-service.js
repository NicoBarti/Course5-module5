(function() {
'use strict';

angular.module('public')
.service('userRegistration', userRegistration);

// Keeps user data in a service
userRegistration.$inject = []
function userRegistration(user) {
  var reg = this;
  reg.user = false;

  reg.register = function (user) {
    reg.user = user;
    return;
  };

  reg.get = function () {
    return reg.user
  };
};

})()
