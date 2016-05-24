pbApp.controller('mapCtrl', function ($scope) {
	  //set map, add basemap. 
	var map = L.map('map').setView([40.7624186,-74.0468987], 12);
	L.esri.basemapLayer('Topographic').addTo(map);
});

pbApp.controller('sidebarCtrl', function ($scope) {
	//set control for sidebar
	var sidebar = L.control.sidebar('sidebar', {
    position: 'left'
	});

	map.addControl(sidebar);

	// Check sidebar visibility
	var visible = sidebar.isVisible();
  
	// to make the sidebar visible on start up...
	setTimeout(function () {
    	sidebar.show();
  	}, 500);
});