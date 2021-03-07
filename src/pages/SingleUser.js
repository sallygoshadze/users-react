import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    <div className="userpage-username">
      <h1>{user.username}</h1>
      <Link to="/" className='back-btn'>Back Home</Link>

      <UserProfile
        name={user.name}
        email={user.email}
        phone={user.phone}
        website={user.website}
        companies={companies}
      />
    </div>
  );
};

export default SingleUser;
