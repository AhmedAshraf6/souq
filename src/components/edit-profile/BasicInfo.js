import React from 'react';
import lamp from '../../assets/ICONs/lamp.png';
const BasicInfo = ({
  formValues,
  handleChange,
  handleChangeImage,
  handleSubmit,
  deleteSelectedImage,
  formErrors,
}) => {
  const {
    name,
    sur_name,
    address,
    image,
    currentImage,
    email,
    phone,
    id_image,
    currentIdImage,
    currentIdUserImage,
    id_user_image,
  } = formValues;
  return (
    <form className='edit-profile' onSubmit={handleSubmit}>
      <div className='box border-bottom pb-4 mt-4'>
        <h4>معلومات أساسية</h4>
        <div className='basic row'>
          <div className='col-lg-5'>
            <div className='form'>
              <input
                className='form-control  form-control-lg mt-4'
                type='text'
                placeholder='الاسم الذي يظهر للمستخدمين'
                name='name'
                value={name}
                onChange={handleChange}
              />
              {formErrors?.viewerNameError && (
                <p className='text-danger'>{formErrors.viewerNameError}</p>
              )}
              <input
                className='form-control form-control-lg mt-4'
                type='text'
                placeholder='ادخل اسمك كما هو في الهوية الشخصية'
                name='sur_name'
                value={sur_name}
                onChange={handleChange}
              />
              <p className='text-danger'>{formErrors?.identityNameError}</p>

              <input
                className='form-control form-control-lg mt-4'
                type='text'
                placeholder='ادخل عنوانك بالتفصيل'
                name='address'
                value={address}
                onChange={handleChange}
              />
              <p className='text-danger'>{formErrors?.addressError}</p>
            </div>
          </div>
          <div className='col-lg-5 d-flex align-self-start align-self-lg-end '>
            <div className='position-relative mx-0 mx-lg-2 mt-5 mt-lg-0 '>
              <p className='make-100 p-3 border w-50'>
                لماذا هو مهم : توثيق هويتك يفيد في الوثوق في اعلاناتك وبيع أسرع
                لمنتجاتك
              </p>
              <div className='position-absolute lamb-box'>
                <img src={lamp} alt='lamp' className='lamb-icon' />
              </div>
            </div>
          </div>
          <div className='col-lg-2'>
            {!image && (
              <div className='picture-upload bg-light rounded position-relative'>
                <input
                  type='file'
                  className='custom-picture-upload pointer w-100 h-100'
                  name='image'
                  accept='image/*'
                  onChange={handleChangeImage}
                />
              </div>
            )}
            {image && (
              <div className='picture-upload bg-light rounded position-relative'>
                <button
                  type='button'
                  className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                  aria-label='Close'
                  onClick={deleteSelectedImage}
                ></button>
                <input
                  type='file'
                  className='img-cover pointer '
                  accept='image/*'
                  name='image'
                  onChange={handleChangeImage}
                  style={{
                    backgroundImage: `url(${currentImage})`,
                  }}
                />
              </div>
            )}
            {formErrors?.imageError && (
              <p className='text-danger'>{formErrors.imageError}</p>
            )}
          </div>
          {/* Handle Image */}
        </div>
      </div>
      <div className='box border-bottom pb-4 mt-4'>
        <h4 className='pb-3'>معلومات الاتصال</h4>
        <div className='contact-info'>
          <div className='row d-flex align-items-center gy-3'>
            <div className='col-lg-3 col-md-4'>
              <div className='icon-box'>
                <input
                  className='form-control form-control-lg '
                  type='text'
                  placeholder='10000000000'
                  value={phone}
                  name='phone'
                  onChange={handleChange}
                />
                <p className='text-danger'>{formErrors?.phoneNumberError}</p>
                <p className='text-danger'>
                  {formErrors?.phoneNumberLengthError}
                </p>
              </div>
            </div>
            <div className='col-lg-9 col-md-8'>
              <span className=' mx-2'>
                هذا هو رقم جهات الاتصال، التذكيرات والإخطارات الأخرى الخاصة
                بالمشترين.
              </span>
            </div>

            <div className='col-lg-3 col-md-4'>
              <input
                className='form-control form-control-lg'
                type='text'
                placeholder='بريدك الإلكتروني'
                value={email}
                name='email'
                onChange={handleChange}
              />
              <p className='text-danger'>
                {formErrors?.emailError}
                {formErrors?.emailNotValid}
              </p>
            </div>
            <div className='col-lg-9 col-md-8 '>
              <span className=' mx-2'>
                لن نكشف بريدك الإلكتروني لأي شخص آخر ولن نستخدمه لإرسال رسائل
                غير مرغوب فيها إليك
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='box d-flex flex-column flex-sm-row justify-content-between align-items-center pb-4 mt-4'>
        {/* <h4 className='pointer text-danger'>تجاهل</h4> */}
        <button
          className='btn btn-secondary fw-bold text-white btn-lg mt-2 mt-sm-0'
          type='submit'
        >
          حفظ ومتابعة
        </button>
      </div>
    </form>
  );
};

export default BasicInfo;
