import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  console.warn('[404] Page not found');
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" className="btn-primary">GO BACK HOME →</Link>
    </div>
  );
};

export default NotFound;