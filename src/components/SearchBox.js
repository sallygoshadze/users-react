import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBox = () => {
  const [error, setError] = useState('');
  const searchValue = React.useRef('');
  const [searchTerm, setSearchTerm] = useState('');
  const searchUser = () => {
    setSearchTerm(searchValue.current.value);
  };

  const searchItems = JSON.parse(localStorage.getItem('searchItems'))
    ? JSON.parse(localStorage.getItem('searchItems'))
    : [];

  const updateSearch = () => {
    if (searchTerm === '') {
      setError('Please Enter Username');
    }

    if (searchItems.length > 2) {
      searchItems.pop();
    }

    searchItems.unshift(searchTerm);
    localStorage.setItem('searchItems', JSON.stringify(searchItems));
  };

  return (
    <div>
      <form className="search-form">
        {error && <div className='error-message'>{error}</div>}
        <input
          type="text"
          className="search-box"
          ref={searchValue}
          onChange={searchUser}
          placeholder={searchItems}
        />
        <Link to={`/${searchTerm}`} onClick={updateSearch}>
          <button className="search-btn">Search</button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBox;
