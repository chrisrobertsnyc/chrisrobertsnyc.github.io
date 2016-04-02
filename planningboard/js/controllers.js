//Fees Controller
pbApp.controller('feesCtrl', function ($scope) {
	
  $scope.feesData = {
	  "sp": {
		  "parkingspaces": 0,
		  "coverage" : 0,
		  "nonprofit" : false,
		  "leed" : false
	  },
	  "sd": {
		  "parcels": 0,
		  "nonprofit": false
	  },
	  "spsd": {
		  "parkingspaces": 0,
		  "coverage" : 0,
		  "parcels": 0,
		  "nonprofit" : false,
		  "leed" : false
	  },
	  "telecom": {
		  "fee": 500
	  }
  };
  
});