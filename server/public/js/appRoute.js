// public/js/appRoutes.js
    angular.module('appRoute', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })

        // nerds page that will use the NerdController
        .when('/projects', {
            templateUrl: 'views/about.html',
            controller: 'aboutControler'
        });

    $locationProvider.html5Mode(true);

}]);
