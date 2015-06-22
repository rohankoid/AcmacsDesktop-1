'use strict';

angular.module('acjim.table', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/table', {
            templateUrl: 'table/table.html',
            controller: 'tableCtrl'
        });
    }])

    .controller('tableCtrl', ['$scope', '$http', 'mapService', function($scope, $httd, mapService) {

    }])