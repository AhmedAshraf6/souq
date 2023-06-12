import React from 'react';
import { useState } from 'react';
import SignInWithEmail from './SignInWithEmail';
import SignInWithPhone from './SignInWithPhone';

const SignIn = () => {
  const [detectLogin, setDetectLogin] = useState('');
  return (
    <div className='phone-login'>
      <div className='d-flex flex-column gap-2 align-items-center'>
        {!detectLogin && (
          <>
            <h5 className='text-center'>تسجيل الدخول باستخدام</h5>
            <button
              className='btn btn-secondary text-white w-50'
              onClick={() => setDetectLogin('phone')}
            >
              رقم الهاتف
            </button>
            <button
              className='btn btn-light text-primary w-50'
              onClick={() => setDetectLogin('email')}
            >
              البريد الإلكتروني
            </button>
          </>
        )}
      </div>
      {detectLogin && detectLogin == 'phone' && <SignInWithPhone />}
      {detectLogin && detectLogin == 'email' && <SignInWithEmail />}
    </div>
  );
};

export default SignIn;
