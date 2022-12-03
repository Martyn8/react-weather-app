import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form">
        <input
          type="text"
          name="city"
          id="city-input"
          placeholder="Enter city name"
        />

        <input
          type="submit"
          id="submit-button"
          className="btn btn-outline-dark"
          //style="margin-top: 20px"
          value="Change location"
        />
        <button
          type="submit"
          id="location-button"
          className="btn btn-outline-dark"
          //style="margin-top: 20px"
          value="Current location"
        >
          Current <i className="fa-solid fa-location-dot"> icon</i>
        </button>
      </form>
    </div>
  );
}
