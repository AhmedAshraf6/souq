import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import { login_url, login_url_phone } from '../../utils/constants';
import Loading from '../shared-components/Loading';
import RetrivePassword from './RetrivePassword';
import RetrivePasswordPhone from './RetrivePasswordPhone';
// input
// import PhoneInput, {
//   formatPhoneNumber,
//   formatPhoneNumberIntl,
// } from 'react-phone-number-input';
// import 'react-phone-number-input/style.css';
const SignInWithPhone = () => {
  const { handleTokenRequest, handleLoading, isLoading } = useUserContext();
  const [foregetPass, setForgetPass] = useState(false);
  // ٢٠١٠٠٠٨٩٠١٩٢
  // 123456
  // Handel Api
  const makeRequest = async (url) => {
    handleLoading(true);
    try {
      const response = await axios.post(
        url,
        JSON.stringify({
          phone: formValues.phone,
          password: formValues.password,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      handleLoading(false);
      handleTokenRequest(response.data.data.token);
      localStorage.setItem(
        'login',
        JSON.stringify({ token: response.data.data.token })
      );
      console.log(response);
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
      console.log(error);
    }
  };
  const initialValues = {
    phone: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [value, setValue] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // phone
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
  };
  const validateForm = (values) => {
    const errors = {};
    if (!values.phone) {
      errors.phoneError = 'من فضلك أدخل رقم الهاتف';
    }
    if (!values.password) {
      errors.passwordError = 'من فضلك أدخل الرقم السري';
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      makeRequest(login_url_phone);
    }
  }, [formErrors]);
  // useEffect(() => {
  //   setFormValues((olddata) => {
  //     return { ...olddata, phone: formatPhoneNumber(value) };
  //   });
  // }, [value]);
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
              <p className='text-center text-secondary '>
                قم بإضافة مفتاح دولتك قبل الرقم بدون + او 00
              </p>
              <input
                className='form-control form-control-lg '
                type='text'
                name='phone'
                value={formValues.phone}
                placeholder='1000000000'
                autoComplete='off'
                onChange={handleChange}
              />

              {/* <PhoneInput
                dir='ltr'
                international
                className='form-control form-control-lg dropdown-toggle.removearrow'
                countryCallingCodeEditable={false}
                withCountryCallingCode
                placeholder='1000000000'
                name='phone'
                defaultCountry='EG'
                value={value}
                onChange={setValue}
              /> */}
              {formErrors.phoneError && (
                <p className='text-danger mt-2'>{formErrors.phoneError}</p>
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
            <h6
              className='forget-pass text-center mt-3 pointer text-decoration-underline'
              onClick={() => setForgetPass((a) => !a)}
            >
              هل نسيت كلمة السر؟
            </h6>
          </div>
        )
      ) : (
        <RetrivePasswordPhone val='أدخل رقم الهاتف' placHold='100000000' />
      )}
    </>
  );
};

export default SignInWithPhone;
