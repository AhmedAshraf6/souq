import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import { new_pass_url } from '../../utils/constants';
import Loading from '../shared-components/Loading';

const NewPassword = () => {
  const { handleLoading, isLoading } = useUserContext();

  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    password: '',
    conPassword: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const makeRequest = async () => {
    handleLoading(true);
    try {
      const response = await axios.post(
        new_pass_url,
        JSON.stringify({
          new_password_one: formValues.password,
          new_password_two: formValues.conPassword,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      handleLoading(false);
    } catch (error) {
      handleLoading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      makeRequest();
    }
  }, [formErrors]);
  const validateForm = (val) => {
    const errors = {};
    if (!val) {
      errors.emailError = 'من فضلك أدخل البريد الإلكتروني';
    } else if (
      !String(val)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errors.emailCorrectError = 'من فضلك أدخل بريد إلكتروني صحيح';
    }
    return errors;
  };
  return (
    <>
      {isLoading ? (
        <Loading color='text-white' />
      ) : (
        <>
          <p className='text-center fs-6'>إنشاء كلمة مرور جديدة</p>
          <form
            className='box icon-box w-50 position-relative mx-auto mt-4'
            onSubmit={handleSubmit}
          >
            <input
              className='form-control form-control-lg mt-4 '
              type='password'
              name='password'
              value={formValues.password}
              placeholder='كلمة السر'
              autoComplete='new-password'
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
            />
            {formErrors.passwordError && (
              <p className='text-danger mt-2'>{formErrors.passwordError}</p>
            )}
            <input
              className='form-control form-control-lg mt-4 '
              type='password'
              name='conPassword'
              value={formValues.conPassword}
              placeholder='تأكيد كلمة السر'
              autoComplete='new-password'
              onChange={(e) =>
                setFormValues({ ...formValues, conPassword: e.target.value })
              }
            />
            {/* {formErrors.conPasswordError && (
            <p className='text-danger mt-2'>{formErrors.conPasswordError}</p>
          )} */}
            <div className='text-center my-3'>
              <button
                className='btn btn-light text-primary w-50 fs-6 fw-bold'
                type='submit'
              >
                إعادة تعيين
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default NewPassword;
