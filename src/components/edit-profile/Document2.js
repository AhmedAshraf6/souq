import React from 'react';
import camera from '../../assets/ICONs/camera.png';
import document2 from '../../assets/imgs/document2.png';

const Document2 = ({ formValues, handleChangeImage, formErrors }) => {
  return (
    <div className='upload-document d-flex flex-column align-items-center'>
      <div className='custom-upload position-relative me-5'>
        <div className='first-circle bg-light rounded-circle'></div>
        <div className='custom-image position-absolute'>
          <img
            src={
              formValues.id_user_image
                ? formValues.currentIdUserImage
                : document2
            }
            alt='document2'
            className=' img w-75 h-75 '
          />
        </div>

        <div className='second-circle bg-light rounded-circle position-absolute '></div>
      </div>
      <div
        className='btn-group-vertical mt-5'
        role='group'
        aria-label='Vertical button group'
      >
        <div className='my-2'>
          <label
            htmlFor='file-identity'
            className='pointer btn btn-light text-primary fw-bold d-flex align-items-center'
          >
            <img src={camera} alt='camera' className='icon mx-2' />
            انقر لرفع صورة
          </label>
          <input
            id='file-identity'
            type='file'
            name='id_user_image'
            onChange={handleChangeImage}
          />
        </div>
      </div>
      <p className='text-danger mt-2 text-center fs-5 fw-bold'>
        {formErrors?.idUserImageError}
      </p>
      <p className='fs-5 fw-bold mt-3'>
        قم برفع أوأخذ سيلفي لك مع وثيقة الهوية حيث تظهر ملامح وجهك بوضوح وكذلك
        معالم الوثيقة
      </p>
    </div>
  );
};

export default Document2;
