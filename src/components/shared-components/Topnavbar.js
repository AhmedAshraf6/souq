import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

const Topnavbar = () => {
  return (
    <section className='top-navbar  py-3'>
      <div className='row'>
        <div className='col-md-2'>
          <h4>logo</h4>
        </div>
        <div className='col-md-3'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control text-secondary color-in-background'
              placeholder='ابحث عما تريد'
            />
          </div>
        </div>
        <div className='col-md-5'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control text-secondary color-in-background position-relative d-block'
              placeholder='ابحث عما تريد'
            />
            <BsSearch className='position-absolute search-input fs-5' />
          </div>
        </div>
        <div className='col-md-2'>
          <div className='login d-flex align-items-center'>
            <AiOutlinePlusCircle className='fs-3 me-2 pointer' />
            <div className='btn btn-primary text-nowrap'>تسجيل الدخول</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topnavbar;
