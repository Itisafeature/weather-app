import React from 'react';
import './CurrentWeather.scss'

const CurrentWeather = ({ loc, weather }) => (
  <div className="location-info">
    <h2 className="location-name">{loc.name}</h2>
    <div className="tempature">
      <h3>Tempature</h3>
        <span>Current Temp Farenheit: {weather.temp_f}&#176;F </span>
        <span>Feels Like: {weather.feelslike_f}&#176;F</span>
        <span>Current Temp Celcius {weather.temp_c}&#176;C</span>
        <span>Feels Like: {weather.feelslike_c}&#176;C</span>
        <span>Humidity: {weather.humidity}</span>
      </div>
    <div className="wind">
      <h3>Wind</h3>
        <span>{weather.wind_mph} mph</span>
        <span>{weather.wind_kph }kph</span>
        <span>Gust: {weather.gust_mph} mph</span>
        <span>Gust: {weather.gust_kph} kph</span>
        <span>Direction: {weather.wind_dir}</span>
        <span>Direction Degrees: {weather.wind_degree}&#176;</span>
    </div>
  </div>
);

export default CurrentWeather;
