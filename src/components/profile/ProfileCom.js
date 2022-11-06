import React, { useState } from 'react';
import loupe from '../../assets/ICONs/loupe.png';
import heart2 from '../../assets/ICONs/heart2.png';
import test from '../../assets/imgs/test.png';
import person from '../../assets/imgs/person.png';
import heart from '../../assets/ICONs/heart.png';
import view from '../../assets/ICONs/view.png';
import pin from '../../assets/ICONs/pin.png';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ProfileCom = () => {
  const [change, setChange] = useState(true);
  return (
    <div className='profile-com py-5 '>
      <div className='container-fluid '>
        <div className='btn-group mx-3' role='group' aria-label='Basic example'>
          <button
            type='button'
            className='btn btn-secondary btn-lg mx-2'
            onClick={() => setChange(true)}
          >
            الإعدادات
          </button>
          <button
            type='button'
            className='btn btn-primary btn-lg mx-2'
            onClick={() => setChange(false)}
          >
            المفضلة
          </button>
        </div>
        {/* Settings */}
        {change && (
          <div className='settings'>
            <div className='d-flex flex-column flex-md-row justify-content-between mt-4 mx-3'>
              {/* <div className='input-group search mb-3 w-25 position-relative'>
                <input
                  type='text'
                  className='search-input form-control text-secondary color-in-background fw-bold px-5'
                  placeholder='البحث بعنوان'
                />
                <img
                  src={loupe}
                  className='navbar-icon icon-positioned position-absolute '
                  alt=''
                />
              </div> */}
              <input
                type='text'
                className='form-control search fs-6 fw-bold mb-3 w-25'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                placeholder='البحث بعنوان'
              />
              <div className='dropdown'>
                <button
                  className='btn btn-light dropdown-toggle text-primary'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  البحث حسب الفئة
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mx-3 mt-3 d-flex flex-column flex-sm-row justify-content-center '>
              <button
                type='button'
                className='btn btn-secondary btn-lg mx-2 mt-3 mt-sm-0 '
              >
                عرض الكل
              </button>
              <button
                type='button'
                className='btn btn-primary btn-lg mx-2 mt-3 mt-sm-0'
              >
                إعلانات نشطة
              </button>
              <button
                type='button'
                className='btn btn-primary btn-lg mx-2 mt-3 mt-sm-0'
              >
                إعلانات تحت المراجعة
              </button>
              <button
                type='button'
                className='btn btn-primary btn-lg mx-2 mt-3 mt-sm-0'
              >
                إعلانات منتهية
              </button>
            </div>
            <div className='row g-1 gy-2 mx-1 mt-2'>
              <div className='col-lg-3 col-md-6 '>
                <div className='card position-relative'>
                  <div className='img bg-secondary w-100 h-50 text-center'>
                    <img
                      src={test}
                      className='card-img-top w-50 h-50 '
                      alt='img1'
                    />
                  </div>
                  {/* start card */}
                  <div className='card-body d-flex align-items-center '>
                    <div className='d-flex flex-column '>
                      <img
                        src={person}
                        alt='person'
                        className='rounded-circle small-img'
                      />
                      <span className='text-nowrap'>زياد فؤاد</span>
                    </div>
                    <div className='w-100 me-2'>
                      <div className='d-flex justify-content-between align-items-start w-100'>
                        <h6>جاكيت رجالي</h6>
                        <h6 className='text-secondary'>1000le</h6>
                        <BsThreeDotsVertical className='pointer' />
                      </div>
                      <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                        <span className='text-primary info ms-2'>
                          <img
                            src={pin}
                            alt='pination'
                            className='very-small-icon ms-1'
                          />
                          اسكندرية ،مصر
                        </span>
                        <span className='text-primary info'>
                          <img
                            src={view}
                            alt='view'
                            className='very-small-icon ms-1'
                          />
                          100 مشاهدة
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    src={heart}
                    alt='heart'
                    className='position-absolute heart pointer'
                  />
                  <div className='text-muted text-center pb-3'>
                    منذ خمس ساعات
                  </div>
                </div>

                {/* end card */}
              </div>
              <div className='col-lg-3 col-md-6 '>
                <div className='card position-relative'>
                  <div className='img bg-secondary w-100 h-50 text-center'>
                    <img
                      src={test}
                      className='card-img-top w-50 h-50 '
                      alt='img1'
                    />
                  </div>
                  {/* start card */}
                  <div className='card-body d-flex align-items-center '>
                    <div className='d-flex flex-column '>
                      <img
                        src={person}
                        alt='person'
                        className='rounded-circle small-img'
                      />
                      <span className='text-nowrap'>زياد فؤاد</span>
                    </div>
                    <div className='w-100 me-2'>
                      <div className='d-flex justify-content-between align-items-start w-100'>
                        <h6>جاكيت رجالي</h6>
                        <h6 className='text-secondary'>1000le</h6>
                        <BsThreeDotsVertical className='pointer' />
                      </div>
                      <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                        <span className='text-primary info ms-2'>
                          <img
                            src={pin}
                            alt='pination'
                            className='very-small-icon ms-1'
                          />
                          اسكندرية ،مصر
                        </span>
                        <span className='text-primary info'>
                          <img
                            src={view}
                            alt='view'
                            className='very-small-icon ms-1'
                          />
                          100 مشاهدة
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    src={heart}
                    alt='heart'
                    className='position-absolute heart pointer'
                  />
                  <div className='text-muted text-center pb-3'>
                    منذ خمس ساعات
                  </div>
                </div>

                {/* end card */}
              </div>
              <div className='col-lg-3 col-md-6 '>
                <div className='card position-relative'>
                  <div className='img bg-secondary w-100 h-50 text-center'>
                    <img
                      src={test}
                      className='card-img-top w-50 h-50 '
                      alt='img1'
                    />
                  </div>
                  {/* start card */}
                  <div className='card-body d-flex align-items-center '>
                    <div className='d-flex flex-column '>
                      <img
                        src={person}
                        alt='person'
                        className='rounded-circle small-img'
                      />
                      <span className='text-nowrap'>زياد فؤاد</span>
                    </div>
                    <div className='w-100 me-2'>
                      <div className='d-flex justify-content-between align-items-start w-100'>
                        <h6>جاكيت رجالي</h6>
                        <h6 className='text-secondary'>1000le</h6>
                        <BsThreeDotsVertical className='pointer' />
                      </div>
                      <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                        <span className='text-primary info ms-2'>
                          <img
                            src={pin}
                            alt='pination'
                            className='very-small-icon ms-1'
                          />
                          اسكندرية ،مصر
                        </span>
                        <span className='text-primary info'>
                          <img
                            src={view}
                            alt='view'
                            className='very-small-icon ms-1'
                          />
                          100 مشاهدة
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    src={heart}
                    alt='heart'
                    className='position-absolute heart pointer'
                  />
                  <div className='text-muted text-center pb-3'>
                    منذ خمس ساعات
                  </div>
                </div>

                {/* end card */}
              </div>
              <div className='col-lg-3 col-md-6 '>
                <div className='card position-relative'>
                  <div className='img bg-secondary w-100 h-50 text-center'>
                    <img
                      src={test}
                      className='card-img-top w-50 h-50 '
                      alt='img1'
                    />
                  </div>
                  {/* start card */}
                  <div className='card-body d-flex align-items-center '>
                    <div className='d-flex flex-column '>
                      <img
                        src={person}
                        alt='person'
                        className='rounded-circle small-img'
                      />
                      <span className='text-nowrap'>زياد فؤاد</span>
                    </div>
                    <div className='w-100 me-2'>
                      <div className='d-flex justify-content-between align-items-start w-100'>
                        <h6>جاكيت رجالي</h6>
                        <h6 className='text-secondary'>1000le</h6>
                        <BsThreeDotsVertical className='pointer' />
                      </div>
                      <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                        <span className='text-primary info ms-2'>
                          <img
                            src={pin}
                            alt='pination'
                            className='very-small-icon ms-1'
                          />
                          اسكندرية ،مصر
                        </span>
                        <span className='text-primary info'>
                          <img
                            src={view}
                            alt='view'
                            className='very-small-icon ms-1'
                          />
                          100 مشاهدة
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    src={heart}
                    alt='heart'
                    className='position-absolute heart pointer'
                  />
                  <div className='text-muted text-center pb-3'>
                    منذ خمس ساعات
                  </div>
                </div>

                {/* end card */}
              </div>
              <div className='col-lg-3 col-md-6 '>
                <div className='card position-relative'>
                  <div className='img bg-secondary w-100 h-50 text-center'>
                    <img
                      src={test}
                      className='card-img-top w-50 h-50 '
                      alt='img1'
                    />
                  </div>
                  {/* start card */}
                  <div className='card-body d-flex align-items-center '>
                    <div className='d-flex flex-column '>
                      <img
                        src={person}
                        alt='person'
                        className='rounded-circle small-img'
                      />
                      <span className='text-nowrap'>زياد فؤاد</span>
                    </div>
                    <div className='w-100 me-2'>
                      <div className='d-flex justify-content-between align-items-start w-100'>
                        <h6>جاكيت رجالي</h6>
                        <h6 className='text-secondary'>1000le</h6>
                        <BsThreeDotsVertical className='pointer' />
                      </div>
                      <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                        <span className='text-primary info ms-2'>
                          <img
                            src={pin}
                            alt='pination'
                            className='very-small-icon ms-1'
                          />
                          اسكندرية ،مصر
                        </span>
                        <span className='text-primary info'>
                          <img
                            src={view}
                            alt='view'
                            className='very-small-icon ms-1'
                          />
                          100 مشاهدة
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    src={heart}
                    alt='heart'
                    className='position-absolute heart pointer'
                  />
                  <div className='text-muted text-center pb-3'>
                    منذ خمس ساعات
                  </div>
                </div>

                {/* end card */}
              </div>
              <div className='col-lg-3 col-md-6 '>
                <div className='card position-relative'>
                  <div className='img bg-secondary w-100 h-50 text-center'>
                    <img
                      src={test}
                      className='card-img-top w-50 h-50 '
                      alt='img1'
                    />
                  </div>
                  {/* start card */}
                  <div className='card-body d-flex align-items-center '>
                    <div className='d-flex flex-column '>
                      <img
                        src={person}
                        alt='person'
                        className='rounded-circle small-img'
                      />
                      <span className='text-nowrap'>زياد فؤاد</span>
                    </div>
                    <div className='w-100 me-2'>
                      <div className='d-flex justify-content-between align-items-start w-100'>
                        <h6>جاكيت رجالي</h6>
                        <h6 className='text-secondary'>1000le</h6>
                        <BsThreeDotsVertical className='pointer' />
                      </div>
                      <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                        <span className='text-primary info ms-2'>
                          <img
                            src={pin}
                            alt='pination'
                            className='very-small-icon ms-1'
                          />
                          اسكندرية ،مصر
                        </span>
                        <span className='text-primary info'>
                          <img
                            src={view}
                            alt='view'
                            className='very-small-icon ms-1'
                          />
                          100 مشاهدة
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    src={heart}
                    alt='heart'
                    className='position-absolute heart pointer'
                  />
                  <div className='text-muted text-center pb-3'>
                    منذ خمس ساعات
                  </div>
                </div>

                {/* end card */}
              </div>
            </div>
          </div>
        )}

        {/* Favourites */}
        {!change && (
          <div className='favourites'>
            <div className='row g-1 gy-2 mx-1 mt-2'>
              <div className='col-lg-3 col-md-6 '>
                <div className='card position-relative'>
                  <div className='img bg-secondary w-100 h-50 text-center'>
                    <img
                      src={test}
                      className='card-img-top w-50 h-50 '
                      alt='img1'
                    />
                  </div>
                  {/* start card */}
                  <div className='card-body d-flex align-items-center '>
                    <div className='d-flex flex-column '>
                      <img
                        src={person}
                        alt='person'
                        className='rounded-circle small-img'
                      />
                      <span className='text-nowrap'>زياد فؤاد</span>
                    </div>
                    <div className='w-100 me-2'>
                      <div className='d-flex justify-content-between align-items-start w-100'>
                        <h6>جاكيت رجالي</h6>
                        <h6 className='text-secondary'>1000le</h6>
                        <BsThreeDotsVertical className='pointer' />
                      </div>
                      <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                        <span className='text-primary info ms-2'>
                          <img
                            src={pin}
                            alt='pination'
                            className='very-small-icon ms-1'
                          />
                          اسكندرية ،مصر
                        </span>
                        <span className='text-primary info'>
                          <img
                            src={view}
                            alt='view'
                            className='very-small-icon ms-1'
                          />
                          100 مشاهدة
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    src={heart2}
                    alt='heart'
                    className='position-absolute heart pointer'
                  />
                  <div className='text-muted text-center pb-3'>
                    منذ خمس ساعات
                  </div>
                </div>

                {/* end card */}
              </div>
              <div className='col-lg-3 col-md-6 '>
                <div className='card position-relative'>
                  <div className='img bg-secondary w-100 h-50 text-center'>
                    <img
                      src={test}
                      className='card-img-top w-50 h-50 '
                      alt='img1'
                    />
                  </div>
                  {/* start card */}
                  <div className='card-body d-flex align-items-center '>
                    <div className='d-flex flex-column '>
                      <img
                        src={person}
                        alt='person'
                        className='rounded-circle small-img'
                      />
                      <span className='text-nowrap'>زياد فؤاد</span>
                    </div>
                    <div className='w-100 me-2'>
                      <div className='d-flex justify-content-between align-items-start w-100'>
                        <h6>جاكيت رجالي</h6>
                        <h6 className='text-secondary'>1000le</h6>
                        <BsThreeDotsVertical className='pointer' />
                      </div>
                      <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                        <span className='text-primary info ms-2'>
                          <img
                            src={pin}
                            alt='pination'
                            className='very-small-icon ms-1'
                          />
                          اسكندرية ،مصر
                        </span>
                        <span className='text-primary info'>
                          <img
                            src={view}
                            alt='view'
                            className='very-small-icon ms-1'
                          />
                          100 مشاهدة
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    src={heart2}
                    alt='heart'
                    className='position-absolute heart pointer'
                  />
                  <div className='text-muted text-center pb-3'>
                    منذ خمس ساعات
                  </div>
                </div>

                {/* end card */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCom;
