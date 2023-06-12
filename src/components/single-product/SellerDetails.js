import React from 'react';
import { useAdsContext } from '../../contexts/AdsProvider';
import ShareBox from '../home/ShareBox';
import { useMainContext } from '../../contexts/MainProvider';

const SellerDetails = ({ title, price, location, created_at, id }) => {
  const { userCurrency } = useMainContext();
  var today = new Date(created_at && created_at);
  var userRegister = today.getFullYear();
  const renderedPrice = price && price.toLocaleString();
  return (
    <div className='seller-details'>
      <div className='box bg-primary py-4 px-3 text-white rounded'>
        <div className='d-flex flex-column flex-sm-row justify-content-between'>
          <h4 className='fw-bold'>{title && title}</h4>
          <h4 className='text-secondary'>
            <span>{renderedPrice}</span>
            <span className='mx-2'>{userCurrency && userCurrency}</span>
          </h4>

          <ShareBox
            url={`https://adsapp.org/#/singleproduct/${id}`}
            quote={title}
            image='white'
          />
        </div>
        <div className='d-flex flex-column flex-sm-row justify-content-between mt-3 mt-sm-5'>
          <h6 className='fw-light'>{location && location}</h6>
          {/* <h6 className='fw-light'>100 مشاهدة</h6> */}
          <h6 className='fw-light'>منذ {userRegister && userRegister}</h6>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
