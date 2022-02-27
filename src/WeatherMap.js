import React from "react";
import "./styles.css";

export default function WeatherMap() {
  return (
    <div>
        <div className="col-6 d-flex">
          <div id="map"></div>
          <img src={'./map-city.png'}/>
        </div>
    </div>
  );
}