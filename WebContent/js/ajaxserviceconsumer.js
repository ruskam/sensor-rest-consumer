var lng, lat;

window.setInterval(function() {
	$(document).ready(function() {
		$.ajax({
			url : "http://localhost:8080/sensor-rest-service/service/sensor/"
		}).then(function(data) {
			$('.id').html("sensor id: " + data[2].id);
			$('.temp').html("temperature: " + data[2].temp);
			$('.heartrate').html("heart rate: " + data[2].heartRate);
			$('.long').html("heart rate: " + data[2].location.x);
			$('.lat').html("heart rate: " + data[2].location.y);
			lng = data[2].location.x;
			lat = data[2].location.y;
			//var point = new google.maps.LatLng(data[2].location.y, data[2].location.y);
			//createMarker(map, point, 'temp');
			
		});
		/*
		 * var myLatlng = new google.maps.LatLng(-25.363882, 131.044922); var
		 * marker = new google.maps.Marker({ position : map.getCenter(), map :
		 * map, title : 'Click to zoom' });
		 * 
		 * google.maps.event.addListener(marker, 'click', function() {
		 * map.setZoom(8); map.setCenter(marker.getPosition()); });
		 */
		var myLatlng = new google.maps.LatLng(51.03692904550923,
				-114.05250939814002);
		var marker = new google.maps.Marker({
			position : myLatlng,
			map : map,
			title : 'marker last'
		});
		trackDog(lat, lng);
	});
}, 1000);

function trackDog(y, x) {

	var bounds = circle.getBounds();
	map.fitBounds(bounds);
	var sw = bounds.getSouthWest();
	
	var ne = bounds.getNorthEast();
	/*
	for (var i = 0; i < 10; i++) {
		var ptLat = Math.random() * (ne.lat() - sw.lat()) + sw.lat();
		console.log(ptLat)
		var ptLng = Math.random() * (ne.lng() - sw.lng()) + sw.lng();
		console.log(ptLng)
		var point = new google.maps.LatLng(ptLat, ptLng);
		if (google.maps.geometry.spherical.computeDistanceBetween(point, circle
				.getCenter()) < circle.getRadius()) {
			createMarker(map, point, "marker " + i);
			// break;
		}
	}
	*/
	var point = new google.maps.LatLng(y, x);
	createMarker(map, point);
}

function createMarker(map, point) {
	var marker = new google.maps.Marker({
		position : point,
		map : map
	});
	
	return marker;
}