package com.sensorupchallenge.client;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/status")
public class SensorDataConsumer {
	
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String returnSensor(){
		
		return "<h1>Testing Rustam</h1>";
	}
	
}
