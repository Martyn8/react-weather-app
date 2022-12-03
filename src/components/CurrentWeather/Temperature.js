import "./CurrentWeather.css";

export default function Temperature() {
  return (
    <div className="temperature">
      <strong id="current-temp">current temp</strong>
      <span id="unit-conv">°C | °F</span>
    </div>
  );
}
