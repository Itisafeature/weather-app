import React, { useState } from 'react';
import Header from './Header'
import Error from './Error';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';
import { findLocation } from './helpers'


const AppContainer = () => {
  const [result, setResult] = useState([]);
  const [isCompare, setIsCompare] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRemoveLocation = (e, loc) => {
    setResult(result.filter(el => !findLocation(loc, result)))
  }

  return (
    <>
      <Header />
      {isError ? <Error errorMessage={errorMessage} /> : null}
      {isSuccess ? <div className="success">If this is not what you were looking for try increasing your specificity!</div> : null}
      <Search result={result} setResult={setResult} setIsCompare={setIsCompare} setIsError={setIsError} setErrorMessage={setErrorMessage} setIsSuccess={setIsSuccess} />
      <WeatherDisplay result={result} isCompare={isCompare} handleRemoveLocation={handleRemoveLocation} />
    </>
  )
}

export default AppContainer;