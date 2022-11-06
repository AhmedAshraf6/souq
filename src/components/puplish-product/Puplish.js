import React, { useState } from 'react';
import dowarrow2 from '../../assets/ICONs/dowarrow2.png';
import playbutton from '../../assets/ICONs/playbutton.png';
import person2 from '../../assets/imgs/person2.png';
import egypt from '../../assets/ICONs/egypt.png';
import free from '../../assets/ICONs/free.png';
import bestseller from '../../assets/ICONs/bestseller.png';
import success from '../../assets/ICONs/success.png';

const Puplish = () => {
  const [ditectSelect, setDitectSelect] = useState('');
  return (
    <section className='Puplish-product bg-primary p-4 text-white m-4 rounded'>
      <div className='container-fluid'>
        <div className='box border-bottom pb-4'>
          <h3>الفئة المختارة</h3>
        </div>
        {/* Details */}
        <div className='details'>
          <div className='d-flex my-3'>
            <h5>سيارات</h5>
            <h5>تغيير</h5>
          </div>
          <div className='row gx-5 gy-3'>
            <h4>تأكيد بعض التفاصيل</h4>
            <div className='col-md-7'>
              <h6>اسم الإعلان</h6>
              <input
                className='form-control form-control-lg  '
                type='text'
                placeholder='اذكر أهم مميزات منتجك (مثل العلامة التجارية، الطراز، العمر والنوع)'
              />
              <span className='d-flex justify-content-end'>0/70</span>
            </div>
            <div className='col-md-5'>
              <h6>الماركة</h6>
              <select
                className='form-select form-select-lg mb-3 pointer'
                aria-label='.form-select-lg example'
              >
                <option selected></option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
            <div className='col-md-7'>
              <h6>الاعلان</h6>
              <input
                className='form-control form-control-lg  '
                type='text'
                placeholder='العنوان التفصيلي'
              />
              <span className='d-flex justify-content-end'>0/70</span>
            </div>
            <div className='col-md-5'>
              <h6>المحفظة</h6>
              <select
                className='form-select form-select-lg mb-3 pointer'
                aria-label='.form-select-lg example'
              >
                <option selected></option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
          </div>
          <div className='my-3'>
            <h4>اختر البلاد التي تظهر فيها إعلانك</h4>
            <div className='d-flex justify-content-start my-4'>
              {/* Checkbox */}
              <div className='radio-group'>
                <label className='radio ms-5'>
                  <input type='radio' value='male' name='country' checked />
                  مصر
                  <span></span>
                </label>
                <label className='radio '>
                  <input type='radio' value='female' name='country' />
                  السعودية
                  <span></span>
                </label>
              </div>
            </div>
            <h5>سيكون الاختيار الأفتراضي هو بلدك</h5>
          </div>
          <div className='explain mt-5'>
            <div className='form-floating custom-textarea'>
              <textarea
                className='form-control h-100 '
                placeholder='اشرح حالة المنتج ، ومميزاته وسبب البيع'
                id='floatingTextarea2'
              ></textarea>
              <label className='text-primary fs-5 fw-bold'>
                اشرح حالة المنتج ، ومميزاته وسبب البيع
              </label>
            </div>
            <span className='d-flex justify-content-end'>0/4067</span>
          </div>
        </div>
        {/* Details 2 */}
        <div className='details2 mt-3 border-top pt-3'>
          <h4>حدد السعر</h4>
          <div className='price my-3'>
            <h5>السعر</h5>
            <input
              className='form-control form-control-lg text-muted w-25'
              type='text'
              placeholder='ج.م'
            />
          </div>
          <div className='my-3'>
            <h4>اختر البلاد التي تظهر فيها إعلانك</h4>
            <div className='d-flex justify-content-start my-4'>
              {/* Checkbox */}
              <div className='radio-group'>
                <label className='radio ms-5'>
                  <input
                    type='radio'
                    value='male'
                    name='upload'
                    onClick={() => setDitectSelect(true)}
                  />
                  فيديو
                  <span></span>
                </label>
                <label className='radio '>
                  <input
                    type='radio'
                    value='female'
                    name='upload'
                    onClick={() => setDitectSelect(false)}
                  />
                  صورة
                  <span></span>
                </label>
              </div>
            </div>
            {/* video */}
            {ditectSelect && (
              <div className='video-upload bg-light w-50 bg-light rounded'>
                <input
                  type='file'
                  className='custom-video-upload pointer w-100 h-100 '
                />
              </div>
            )}
            {/* Picture */}
            {!ditectSelect && (
              <div className='row mt-4 gy-3'>
                <div className='col-lg-2 col-sm-3 '>
                  <div className='picture-upload bg-light bg-light rounded'>
                    <input
                      type='file'
                      className='custom-picture-upload pointer w-100 h-100 '
                    />
                  </div>
                </div>
                <div className='col-lg-2 col-sm-3 '>
                  <div className='picture-upload bg-light bg-light rounded'>
                    <input
                      type='file'
                      className='custom-picture-upload pointer w-100 h-100 '
                    />
                  </div>
                </div>
                <div className='col-lg-2 col-sm-3 '>
                  <div className='picture-upload bg-light bg-light rounded'>
                    <input
                      type='file'
                      className='custom-picture-upload pointer w-100 h-100 '
                    />
                  </div>
                </div>
                <h6>
                  استخدم الوضع الأفقي في الكاميرا للحصول على صور غلاف أفضل
                </h6>
              </div>
            )}
          </div>
        </div>
        {/* Details 2 */}
        {/* Details 3 */}
        <div className='details2 mt-3 border-top pt-3'>
          <h4>راجع التفاصيل الخاصة بك</h4>
          <div className='d-flex align-items-center my-3'>
            <img src={person2} alt='person2' className='rounded-circle ' />
            <div className='me-4'>
              <h5>الأسم</h5>
              <input
                className='form-control form-control-lg text-muted '
                type='text'
              />
            </div>
          </div>
          <div>
            <h5>رقم الهاتف</h5>
            <div className='icon-box w-25 position-relative'>
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
          </div>
          <div className='method-contact'>
            <h5>طريقة التواصل</h5>
            <div className='d-flex  justify-content-start my-4'>
              {/* Checkbox */}
              <div className='radio-group d-flex flex-column flex-md-row'>
                <div className='bg-light  rounded radio-contact mt-3 mt-md-0 py-3 px-2 ms-3'>
                  <label className='radio text-dark '>
                    <input type='radio' value='female' name='contact' />
                    رقم الموبايل
                    <span></span>
                  </label>
                </div>
                <div className='bg-light  rounded radio-contact mt-3 mt-md-0 py-3 px-2 ms-3'>
                  <label className='radio text-dark '>
                    <input type='radio' value='female' name='contact' />
                    أدس شات
                    <span></span>
                  </label>
                </div>
                <div className='bg-light  rounded radio-contact mt-3 mt-md-0 py-3 px-2 ms-3'>
                  <label className='radio text-dark '>
                    <input type='radio' value='female' name='contact' />
                    واتساب
                    <span></span>
                  </label>
                </div>
                <div className='bg-light radio-contact mt-3 mt-md-0 py-3 px-2 rounded '>
                  <label className='radio text-dark '>
                    <input type='radio' value='female' name='contact' />
                    الثلاثة
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
            {/* Ads */}
            <div className='ads'>
              <div className='row gy-4'>
                <div className='col-12'>
                  <div className='row'>
                    <div className='col-xl-6 col-lg-9 col-12'>
                      <div className='box color-in-background p-3 rounded '>
                        <div className='d-flex'>
                          <h4 className='ms-5 text-primary fw-bold'>
                            إعلان مجاني
                          </h4>
                          <img src={free} alt='free' className='icon' />
                        </div>
                        <div className='d-flex mt-3 justify-content-between'>
                          <h3 className='ms-5 text-primary fw-bold'>
                            يتم عرض الإعلان لمدة 60 يوم{' '}
                          </h3>
                          <h4 className='text-secondary'>0L.E</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='row'>
                    <div className='col-xl-6 col-lg-9 col-12'>
                      <div className='box color-in-background p-3 rounded '>
                        <div className='d-flex'>
                          <h4 className='ms-5 text-primary fw-bold'>
                            إعلان مميز
                          </h4>
                          <img src={bestseller} alt='free' className='icon' />
                        </div>
                        <div className='d-flex mt-3 justify-content-between'>
                          <div>
                            <h3 className='ms-5 text-primary fw-bold'>
                              يتم عرض الإعلان لمدة 60 يوم
                            </h3>
                            <h3 className='ms-5 text-primary fw-bold lh-base'>
                              سيكون إعلانك مميزاً لمدة 10 أيام{' '}
                            </h3>
                          </div>
                          <h4 className='text-secondary'>50 L.E</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='row'>
                    <div className='col-xl-6 col-lg-9 col-12'>
                      <div className='box color-in-background p-3 rounded'>
                        <div className='d-flex'>
                          <h4 className='ms-5 text-primary fw-bold'>
                            إعلان PREMUIM
                          </h4>
                          <img src={success} alt='free' className='icon' />
                        </div>
                        <div className='d-flex mt-3 justify-content-between'>
                          <div>
                            <h3 className='ms-5 text-primary fw-bold'>
                              يتم عرض الإعلانات لمدة 90 يوم{' '}
                            </h3>
                            <h3 className='ms-5 text-primary fw-bold lh-base'>
                              يتم تجديد الإعلان لمدة بشكل أسبوعي{' '}
                            </h3>
                          </div>
                          <h4 className='text-secondary'>100 L.E</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-12 mt-5 d-flex justify-content-center'>
                  <button className='btn btn-secondary btn-lg px-5 text-center text-white'>
                    انشر الان
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Details 3 */}
      </div>
    </section>
  );
};

export default Puplish;
