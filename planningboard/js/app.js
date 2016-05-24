var pbApp = angular.module('pbApp', ["ui.router", "ui.bootstrap"]);

pbApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/main/map");

	$stateProvider
		.state("main", { abtract: true, url:"/main", templateUrl:"main.html" })
			.state("main.map", { url: "/map", templateUrl: "views/map.htm" })
			.state("main.fees", { url: "/fees", templateUrl: "views/fees.htm" })
			.state("main.regulations", { url: "/regulations", templateUrl: "views/regulations.htm" });

});

pbApp.controller("routeController", function($rootScope, $scope, $state) {		

	$scope.go = function(route){
		$state.go(route);
	};

	$scope.active = function(route){
		return $state.is(route);
	};

	$scope.tabs = [
		{ heading: "Map", route:"map", active:false },
		{ heading: "Fees", route:"fees", active:false },
		{ heading: "Regulations", route:"regulations", active:false },
	];

	$scope.$on("$stateChangeSuccess", function() {
		$scope.tabs.forEach(function(tab) {
			tab.active = $scope.active(tab.route);
		});
	});
});
