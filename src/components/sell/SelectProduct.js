import React from 'react';
import lefarrow from '../../assets/ICONs/lefarrow.png';
import car from '../../assets/ICONs/car.png';
import { Link } from 'react-router-dom';

const SelectProduct = () => {
  return (
    <div className='select-product'>
      <h2 className='text-primary text-center py-3'>انشر إعلانك</h2>
      <section className='edit-profile-com bg-primary p-4 text-white m-4 rounded'>
        <div className='container-fluid'>
          <div className='box border-bottom pb-4'>
            <h4>اختر الفئة</h4>
          </div>
          <div className='row'>
            <div className='col-md-4 mt-3'>
              <div className='bg-light rounded'>
                {/* First Dropdown */}
                <div className='dropstart w-100'>
                  <button
                    className='btn btn-light dropdown-toggle custom-dropdown ms-3 w-100 d-flex justify-content-between'
                    type='button'
                    id='MyAccountDDM'
                    data-bs-toggle='dropdown'
                    data-bs-auto-close='outside'
                    aria-expanded='false'
                  >
                    <div className='d-flex align-items-center'>
                      <div className='bg-warning rounded-circle p-2'>
                        <img src={car} alt='car' />
                      </div>
                      <span className='text-primary me-3 fw-bold'>سيارات</span>
                    </div>
                    <img
                      src={lefarrow}
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
                    <li>
                      <div className='btn-group dropstart w-100'>
                        <a
                          type='button'
                          className='dropdown-item btn btn-light dropdown-toggle custom-dropdown ms-3 w-100 d-flex justify-content-between align-items-center'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          <span className='text-primary fw-bold'>
                            سيارات للبيع
                          </span>
                          <img
                            src={lefarrow}
                            alt='leftarrow'
                            className='navbar-icon'
                          />
                        </a>
                        <ul className='dropdown-menu w-100 third-dropdown'>
                          <li className='d-flex justify-content-between align-items-center'>
                            <Link className='dropdown-item' to='/sell/puplish'>
                              DDD
                            </Link>
                            <img
                              src={lefarrow}
                              alt='leftarrow'
                              className='navbar-icon'
                            />
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* Second Level  */}
                  </ul>
                </div>
                {/* End First Dropdown */}
                {/* First Dropdown */}
                <div className='dropstart w-100'>
                  <button
                    className='btn btn-light dropdown-toggle custom-dropdown ms-3 w-100 d-flex justify-content-between'
                    type='button'
                    id='MyAccountDDM'
                    data-bs-toggle='dropdown'
                    data-bs-auto-close='outside'
                    aria-expanded='false'
                  >
                    <div className='d-flex align-items-center'>
                      <div className='bg-warning rounded-circle p-2'>
                        <img src={car} alt='car' />
                      </div>
                      <span className='text-primary me-3 fw-bold'>سيارات</span>
                    </div>
                    <img
                      src={lefarrow}
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
                    <li>
                      <div className='btn-group dropstart w-100'>
                        <a
                          type='button'
                          className='dropdown-item btn btn-light dropdown-toggle custom-dropdown ms-3 w-100 d-flex justify-content-between align-items-center'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          <span className='text-primary fw-bold'>
                            سيارات للبيع
                          </span>
                          <img
                            src={lefarrow}
                            alt='leftarrow'
                            className='navbar-icon'
                          />
                        </a>
                        <ul className='dropdown-menu w-100 third-dropdown'>
                          <li className='d-flex justify-content-between align-items-center'>
                            <Link className='dropdown-item' to='/sell/puplish'>
                              DDD
                            </Link>
                            <img
                              src={lefarrow}
                              alt='leftarrow'
                              className='navbar-icon'
                            />
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* Second Level  */}
                  </ul>
                </div>
                {/* End First Dropdown */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectProduct;
