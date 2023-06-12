import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import rightwhar from '../../assets/ICONs/rightwhar.png';
import { useFilterContext } from '../../contexts/FilterProvider';
import { useMainContext } from '../../contexts/MainProvider';
import {
  createdat_filter_url,
  engine_filter_url,
  price_asc_desc_filter_url,
  status_filter_url,
} from '../../utils/constants';
import LocationDropwon from '../shared-components/nav/LocationDropwon';
const ResponsiveFilter = () => {
  const { toggleFilterFunc, sublinks } = useMainContext();
  const { filterBasedUrl, fetchAdsBasedCat } = useFilterContext();
  const handleSort = (e) => {
    if (e.target.value == 'createdat') {
      filterBasedUrl(`${createdat_filter_url}/asc`);
    } else {
      filterBasedUrl(`${price_asc_desc_filter_url}/${e.target.value}`);
    }
  };
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const { cat, subcat, catid, subcatid } = useParams();
  const [selectedSubCat, setSelectedSubCat] = useState(subcat);
  const subcategories = sublinks.find((l) => l.page == cat);

  useEffect(() => {
    setSelectedSubCat(subcat);
  }, [subcat]);
  return (
    <div className='responsive-filter text-white'>
      <div className='row'>
        <div className='col-12'>
          <div className='d-flex align-items-center border-bottom py-4'>
            <img
              src={rightwhar}
              alt='rightwhar'
              className='icon'
              onClick={() => toggleFilterFunc(false)}
            />
            <h5 className='text-white pointer'>فلاتر</h5>
          </div>
        </div>
        <div className='col-12  border-bottom py-4'>
          <div className='btn-group-vertical ' role='group'>
            <button
              type='button'
              className='btn btn-secondary text-white '
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
              className='btn btn-light mt-2 '
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
        <div className='col-12  border-bottom py-4'>
          <h5>صنف حسب:</h5>
          <select className='form-select' onChange={handleSort}>
            <option value='createdat'>المدرجة حديثا</option>
            <option value='desc'>الأعلي سعرا</option>
            <option value='asc'>الأقل سعرا</option>
          </select>
        </div>
        <div className='col-12 border-bottom py-4'>
          <h5>الفئات</h5>
          <select
            className='form-select'
            value={selectedSubCat}
            onChange={(e) => {
              setSelectedSubCat(e.target.value);
              fetchAdsBasedCat(e.target.value);
            }}
          >
            {subcategories &&
              subcategories.links.map((l, index) => {
                return (
                  <option
                    value={l.subcatid}
                    className='text-primary'
                    // selected={l.label == subcat}
                    key={index}
                  >
                    {l.label}
                  </option>
                );
              })}
          </select>
        </div>
        <div className='box mt-3'>
          <h5>الموقع</h5>
          <LocationDropwon removesearch='true' />
        </div>
        <div className='box mt-3  '>
          <h4 className=' my-3 me-2'>السعر</h4>
          <div className='d-flex'>
            <input
              className='form-control bg-primary text-white'
              type='number'
              onChange={(e) => setMin(e.target.value)}
            />
            <input
              className='form-control bg-primary text-white'
              type='number'
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
        </div>
        <div className='col-12  border-bottom py-4'>
          {cat == 'سيارات' && (
            <>
              <div className='box mt-3  '>
                <h4 className='text-white my-3 me-2'>الحالة</h4>
                <div className='form-check d-flex justify-content-start align-items-center text-primary fs-5'>
                  <input
                    className='form-check-input mx-2'
                    type='radio'
                    name='status'
                    value='1'
                    onChange={(e) =>
                      filterBasedUrl(`${status_filter_url}/${e.target.value}`)
                    }
                    id='defaultCheck1'
                  />
                  <label
                    className='form-check-label text-white fw-bold'
                    htmlFor='defaultCheck1'
                  >
                    جديد
                  </label>
                </div>
                <div className='form-check d-flex justify-content-start align-items-center text-white fs-5'>
                  <input
                    className='form-check-input mx-2'
                    type='radio'
                    name='status'
                    value='0'
                    onChange={(e) =>
                      filterBasedUrl(`${status_filter_url}/${e.target.value}`)
                    }
                    id='defaultCheck2'
                  />
                  <label
                    className='form-check-label text-white fw-bold'
                    htmlFor='defaultCheck2'
                  >
                    مستعمل
                  </label>
                </div>
              </div>
              <div className='box mt-3  '>
                <h4 className='text-white my-3 me-2'>حالة المحرك</h4>
                <div className='form-check d-flex justify-content-start align-items-center text-white fs-5'>
                  <input
                    className='form-check-input mx-2'
                    type='radio'
                    name='status2'
                    value='1'
                    id='defaultCheck1'
                    onChange={(e) =>
                      filterBasedUrl(`${engine_filter_url}/${e.target.value}`)
                    }
                  />
                  <label
                    className='form-check-label text-white fw-bold'
                    htmlFor='defaultCheck1'
                  >
                    مانيوال
                  </label>
                </div>
                <div className='form-check d-flex justify-content-start align-items-center text-white fs-5'>
                  <input
                    className='form-check-input mx-2'
                    type='radio'
                    name='status2'
                    value='0'
                    id='defaultCheck2'
                    onChange={(e) =>
                      filterBasedUrl(`${engine_filter_url}/${e.target.value}`)
                    }
                  />
                  <label
                    className='form-check-label text-white fw-bold'
                    htmlFor='defaultCheck2'
                  >
                    أوتوماتيك
                  </label>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveFilter;
