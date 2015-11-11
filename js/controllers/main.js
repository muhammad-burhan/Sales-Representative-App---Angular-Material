/**
 * @ngdoc function
 * @name sraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sraApp
 */
(function() {
    var app = angular.module('mainModule', []);

    app.controller('CustomersController', ['$scope', '$location','$rootScope',
        function ($scope, $location, $rootScope) {
            var sessionIdentifier = sessionStorage.getItem('sessionIdentifier');

            if (sessionIdentifier == '' ||
                sessionIdentifier == null ||
                typeof sessionIdentifier == 'undefined'){

                $rootScope.isUserLoggedIn = false;
                $rootScope.userName = '';
                sessionStorage.setItem('userFullName', '');
                sessionStorage.setItem('sessionIdentifier', '');

                $location.path("/");
            }

            $rootScope.isUserLoggedIn = true;
            $rootScope.userName = sessionStorage.getItem('userFullName');
        }]);

    app.service('CustomerListService', ['$http', '$q', function ($http, $q) {
        this.callCustomerListService = function (requestData) {
            var deferred = $q.defer();
            var json = JSON.stringify(requestData);
            $http.post('customer/list', json)
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