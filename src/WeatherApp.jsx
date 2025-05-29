import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css"
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] =useState({
        city: "Wonderland",
        feelsLike: 24.2,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.06,
        humidity: 47,
        weather: "Haze",
  });

  let updateInfo = (newInfo) => {

    setWeatherInfo(newInfo);
  }

  return (
    <div className="WeatherApp">
      <h2>Weather App by <b>Kawser</b></h2>
      <SearchBox  updateInfo = {updateInfo} />
      <InfoBox info ={weatherInfo} />
    </div>
  );
}
