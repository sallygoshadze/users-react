import React from 'react';

const UserProfile = ({ username, phone, website, email, companies }) => {
  return (
    <div>
      <img
        src="https://www.searchpng.com/wp-content/uploads/2019/02/User-Icon-PNG-715x715.png"
        alt="user-icon"
      />
      <h3>{username}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <p>{companies}</p>
    </div>
  );
};

export default UserProfile;
