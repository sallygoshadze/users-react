import React, { useCallback, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import Error from '../components/Error';

const SingleUser = () => {
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [companies, setCompanies] = useState('');

  const getUser = useCallback(async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const singleUser = data.find(
      (u) => u.username === location.pathname.slice(1)
    );
    if (singleUser) {
      setUser(singleUser);
      setCompanies(singleUser.company.name);
    }
  }, [location.pathname]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!user) {
    return <Error />;
  }

  return (
    <div className="userpage-username">
      <h1>{user.username}</h1>
      <Link to="/" className="back-btn">
        Back Home
      </Link>

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
