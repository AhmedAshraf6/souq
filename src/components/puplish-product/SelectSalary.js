import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Pictures from './Pictures';
const SelectSalary = ({
  handleChangeImages,
  handleChange,
  formValues,
  setFormValues,
  formErrors,
  handleChangeVideo,
  deleteSignleImage,
  handleCoverVideo,
}) => {
  const [currentVideo, setCurrentVideo] = useState();

  // video
  if (formValues.videoUploaded) {
    const readerv = new FileReader();
    readerv.onload = () => {
      if (readerv.readyState === 2) {
        setCurrentVideo(readerv.result);
      }
    };
    readerv.readAsDataURL(formValues.videoUploaded);
  }
  const salaryRef = useRef();
  const isNegotiatableRef = useRef();
  const videoRef = useRef();
  const pictureRef = useRef();

  useEffect(() => {
    if (formErrors.salaryError) {
      salaryRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (formErrors.isNegotiatableError) {
      isNegotiatableRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (formErrors.videoErrors || formErrors.maxVideoUpload) {
      videoRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (formErrors.imagesError) {
      pictureRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [formErrors]);
  return (
    <>
      <h5>حدد السعر</h5>
      <div className='price my-3'>
        <h6 ref={salaryRef}>السعر</h6>
        <input
          className='form-control form-control-lg text-muted w-25'
          type='number'
          placeholder='ج.م'
          min='0'
          name='salary'
          onChange={handleChange}
        />
      </div>

      {formErrors.salaryError && (
        <p className='text-danger'>{formErrors.salaryError}</p>
      )}
      {/* isNegotitable */}
      <div className='my-3'>
        <h6 ref={isNegotiatableRef}>قابل للتفاوض ؟</h6>
        <div className='d-flex justify-content-start my-1'>
          {/* Checkbox */}
          <div className='radio-group'>
            <label className='radio ms-5'>
              <input
                type='radio'
                name='isNegotiatable'
                value='1'
                onChange={handleChange}
              />
              نعم
              <span></span>
            </label>
            <label className='radio '>
              <input
                type='radio'
                name='isNegotiatable'
                value='0'
                onChange={handleChange}
              />
              لا
              <span></span>
            </label>
          </div>
        </div>
        {formErrors.isNegotiatableError && (
          <p className='text-danger'>{formErrors.isNegotiatableError}</p>
        )}
      </div>
      <div className='my-3'>
        <h6>تحميل صورة أو فيديو</h6>
        <div className='d-flex justify-content-start my-1'>
          {/* Checkbox */}
          <div className='radio-group'>
            <label className='radio ms-5 my-1'>
              <input
                type='radio'
                value='video'
                name='upload'
                checked={formValues.upload === 'video'}
                onChange={handleChange}
              />
              فيديو
              <span></span>
            </label>
            <label className='radio my-1'>
              <input
                type='radio'
                value='picture'
                name='upload'
                checked={formValues.upload === 'picture'}
                onChange={handleChange}
              />
              صورة
              <span></span>
            </label>
          </div>
        </div>
        {/* video */}
        {formValues.upload === 'video' && !formValues.videoUploaded && (
          <div ref={videoRef}>
            <div className='video-upload bg-light w-50 bg-light rounded'>
              <input
                type='file'
                accept='video/*'
                className='custom-video-upload pointer w-100 h-100'
                onChange={handleChangeVideo}
              />
            </div>
            {formErrors.videoErrors && (
              <p className='text-danger'>{formErrors.videoErrors}</p>
            )}
            {formErrors.maxVideoUpload && (
              <p className='text-danger'>{formErrors.maxVideoUpload}</p>
            )}
          </div>
        )}
        {formValues.upload === 'video' && formValues.videoUploaded && (
          <div className='video-container position-relative'>
            <div className='video-upload w-50'>
              <video
                controls='controls'
                src={currentVideo}
                type='video/mp4'
                className='w-100 h-100'
              ></video>
            </div>

            <div className='text-center btn-cancel w-50 mt-2'>
              <button
                className='btn btn-light'
                onClick={() =>
                  setFormValues({ ...formValues, videoUploaded: '' })
                }
              >
                الغاء
              </button>
            </div>
          </div>
        )}
        {formValues.upload === 'video' && (
          <div className='row'>
            <div className='col-lg-2 col-sm-3 '>
              <div className='picture-upload bg-light  rounded position-relative mt-3 '>
                {!formValues.cover_photo && (
                  <input
                    type='file'
                    className='custom-picture-upload pointer w-100 h-100'
                    accept='image/*'
                    name='covervideo'
                    onChange={handleCoverVideo}
                  />
                )}

                {formValues.cover_photo && (
                  <>
                    <input
                      type='file'
                      className='img-cover pointer '
                      accept='image/*'
                      name='img1'
                      onChange={handleCoverVideo}
                      style={{
                        backgroundImage: `url(${formValues.cover_photo_rendered})`,
                      }}
                    />

                    <button
                      type='button'
                      className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                      aria-label='Close'
                      onClick={() => deleteSignleImage('a')}
                    ></button>
                  </>
                )}
              </div>
              {formValues.upload === 'video' && !formValues.cover_photo && (
                <p className='text-center text-secondary text-nowrap'>
                  ضع صورة تظهر كواجهة
                </p>
              )}
            </div>
          </div>
        )}

        {/* Picture */}
        {formValues.upload === 'picture' && (
          <div className='row mt-4 gy-3' ref={pictureRef}>
            <Pictures
              deleteSignleImage={deleteSignleImage}
              formValues={formValues}
              handleChangeImages={handleChangeImages}
            />
            <h6>استخدم الوضع الأفقي في الكاميرا للحصول على صور غلاف أفضل</h6>
            {formErrors.imagesError && (
              <p className='text-danger'>{formErrors.imagesError}</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SelectSalary;
