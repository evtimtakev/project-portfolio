angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/contacts', {
			templateUrl: 'views/nerd.html',
			controller: 'contactsController'
		})

		.when('/about-me', {
			templateUrl: 'views/geek.html',
			controller: 'aboutCtroller'	
		});

	$locationProvider.html5Mode(true);

}]);