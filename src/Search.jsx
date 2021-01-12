import React from 'react';

const Search = ({search, setSearch}) => {

  return (
    <div className="search-container">
      <input type="text" className="searchbar" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleClick}>Search Weather</button>
    </div>
  )
}

export default Search;