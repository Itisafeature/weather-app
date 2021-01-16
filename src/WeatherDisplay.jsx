import React from 'react';
import CurrentWeather from "./CurrentWeather";

const WeatherDisplay = ({result}) => {
  if (result.length > 0) 
    return <div className="current-weather">{result.map(el => <CurrentWeather key={el.location.name} loc={el.location} weather={el.current} />)}</div>;
  return null;
}
export default WeatherDisplay;