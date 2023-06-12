import React from 'react';
import { useMainContext } from '../../../contexts/MainProvider';
import { useUserContext } from '../../../contexts/UserProvider';
import ResponNavSigned from './ResponNavSigned';
import NotSigned from './NotSigned';

const RespnsiveNavbar = () => {
  const { toggleNavbarFunc } = useMainContext();
  const { token } = useUserContext();
  const detectToggle = (e) => {
    if (e.target.className === 'side-navbar') {
      toggleNavbarFunc(false);
    }
  };

  return (
    <div className='side-navbar' onClick={detectToggle}>
      <div className='small-nav py-3 px-3 '>
        <button
          type='button'
          className='btn-close fw-bold fs-5 btn-close-white d-block me-auto'
          aria-label='Close'
          onClick={() => toggleNavbarFunc(false)}
        ></button>
        {!token && <NotSigned />}
        {token && <ResponNavSigned />}
      </div>
    </div>
  );
};

export default RespnsiveNavbar;
