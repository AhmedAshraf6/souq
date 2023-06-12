import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMainContext } from '../../../contexts/MainProvider';
import { image_url } from '../../../utils/constants';

const SearchInput = () => {
  const { fetchValueFromSearch, searchedAds, openSearch } = useMainContext();
  const navigate = useNavigate();
  const handleKey = () => {
    if (searchedAds) {
      navigate('/search');
    }
  };
  return (
    <div className='w-100 position-relative'>
      <input
        type='text'
        className='form-control search fs-6 fw-bold'
        aria-label='Sizing example input'
        aria-describedby='inputGroup-sizing-default'
        placeholder='ابحث عما تريد'
        onKeyUp={(e) => {
          handleKey();
          fetchValueFromSearch(e.target.value);
        }}
      />
      {openSearch && searchedAds && searchedAds.length > 0 && (
        <div
          className='w-100 bg-primary position-absolute overflow-auto'
          style={{ zIndex: '4', height: '200px' }}
        >
          <div className='d-flex flex-column gap-3 p-3'>
            {searchedAds.map((ad) => {
              const { id, advertisement_attachements, title } = ad;
              return (
                <Link
                  className='d-flex align-items-center text-white justify-content-start pointer'
                  key={id}
                  to={`/singleproduct/${id}`}
                >
                  {advertisement_attachements &&
                    advertisement_attachements.length > 0 && (
                      <img
                        loading='lazy'
                        src={`${image_url}${advertisement_attachements[0].files}`}
                        className='icon'
                        alt='image'
                      />
                    )}
                  <h6>{title}</h6>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
