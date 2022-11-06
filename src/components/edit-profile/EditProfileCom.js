import React from 'react';
import lamp from '../../assets/ICONs/lamp.png';
import user from '../../assets/ICONs/user.png';
import egypt from '../../assets/ICONs/egypt.png';

const EditProfileCom = () => {
  return (
    <section className='edit-profile-com bg-primary p-4 text-white m-4 rounded'>
      <div className='container-fluid'>
        <div className='box border-bottom pb-4'>
          <h4>تعديل الملف الشخصي</h4>
        </div>
        <div className='box border-bottom pb-4 mt-4'>
          <h4>معلومات أساسية</h4>
          <div className='basic d-flex flex-column flex-lg-row justify-content-between'>
            <div className='form w-50'>
              <input
                className='form-control form-control-lg mt-4 '
                type='text'
                placeholder='الاسم الذي يظهر للمستخدمين'
              />
              <input
                className='form-control form-control-lg mt-4'
                type='text'
                placeholder='ادخل اسمك كما هو في الهوية الشخصية'
              />
              <input
                className='form-control form-control-lg mt-4'
                type='text'
                placeholder='ادخل عنوانك بالتفصيل'
              />
            </div>
            <div className='align-self-start align-self-lg-end position-relative mx-0 mx-lg-2 mt-5 mt-lg-0 '>
              <p className='p-3 border w-50'>
                لماذا هو مهم : توثيق هويتك يفيد في الوثوق في اعلاناتك وبيع أسرع
                لمنتجاتك{' '}
              </p>
              <div className='position-absolute lamb-box'>
                <img src={lamp} alt='lamp' className='lamb-icon' />
              </div>
            </div>
            <div className='align-self-start bg-white rounded-circle p-3'>
              <img src={user} alt='' className='gug-icon' />
            </div>
          </div>
          <div className='birth  w-75 mt-4'>
            <h4 className='pb-3'>تاريخ الميلاد</h4>
            <div className='d-flex'>
              <select
                id='inputState'
                className='form-select form-select-lg  ms-3'
              >
                <option selected>يوم</option>
                <option>...</option>
              </select>
              <select
                id='inputState'
                className='form-select form-select-lg ms-3'
              >
                <option selected>شهر</option>
                <option>...</option>
              </select>
              <select
                id='inputState'
                className='form-select form-select-lg ms-3'
              >
                <option selected>سنة</option>
                <option>...</option>
              </select>
            </div>
          </div>
        </div>
        <div className='box border-bottom pb-4 mt-4'>
          <h4 className='pb-3'>معلومات الاتصال</h4>
          <div className='contact-info'>
            <div className='row'>
              <div className='col-12'>
                <div className='row d-flex align-items-center gy-3'>
                  <div className='icon-box col-xl-3 col-lg-4 col-md-6 position-relative'>
                    <input
                      className='form-control form-control-lg '
                      type='text'
                      placeholder='10000000000'
                    />
                    <img
                      src={egypt}
                      alt='egypt'
                      className='egypt-icon border-end position-absolute'
                    />
                  </div>
                  <div className='col-xl-9 col-lg-8 col-md-6 '>
                    <span className=' mx-2'>
                      هذا هو رقم جهات الاتصال، التذكيرات والإخطارات الأخرى
                      الخاصة بالمشترين.
                    </span>
                  </div>
                  <div className='col-xl-3 col-lg-4 col-md-6'>
                    <input
                      className='form-control form-control-lg'
                      type='text'
                      placeholder='بريدك الإلكتروني'
                    />
                  </div>
                  <div className='col-xl-9 col-lg-8 col-md-6 '>
                    <span className=' mx-2'>
                      لن نكشف بريدك الإلكتروني لأي شخص آخر ولن نستخدمه لإرسال
                      رسائل غير مرغوب فيها إليك
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='box border-bottom pb-4 mt-4'>
          <h4 className='pb-4'>معلومات اختيارية</h4>
          <div className='row gy-3'>
            <div className='col-12'>
              <div className='row'>
                <div className='col-xl-6 col-lg-7'>
                  <div>
                    <h6>فيسبوك</h6>
                    <p>سجّل الدخول باستخدام فيسبوك واكشف مصداقيتك للمشتريين</p>
                  </div>
                </div>
                <div className='col-xl-4 col-md-5'>
                  <button className='btn btn-secondary fw-bold text-white btn-lg px-5  '>
                    اربط
                  </button>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div className='row'>
                <div className='col-xl-6 col-lg-7'>
                  <div>
                    <h6>جوجل</h6>
                    <p>
                      قم بربط حساب أوليكس الخاص بك بحساب Google الخاص بك للتبسيط
                      والسهولة
                    </p>
                  </div>
                </div>
                <div className='col-xl-4 col-md-5'>
                  <button className='btn btn-secondary fw-bold text-white btn-lg px-5  '>
                    اربط
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='box d-flex justify-content-between pb-4 mt-4'>
          <h4 className='pointer'>تجاهل</h4>
          <button className='btn btn-secondary fw-bold text-white btn-lg px-5  '>
            حفظ ومتابعة
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditProfileCom;
