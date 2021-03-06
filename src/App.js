import "./styles.css";
import React from "react";
import WeatherMap from "./WeatherMap";
import './App.css';
import Search from "./Search";

function App() {
  return (
    <div className="App">

      <WeatherMap/>
      <Search />
    <br/>
    <br/>
      <footer>
      This project was coded by Esmée Zootjes and is open-sourced on <a href="https://github.com/esmeecodes/hows-the-weather" target="_blank">GitHub</a> and hosted on Netlify.    
      </footer>
  </div>
  );
}

export default App;