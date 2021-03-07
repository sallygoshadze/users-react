import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-page">
      <h1>User Not Found</h1>

      <Link to="/" className="errorpage-btn">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
