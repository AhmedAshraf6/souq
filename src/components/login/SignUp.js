import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import { register_url } from '../../utils/constants';
import Loading from '../shared-components/Loading';
const SignUp = () => {
  const { handleTokenRequest, handleLoading, isLoading } = useUserContext();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    conPassword: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // Handel Api
  const makeRequest = async (url) => {
    handleLoading(true);
    try {
      const response = await axios.post(
        url,
        JSON.stringify({
          email: formValues.email,
          password: formValues.password,
          name: formValues.name,
          c_password: formValues.password,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      handleLoading(false);
      handleTokenRequest(response.data.data[0].token);
      localStorage.setItem(
        'login',
        JSON.stringify({ token: response.data.data[0].token })
      );
    } catch (error) {
      handleLoading(false);

      if (error.response?.status === 404) {
        setFormErrors({
          ...formErrors,
          emailExistError: 'البريد الالكتروني الذي أدخلته موجود بالفعل ',
        });
      } else {
        setFormErrors({
          ...formErrors,
          emailExistError: 'حدث خطأ ما حاول مرة أخري',
        });
      }
    }
  };

  // phone
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
  };
  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.nameError = 'من فضلك أدخل اسمك';
    }
    if (!values.password) {
      errors.passwordError = 'من فضلك أدخل الرقم السري';
    }
    if (!values.conPassword) {
      errors.conPasswordError = 'من فضلك أعد كتابة الرقم السري';
    }
    if (values.password !== values.conPassword) {
      errors.identicalError = 'كلمة السر يجب أن تكون متطابقتتين';
    }
    if (!values.email) {
      errors.emailError = 'من فضلك أدخل االبريد الالكتروني';
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
      makeRequest(register_url);
    }
  }, [formErrors]);
  // start handle Form
  return (
    <>
      {isLoading ? (
        <Loading color='text-white' />
      ) : (
        <div>
          {/* <h5 className='text-white text-center'>أدخل رقم الهاتف أو الميل</h5> */}
          <div className='box icon-box w-50 position-relative mx-auto mt-4'>
            <input
              className='form-control form-control-lg '
              type='text'
              name='name'
              value={formValues.name}
              placeholder='أدخل اسمك'
              onChange={handleChange}
              autoComplete='off'
            />
            {formErrors.nameError && (
              <p className='text-danger mt-2'>{formErrors.nameError}</p>
            )}
          </div>
          <div className='box icon-box w-50 position-relative mx-auto mt-4'>
            <input
              className='form-control form-control-lg'
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
              <p className='text-danger mt-2'>{formErrors.emailCorrectError}</p>
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
          <div className='box icon-box w-50 position-relative mx-auto mt-4'>
            <input
              className='form-control form-control-lg mt-4 '
              type='password'
              name='conPassword'
              value={formValues.conPassword}
              placeholder='تأكيد كلمة السر'
              autoComplete='new-password'
              onChange={handleChange}
            />
            {formErrors.conPasswordError && (
              <p className='text-danger mt-2'>{formErrors.conPasswordError}</p>
            )}
            {formErrors.identicalError && (
              <p className='text-danger mt-2'>{formErrors.identicalError}</p>
            )}
            {formErrors.emailExistError && (
              <p className='text-danger mt-2'>{formErrors.emailExistError}</p>
            )}
          </div>
          <div className='box w-100 text-center mt-3'>
            <button
              className='btn btn-light text-primary w-50 fs-6 fw-bold'
              onClick={handleSubmit}
            >
              تسجيل حساب
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
