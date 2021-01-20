import React from 'react';
import './Error.scss';

const Error = ({errorMessage}) => (
  <div className="error">
    <h1>{errorMessage}</h1>
  </div>
)

export default Error;