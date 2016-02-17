/*global angular, window */

(function () {
    'use strict';

    var portfolioModule = angular.module('portfolioModule', ['ngRoute', 'ngAnimate', 'ngResource']);

    // configure our routes
    portfolioModule.config(function ($routeProvider) {
        $routeProvider
            // route for the landing index page
            .when('/home', {
                templateUrl: 'app/views/partials/home.html',
                controller: 'homeController'
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

    portfolioModule.controller('homeController', function ($scope) {
        $scope.title = "Home";
        $scope.content = ['This is the home content.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam accusantium eveniet dolores temporibus, ullam praesentium id iure. Voluptatibus voluptatum possimus magnam ducimus distinctio cupiditate quos repudiandae ipsam aliquam, deserunt culpa?', 'Soluta ratione velit cupiditate sequi deleniti, nisi impedit nihil ab, nesciunt enim perferendis id mollitia laudantium voluptate minus vero aliquid ipsam. Voluptatibus amet hic quod, totam perferendis explicabo? Inventore, architecto.', 'Accusantium reprehenderit fugiat dignissimos officia optio perferendis, iure, veritatis ad labore dolore amet quas adipisci deserunt illo. Laudantium ab obcaecati perspiciatis voluptatem nesciunt, quam sed atque est odio quo aspernatur.'];
    });

    portfolioModule.controller('artController', function ($scope, $routeParams) {
        var xmlhttp = new XMLHttpRequest();
        var url = "../data/artwork.json";

        $scope.title = "Designs";
        $scope.params = $routeParams;

        xmlhttp.onreadystatechange = function () {
            var posInSet;

            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                console.log("rest event success");
                console.dir(xmlhttp.responseText);

                var art = JSON.parse(xmlhttp.responseText);
                var catagory = art.catagory;
                var innerWidth = window.innerWidth;


                if (innerWidth >= 1281) {

                    console.log("desktop view");
                    console.log("window width is " + innerWidth);
                    console.dir(catagory);

                    posInSet = 6;

                    $scope.thumbOne = catagory[0].image;
                    $scope.thumbTwo = catagory[1].image;
                    $scope.thumbThree = catagory[2].image;
                    $scope.thumbFour = catagory[3].image;
                    $scope.thumbFive = catagory[4].image;
                    $scope.thumbSix = catagory[5].image;

                    var item = 0;
                    window.setInterval(function () {
                        var lastThumb, currentThumb;

                        if (item === 6) {
                            item = 1;
                            console.log(item);
                        } else {
                            item = item + 1;
                            console.log(item);
                        }

                        if (item !== 1) {
                            lastThumb = "thumbnail" + (item - 1);
                        } else {
                            lastThumb = "thumbnail6";
                        }

                        currentThumb = "thumbnail" + (item);

                        var last = document.getElementById(lastThumb);
                        var current = document.getElementById(currentThumb);

                        $(last).removeClass('highlightThumb');
                        $(current).toggleClass('highlightThumb');

                        /* replace the main image */

                        var mainImage = document.getElementById("main-image");
                        var mainImageTitle = document.getElementById("main-image-title");
                        var mainImageSub = document.getElementById("main-image-sub");

                        mainImage.src = catagory[item - 1].image;
                        mainImageTitle.innerHTML = catagory[item - 1].title;
                        mainImageSub.innerHTML = catagory[item - 1].teaser;

                    }, 3000);

                } else if (innerWidth < 1281 && innerWidth > 769) {

                    console.log("tablet view");
                    console.log(innerWidth);
                    posInSet = 6;

                    $scope.thumbOne = catagory[0].image;
                    $scope.thumbTwo = catagory[1].image;
                    $scope.thumbThree = catagory[2].image;
                    $scope.thumbFour = catagory[3].image;
                    $scope.thumbFive = catagory[4].image;
                    $scope.thumbSix = catagory[5].image;

                    var item = 0;
                    window.setInterval(function () {
                        var lastThumb, currentThumb;

                        if (item === 6) {
                            item = 1;
                            console.log(item);
                        } else {
                            item = item + 1;
                            console.log(item);
                        }

                        if (item !== 1) {
                            lastThumb = "thumbnail" + (item - 1);
                        } else {
                            lastThumb = "thumbnail6";
                        }

                        currentThumb = "thumbnail" + (item);

                        var last = document.getElementById(lastThumb);
                        var current = document.getElementById(currentThumb);

                        $(last).removeClass('highlightThumb');
                        $(current).toggleClass('highlightThumb');

                        /* replace the main image */

                        var mainImage = document.getElementById("main-image");
                        var mainImageTitle = document.getElementById("main-image-title");
                        var mainImageSub = document.getElementById("main-image-sub");

                        mainImage.src = catagory[item - 1].image;
                        mainImageTitle.innerHTML = catagory[item - 1].title;
                        mainImageSub.innerHTML = catagory[item - 1].teaser;

                    }, 3000);

                } else if (innerWidth <= 768) {

                    console.log("mobile view");
                    console.log(innerWidth);
                    posInSet = 4;

                    $scope.thumbOne = catagory[0].image;
                    $scope.thumbTwo = catagory[1].image;
                    $scope.thumbThree = catagory[2].image;
                    $scope.thumbFour = catagory[3].image;
                    
                    var item = 0;
                    window.setInterval(function () {
                        var lastThumb, currentThumb;

                        if (item === 4) {
                            item = 1;
                            console.log(item);
                        } else {
                            item = item + 1;
                            console.log(item);
                        }

                        if (item !== 1) {
                            lastThumb = "mobile-thumbnail" + (item - 1);
                        } else {
                            lastThumb = "mobile-thumbnail4";
                        }

                        currentThumb = "thumbnail" + (item);

                        var last = document.getElementById(lastThumb);
                        var current = document.getElementById(currentThumb);

                        $(last).removeClass('highlightThumb');
                        $(current).toggleClass('highlightThumb');

                        /* replace the main image */

                        var mainImage = document.getElementById("mobile-main-image");
                        var mainImageTitle = document.getElementById("mobile-main-image-title");
                        var mainImageSub = document.getElementById("mobile-main-image-sub");

                        mainImage.src = catagory[item - 1].image;
                        mainImageTitle.innerHTML = catagory[item - 1].title;
                        mainImageSub.innerHTML = catagory[item - 1].teaser;

                    }, 3000);
                }
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();


    });

    portfolioModule.controller('aboutController', function ($scope) {
        $scope.title = "About";
        $scope.content = ['This is the about content.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam accusantium eveniet dolores temporibus, ullam praesentium id iure. Voluptatibus voluptatum possimus magnam ducimus distinctio cupiditate quos repudiandae ipsam aliquam, deserunt culpa?', 'Soluta ratione velit cupiditate sequi deleniti, nisi impedit nihil ab, nesciunt enim perferendis id mollitia laudantium voluptate minus vero aliquid ipsam. Voluptatibus amet hic quod, totam perferendis explicabo? Inventore, architecto.', 'Accusantium reprehenderit fugiat dignissimos officia optio perferendis, iure, veritatis ad labore dolore amet quas adipisci deserunt illo. Laudantium ab obcaecati perspiciatis voluptatem nesciunt, quam sed atque est odio quo aspernatur.'];
    });
}());