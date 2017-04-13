/**
 * @ngdoc function
 * @name sraApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the sraApp
 */
(function() {
    var app = angular.module('loginModule', []);

    app.controller('LoginController', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {
        $rootScope.isUserLoggedIn = false;
        $rootScope.userName = '';

        var sessionIdentifier = sessionStorage.getItem('sessionIdentifier');

        if (sessionIdentifier != '' &&
            sessionIdentifier != null &&
            typeof sessionIdentifier != 'undefined'){
            $rootScope.isUserLoggedIn = true;
            $rootScope.userName = sessionStorage.getItem('userFullName');
            $location.path("/customers");
        }

    }]);

    app.controller('LoginFormController', ['$scope', 'LoginService', '$location', 'Base64MD5EncodingService',
        '32BitStringGeneratorService', '$rootScope',
        function ($scope, loginService, $location, encodingService, random32BitStringService, $rootScope) {

            var loginFormCtrl = this;
            loginFormCtrl.userName = '';
            loginFormCtrl.password = '';

            loginFormCtrl.resetFields = function () {
                loginFormCtrl.userName = '';
                loginFormCtrl.password = '';
            };

            loginFormCtrl.login = function () {
                var randomToken = random32BitStringService.generate();
                var encodedPass = encodingService.convertTOBase64MD5(loginFormCtrl.password);
                var encodedDigest = encodingService.convertTOBase64MD5(loginFormCtrl.userName + "," + encodedPass + "," + randomToken);

                var data = {
                    "token": randomToken,
                    "digest": encodedDigest,
                    "user": {
                        "username": loginFormCtrl.userName,
                        "password": encodedPass
                    }
                };

                loginService.callLoginService(data).then(function (data) {

                    if (data != null) {
                        if (data.code == 0 && data.sessionId != null) {
                            sessionStorage.setItem('userFullName', data.data.firstname + " " + data.data.lastname);
                            $rootScope.userName = sessionStorage.getItem('userFullName');
                            $rootScope.isUserLoggedIn = true;
                            sessionStorage.setItem('sessionIdentifier', data.sessionId);
                            $location.path("/customers");
                        } else {
                            if (data.message.indexOf('Error in login data for user') >= 0) {
                                loginFormCtrl.resetFields();
                            }
                        }
                    }
                });
            }
        }]);

    app.service('LoginService', ['$http', '$q', function ($http, $q) {
        this.callLoginService = function (requestData) {
            var deferred = $q.defer();
            var json = JSON.stringify(requestData);

            /*if (json != null && json != ''){
                var mockResponse = {
                    "code":"0",
                    "message":"Login Successful",
                    "sessionId":"75984292-af89-4280-8aac-7f15b4e3a1ba",
                    "data":{"username":"john.doe",
                        "firstname":"John",
                        "lastname":"Doe"}
                };
                deferred.resolve(mockResponse);

            } else {
                deferred.reject("An error occurred while fetching items");
            }*/

            $http.post('authenticate', json)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function () {
                    deferred.reject("An error occurred while fetching items");
                });
            return deferred.promise;
        }
    }]);

    app.service('Base64MD5EncodingService', function(){
        this.convertTOBase64MD5 = function(input){
            return hexToBase64(hex_md5(input));
        }
    });

    app.service('32BitStringGeneratorService',['RandomStringGeneratorService', function(randomStringGenerator){
        this.generate = function(){
            return btoa(randomStringGenerator.generateRandomString(32));
        };
    }]);

    app.service('RandomStringGeneratorService', function(){
        this.generateRandomString = function(limit){
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for( var i=0; i < limit; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
    });

    function hexToBase64(str) {
        return btoa(String.fromCharCode.apply(null,
                str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
        );
    }

    if (!window.atob) {
        var tableStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var table = tableStr.split("");

        window.btoa = function (bin) {
            for (var i = 0, j = 0, len = bin.length / 3, base64 = []; i < len; ++i) {
                var a = bin.charCodeAt(j++), b = bin.charCodeAt(j++), c = bin.charCodeAt(j++);
                if ((a | b | c) > 255) throw new Error("String contains an invalid character");
                base64[base64.length] = table[a >> 2] + table[((a << 4) & 63) | (b >> 4)] +
                (isNaN(b) ? "=" : table[((b << 2) & 63) | (c >> 6)]) +
                (isNaN(b + c) ? "=" : table[c & 63]);
            }
            return base64.join("");
        };
    }

})();

