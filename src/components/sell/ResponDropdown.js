import React from 'react';
import car from '../../assets/ICONs/car.png';
import dowarrow2 from '../../assets/ICONs/dowarrow2.png';

import { Link } from 'react-router-dom';
import { image_cat_url } from '../../utils/constants';

const ResponDropdown = ({ id: main_id, name_ar, image, rel }) => {
  return (
    <div className='dropdown  w-100'>
      <button
        className='btn btn-light dropdown-toggle custom-dropdown ms-3 w-100 d-flex justify-content-between'
        type='button'
        id='MyAccountDDM'
        data-bs-toggle='dropdown'
        data-bs-auto-close='outside'
        aria-expanded='false'
      >
        <div className='d-flex align-items-center'>
          <span className='text-primary me-3 fw-bold text-wrap text-end'>
            {name_ar && name_ar}
          </span>
        </div>
        <img
          src={dowarrow2}
          alt='dowarrow2'
          className='navbar-icon mt-3'
          loading='lazy'
        />
      </button>
      <ul
        className='dropdown-menu w-100 '
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
                    <div className='btn-group  dropdown w-100'>
                      <a
                        type='button'
                        className='dropdown-item btn btn-light dropdown-toggle custom-dropdown  w-100 d-flex justify-content-between align-items-center'
                        data-bs-toggle='dropdown'
                        data-bs-auto-close='outside'
                        aria-expanded='false'
                      >
                        <span className='text-primary fw-bold'>
                          {name_sub_cat && name_sub_cat}
                        </span>
                        <img
                          src={dowarrow2}
                          alt='dowarrow2'
                          className='navbar-icon'
                          loading='lazy'
                        />
                      </a>
                      <ul className='dropdown-menu w-100 third-dropdown'>
                        {/* Third Level */}
                        {children.map((third) => {
                          const {
                            id: id_third,
                            name_ar: third_sub_cat,
                            sub_group,
                          } = third;
                          return (
                            <li
                              className='d-flex justify-content-between align-items-center text-wrap text-end'
                              key={id_third}
                            >
                              <Link
                                className='dropdown-item'
                                to={`/ads/puplish/${main_id}/${sub_id}/${name_ar}`}
                              >
                                {third_sub_cat}
                              </Link>
                              <img
                                src={dowarrow2}
                                alt='dowarrow2'
                                className='navbar-icon'
                                loading='lazy'
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={sub_id}>
                    <div className='btn-group  dropdown w-100'>
                      <Link
                        type='button'
                        className='dropdown-item btn btn-light dropdown-toggle custom-dropdown  w-100 d-flex justify-content-between align-items-center text-end'
                        to={`/ads/puplish/${main_id}/${sub_id}/${name_ar}`}
                      >
                        <span className='text-primary fw-bold text-wrap'>
                          {name_sub_cat && name_sub_cat}
                        </span>
                        <img
                          src={dowarrow2}
                          alt='dowarrow2'
                          className='navbar-icon'
                          loading='lazy'
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

export default ResponDropdown;
