import React from 'react';
import { useFilterContext } from '../../contexts/FilterProvider';
import {
  createdat_filter_url,
  price_asc_desc_filter_url,
} from '../../utils/constants';

const FilterTop = () => {
  const { filterBasedUrl } = useFilterContext();
  const handleSort = (e) => {
    if (e.target.value == 'createdat') {
      filterBasedUrl(`${createdat_filter_url}/asc`);
    } else {
      filterBasedUrl(`${price_asc_desc_filter_url}/${e.target.value}`);
    }
  };
  return (
    <div className='border-bottom border-secondary py-3'>
      <div className='row'>
        <div className='col-lg-3'>
          <h4 className='text-primary border-start border-2 border-primary '>
            الفلاتر
          </h4>
        </div>
        <div className='col-lg-5 '>
          <div
            className='btn-group w-100'
            role='group'
            aria-label='Basic example'
          >
            <button
              type='button'
              className='btn btn-secondary text-white'
              onClick={() =>
                filterBasedUrl(
                  'https://api.adsapp.org/api/getAdertisementsBasedOnMedia/vedio'
                )
              }
            >
              الاعلانات المرفقة بفديوهات
            </button>
            <button
              type='button'
              className='btn btn-primary mx-2'
              onClick={() =>
                filterBasedUrl(
                  'https://api.adsapp.org/api/getAdertisementsBasedOnMedia/image'
                )
              }
            >
              الاعلانات المرفقة بصور
            </button>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='d-flex align-items-center'>
            <h5 className='text-primary text-nowrap mx-2'>ترتيب حسب:</h5>
            <select
              className='form-select text-primary w-100'
              onChange={handleSort}
            >
              <option value='createdat'>المدرجة حديثا</option>
              <option value='desc'>الأعلي سعرا</option>
              <option value='asc'>الأقل سعرا</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTop;
