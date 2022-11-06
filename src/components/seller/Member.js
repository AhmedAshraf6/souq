import React from 'react';
import person3 from '../../assets/imgs/person3.png';

const Member = () => {
  return (
    <div className='text-center w-100'>
      <img
        src={person3}
        alt='person3'
        className='image-person rounded-circle'
      />
      <h6 className='mt-2'>
        <span className='fw-bold ms-1'>عضو منذ</span>
        <span className='fw-light'>2019</span>
      </h6>
      <h5 className='fw-bold'>مشاركة رابط الملف الشخصي</h5>
      {/* report User  */}
      <h5
        type='button'
        className='fw-bold'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        الابلاغ عن المستخدم
      </h5>
      {/* Modal */}
      <div
        className='modal fade '
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog '>
          <div className='modal-content bg-primary text-white'>
            <div className='modal-header border-0 me-auto'>
              <button
                type='button'
                className='btn-close btn-close-white'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <h4 className='text-white mx-3 ms-auto'>تقرير المستخدم</h4>
            <div className='modal-body'>
              {/* Form */}
              <form className='w-100'>
                <div className='d-flex'>
                  <input
                    className='form-check-input ms-2'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                  />
                  <label className='form-check-label ' for='flexCheckDefault'>
                    البريد العشؤائي الاحتيال
                  </label>
                </div>
                <div className='d-flex mt-2'>
                  <input
                    className='form-check-input ms-2'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                  />
                  <label className='form-check-label ' for='flexCheckDefault'>
                    صورة الملف الشخصي غير لائقة
                  </label>
                </div>
                <div className='d-flex mt-2'>
                  <input
                    className='form-check-input ms-2'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                  />
                  <label className='form-check-label ' for='flexCheckDefault'>
                    هذا المستخدم يهددني
                  </label>
                </div>
                <div className='d-flex mt-2'>
                  <input
                    className='form-check-input ms-2'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                  />
                  <label className='form-check-label ' for='flexCheckDefault'>
                    هذا المستخدم يهييني
                  </label>
                </div>
                <h6 className='mt-2 text-end'>اخر</h6>
                <div className='form-floating mt-3  w-75'>
                  <textarea
                    className='form-control bg-transparent text-white border-secondary'
                    placeholder='تعليق'
                    id='floatingTextarea'
                  ></textarea>
                  <label htmlFor='floatingTextarea'>تعليق</label>
                  <h6 className='text-start text-white-50'>0/500</h6>
                </div>
                <div className='d-flex mt-2'>
                  <input
                    className='form-check-input ms-2'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                  />
                  <label className='form-check-label ' for='flexCheckDefault'>
                    أود أن احظر هذا المستخدم
                  </label>
                </div>
                <button className='btn btn-secondary text-white text-center mt-4'>
                  ارسال شكوي
                </button>
              </form>
              {/* Form */}
            </div>
          </div>
        </div>
      </div>
      {/* Block User */}
      <h5
        type='button'
        className='fw-bold'
        data-bs-toggle='modal'
        data-bs-target='#block'
      >
        حظر المستخدم
      </h5>

      {/* Modal */}
      <div
        className='modal fade'
        id='block'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content bg-primary text-white'>
            <div className='modal-header border-0 mx-auto'>
              <h3>حظر ذياد؟</h3>
            </div>
            <div className='modal-body'>
              <h5 className='text-white'>
                المراسلون المحظورون لن يتمكنوا من مراسلتك
              </h5>
            </div>
            <div className='modal-footer mx-auto border-0'>
              <form>
                <button
                  type='button'
                  className='btn btn-secondary text-white mx-2'
                >
                  حظر
                </button>
                <button
                  type='button'
                  className='btn btn-light text-primary'
                  data-bs-dismiss='modal'
                >
                  إلغاء
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
