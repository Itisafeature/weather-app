import React from 'react';
import './CurrentWeather.scss'

const CurrentWeather = ({ loc, weather }) => (
  <div className="location-info">
    <h3 className="location-name">{loc.name}</h3>
    <div className="tempature">
      <h5>Tempature</h5>
      <ul>
        <li>Humidity: {weather.humidity}</li>
        <div className="farenheit">
          Farenheit
          <li>{weather.temp_f}</li>
          <li>Feels Like: {weather.feelslike_f}</li>
        </div>
        <div className="celcius">
          Celcius
          <li>{weather.temp_c}</li>
          <li>Feels Like: {weather.feelslike_c}</li>
        </div>
      </ul>
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
