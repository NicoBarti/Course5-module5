(function functionName() {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['userRegistration', 'MenuService'];
  function MyInfoController(userRegistration, MenuService) {
    var info = this;

    //get user information
    info.user = userRegistration.get();

    //get menu item information
    var getmenu = MenuService.getMenuItem(info.user.menu);
    getmenu.then(function(response){
      info.menu_item = response
    })



  };

})()
