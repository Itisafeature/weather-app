import React, { useState } from 'react';
import Search from './Search';

const WeatherContainer = () => {
  const [search, setSearch] = useState('')

  return (
    <div className="weather-container">
      <Search search={search} setSearch={setSearch} />
    </div>
  )
}

export default WeatherContainer;