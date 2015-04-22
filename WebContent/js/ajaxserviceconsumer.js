var lng, lat;
var lng1, lat1;
var lng2, lat2;
var sensors = [];
var infoWindow;
var sensors = [];

function parseJSONObject(rawJSONResponse) {
    var parsedModuleObjectResponse = jQuery.parseJSON(rawJSONResponse);                
    return parsedModuleObjectResponse;
}



$(function(){
	$("#sensorIdSelector").change(function(){
		
		var selectedValue = $(this).find(":selected").val();
		if (typeof interval !== "undefined")
			{
				window.clearInterval(interval);
			}
		deleteMarkers();
		interval = window.setInterval(function() {
			$(document).ready(function() {
				$.ajax({
					url: "GetSensorValues",
					dataType: 'JSON',
					type: "GET",
					data: { 
					      sensorID: JSON.stringify(selectedValue)
					    },
					//async:false,
					success: function(data){	
						$('#id').text("Sensor ID: " + data.id);
						$('#bodyTemp').text("Body temperature: " + data.temp + "C");
						$('#heartRate').text("Heart rate: " + data.heartRate);
						trackDog(data.location.y, data.location.x, data.id, data.heartRate, data.temp);
						showSensors();
						console.log(data);
					}}
				);
			});
		}, 1000);
		
	});
});

function trackDog(y, x, id, hr, t) {
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
			
	var sensor = new google.maps.Marker({
		position : point,
		icon : "img/dogIcon.png",
		map : map
	});
	google.maps.event.addListener(sensor, 'mouseover', function() {
		infoWindow.open(map, sensor);
	});
	
	sensors.push(sensor);
}

function showSensors() {
	setAllMap(map);
}

function setAllMap(map) {
	for (var i = 0; i < sensors.length; i++) {
		sensors[i].setMap(map);
	}
}

function clearSensors() {
	setAllMap(null);
}

function deleteMarkers() {
	clearSensors();
	sensors = [];
}







