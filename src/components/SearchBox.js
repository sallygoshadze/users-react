import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBox = () => {
  const searchValue = React.useRef('');
  const [searchTerm, setSearchTerm] = useState('');
  const searchUser = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <div>
      <form className="search-form">
        <input
          type="text"
          className="search-box"
          ref={searchValue}
          onChange={searchUser}
          placeholder="type username ..."
        />
        <Link to={`/${searchTerm}`}>
          <button className="search-btn">Search</button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBox;
