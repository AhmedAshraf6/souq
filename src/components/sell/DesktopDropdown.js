import React from 'react';
import leftarrow from '../../assets/ICONs/leftarrow.png';

import { Link } from 'react-router-dom';
const DesktopDropdown = ({ id: main_id, name_ar, image, rel }) => {
  return (
    <div className='dropstart w-100' key={main_id}>
      <button
        className='btn btn-light dropdown-toggle custom-dropdown ms-3 w-100 d-flex justify-content-between'
        type='button'
        id='MyAccountDDM'
        data-bs-toggle='dropdown'
        data-bs-auto-close='outside'
        aria-expanded='false'
      >
        <div className='d-flex align-items-center'>
          {/* <div className='bg-warning rounded-circle p-2'>
            <img                   loading='lazy'

              src={`${new_image_cat_url}${image}`}
              className='navbar-icon'
              alt={name_ar}
            />
          </div> */}
          <span className='text-primary me-3 fw-bold text-wrap text-end'>
            {name_ar && name_ar}
          </span>
        </div>
        <img
          loading='lazy'
          src={leftarrow}
          alt='leftarrow'
          className='navbar-icon mt-3'
        />
      </button>

      <ul
        className='dropdown-menu w-100'
        aria-labelledby='MyAccountDDM'
        id='AppDropDownId'
      >
        {/* Second Level  */}
        {rel &&
          rel.map((sub_cat) => {
            const { id: sub_id, name_ar: name_sub_cat, children } = sub_cat;
            return (
              <div key={sub_id}>
                {children && children.length > 0 ? (
                  <li>
                    <div className='btn-group dropstart w-100'>
                      <a
                        type='button'
                        className='dropdown-item btn btn-light dropdown-toggle custom-dropdown ms-3 w-100 d-flex justify-content-between align-items-center text-end'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <span className='text-primary fw-bold text-wrap'>
                          {name_sub_cat && name_sub_cat}
                        </span>
                        <img
                          loading='lazy'
                          src={leftarrow}
                          alt='leftarrow'
                          className='navbar-icon'
                        />
                      </a>
                      <ul
                        className='dropdown-menu w-100 third-dropdown overflow-auto'
                        style={{ maxHeight: '400px' }}
                      >
                        {/* Third Level */}
                        {children.map((third) => {
                          const {
                            id: id_third,
                            name_ar: third_sub_cat,
                            sub_group,
                          } = third;
                          return (
                            <li
                              className='d-flex justify-content-between align-items-center text-end'
                              key={id_third}
                            >
                              <Link
                                className='dropdown-item'
                                to={`/ads/puplish/${main_id}/${sub_id}/${name_ar}`}
                              >
                                {third_sub_cat}
                              </Link>
                              <img
                                loading='lazy'
                                src={leftarrow}
                                alt='leftarrow'
                                className='navbar-icon'
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={sub_id}>
                    <div className='btn-group dropstart w-100'>
                      <Link
                        type='button'
                        className='dropdown-item btn btn-light dropdown-toggle custom-dropdown ms-3 w-100 d-flex justify-content-between align-items-center text-end'
                        // data-bs-toggle='dropdown'
                        // aria-expanded='false'
                        to={`/ads/puplish/${main_id}/${sub_id}/${name_ar}`}
                      >
                        <span className='text-primary fw-bold text-wrap'>
                          {name_sub_cat && name_sub_cat}
                        </span>
                        <img
                          loading='lazy'
                          src={leftarrow}
                          alt='leftarrow'
                          className='navbar-icon'
                        />
                      </Link>
                    </div>
                  </li>
                )}
              </div>
            );
          })}
        {/* Second Level  */}
      </ul>
    </div>
  );
};

export default DesktopDropdown;
