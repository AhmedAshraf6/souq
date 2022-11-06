import React from 'react';
import test from '../../assets/imgs/test.png';
import person from '../../assets/imgs/person.png';
import heart from '../../assets/ICONs/heart.png';
import view from '../../assets/ICONs/view.png';
import pin from '../../assets/ICONs/pin.png';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { Link } from 'react-router-dom';

const HomeNotSigned = () => {
  return (
    <section className='home-not-signed color-in-background py-3'>
      <div className='container-fluid'>
        <h3 className='py-4 ps-2 text-primary'>اعلانات جديدة</h3>
        <div className='row g-1 gy-2 mx-1'>
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
              <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
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
              <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
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
              <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
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
              <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
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
              <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
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
              <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
            </div>

            {/* end card */}
          </div>
        </div>
        <div className='text-center mt-3'>
          <button className='btn btn-light text-secondary fs-5 fw-bold px-4'>
            المزيد
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeNotSigned;
