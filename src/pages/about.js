import React from 'react';

const about = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        This is an application for displaying and searching users using{' '}
        <a
          href="http://jsonplaceholder.typicode.com/"
          target="_blank"
          rel="noreferrer"
        >
          JSONPlaceholder's
        </a>{' '}
        free fake API.
        <br />
        <br />
        Created by{' '}
        <a
          href="https://github.com/sallygoshadze"
          target="_blank"
          rel="noreferrer"
        >
          @sallygoshadze
        </a>
      </p>
    </div>
  );
};

export default about;
