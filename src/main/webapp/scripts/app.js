/**
 * @ngdoc overview
 * @name sraApp
 * @description
 * # sraApp
 *
 * Main module of the application.
 */
(function() {
  var app = angular
      .module('sraApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'loginModule',
        'mainModule',
        'DetailModule',
        'ngMaterial'
      ]);

  app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: 'views/login.jsp',
              controller: 'LoginController',
              controllerAs: 'login'
            })
            .when('/customers', {
              templateUrl: 'views/main.jsp',
              controller: 'CustomersController',
              controllerAs: 'main'
            })
            .when('/details/:userId', {
              templateUrl: 'views/detail.jsp',
              controller: 'CustomerDetailController',
              controllerAs: 'detail'
            })
            .otherwise({
              redirectTo: '/'
            });
      });

  app.controller('LogoutController', ['$scope', 'LogoutService', '$location','$rootScope',
    function($scope, logoutService, $location, $rootScope){
      this.logout = function(){
        logoutService.callLogoutService({ "sessionId" : sessionStorage.getItem('sessionIdentifier') })
            .then(function(response){
                if(response.code == 0) {
                    $rootScope.isUserLoggedIn = false;
                    $rootScope.userName = '';
                    sessionStorage.setItem('userFullName', '');
                    sessionStorage.setItem('sessionIdentifier', '');
                }
              $location.path("/");
            });
      };
    }]);

  app.service('LogoutService', ['$http', '$q', function ($http, $q) {
    this.callLogoutService = function (requestData) {
      var deferred = $q.defer();
      var json = JSON.stringify(requestData);
      $http.post('logout', json)
          .success(function (data, status, headers, config) {
            deferred.resolve(data);
          })
          .error(function () {
            deferred.reject("An error occurred while fetching items");
          });
      return deferred.promise;
    }
  }]);

})();