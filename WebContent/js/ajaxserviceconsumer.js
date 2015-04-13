
/**
 * 
 */
/*
 * $(document).ready(function() { $.ajax({ url:
 * "http://localhost:8080/sensor-rest-service/service/sensor/1"
 * }).then(function(data) { $('.greeting-id').append(data.id);
 * $('.greeting-temp').append(data.temp);
 * $('.greeting-heartrate').append(data.heartRate); }); });
 */

window.setInterval(function() {
	$(document).ready(function() {
		$.ajax({
			url : "http://localhost:8080/sensor-rest-service/service/sensor/"
		}).then(function(data) {
			$('.id').html("sensor id: " + data[2].id);
			$('.temp').html("temperature: " + data[2].temp);
			$('.heartrate').html("heart rate: " + data[2].heartRate);
		});
		var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
		var marker = new google.maps.Marker({
		    position: map.getCenter(),
		    map: map,
		    title: 'Click to zoom'
		  });
	
		google.maps.event.addListener(marker, 'click', function() {
			map.setZoom(8);
			map.setCenter(marker.getPosition());
		});
	});
}, 1000);
/*
 * $.ajax({ type: "GET", dataType: "jsonp", url:
 * "http://localhost:8080/sensor-rest-service/service/sensor/1", success:
 * function(data){ alert(data); $('.greeting-id').html(data.id);
 * $('.greeting-temp').html(data.temp);
 * $('.greeting-heartrate').html(data.heartRate); }
 * 
 * });
 */