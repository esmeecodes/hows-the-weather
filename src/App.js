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
  </div>
  );
}

export default App;