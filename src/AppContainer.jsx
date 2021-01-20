import React, { useState } from 'react';
import Header from './Header'
import Error from './Error';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';


const AppContainer = () => {
  const [result, setResult] = useState([]);
  const [isCompare, setIsCompare] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <>
      <Header />
      {isError ? <Error errorMessage={errorMessage} /> : null}
      <Search result={result} setResult={setResult} setIsCompare={setIsCompare} setIsError={setIsError} setErrorMessage={setErrorMessage} />
      <WeatherDisplay result={result} isCompare={isCompare} />
    </>
  )
}

export default AppContainer;