import React, { useState } from 'react';
import LoginModel from './LoginModel';

const Login = () => {
  return (
    <div className='login'>
      {/* Sign In */}
      <button
        type='button'
        className='btn btn-primary text-nowrap'
        data-bs-toggle='modal'
        data-bs-target='#login'
      >
        تسجيل الدخول
      </button>
      {/* Modal */}
      <LoginModel />
      {/* Modal */}
      {/* Sign In */}
    </div>
  );
};

export default Login;
