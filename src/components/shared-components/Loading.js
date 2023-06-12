import React from 'react';

const Loading = ({ color = 'text-primary' }) => {
  return (
    // <h1 className='text-center my-3 text-primary fw-bold'>جار المعالجة ...</h1>
    <div className='d-flex justify-content-center'>
      <div className={`spinner-border ${color}`} role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
