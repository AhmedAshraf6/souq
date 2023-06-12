import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import heart from '../../assets/ICONs/heart.png';
import heart2 from '../../assets/ICONs/heart2.png';

import share from '../../assets/ICONs/share.png';
import { useUserContext } from '../../contexts/UserProvider';
import { useAdsContext } from '../../contexts/AdsProvider';
const DropdownLeft = ({ id }) => {
  const { handleFavouriteAd } = useAdsContext();
  const handleChange = (e) => {
    const f = e.target.value;
  };
  const { favAdsIds } = useAdsContext();
  return (
    <div className='dropstart '>
      <BsThreeDotsVertical
        className='pointer dropdown-toggle removearrow '
        data-bs-toggle='dropdown'
      />
      <div
        className='dropdown-menu border-secondary mx-3'
        style={{ width: '300px' }}
      >
        <div className='py-1 w-100'>
          <div>
            <label
              htmlFor='fav'
              className='form-label d-flex justify-content-between pointer border-bottom border-secondary pb-2 w-100 align-items-center px-2'
            >
              {favAdsIds.includes(id) ? (
                <>
                  <span
                    className='text-end fw-bold fs-6'
                    onClick={() => handleFavouriteAd(id)}
                  >
                    ازالة الاعلان من المفضلة
                  </span>
                  <img
                    loading='lazy'
                    src={heart2}
                    alt='heart'
                    className='heart'
                  />{' '}
                </>
              ) : (
                <>
                  <span
                    className='text-end fw-bold fs-6'
                    onClick={() => handleFavouriteAd(id)}
                  >
                    اضافة الاعلان الي المفضلة
                  </span>
                  <img
                    loading='lazy'
                    src={heart}
                    alt='heart'
                    className='heart'
                  />
                </>
              )}
            </label>
            <input
              type='email'
              className='form-control'
              id='fav'
              style={{ display: 'none' }}
              defaultValue='fav'
              onClick={handleChange}
              name='fav'
            />
            <label
              htmlFor='share'
              className='form-label d-flex justify-content-between pointer pb-2 w-100 align-items-center px-2'
            >
              <span className='text-end fw-bold fs-6'>مشاركة</span>
              <img loading='lazy' src={share} alt='share' className='heart' />
            </label>
            <input
              type='email'
              className='form-control'
              id='share'
              style={{ display: 'none' }}
              defaultValue='share'
              onClick={handleChange}
              name='share'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownLeft;
