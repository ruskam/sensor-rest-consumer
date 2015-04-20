var map;
var circle;
function initialize() {
	var mapOptions = {
		center : {
			//51.037420, -114.051846
			lat : 51.037420,
			lng : -114.051900
		},
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		zoom : 18
	};
	
	map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);
	/*
	circle = new google.maps.Circle({
		center : map.getCenter(),
		radius : 70, // meters
		strokeColor : "#ffffff",
		strokeOpacity : 0.8,
		strokeWeight : 2,
		fillColor : "#ffffff",
		fillOpacity : 0.26
	});

	circle.setMap(map);
	*/
}
google.maps.event.addDomListener(window, 'load', initialize);