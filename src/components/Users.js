import React, { useState, useEffect } from 'react';
import User from './User';
const Users = () => {
  const URL = 'https://jsonplaceholder.typicode.com/users';

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          username={user.username}
          website={user.website}
        />
      ))}
    </div>
  );
};

export default Users;
