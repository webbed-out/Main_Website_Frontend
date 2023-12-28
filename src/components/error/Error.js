import React from 'react';
import './Error.css';

function Error() {
  return (
    <div className="error-screen">
      <h2>Something went wrong</h2>
      <div className="subTitle">
        <p>We are facing some issue showing you content. Please try again</p>
      </div>
    </div>
  );
}

export default Error;
