import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [windSpeed, setWindSpeed] = useState(null);
  let [description, setDescr] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemp(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWindSpeed(response.data.wind.speed);
    setDescr(response.data.weather[0].description);
    setIcon(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "f6766af7b26f55aa24d6be88466216f4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
          <form id="searchform-city" 
          onSubmit={handleSubmit}>
              <div class="input-group rounded">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search your favorite place"
                aria-label="Search" aria-describedby="search-addon"  
                onChange={updateCity}
              />
                <input
                  className="btn btn-outline-secondary ml-1"
                  type="submit"
                  id="button-addon2"
                  value="Search"
                  />
                  </div>
                  </form>
  );

  if (temperature) {
    return (
    <div>
        <div className="col-6">
        {form}
        </div>
        <div className="col-6">
        <h2 className="card-title">
           
          The weather for <br />
          <span id="city">{city}</span>
        </h2>
        <p>
          <span id="accentbig">
            <span id="degrees"></span>{Math.round(temperature)}<span id="celcius">C</span>{" "}
            <img
              src={icon}
              alt="weather icon"
              className="icon"
            />
          </span>
          <ul>
            <li className="weatherdescription">{description}</li>
            <li>
              Windspeed: <span id="windspeed">{Math.round(windSpeed)}</span>m/h
            </li>
            <li>
              Humidity: <span id="humidity">{humidity}</span>%
            </li>
          </ul>
        </p>
      </div>
    </div>
    );
  } else {
    return (
        <div>
        <div className="col-6">
        {form}
        </div>
        <div className="col-6">
        <h2 className="card-title">
        Loading the weather forecast...
        </h2>
      </div>
    </div>
    );
  }
}
