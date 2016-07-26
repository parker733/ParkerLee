// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var websiteApp = angular.module('websiteApp', ['ngRoute']);

    // configure our routes
    websiteApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/work.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the work page
            .when('/work', {
                templateUrl : 'pages/work.html',
                controller  : 'worksController'
            })
            .when('/photography', {
                templateUrl : 'pages/photography.html',
                controller  : 'photographyController'
            })
            .when('/taiwan',{
            	templateUrl : 'pages/photography/taiwan.html',
            	controller : 'photographyController'
            })

            .when('/sunnydayss', {
                templateUrl : 'pages/works/sunnydayss.html',
                controller  : 'worksController'
            })

            .when('/pixsea', {
                templateUrl : 'pages/works/pixsea.html',
                controller  : 'worksController'
            });

    });

    websiteApp.controller('mainController', function mainController($scope) {
    
    });

    websiteApp.controller('aboutController', function($scope) {
    
    });

    websiteApp.controller('worksController', function($scope) {

    });

    websiteApp.controller('photographyController', function($scope){

    });
