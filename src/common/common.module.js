(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://nbartic-course5ass.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
