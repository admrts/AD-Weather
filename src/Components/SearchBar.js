import React, { useContext } from "react";
import { useState } from "react";
import TasksContext from "../context/Weather";

function SearchBar() {
  const [city, setCityName] = useState("");
  const { fetchWeather } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setCityName("");
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="searchBar"
        value={city}
        onChange={handleChange}
        placeholder="Type a City Name"
      />
      <button className="searchBtn">Search</button>
    </form>
  );
}

export default SearchBar;
