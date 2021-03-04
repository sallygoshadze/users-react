import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3 className='nav-links'>
        <Link to="/">Home</Link>
      </h3>
      <h3 className='nav-links'>
        <Link to="/about">About</Link>
      </h3>
    </div>
  );
};

export default Navbar;
