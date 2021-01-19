import React, { useState } from 'react';
import Header from './Header'
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';


const AppContainer = () => {
  const [result, setResult] = useState([]);
  const [isCompare, setIsCompare] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <>
      <Header />
      <Search result={result} setResult={setResult} setIsCompare={setIsCompare} setIsError={setIsError} />
      <WeatherDisplay result={result} isCompare={isCompare} />
    </>
  )
}

export default AppContainer;