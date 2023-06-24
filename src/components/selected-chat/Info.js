import React from 'react';
import person3 from '../../assets/imgs/person3.png';
import test from '../../assets/imgs/test.png';
import phone from '../../assets/ICONs/chat/phone.png';
import whatts from '../../assets/ICONs/chat/whatts.png';
import leftarrow from '../../assets/ICONs/leftarrow.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { image_url, seller_url } from '../../utils/constants';
import axios from 'axios';
import { useSellerCalledContext } from '../../contexts/CalledSellerProvider';
import { useUserContext } from '../../contexts/UserProvider';
// import {
//   formatPhoneNumber,
//   formatPhoneNumberIntl,
// } from 'react-phone-number-input';
const Info = () => {
  const { sellerCalled, sellerName, sellerImage, sellerPhone } =
    useSellerCalledContext();
  const replacedPhone = sellerPhone.replace('+', '');
  const { setIsClickedFunc } = useUserContext();
  return (
    <div className='info'>
      <div className='seller-info text-decoration-none bg-light rounded mx-1 text-primary d-flex justify-content-between  align-items-start  gap-2 py-2 mt-2'>
        <div className='d-flex align-items-center'>
          <img
            loading='lazy'
            src={`${image_url}${sellerImage}`}
            alt='person'
            className='seller-avatar rounded-circle mx-2'
          />
          <div className='mx-3'>
            <h4>{sellerName}</h4>
          </div>
        </div>
        <div className='d-flex flex-column gap-2'>
          {sellerPhone && (
            <a
              href={`//api.whatsapp.com/send?phone=${replacedPhone}`}
              target='_blank'
            >
              <img loading='lazy' src={whatts} alt='whatts' className='icon ' />
            </a>
          )}

          <button
            type='button'
            className='btn btn-primary btn-sm text-white d-block d-lg-none'
            onClick={() => setIsClickedFunc(false)}
          >
            عودة
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
