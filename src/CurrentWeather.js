import React from 'react';

const CurrentWeather = ({ loc, weather }) => (
  <div className="location-info">
    <h3 className="location-name">{loc.name}</h3>
    <div className="tempature">
      <ul>
        <li>Farenheit: {weather.temp_f}</li>
        <li>Celcius: {weather.temp_c}</li>
      </ul>
    </div>
  </div>
);

export default CurrentWeather;
