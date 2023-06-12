import React, { useState } from 'react';
// import OtherMethods from './OtherMethods';
import PhoneLogin from './PhoneLogin';
import rightwhar from '../../assets/ICONs/rightwhar.png';
const LoginModel = ({ show = true }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [toggleLogin, setToggleLogin] = useState('');
  return (
    <div
      className='modal fade'
      id='login'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content bg-primary text-white '>
          <div
            className={
              showPhone
                ? 'd-flex justify-content-between align-items-center mx-2 mt-2'
                : 'd-flex justify-content-end align-items-center mx-2 mt-2'
            }
          >
            {showPhone && (
              <img
                src={rightwhar}
                alt='rightwhar '
                className='icon pointer'
                onClick={() => {
                  setShowPhone(false);
                  setToggleLogin('');
                }}
                loading='lazy'
              />
            )}
            <button
              type='button'
              data-bs-dismiss='modal'
              className='btn-close btn-close-white '
            ></button>
          </div>
          <div className='modal-body w-100'>
            {/* Login */}
            <PhoneLogin
              setShowPhone={setShowPhone}
              toggleLogin={toggleLogin}
              setToggleLogin={setToggleLogin}
            />
            {/* {!showPhone && (
              <>
                <p className='text-center fw-bold or my-3'>أو</p>
                <OtherMethods />
              </>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModel;
