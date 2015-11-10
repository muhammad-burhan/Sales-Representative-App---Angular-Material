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

})();