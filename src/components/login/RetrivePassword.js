import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import { reset_pass_url } from '../../utils/constants';
import Loading from '../shared-components/Loading';
import Message from '../shared-components/Message';
import NewPassword from './NewPassword';

const RetrivePassword = ({ val, placHold = 'البريد الإلكتروني' }) => {
  const { handleLoading, isLoading } = useUserContext();
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const [success, setSuccess] = useState(false);
  const makeRequest = async () => {
    handleLoading(true);
    try {
      const response = await axios.post(
        reset_pass_url,
        JSON.stringify({
          email,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      handleLoading(false);
      setSuccess(true);
    } catch (error) {
      handleLoading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(email));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      makeRequest();
    }
  }, [formErrors]);
  const validateForm = (a) => {
    const errors = {};
    if (!a) {
      errors.emailError = `${val} من فضلك`;
    } else if (
      !String(a)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errors.emailCorrectError = 'من فضلك أدخل بريد إلكتروني صحيح';
    }
    return errors;
  };
  if (isLoading) {
    return <Loading color='text-white' />;
  }
  if (success) {
    return (
      <Message
        textMsg='تم ارسال رابط اعادة تعيين كلمة السر إلي بريدك الإلكرتوني'
        widthMsg='w-100'
      />
    );
  }

  return (
    <>
      <p className='text-center fs-6'>{val} لإرسال رمز التأكيد</p>
      <form
        className='box icon-box w-50 position-relative mx-auto mt-4'
        onSubmit={handleSubmit}
      >
        <input
          className={`form-control form-control-lg ${
            placHold == 'البريد الإلكتروني' ? '' : 'egypt'
          }`}
          type='text'
          name='email'
          placeholder={placHold}
          autoComplete='off'
          onChange={(e) => setEmail(e.target.value)}
        />
        {formErrors.emailError && (
          <p className='text-danger'>{formErrors.emailError}</p>
        )}
        {formErrors.emailCorrectError && (
          <p className='text-danger'>{formErrors.emailCorrectError}</p>
        )}
        <div className='text-center my-3'>
          <button
            className='btn btn-light text-primary w-50 fs-6 fw-bold'
            type='submit'
          >
            التالي
          </button>
        </div>
      </form>
    </>
  );
};

export default RetrivePassword;
