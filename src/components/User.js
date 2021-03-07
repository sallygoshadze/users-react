import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const User = ({ name, username, website }) => {
  return (
    <div className="user">
      <img
        src="https://www.searchpng.com/wp-content/uploads/2019/02/User-Icon-PNG-715x715.png"
        alt="user-icon"
      />
      <h3>
        <Link className="user-header" to={`/${username}`}>
          {name}
        </Link>
      </h3>
      <span>
        <p className="user-info">user</p>{' '}
        <p className="user-username">{username}</p>
      </span>
      <span>
        <p className="user-info">website</p>{' '}
        <p className="user-website">{website}</p>
      </span>
    </div>
  );
};

export default User;
