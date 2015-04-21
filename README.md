Sensor-Up Challenge: Client application
===============
The application consumes a RESTful web service to get a sensor values (currently simulated). The application is a client-side only. It consist of a mapping component using Google Maps API v3 and trivial html elements to show parameters of a selected sensor.

The application consumes a RESTful web services published by the sensor-rest-service application by sending an AJAX request using jQuery plugin. 

A user is expected to select a sensor which entail a map to visualize location of a sensor attached to a dog. When another sensor is selected, the map erases location of the previous sensor and starts showing the location of the recently selected sensor.

##Initial Screen
![s1](https://cloud.githubusercontent.com/assets/7506777/7259414/6520baee-e820-11e4-9cf9-5709e926a4df.png)

##After a sensor of interest is selected
![s2](https://cloud.githubusercontent.com/assets/7506777/7259415/6521e658-e820-11e4-8cf6-32a0ce613413.png)
