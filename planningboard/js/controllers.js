//Fees Controller
pbApp.controller('feesCtrl', function ($scope) {
	
  $scope.feesData = {
  	  "type": [
  	  	{"value": "sp",
  	  	"label": "Site Plan"
  	    },
  	    {"value": "sd",
  	    "label": "Subdivision"
  		},
  		{"value": "spsd",
  		"label": "Site Plan & Subdivision"
  		},
  		{"value": "telecom",
  		"label": "Telecommunications"
  		},
  		{"value": "jd",
  		"label": "Jurisdictional Determination"
  		}
  	  ],
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
	  },
	  "jd": {
	  	  "fee": 100
	  },
	  "appselected": ""
  };
  
});