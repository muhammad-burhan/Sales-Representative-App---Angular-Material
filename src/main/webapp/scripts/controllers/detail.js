'use strict';

/**
 * @ngdoc function
 * @name sraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sraApp
 */
(function() {
    var app = angular.module('DetailModule', []);

    app.controller('CustomerDetailController', ['$scope', '$routeParams', 'CustomerDetailService', '$location',
        'CustomerNotesSavingService', 'CustomerVisitSavingService', 'SkypeIDService', '$mdDialog', 'DateConversionService', '$rootScope',
        function ($scope, $routeParams, customerDetailService, $location,
                  customerNotesSavingService, customerVisitSavingService, skypeService, $mdDialog, dateConversionService, $rootScope) {

            var alert;
            var userId = $routeParams.userId;
            var sessionIdentifier = sessionStorage.getItem('sessionIdentifier');
            var contactData;
            var responseSkypID = '';

            $scope.skypeID = '';
            $scope.visitNotes = '';
            $scope.visitAction = '';
            $scope.customerDetail = {};

            $scope.datePickerValue  = new Date();
            if (sessionIdentifier == '' ||
                sessionIdentifier == null ||
                typeof sessionIdentifier == 'undefined') {

                $rootScope.isUserLoggedIn = false;
                $rootScope.userName = '';
                sessionStorage.setItem('userFullName', '');
                sessionStorage.setItem('sessionIdentifier', '');

                $location.path("/");
            }

            $rootScope.isUserLoggedIn = true;
            $rootScope.userName = sessionStorage.getItem('userFullName');

            customerDetailService.callCustomerDetailService({"sessionId": sessionIdentifier, "customerid": userId})
                .then(function (response) {
                    $scope.customerDetail = response.data;
                    $scope.status = response.data.status;
                    $scope.notes = response.data.notes;

                    if(response.data.visit != null){
                        dateConversionService.setDateToConvert(response.data.visit.date);
                        $scope.timeVisit = $scope.customerDetail.visit.time;
                        $scope.visitNotes = $scope.customerDetail.visit.notes;
                        $scope.visitAction = $scope.customerDetail.visit.action;
                    }

                    if ($scope.customerDetail.communications != null){
                        contactData = $scope.customerDetail.communications;
                        for (var i=0; i < contactData.length; i++) {
                            if(contactData[i].category == 'Skype') {
                                responseSkypID = contactData[i].value;
                                break;
                            }
                        }
                    }
                    
                    skypeService.setSkypeID([responseSkypID]);
                });


            $scope.saveNotes = function(){
                var request = {
                    "sessionId" : sessionStorage.getItem('sessionIdentifier'),
                    "customerid" : userId,
                    "status" : $scope.status,
                    "notes" : $scope.notes
                };
                customerNotesSavingService.callCustomerNotesSavingService(request)
                    .then(function(response){
                        if(response.code == 0)
                            $scope.showAlert('SUCCESS!','Notes saved successfully!');
                        else
                            $scope.showAlert('FAILED!','We can not save notes information for you. Please try again later!');
                    }, function(){
                        $scope.showAlert('FAILED!','We can not save notes information for you. Please try again later!');
                    });
            };


            $scope.saveVisit = function(visitAction, notes, date, time){
                var dateArray = date.split("/");
                var requestDate = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
                var visitRequest = {
                    "sessionId" : sessionStorage.getItem('sessionIdentifier'),
                    "customerid" : userId,
                    "visit" : {
                        "date" : requestDate,
                        "time" : time,
                        "action" : visitAction,
                        "notes" : notes
                    }
                };


                customerVisitSavingService.callCustomerVisitSavingService(visitRequest)
                    .then(function(response){
                        if(response.code == 0)
                            $scope.showAlert('SUCCESS!','Visit information saved successfully!');
                        else
                            $scope.showAlert('FAILED!','We can not save visit information for you. Please try again later!');
                    }, function(){
                        $scope.showAlert('FAILED!','We can not save visit information for you. Please try again later!');
                    });
            };

            $scope.backToHome = function(){
                $location.path("/customers");
            };

            $scope.showAlert = function(title, message){
                alert = $mdDialog.alert({
                    title: title,
                    content: message,
                    ok: 'Close'
                });
                $mdDialog
                    .show( alert )
                    .finally(function() {
                        alert = undefined;
                    });
            }

        }]);

    app.service('CustomerDetailService', ['$http', '$q', function ($http, $q) {
        this.callCustomerDetailService = function (requestData) {
            var deferred = $q.defer();
            var json = JSON.stringify(requestData);
            $http.post('customer/details', json)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject("An error occurred while fetching items");
                });
            return deferred.promise;
        }
    }]);

    app.service('CustomerNotesSavingService', ['$http', '$q', function ($http, $q) {
        this.callCustomerNotesSavingService = function (requestData) {
            var deferred = $q.defer();
            var json = JSON.stringify(requestData);
            $http.post('customer/savenotes', json)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject("An error occurred while fetching items");
                });
            return deferred.promise;
        }
    }]);

    app.service('CustomerVisitSavingService', ['$http', '$q', function ($http, $q) {
        this.callCustomerVisitSavingService = function (requestData) {
            var deferred = $q.defer();
            var json = JSON.stringify(requestData);
            $http.post('customer/savevisit', json)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject("An error occurred while fetching items");
                });
            return deferred.promise;
        }
    }]);

    app.service('SkypeIDService', function(){
        var skypeService = this;
        skypeService.skypeID = '';
        skypeService.getSkypeID = function(){
            return skypeService.skypeID;
        };
        skypeService.setSkypeID = function(id){
            skypeService.skypeID = id;
        };
    });

    app.service('DateConversionService',['$rootScope', function($rootScope){
        var dateConversionService = this;
        dateConversionService.dateConverted = '';
        dateConversionService.getDateConverted = function(){
            return dateConversionService.dateConverted;
        };
        dateConversionService.setDateToConvert = function(date){
            var dateLocal = new Date(date);
            var month = dateLocal.getMonth()+1;
            if (month <= 9) month = '0' + month;
            dateConversionService.dateConverted =   month + "/" + dateLocal.getDate() + "/" + dateLocal.getFullYear();
            $rootScope.$broadcast('dateUpdated', dateConversionService.dateConverted);
        };
    }]);

    app.directive('skypeButton', ['SkypeIDService', function(skypeService){
        return {
            restrict: 'E',
            template: '<div id="SkypeButton_Call_SRA_SKYPE_1"></div>',
            link: function(scope, element, attrs){

                scope.$watch(function(){
                    return skypeService.getSkypeID();
                } , function (newValue, oldValue) {
                    if (newValue != null && newValue != "") {
                        Skype.ui({
                            "name": "call",
                            "element": "SkypeButton_Call_SRA_SKYPE_1",
                            "participants": newValue,
                            "imageSize": 24
                        });
                    }
                });
            }
        };
    }]);

    app.directive('datePickerVisit', function(){
        return {
            restrict: 'E',
            template: '<input type="text" ng-model="selectedDate" class="datepicker"/>',
            link: function(scope, element, attrs){

                jQuery('.datepicker').datepicker();

                scope.$on('dateUpdated', function(event, data){
                    jQuery('.datepicker').datepicker('update', data);
                });
            }
        };
    });

    app.directive('timePickerVisit', function(){
        return {
            restrict: 'E',
            template: '<div class="input-group bootstrap-timepicker timepicker">' +
            '<input id="timePicker" ng-model="timeVisit" type="text" class="form-control input-small">' +
            '<span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span> </div>',
            link: function(scope, element, attrs){
                jQuery('#timePicker').timepicker();
            }
        };
    });

})();