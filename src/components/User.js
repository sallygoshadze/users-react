import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const User = ({ name, username, website }) => {
  return (
    <div>
      <h3>
        <Link to={`/${username}`}>{name}</Link>
      </h3>
      <img
        src="https://www.searchpng.com/wp-content/uploads/2019/02/User-Icon-PNG-715x715.png"
        alt="user-icon"
      />
      <p>{username}</p>
      <p>{website}</p>
    </div>
  );
};

export default User;
