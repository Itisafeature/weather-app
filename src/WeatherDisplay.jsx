import React from 'react';
import CurrentWeather from './CurrentWeather';
import './WeatherDisplay.scss'

const WeatherDisplay = ({ result, isCompare, handleRemoveLocation }) => {
  if (result.length > 0) 
    return <div className={isCompare ? 'current-weather-compare' : 'current-weather'}>{result.map(el => <CurrentWeather key={el.location.name} loc={el.location} weather={el.current} handleRemoveLocation={handleRemoveLocation} />)}</div>;
  return null;
}
export default WeatherDisplay;