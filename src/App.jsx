import "./App.css";
import { CardWeather } from "./components/card-weather";
import { SearchCity } from "./components/search-city";
import { WEATHER_KEY } from "./apiData/search-city-api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_KEY}`
    );
    const forecastWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const currentResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...currentResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecastWeather);

  return (
    <div className="App">
      <SearchCity onSearchChange={handleOnSearchChange} />
      {currentWeather && (
        <CardWeather current={currentWeather} forecast={forecastWeather}/>
      )}
    </div>
  );
}

export default App;
