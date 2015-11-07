(function() {
  var app = angular
      .module('sraApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngMaterial',
        'loginModule'
      ]);

  app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'views/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        })
        .otherwise({
          redirectTo: '/'
        });
  });




})();