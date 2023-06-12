import React from 'react';
import document1 from '../../assets/imgs/document1.png';
import camera from '../../assets/ICONs/camera.png';
const Document1 = ({ formValues, handleChangeImage, formErrors }) => {
  return (
    <div className='upload-document d-flex flex-column   align-items-center'>
      <img
        src={formValues.id_image ? formValues.currentIdImage : document1}
        alt='document1'
        className='rounded-circle edit-image'
        loading='lazy'
      />
      <div
        className='btn-group-vertical mt-5'
        role='group'
        aria-label='Vertical button group'
      >
        <div className='my-2'>
          <label
            htmlFor='file-photo'
            className='pointer btn btn-light text-primary fw-bold d-flex align-items-center'
          >
            <img src={camera} alt='camera' className='icon mx-2' />
            انقر لرفع صورة
          </label>
          <input
            id='file-photo'
            type='file'
            name='id_image'
            onChange={handleChangeImage}
          />
        </div>
      </div>
      <p className='text-danger mt-2 text-center fs-5 fw-bold'>
        {formErrors?.idImageErrorr}
      </p>
      <p className='fs-5 fw-bold mt-3'>
        قم برفع أو أخذ صورة الوجه الأمامي لوثيقة الهوية تظهر فيها جميع المعلومات
        واضحة
      </p>
    </div>
  );
};

export default Document1;
