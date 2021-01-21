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
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <Header />
      {isError ? <Error errorMessage={errorMessage} /> : null}
      {isSuccess ? <div className="success">If this is not what you were looking for try increasing your specificity!</div> : null}
      <Search result={result} setResult={setResult} setIsCompare={setIsCompare} setIsError={setIsError} setErrorMessage={setErrorMessage} setIsSuccess={setIsSuccess} />
      <WeatherDisplay result={result} isCompare={isCompare} />
    </>
  )
}

export default AppContainer;