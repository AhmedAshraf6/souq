import React, { useEffect } from 'react';
import { useMainContext } from '../../contexts/MainProvider';
import Document1 from './Document1';
import Document2 from './Document2';

const IdentityDocumented = ({
  formValues,
  handleChangeImage,
  formErrors,
  handleSubmit,
}) => {
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='identity-documented mx-2'>
      <form className='box  pb-4 mt-4'>
        <h5 className='mb-4'>توثيق الهوية الشخصية</h5>
        <div className='row '>
          <div className='col-12 border-bottom'>
            <Document1
              formValues={formValues}
              handleChangeImage={handleChangeImage}
              formErrors={formErrors}
            />
          </div>
          <div className='col-12  mt-5'>
            <Document2
              formValues={formValues}
              handleChangeImage={handleChangeImage}
              formErrors={formErrors}
            />
          </div>
        </div>
        <div className='text-center'>
          <button
            className='btn btn-secondary text-white fw-bold fs-5 px-5 mt-5'
            onClick={handleSubmit}
          >
            حفظ
          </button>
        </div>
      </form>
    </div>
  );
};

export default IdentityDocumented;
