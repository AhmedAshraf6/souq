import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/shared-components/Loading';
import Message from '../components/shared-components/Message';
import RedirectToPage from '../components/shared-components/RedirectToPage';
import { useUserContext } from '../contexts/UserProvider';
import { new_pass_url } from '../utils/constants';

const ResetPassword = () => {
  const { idreset } = useParams();
  const { handleLoading, isLoading } = useUserContext();
  const [formValues, setFormValues] = useState({
    password: '',
    conPassword: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const { password, conPassword } = formValues;
  const makeRequest = async () => {
    handleLoading(true);
    try {
      const response = await axios.post(
        new_pass_url,
        JSON.stringify({
          new_password_one: formValues.password,
          new_password_two: formValues.conPassword,
          id: idreset,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      handleLoading(false);
      setSuccess(true);
    } catch (error) {
      handleLoading(false);
      if (error.response?.status === 422) {
        setFormErrors({
          ...formErrors,
          emailError: 'الإيميل غير موجود بالخدمة',
        });
      } else {
        setFormErrors({
          ...formErrors,
          anotherError: 'خطأ ما حدث حاول مرة أخري',
        });
      }

      // setFormErrors({...formErrors,})
      // console.log(error);
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
    if (!formValues.password) {
      errors.passwordError = 'من فضلك أدخل الباسورد';
    }
    if (!formValues.conPassword) {
      errors.passwordConError = 'أعد كتابة الباسورد';
    } else if (formValues.password !== formValues.conPassword) {
      errors.notIdenticalError = 'الباسورد غير متطابقتان';
    }

    return errors;
  };
  if (isLoading) {
    return <Loading />;
  }
  if (success) {
    return (
      <>
        <Message textMsg='تم إعادة  تعيين كلمة السر بنجاح سجل دخولك من جديد' />
        <RedirectToPage />;
      </>
    );
  }
  return (
    <main className='login mx-3'>
      <form
        className='box icon-box w-50 position-relative mx-auto mt-4'
        onSubmit={handleSubmit}
      >
        <input
          className='form-control form-control-lg mt-4 '
          type='password'
          name='password'
          value={password}
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
          value={conPassword}
          placeholder='تأكيد كلمة السر'
          autoComplete='new-password'
          onChange={(e) =>
            setFormValues({ ...formValues, conPassword: e.target.value })
          }
        />
        {formErrors.passwordConError && (
          <p className='text-danger mt-2'>{formErrors.passwordConError}</p>
        )}
        {formErrors.notIdenticalError && (
          <p className='text-danger mt-2'>{formErrors.notIdenticalError}</p>
        )}
        {formErrors.emailError && (
          <p className='text-danger mt-2'>{formErrors.emailError}</p>
        )}
        {formErrors.anotherError && (
          <p className='text-danger mt-2'>{formErrors.anotherError}</p>
        )}
        <div className='text-center my-3'>
          <button
            className='btn btn-light text-primary w-50 fs-6 fw-bold'
            type='submit'
          >
            إعادة تعيين
          </button>
        </div>
      </form>
    </main>
  );
};

export default ResetPassword;
