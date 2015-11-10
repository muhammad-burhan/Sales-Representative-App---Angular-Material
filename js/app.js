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
      .when('/customers', {
          templateUrl: 'views/main.html',
          controller: 'CustomersController',
          controllerAs: 'main'
      })
        .otherwise({
          redirectTo: '/'
        });
  });




})();