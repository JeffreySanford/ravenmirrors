/*global angular */

(function () {
    'use strict';

    var portfolioModule = angular.module('portfolioModule', ['ngRoute', 'ngAnimate', 'ngResource']);

    // configure our routes
    portfolioModule.config(function ($routeProvider) {
        $routeProvider
            // route for the landing index page
            .when('/home', {
                templateUrl: 'app/views/partials/home.html',
                controller: 'mainController'
            })
            // route for the art pages
            .when('/art', {
                templateUrl: 'app/views/partials/art.html',
                controller: 'artController'
            })
            .when('/art/:catagory', {
                templateUrl: 'app/views/partials/art.html',
                controller: 'artController'
            })
            // route for the about pages
            .when('/about', {
                templateUrl: 'app/views/partials/about.html',
                controller: 'aboutController'
            })
            .otherwise({redirectTo: '/home'});
    });

    portfolioModule.controller('mainController', function ($scope) {
        $scope.title = "Home";
    });


    portfolioModule.controller('artController', function ($scope, $timeout, $routeParams) {
        $scope.title = "Designs";
        $scope.params = $routeParams;
    });

    portfolioModule.controller('aboutController', function ($scope) {
        $scope.title = "About";
    });
}());