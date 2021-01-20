import React, { useState } from 'react';
import Header from './Header'
import Error from './Error';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';


const AppContainer = () => {
  const [result, setResult] = useState([]);
  const [isCompare, setIsCompare] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <>
      <Header />
      {isError ? <Error /> : null}
      <Search result={result} setResult={setResult} setIsCompare={setIsCompare} setIsError={setIsError} />
      <WeatherDisplay result={result} isCompare={isCompare} />
    </>
  )
}

export default AppContainer;