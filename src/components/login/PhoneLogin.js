import React from 'react';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
const PhoneLogin = ({ setShowPhone, toggleLogin, setToggleLogin }) => {
  return (
    <div className='phone-login  '>
      {!toggleLogin && (
        <>
          <div className='d-flex flex-column gap-2 align-items-center'>
            <button
              className='btn btn-light text-primary w-50'
              onClick={() => {
                setToggleLogin('login');
                setShowPhone(true);
              }}
            >
              تسجيل الدخول
            </button>
            <button
              className='btn btn-light text-primary w-50'
              onClick={() => {
                setToggleLogin('register');
                setShowPhone(true);
              }}
            >
              تسجيل حساب
            </button>
          </div>
        </>
      )}
      {toggleLogin && toggleLogin == 'login' && (
        <SignIn setShowPhone={setShowPhone} />
      )}
      {toggleLogin && toggleLogin == 'register' && <SignUp />}
    </div>
  );
};

export default PhoneLogin;
