import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
function Weather(){

      const [weather,setWeather] = useState(null);
      const [city,setCity] = useState("");
      const [error,setError] = useState("");

      const API_KEY = "a5809475a83243139663032ff63521db";
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      const fetchweather = async () => {

        if(!city) return ;

        try{
            const respose = await axios.get(API_URL);
            setWeather(respose.data);
            setError("");
        } catch(err){
            setWeather(null);
            setError("City not found..!");
        }
      }

    return(
        
          <div className="container d-flex flex-column align-items-center py-5 ">
            <h2 className="mb-4">Weather App</h2>
            <div className="input-group mb-3  w-50">
            <input type="text" className="form-control " 
              placeholder="Enter city"
              value={city}
              onChange={(e) => {setCity(e.target.value)}}/>

            <button className="btn btn-dark " onClick={fetchweather} >Get Weather</button>
            </div>
          
          {error && <p className="text-danger">{error}</p>}
          {weather && (
            <div className="card p-4 text-center" style={{width : "300px"}}>
            <h2 className="mb-2">{weather.name}</h2>
            <p className="mb-1">Temperature : {weather.main.temp} °C</p>
            <p className="mb-1">Humidity : {weather.main.humidity} %</p>
            <p className="mb-1">Wind Speed : {weather.wind.speed} m/s</p>
            <p className="fw-bold">Condition : {weather.weather[0].description}</p>
            </div>
            )}
            </div>

       
    
    )
}
export default Weather;