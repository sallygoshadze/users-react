import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserProfile from '../components/UserProfile';

const SingleUser = () => {
  const location = useLocation();

  const [user, setUser] = useState({});
  const [companies, setCompanies] = useState('');

  const getUser = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const singleUser = data.find(
      (u) => u.username === location.pathname.slice(1)
    );
    console.log(singleUser);
    setUser(singleUser);
    setCompanies(singleUser.company.name);
    console.log(companies);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <h1>{user.name}</h1>

      <UserProfile
        username={user.username}
        email={user.email}
        phone={user.phone}
        website={user.website}
        companies={companies}
      />
    </div>
  );
};

export default SingleUser;
