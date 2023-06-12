import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import Loading from '../shared-components/Loading';
import { login_url } from '../../utils/constants';
import RetrivePassword from './RetrivePassword';
const SignInWithEmail = () => {
  const { handleTokenRequest, handleLoading, isLoading } = useUserContext();
  const [foregetPass, setForgetPass] = useState(false);
  // Handel Api
  const makeRequest = async (url) => {
    handleLoading(true);
    try {
      const response = await axios.post(
        url,
        JSON.stringify({
          email: formValues.email,
          password: formValues.password,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      handleLoading(false);
      handleTokenRequest(response.data.token);
      localStorage.setItem(
        'login',
        JSON.stringify({ token: response.data.token })
      );
    } catch (error) {
      handleLoading(false);
      if (!error.response) {
        setFormErrors({
          ...formErrors,
          serverError: 'لا يوجد استجابة من الخادم',
        });
      } else if (error.response?.status === 401) {
        setFormErrors({
          ...formErrors,
          authError: 'خطأ في كلمة السر أوالايميل',
        });
      } else {
        setFormErrors({
          ...formErrors,
          anotherError: 'خطأ ما حدث حاول مرة أخري',
        });
      }
    }
  };

  const initialValues = {
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // email
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
  };
  const validateForm = (values) => {
    const errors = {};
    if (!values.password) {
      errors.passwordError = 'من فضلك أدخل الرقم السري';
    }
    if (!values.email) {
      errors.emailError = 'من فضلك أدخل البريد الإلكتروني';
    } else if (
      !String(values.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errors.emailCorrectError = 'أدخل بريد إلكتروني صحيح';
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      makeRequest(login_url);
    }
  }, [formErrors]);
  // start handle Form
  return (
    <>
      {!foregetPass ? (
        isLoading ? (
          <Loading color='text-white' />
        ) : (
          <div>
            {/* <h5 className='text-white text-center'>أدخل رقم الهاتف</h5> */}
            <div className='box icon-box w-50 position-relative mx-auto mt-4'>
              <input
                className='form-control form-control-lg '
                type='text'
                name='email'
                value={formValues.email}
                placeholder='البريد الإلكتروني'
                autoComplete='off'
                onChange={handleChange}
              />
              {formErrors.emailError && (
                <p className='text-danger mt-2'>{formErrors.emailError}</p>
              )}
              {formErrors.emailCorrectError && (
                <p className='text-danger mt-2'>
                  {formErrors.emailCorrectError}
                </p>
              )}
            </div>
            <div className='box icon-box w-50 position-relative mx-auto mt-4'>
              <input
                className='form-control form-control-lg mt-4 '
                type='password'
                name='password'
                value={formValues.password}
                placeholder='كلمة السر'
                autoComplete='new-password'
                onChange={handleChange}
              />
              {formErrors.passwordError && (
                <p className='text-danger mt-2'>{formErrors.passwordError}</p>
              )}
            </div>
            <div className='box w-100 text-center mt-3'>
              <button
                className='btn btn-light text-primary w-50 fs-6 fw-bold'
                onClick={handleSubmit}
              >
                تسجيل الدخول
              </button>
              {formErrors.authError && (
                <p className='text-danger mt-2'>{formErrors.authError}</p>
              )}
              {formErrors.notFoundError && (
                <p className='text-danger mt-2'>{formErrors.notFoundError}</p>
              )}
              {formErrors.serverError && (
                <p className='text-danger mt-2'>{formErrors.serverError}</p>
              )}
              {formErrors.anotherError && (
                <p className='text-danger mt-2'>{formErrors.anotherError}</p>
              )}
            </div>
            <p
              className='forget-pass text-center mt-3 pointer text-decoration-underline'
              onClick={() => setForgetPass((a) => !a)}
            >
              هل نسيت كلمة السر؟
            </p>
          </div>
        )
      ) : (
        <RetrivePassword val='أدخل البريد الإلكتروني' />
      )}
    </>
  );
};

export default SignInWithEmail;
