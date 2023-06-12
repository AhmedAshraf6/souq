import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../login/Login';

import add from '../../../assets/ICONs/add.png';

const NotSigned = () => {
  return (
    <div className='login d-flex align-items-center'>
      <Link to='/ads' className='mx-3'>
        <img
          src={add}
          alt='add'
          className='fs-3  pointer navbar-icon'
          loading='lazy'
        />
      </Link>
      <Login />
    </div>
  );
};

export default NotSigned;
