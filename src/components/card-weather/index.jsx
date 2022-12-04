import React from "react";
import { ForecastWeather } from "../forecast-weather";
import "./card-weather.css";

function CardWeather({ current, forecast }) {
  return (
    <div className="CardWeather">
      <div className="weather-top">
        <div className="weather-top-left">
          <div className="weather-top-left-left">
            <img
              className="weather-img"
              src={`icons/${current.weather[0].icon}.png`}
              alt="weather"
            />
          </div>

          <div className="weather-top-left-right">
            <h3 className="weather-description">
              {current.weather[0].description}
            </h3>
            <h5 className="weather-location">{current.city}</h5>
          </div>
        </div>

        <div className="weather-top-right">
          <h2 className="weather-temp">{Math.round(current.main.temp)}°C</h2>
        </div>
      </div>

      <div className="weather-bottom">
        {<ForecastWeather forecast={forecast} />}
      </div>
    </div>
  );
}

export { CardWeather };
