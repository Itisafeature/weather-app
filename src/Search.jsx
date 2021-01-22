import React, { useState } from 'react';
import axios from 'axios';
import { errorHelper } from './helpers.js';
import './Search.scss';

const API_KEY = ''

const Search = ({result, setResult, setIsCompare, setIsError, setErrorMessage, setIsSuccess}) => {
  const [search, setSearch] = useState('');

  const handleClick = async (isCompare) => {
    if (isCompare && result.length === 0) {
      errorHelper("Please search for a city before comparing!", setIsError, setErrorMessage, setIsSuccess)
      return null;
    }

    if (result.length > 9) {
      errorHelper("Please remove a city first", setIsError, setErrorMessage, setIsSuccess)
    }

    try {
      const data = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}`)
     if (!result.some(el => el.location.name === data.data.location.name && el.location.region === data.data.location.region)) {
        setIsCompare(isCompare);
        setIsError(false);
        setIsSuccess(true);
        isCompare ? setResult(result.concat([data.data])) : setResult([].concat([data.data]))
      }
    } catch (err) {
      errorHelper(err, setIsError, setErrorMessage, setIsSuccess)
    }
    setSearch('')
  }

  return (
    <div className="search-container">
      <input type="text" className="search-bar" value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="button-container">
        <button className="search-button" onClick={() => handleClick(false)}>Search Weather</button>
        <button className="compare-button" onClick={() => handleClick(true)}>Compare Weather</button>
      </div>
    </div>
  )
}

export default Search;