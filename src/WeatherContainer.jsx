import React, { useState } from 'react';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';

const WeatherContainer = () => {
  const [result, setResult] = useState([]);


  return (
    <div className="weather-container">
      <Search result={result} setResult={setResult} />
      <WeatherDisplay result={result} />
    </div>
  )
}

export default WeatherContainer;