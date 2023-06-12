import React from 'react';
import { image_url } from '../../utils/constants';
import ShareBox from '../home/ShareBox';

const Member = ({ allAds }) => {
  var dte =
    allAds && allAds.length > 0 && allAds[0].User.created_at
      ? allAds[0].User.created_at
      : '';
  var today = new Date(dte);
  var d = today.getFullYear();

  return (
    <div className='text-center w-100'>
      {allAds && allAds.length > 0 && (
        <>
          <img
            src={allAds[0].User.image && `${image_url}${allAds[0].User.image}`}
            alt='person3'
            className='image-person rounded-circle'
            loading='lazy'
          />
          <h6 className='mt-2'>
            <span className='fw-bold ms-1'>عضو منذ</span>
            <span className='fw-light'>{d}</span>
          </h6>

          <ShareBox
            text='مشاركة رابط الملف الشخصي'
            url={`https://adsapp.org/#/seller/${allAds[0]?.User?.id}`}
          />
        </>
      )}
    </div>
  );
};

export default Member;
