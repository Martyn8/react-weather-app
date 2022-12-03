import "./WeatherApp.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.js";
import Search from "./components/Search/Search";
import Forecast from "./components/Forecast/Forecast.js";

function WeatherApp() {
  return (
    <div className="WeatherApp">
      <Search />
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default WeatherApp;
