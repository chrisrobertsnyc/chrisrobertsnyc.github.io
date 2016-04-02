var pbApp = angular.module('pbApp', ['ngRoute']);

pbApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		//change to true when you figure out routing issue
		$locationProvider.html5Mode(false);
		$routeProvider.
				when('/map', {
					templateUrl: 'views/map.htm',
					controller: 'RouteController'
				}).
				when('/fees', {
					templateUrl: 'views/fees.htm',
					controller: 'RouteController'
				}).
				when('/regulations', {
					templateUrl: 'views/regulations.htm',
					controller: 'RouteController'
				}).
				otherwise({
					redirectTo: '/'
				});
	}]);

pbApp.controller("RouteController", function($scope, $routeParams) {
	// see http://tutorials.jenkov.com/angularjs/routes.html for additional params
	//$scope.param = $routeParams.param;
})