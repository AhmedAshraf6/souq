import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import { reset_pass_url } from '../../utils/constants';
import Loading from '../shared-components/Loading';
import Message from '../shared-components/Message';
import NewPassword from './NewPassword';

const RetrivePasswordPhone = ({ val, placHold = 'البريد الإلكتروني' }) => {
  const { handleLoading, isLoading } = useUserContext();
  const [phone, setPhone] = useState('');
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
          phone,
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
    setFormErrors(validateForm(phone));
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
      errors.phoneError = `${val} من فضلك`;
    }
    return errors;
  };
  if (isLoading) {
    return <Loading color='text-white' />;
  }
  if (success) {
    return (
      <Message
        textMsg='تم ارسال رابط اعادة تعيين كلمة السر إلي هاتفك'
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
          name='phone'
          placeholder={placHold}
          autoComplete='off'
          onChange={(e) => setPhone(e.target.value)}
        />
        {formErrors.phoneError && (
          <p className='text-danger'>{formErrors.phoneError}</p>
        )}
        {formErrors.phoneCorrectError && (
          <p className='text-danger'>{formErrors.phoneCorrectError}</p>
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

export default RetrivePasswordPhone;
