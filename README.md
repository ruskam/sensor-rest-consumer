Sensor-Up Challenge: Client application
===============
The application consumes a RESTful web service to get a sensor values (currently simulated). The application is a client-side only. It consist of a mapping object using Google Maps API v3 and trivial html elements to show parameters of a selected sensor.

The RESTful web services is consumed by sending an AJAX request using jQuery plugin. A user is expected to select a sensor which entail a map to visualize location of a sensor attached to a dog. When another sensor is selected, the map erases location of the previous sensor and starts showing the location of the recently selected sensor.
