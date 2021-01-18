import React, { useState } from 'react';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';

const WeatherContainer = () => {
  const [result, setResult] = useState([]);
  const [isCompare, setIsCompare] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="weather-container">
      <Search result={result} setResult={setResult} setIsCompare={setIsCompare} setIsError={setIsError} />
      <WeatherDisplay result={result} isCompare={isCompare} />
    </div>
  )
}

export default WeatherContainer;