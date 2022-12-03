import "./CurrentWeather.css";
import Icon from "./Icon";
import Temperature from "./Temperature";
import WeatherDetails from "./WeatherDetails";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      {/* hello from weather */}
      <WeatherDetails />
      <Icon />
      <Temperature />
    </div>
  );
}
