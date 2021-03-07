import React from 'react';
import Users from '../components/Users';
import SearchBox from '../components/SearchBox';
const home = () => {
  return (
    <div>
      <h1 className="page-title">Explore Users</h1>
      <SearchBox />
      <Users />
    </div>
  );
};

export default home;
