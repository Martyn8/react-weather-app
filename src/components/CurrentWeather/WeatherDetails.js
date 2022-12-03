import "./CurrentWeather.css";

export default function WeatherDetails() {
  return (
    <div className="weather-details">
      <div className="location">
        <span className="cityPlace" id="cityPlace">
          CIty
        </span>
      </div>

      <div>
        <span className="currentTime" id="dayTimePlace">
          date time
        </span>
      </div>

      <div>
        <span id="desc">description</span>
      </div>

      <div>
        <span>
          Wind: <span id="wind-speed"></span> km/h
        </span>
      </div>
    </div>
  );
}
