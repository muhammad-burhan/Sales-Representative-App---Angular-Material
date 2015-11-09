(function() {
    var app = angular.module('loginModule', []);

    app.controller('LoginController', ['$scope', function ($scope) {


    }]);

    app.controller('LoginFormController', ['$scope', 'Base64MD5EncodingService',
        '32BitStringGeneratorService', '$rootScope',
        function ($scope, encodingService, random32BitStringService, $rootScope) {

            var loginFormCtrl = this;
            loginFormCtrl.userName = '';
            loginFormCtrl.password = '';

            loginFormCtrl.resetFields = function () {
                loginFormCtrl.userName = '';
                loginFormCtrl.password = '';
            };

            loginFormCtrl.login = function () {

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

