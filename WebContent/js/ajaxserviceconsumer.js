var lng, lat;
var lng1, lat1;
var lng2, lat2;
var sensors = [];
var infoWindow;

window.setInterval(function() {
	$(document).ready(function() {
		var id = "id007";
		$.ajax({

			//url : "http://localhost:8080/sensor-rest-service/service/sensor/" + id
			url : "http://199.116.235.116/sensor-rest-service/service/sensor/" + id
		}).then(function(data) {
			
			$('.id').html("sensor id: " + data.id);
			$('.temp').html("temperature: " + data.temp);
			$('.heartrate').html("heart rate: " + data.heartRate);
			$('.long').html("heart rate: " + data.location.x);
			$('.lat').html("heart rate: " + data.location.y);
			
			lng = data.location.x;
			lat = data.location.y;
	
			trackDog(lat, lng, data.id, data.heartRate, data.temp);
			/*	
			lng1 = data[1].location.x;
			lat1 = data[1].location.y;
			lng2 = data[2].location.x;
			lat2 = data[2].location.y;
			*/
			// var point = new google.maps.LatLng(data[2].location.y,
			// data[2].location.y);
			// createMarker(map, point, 'temp');
			
			console.log(data);
		});

		// trackDog(lat1, lng1);
		// trackDog(lat2, lng2);

	});
}, 1500);

function trackDog(y, x, id, hr, t) {

	// var bounds = circle.getBounds();
	// map.fitBounds(bounds);
	// var sw = bounds.getSouthWest();

	// var ne = bounds.getNorthEast();
	/*
	 * for (var i = 0; i < 10; i++) { var ptLat = Math.random() * (ne.lat() -
	 * sw.lat()) + sw.lat(); console.log(ptLat) var ptLng = Math.random() *
	 * (ne.lng() - sw.lng()) + sw.lng(); console.log(ptLng) var point = new
	 * google.maps.LatLng(ptLat, ptLng); if
	 * (google.maps.geometry.spherical.computeDistanceBetween(point, circle
	 * .getCenter()) < circle.getRadius()) { createMarker(map, point, "marker " +
	 * i); // break; } }
	 */
	var point = new google.maps.LatLng(y, x);
	createMarker(map, point, id, hr, t);
}

function createMarker(map, point, id, heartRate, temp) {
	
	if (infoWindow) {
		infoWindow.close();
	}
	
	var content = "<h2>Sensor#: " + id + "</h2>" + 
			"<p>Heart rate: " + heartRate +	"</p>" + 
			"<p>Temperature: " +	temp + "</p>";
	
	infoWindow = new google.maps.InfoWindow({
	      content: content
	  });
			
	var marker = new google.maps.Marker({
		position : point,
		icon : "img/dogIcon.png",
		map : map
	});
	google.maps.event.addListener(marker, 'mouseover', function() {
		infoWindow.open(map, marker);
	});
	
	return marker;
}
