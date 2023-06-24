import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import axios from 'axios';
import { change_pass_url } from '../../utils/constants';
import Loading from '../shared-components/Loading';
import Message from '../shared-components/Message';
import RedirectToPage from '../shared-components/RedirectToPage';
const MySettings = () => {
  // Api
  const { token } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorRequest, setErrorRequest] = useState(false);

  const handleChangePass = async (url) => {
    setLoading(true);
    try {
      const response = await axios.post(
        url,
        JSON.stringify({
          old_password: formValues.currentPass,
          new_password_one: formValues.newPass,
          new_password_two: formValues.verifyNewPass,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      // (error);
      setLoading(false);
      setErrorRequest(true);
    }
  };

  // Api
  const initialValues = {
    privateAd: '',
    currentPass: '',
    newPass: '',
    verifyNewPass: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [privateAd, setPrivateAd] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.currentPass) {
      errors.currentPassError = 'من فضلك أدخل كلمة المرور الحالية';
    }
    if (!values.newPass) {
      errors.newPassError = 'من فضلك أدخل كلمة المرور الجديدة';
    } else if (!values.verifyNewPass) {
      errors.verifyNewPassError = 'من فضلك أعد كتابة كلمة المرور الجديدة';
    } else if (values.newPass !== values.verifyNewPass) {
      errors.samePass = 'كلمة المرور يجب أن تكون متطابقتين';
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handleChangePass(change_pass_url);
    }
  }, [formErrors]);

  return (
    <div className='my-settings  my-5'>
      <div className='container-fluid'>
        {loading ? (
          <Loading />
        ) : success ? (
          <>
            <Message textMsg='تم تعديل كلمة السر بنجاح' />
            <RedirectToPage />
          </>
        ) : (
          <>
            {/* onSubmit={handleSettings} */}
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-md-2'>
                  <h3 className='text-primary'>الإعدادات</h3>
                </div>
                <div className='col-md-10'>
                  {/* Box 2 */}
                  <div className='box1 bg-primary py-4 rounded mt-2'>
                    <div className='box border-bottom pb-4'>
                      <h4 className='px-2 text-white'>تغيير كلمة المرور</h4>
                    </div>
                    <div className='form mx-2 row'>
                      <div className='col-sm-9 col-12'>
                        <input
                          className='form-control form-control-lg mt-4 '
                          type='password'
                          placeholder='كلمةالمرور الحالية'
                          name='currentPass'
                          value={formValues.currentPass}
                          onChange={handleChange}
                        />
                        <p className='text-danger mt-2'>
                          {formErrors.currentPassError}
                        </p>
                        {errorRequest && (
                          <p className='text-danger mt-2'>
                            خطأ في كلمة السر الحالية
                          </p>
                        )}
                      </div>
                      <div className='col-sm-9 col-12'>
                        <input
                          className='form-control form-control-lg mt-4 '
                          type='password'
                          placeholder='كلمة المرور الجديدة'
                          name='newPass'
                          value={formValues.newPass}
                          onChange={handleChange}
                        />
                        <p className='text-danger'>{formErrors.newPassError}</p>
                      </div>
                      <div className='col-sm-9 col-12'>
                        <input
                          className='form-control form-control-lg mt-4 '
                          type='password'
                          placeholder='تأكيد كلمةالمرور الجديدة'
                          name='verifyNewPass'
                          value={formValues.verifyNewPass}
                          onChange={handleChange}
                        />
                        <p className='text-danger'>
                          {formErrors.verifyNewPassError}
                          {formErrors.samePass}
                        </p>
                      </div>
                      <div className='col-12 text-center mt-5'>
                        <button className='btn btn-secondary btn-lg text-white'>
                          تغيير كلمة المرور
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Box 2 */}
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default MySettings;
