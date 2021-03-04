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
      <form>
        <input
          type="text"
          ref={searchValue}
          onChange={searchUser}
          placeholder="type username ..."
        />
        <Link to={`/${searchTerm}`}>
          <button>Search</button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBox;
