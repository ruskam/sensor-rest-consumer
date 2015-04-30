package com.sensorupchallenge.client;

import com.google.gson.Gson;
import com.sensorupchallenge.models.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

/**
 * Servlet implementation class GetSensorValuesServlet
 */

@WebServlet(name = "GetSensorValuesServlet", urlPatterns = {"/GetSensorValues"})
public class GetSensorValuesServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		processRequest(request, response);
	}
	
	@Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

	protected void processRequest(HttpServletRequest request,
			HttpServletResponse response) {

		String sensorID = request.getParameter("sensorID");

		String sensorId = sensorID.replace("\"", "");

		try {
			URL url = new URL(
					"http://162.246.156.21/sensor-rest-service/service/sensor/"
							+ sensorId);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : "
						+ conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(
					(conn.getInputStream())));

			StringBuilder sb = new StringBuilder();
			String output;
			while ((output = br.readLine()) != null) {
				sb.append(output);
			}
			String str = sb.toString();
			JSONObject obj = new JSONObject(str);
			String id = obj.getString("id");
			double temp = obj.getDouble("temp");
			int hr = obj.getInt("heartRate");
			JSONObject coords = obj.getJSONObject("location");
			double lat = coords.getDouble("y");
			double lng = coords.getDouble("x");
			Sensor sensor = new Sensor(id, temp, hr, new Location(lng, lat));
			String jsonSensor = new Gson().toJson(sensor);
			
			response.setContentType("text/html;charset=UTF-8");
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(jsonSensor);

			conn.disconnect();

		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
