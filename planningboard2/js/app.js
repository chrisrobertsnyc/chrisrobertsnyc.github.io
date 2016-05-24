var pbApp = angular.module("pbApp", ["ui.router", "ui.bootstrap"]);

pbApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/map");

  $stateProvider

    .state("map", {
      url: "/map",
      templateUrl: "views/map.html"
    })
    .state("fees", {
      url: "/fees",
      templateUrl: "views/fees.html"
    })
    .state("regulations", {
      url: "/regulations",
      templateUrl: "views/regulations.html"
    });

});

pbApp.controller("routeController", function($rootScope, $scope, $state) {

  $scope.go = function(route) {
    $state.go(route);
  };

  $scope.active = function(route) {
    return $state.is(route);
  };

  $scope.tabs = [{
    heading: "Map",
    route: "map",
    active: false
  }, {
    heading: "Fees",
    route: "fees",
    active: false
  }, {
    heading: "Regulations",
    route: "regulations",
    active: false
  }, ];

  $scope.$on("$stateChangeSuccess", function() {
    $scope.tabs.forEach(function(tab) {
      tab.active = $scope.active(tab.route);
    });
  });
});