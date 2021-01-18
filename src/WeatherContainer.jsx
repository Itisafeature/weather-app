import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';

const WeatherContainer = () => {
  const [result, setResult] = useState([]);
  const [isCompare, setIsCompare] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="weather-container">
      <div className="header-container">
      <Typewriter 
        options={{
        strings: 'Welcome to the Weather Search Tool',
        autoStart: true,
        }}
      />
      </div>
      <Search result={result} setResult={setResult} setIsCompare={setIsCompare} setIsError={setIsError} />
      <WeatherDisplay result={result} isCompare={isCompare} />
    </div>
  )
}

export default WeatherContainer;