import React from "react";

const ForecastWeather = ({ forecast }) => {

  function getDay(timestamp) {
    const day = new Date(timestamp);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day.getDay()];
  }

  function getDayNumber(timestamp) {
    const day = new Date(timestamp);
    return day.getDate()
  }

  function getMaxTemp(day) {
    let result = Number.MIN_SAFE_INTEGER;
    let aux = 0;

    for (let i = day * 8; i < day * 8 + 8; i++) {
      aux = forecast.list[i].main.temp_max;

      if (aux > result) {
        result = aux;
      }
    }

    return Math.round(result);
  }

  function getMinTemp(day) {
    let result = Number.MAX_SAFE_INTEGER;
    let aux = 0;

    for (let i = day * 8; i < day * 8 + 8; i++) {
      aux = forecast.list[i].main.temp_min;

      if (aux < result) {
        result = aux;
      }
    }

    return Math.round(result);
  }

  function forecastDayCreator() {
    let result = [];

    for (let i = 0; i < 5; i++) {
      result.push(
        <div className="weather-bottom-container scale-up-center" key={i}>
          <h3 className="weather-bottom-day">
            {getDay(forecast.list[i * 8].dt_txt)}
            {" "}
            {getDayNumber(forecast.list[i * 8].dt_txt)}
          </h3>
          <img
            className="weather-bottom-img"
            src={`icons/${forecast.list[i * 8 + 4].weather[0].icon}.png`}
            alt=""
          />
          <h4 className="weather-bottom-max-temp">{getMaxTemp(i)}°</h4>
          <h6 className="weather-bottom-min-temp">{getMinTemp(i)}°</h6>
        </div>
      );
    }

    return [result];
  }

  return [forecastDayCreator()];
};

export { ForecastWeather };
