import React, { useContext, useEffect, useState } from "react";
import {
  WiThunderstorm,
  WiDaySleet,
  WiDayRain,
  WiDaySnow,
  WiFog,
  WiDaySunny,
  WiCloudy,
} from "react-icons/wi";
import TasksContext from "../context/Weather";

function Result() {
  const { cityName, countryName, degree, weatherId } = useContext(TasksContext);
  const [statusName, setStatusName] = useState("Clear");

  const weatherStatus = () => {
    if (weatherId >= 200 && weatherId <= 232) {
      setStatusName("Thunderstorm");
    } else if (weatherId >= 300 && weatherId <= 321) {
      setStatusName("Drizzle");
    } else if (weatherId >= 500 && weatherId <= 531) {
      setStatusName("Rain");
    } else if (weatherId >= 600 && weatherId <= 622) {
      setStatusName("Snow");
    } else if (weatherId >= 701 && weatherId <= 781) {
      setStatusName("Foggy");
    } else if (weatherId == 800) {
      setStatusName("Clear");
    } else if (weatherId >= 801 && weatherId <= 804) {
      setStatusName("Clouds");
    }
  };
  useEffect(() => {
    weatherStatus();
  });

  return (
    <div className="result">
      <div className="weather-icon">
        {statusName == "Thunderstorm" ? (
          <WiThunderstorm className="icon" />
        ) : statusName == "Drizzle" ? (
          <WiDaySleet className="icon" />
        ) : statusName == "Rain" ? (
          <WiDayRain className="icon" />
        ) : statusName == "Snow" ? (
          <WiDaySnow className="icon" />
        ) : statusName == "Foggy" ? (
          <WiFog className="icon" />
        ) : statusName == "Clear" ? (
          <WiDaySunny className="icon" />
        ) : statusName == "Clouds" ? (
          <WiCloudy className="icon" />
        ) : (
          <WiDaySunny className="icon" />
        )}
      </div>
      <p className="cityNameLabel">{`${cityName}, ${countryName}`}</p>
      <p className="degree">{Math.round(degree - 273.15)} °C</p>
      <p className="status">{statusName}</p>
    </div>
  );
}

export default Result;
