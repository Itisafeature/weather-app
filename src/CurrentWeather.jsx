import React from 'react';
import './CurrentWeather.scss'

const CurrentWeather = ({ loc, weather }) => (
  <div className="location-info">
    <h2 className="location-name">{loc.name}</h2>
    <div className="tempature">
      <h3>Tempature</h3>
        Humidity: {weather.humidity}
        <div className="farenheit">
          <h4>Farenheit:</h4>
          <span>{weather.temp_f}</span>
          <span>Feels Like: {weather.feelslike_f}</span>
        </div>
        <div className="celcius">
          Celcius {weather.temp_c}
          Feels Like: {weather.feelslike_c}
        </div>
      </div>
    <div className="wind">
      <h5>Wind</h5>
      <ul>
        <li>mph: {weather.wind_mph}</li>
        <li>kph: {weather.wind_kph}</li>
        <li>Gust mph: {weather.gust_mph}</li>
        <li>Gust kph: {weather.gust_kph}</li>
        <li>Direction: {weather.wind_dir}</li>
        <li>Direction Degrees: {weather.wind_degree}</li>
      </ul>
    </div>
  </div>
);

export default CurrentWeather;
