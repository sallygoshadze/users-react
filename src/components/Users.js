import React, { useState, useEffect } from 'react';
import User from './User';
const Users = () => {
  const URL = 'https://jsonplaceholder.typicode.com/users';

  const [users, setUsers] = useState([]);
  const [view, setView] = useState('gridview');


  const getUsers = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  const handleToggle = () => {
    if (view === 'listview') {
      setView('gridview');
    } else if (view === 'gridview') {
      setView('listview');
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <button className="toggle-btn" onClick={handleToggle}>
        Switch View
      </button>
      <div className={`users-container ${view}`}>
        {users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            username={user.username}
            website={user.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
