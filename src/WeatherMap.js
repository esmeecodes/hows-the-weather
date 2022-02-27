import React from "react";
import "./styles.css";

export default function WeatherMap() {
  return (
    <div>
        <div className="col-6 d-flex">
          <div id="map"></div>
          <img src={'./map-city.png'}/>
        </div>
            <Footer>
This project was coded by Esmée Zootjes and is open-sourced on <a href="https://github.com/esmeecodes/hows-the-weather" target="_blank">GitHub</a> and hosted on Netlify.    
</Footer>
    </div>
  );
}