import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import './WeatherApp.css';



export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 14.36,
    humidity: 67,
    temp: 15.05,
    tempMax: 15.05,
    tempMin: 15.05,
    weather: "smoke",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="WeatherApp">
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

