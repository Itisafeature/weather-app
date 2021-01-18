import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = ''

const Search = ({result, setResult, setIsCompare, setIsError}) => {
  const [search, setSearch] = useState('');

  const handleClick = async (isCompare) => {
    try {
      const data = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}`)
      if (isCompare && result.length === 0) {
        setIsError(true);
        return null;
      }
     if (!result.some(el => el.location.name === data.data.location.name && el.location.region === data.data.location.region)) {
        setIsCompare(isCompare);
        isCompare ? setResult(result.concat([data.data])) : setResult([].concat([data.data]))
      }
    } catch (err) {
      console.log(err)
    }
    setSearch('')
  }

  return (
    <div className="search-container">
      <input type="text" className="searchbar" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => handleClick(false)}>Search Weather</button>
      <button onClick={() => handleClick(true)}>Compare Weather</button>
    </div>
  )
}

export default Search;