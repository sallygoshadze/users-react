import React from 'react';

const UserProfile = ({ name, phone, website, email, companies }) => {
  return (
    <div className="userpage-container">
      <img
        src="https://www.searchpng.com/wp-content/uploads/2019/02/User-Icon-PNG-715x715.png"
        alt="user-icon"
      />
      <div>
        <span className="userpage-details">
          <p className="userpage-info">Name</p>
          <p>{name}</p>
        </span>
        <span className="userpage-details">
          <p className="userpage-info">Email</p>
          <p>{email}</p>
        </span>
        <span className="userpage-details">
          <p className="userpage-info">Phone</p>
          <p>{phone}</p>
        </span>
        <span className="userpage-details">
          <p className="userpage-info">Website</p>
          <p>{website}</p>
        </span>
        <span className="userpage-details">
          <p className="userpage-info">Company</p>
          <p>{companies}</p>
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
