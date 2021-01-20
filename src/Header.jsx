import React from "react";
import Typewriter from 'typewriter-effect';
import './Header.scss';

const Header = () => (
  <div className="header-container">
    <div className="typewriter-container">
      <Typewriter 
        options={{
        strings: 'Welcome to the Weather Search Tool',
        autoStart: true,
        skipAddStyles: true
        }}
      />
    </div>
    <div className="instructions">
      <p>Enter the city (and state/country if necessary) to see current weather. To compare weather first search for a city and then use the compare button</p>
    </div>
  </div>
)

export default Header;