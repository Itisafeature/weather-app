import React from "react";
import Typewriter from 'typewriter-effect';
import './Header.scss';

const Header = () => (
  <div className="header-container">
    <Typewriter 
      options={{
      strings: 'Welcome to the Weather Search Tool',
      autoStart: true,
      skipAddStyles: true
      }}
    />
  </div>
)

export default Header;