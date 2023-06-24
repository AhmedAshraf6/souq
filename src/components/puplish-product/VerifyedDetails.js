import axios from 'axios';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMainContext } from '../../contexts/MainProvider';
import { ads_type_url, cities_id_url } from '../../utils/constants';
const VerifyedDetails = ({
  handleChange,
  formValues,
  formErrors,
  fetchLocation,
}) => {
  const [adsType, setAdsType] = useState([]);
  const [cities, setCities] = useState([]);
  const { currentLocationId } = useMainContext();
  const { namecat } = useParams();
  // (nameselect);

  const fetchAdsType = async () => {
    const res = await axios(ads_type_url);
    setAdsType(res.data.data);
  };
  const fetchCities = async () => {
    const res = await axios(`${cities_id_url}${currentLocationId}`);
    setCities(res.data.data);

    // (res);
  };
  useEffect(() => {
    fetchAdsType();
  }, []);
  useEffect(() => {
    currentLocationId && fetchCities();
  }, [currentLocationId]);

  const adsNameRef = useRef();
  const adressRef = useRef();
  const adTypeRef = useRef();
  const PaymentRef = useRef();
  const carStatusRef = useRef();
  const engineStatusRef = useRef();
  const explainAdRef = useRef();
  useEffect(() => {
    if (formErrors.adsNameError || formErrors.adsNameLengthError) {
      adsNameRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (formErrors.addressError || formErrors.addressLengthError) {
      adressRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (formErrors.adTypeError) {
      adTypeRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (formErrors.paymentOptionError) {
      PaymentRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (formErrors.carStatusError) {
      carStatusRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (formErrors.engineStatusError) {
      engineStatusRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (formErrors.explainAdsError || formErrors.explainAdsLenghtError) {
      explainAdRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [formErrors]);
  return (
    <>
      <div className='d-flex my-3'>
        <h5>{namecat}</h5>
      </div>
      <div className='row gx-5 gy-3'>
        <h4>تأكيد بعض التفاصيل</h4>
        <div className='col-md-6'>
          <h6 ref={adsNameRef}>اسم الاعلان</h6>
          <input
            className='form-control'
            type='text'
            placeholder='اذكر أهم مميزات منتجك (مثل العلامة التجارية، الطراز، العمر والنوع)'
            name='adsName'
            value={formValues.adsName}
            onChange={handleChange}
            maxLength='50'
          />
          <span className='d-flex justify-content-end'>0/50</span>
          {formErrors.adsNameError && (
            <p className='text-danger'>{formErrors.adsNameError}</p>
          )}
          {formErrors.adsNameLengthError && (
            <p className='text-danger'>{formErrors.adsNameLengthError}</p>
          )}
        </div>

        <div className='col-md-6'>
          <h6 ref={adressRef}>
            العنوان أو{' '}
            <span className='text-secondary pointer' onClick={fetchLocation}>
              تحديد موقعك
            </span>
          </h6>
          <input
            className='form-control'
            type='text'
            placeholder='العنوان التفصيلي'
            value={formValues.address}
            name='address'
            maxLength='50'
            onChange={handleChange}
          />
          <span className='d-flex justify-content-end'>0/50</span>
          {formErrors.addressError && (
            <p className='text-danger'>{formErrors.addressError}</p>
          )}
          {formErrors.addressLengthError && (
            <p className='text-danger'>{formErrors.addressLengthError}</p>
          )}
        </div>
      </div>
      {/* cities */}
      <div className='my-3 w-25 citites'>
        <h6>اختر المدينة</h6>
        <select
          className='form-select text-primary border-0 box'
          name='city_id'
          onChange={handleChange}
        >
          {cities &&
            cities.length > 0 &&
            cities.map((city, index) => {
              return (
                <option
                  value={city.id}
                  className='me-3 text-primary'
                  key={index}
                >
                  {city.name}
                </option>
              );
            })}
        </select>
      </div>
      {/* نوع الاعلان */}
      <div className='my-3'>
        <h6 ref={adTypeRef}>نوع اعلانك</h6>
        <div className='d-flex justify-content-start my-1 '>
          {/* Checkbox */}
          <div className='radio-group'>
            {adsType &&
              adsType.length > 0 &&
              adsType.map((ad) => {
                return (
                  <label className='radio ms-5 my-1' key={ad.id}>
                    <input
                      type='radio'
                      name='adType'
                      value={ad.id}
                      onChange={handleChange}
                    />
                    {ad.name_ar}
                    <span></span>
                  </label>
                );
              })}
          </div>
        </div>
        {formErrors.adTypeError && (
          <p className='text-danger'>{formErrors.adTypeError}</p>
        )}
      </div>
      {/* طريقة الدفع */}
      <div className='my-3'>
        <h6 ref={PaymentRef}>طريقة الدفع</h6>
        <div className='d-flex justify-content-start my-1'>
          {/* Checkbox */}
          <div className='radio-group'>
            <label className='radio ms-5 my-1'>
              <input
                type='radio'
                name='payment_option'
                value='cash'
                onChange={handleChange}
              />
              كاش
              <span></span>
            </label>
            <label className='radio ms-5 my-1'>
              <input
                type='radio'
                name='payment_option'
                value='exchange'
                onChange={handleChange}
              />
              تبادل
              <span></span>
            </label>
            <label className='radio ms-5 my-1'>
              <input
                type='radio'
                name='payment_option'
                value='installments'
                onChange={handleChange}
              />
              أقساط
              <span></span>
            </label>
          </div>
        </div>
        {formErrors.paymentOptionError && (
          <p className='text-danger'>{formErrors.paymentOptionError}</p>
        )}
      </div>
      {namecat == 'سيارات' && (
        <>
          {/* حالة السيارة*/}
          <div className='my-3'>
            <h6 ref={carStatusRef}>حالة السيارة</h6>
            <div className='d-flex justify-content-start my-4'>
              {/* Checkbox */}
              <div className='radio-group'>
                <label className='radio ms-5 my-1'>
                  <input
                    type='radio'
                    name='carStatus'
                    value='1'
                    onChange={handleChange}
                  />
                  جديد
                  <span></span>
                </label>
                <label className='radio ms-5 my-1'>
                  <input
                    type='radio'
                    name='carStatus'
                    value='0'
                    onChange={handleChange}
                  />
                  مستعمل
                  <span></span>
                </label>
              </div>
            </div>
            {formErrors.carStatusError && (
              <p className='text-danger'>{formErrors.carStatusError}</p>
            )}
          </div>
          {/* حالة المحرك*/}
          <div className='my-3'>
            <h6 ref={engineStatusRef}>ناقل المحرك</h6>
            <div className='d-flex justify-content-start my-4'>
              {/* Checkbox */}
              <div className='radio-group'>
                <label className='radio ms-5 my-1'>
                  <input
                    type='radio'
                    name='engineStatus'
                    value='1'
                    onChange={handleChange}
                  />
                  مانيوال
                  <span></span>
                </label>
                <label className='radio ms-5 my-1'>
                  <input
                    type='radio'
                    name='engineStatus'
                    value='0'
                    onChange={handleChange}
                  />
                  أوتوماتيك
                  <span></span>
                </label>
              </div>
            </div>
            {formErrors.engineStatusError && (
              <p className='text-danger'>{formErrors.engineStatusError}</p>
            )}
          </div>
        </>
      )}
      <div className='explain mt-2'>
        <div className='form-floating custom-textarea'>
          <textarea
            className='form-control h-100'
            placeholder='اشرح حالة المنتج ، ومميزاته وسبب البيع'
            id='floatingTextarea2'
            value={formValues.explainAds}
            name='explainAds'
            onChange={handleChange}
            ref={explainAdRef}
          ></textarea>
          <label
            htmlFor='floatingTextarea2'
            className='label-textarea text-primary fs-6 fw-bold text-wrap'
          >
            اشرح حالة المنتج ، ومميزاته وسبب البيع
          </label>
        </div>
        <span className='d-flex justify-content-end'>0/4067</span>
        {formErrors.explainAdsError && (
          <p className='text-danger'>{formErrors.explainAdsError}</p>
        )}
        {formErrors.explainAdsLenghtError && (
          <p className='text-danger'>{formErrors.explainAdsLenghtError}</p>
        )}
      </div>
    </>
  );
};

export default VerifyedDetails;
