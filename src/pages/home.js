import React from 'react';
import Users from '../components/Users';
import SearchBox from '../components/SearchBox';
const home = () => {
  return (
    <div>
      <h1>homepage</h1>
      <SearchBox />
      <Users />
    </div>
  );
};

export default home;
