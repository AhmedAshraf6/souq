import React, { useState } from 'react';
import free from '../../assets/ICONs/free.png';

import { package_url } from '../../utils/constants';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useMainContext } from '../../contexts/MainProvider';
import { useRef } from 'react';
const ReviewDetails = ({
  handlePackageAd,
  formValues,
  handleChange,
  formErrors,
}) => {
  const { mainid } = useParams();
  const { countryName, countryId, currency } = useMainContext();
  const [allPackages, setAllPackages] = useState([]);
  const fetchPackages = async () => {
    const response = await axios(`${package_url}${countryName}`);
    const p = response.data.data.filter(
      (res) => res.category_id == mainid && countryId == res.country_id
    );

    setAllPackages(p);
  };
  useEffect(() => {
    countryId && fetchPackages();
  }, [mainid, countryId]);
  const contactRef = useRef();
  const packageRef = useRef();

  useEffect(() => {
    if (formErrors.contactMethodError) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (formErrors.packageIdError) {
      packageRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [formErrors]);
  return (
    <>
      <h5>راجع التفاصيل الخاصة بك</h5>

      <div className='method-contact mt-3'>
        <h6 ref={contactRef}>طريقة التواصل</h6>
        <div className='d-flex  justify-content-start my-4'>
          {/* Checkbox */}
          <div className='radio-group special d-flex flex-column flex-md-row'>
            <div className='bg-light  rounded radio-contact mt-3 mt-md-0 py-3 px-2 ms-3'>
              <label className='radio text-dark '>
                <input
                  type='radio'
                  value='phone'
                  name='contact'
                  onChange={handleChange}
                  checked={formValues.contact === 'phone'}
                />
                رقم الموبايل
                <span></span>
              </label>
            </div>
            <div className='bg-light  rounded radio-contact mt-3 mt-md-0 py-3 px-2 ms-3'>
              <label className='radio text-dark '>
                <input
                  type='radio'
                  value='adschat'
                  name='contact'
                  onChange={handleChange}
                  checked={formValues.contact === 'adschat'}
                />
                أدس شات
                <span></span>
              </label>
            </div>
            <div className='bg-light  rounded radio-contact mt-3 mt-md-0 py-3 px-2 ms-3'>
              <label className='radio text-dark '>
                <input
                  type='radio'
                  value='whattsapp'
                  name='contact'
                  onChange={handleChange}
                  checked={formValues.contact === 'whattsapp'}
                />
                واتساب
                <span></span>
              </label>
            </div>
            <div className='bg-light radio-contact mt-3 mt-md-0 py-3 px-2 rounded '>
              <label className='radio text-dark '>
                <input
                  type='radio'
                  value='three'
                  name='contact'
                  onChange={handleChange}
                  checked={formValues.contact === 'three'}
                />
                الثلاثة
                <span></span>
              </label>
            </div>
          </div>
        </div>
        {formErrors.contactMethodError && (
          <p className='text-danger'>{formErrors.contactMethodError}</p>
        )}
        {/* Ads */}
        <div className='ads text-center'>
          <h4 className='text-white my-4'>ماذا تريد إعلانك أن يكون</h4>
          <div className='row gy-4 justify-content-center'>
            {allPackages &&
              allPackages.length > 0 &&
              allPackages.map((pack) => {
                const { name, decription, price, id: package_id } = pack;
                return (
                  <div className='col-12 col-md-7' key={package_id}>
                    <div
                      className={
                        formValues.package_id === package_id
                          ? 'box bg-secondary text-primary py-3 px-1 px-sm-3 rounded pointer '
                          : 'box color-in-background text-primary py-3 px-1 px-sm-3 rounded pointer '
                      }
                      onClick={() => handlePackageAd(package_id, price)}
                    >
                      <div className='d-flex py-2 justify-content-center align-items-center'>
                        <h4 className='fw-bold'>{name}</h4>
                        {/* <img src={free} alt='free' className='icon mx-2' /> */}
                      </div>
                      <h6 className='text-center py-2 fw-bold'>{decription}</h6>
                      <h3
                        className={
                          formValues.package_id === package_id
                            ? 'fw-bold text-primary'
                            : 'fw-bold text-secondary'
                        }
                      >
                        <div className='d-flex justify-content-center align-items-center'>
                          <span className='fs-5 text-primary'> Egp</span>
                          <span> {price}</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                );
              })}
            {formErrors.packageIdError && (
              <p className='text-danger' ref={packageRef}>
                {formErrors.packageIdError}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewDetails;
