import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFilterContext } from '../../contexts/FilterProvider';
import { useMainContext } from '../../contexts/MainProvider';
import { engine_filter_url, status_filter_url } from '../../utils/constants';
import LocationDropwon from '../shared-components/nav/LocationDropwon';

const FilterRight = () => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const { cat, subcat, catid, subcatid } = useParams();
  const { sublinks, countryName } = useMainContext();
  const [selectedSubCat, setSelectedSubCat] = useState(subcat);
  const subcategories = sublinks.find((l) => l.page == cat);
  const { fetchAdsBasedCat, filterBasedUrl, HandlePriceMinMax } =
    useFilterContext();
  useEffect(() => {
    setSelectedSubCat(subcat);
  }, [subcat]);
  useEffect(() => {
    if (min && max) {
      HandlePriceMinMax(min, max);
    }
  }, [min, max]);
  return (
    <div className='filter-right mt-3 '>
      <div className='box border-bottom border-2'>
        <h4 className='text-primary'>الفئات</h4>
        <h4 className='text-muted'>جميع الفئات</h4>
        <div className='me-3 h-100'>
          <h4 className='text-primary'>{cat}</h4>
          <select
            className='form-select overflow-auto me-2 text-primary bg-transparent border-0 box'
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
                    className='me-3 text-primary'
                    // selected={l.label == subcat}
                    key={index}
                  >
                    {l.label}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <div className='box mt-3 '>
        <LocationDropwon removesearch='true' />
      </div>

      <div className='box mt-3  '>
        <h4 className='text-primary my-3 me-2'>السعر</h4>
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
      {cat == 'سيارات' && (
        <>
          <div className='box mt-3  '>
            <h4 className='text-primary my-3 me-2'>الحالة</h4>
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
                className='form-check-label text-primary fw-bold'
                htmlFor='defaultCheck1'
              >
                جديد
              </label>
            </div>
            <div className='form-check d-flex justify-content-start align-items-center text-primary fs-5'>
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
                className='form-check-label text-primary fw-bold'
                htmlFor='defaultCheck2'
              >
                مستعمل
              </label>
            </div>
          </div>
          <div className='box mt-3  '>
            <h4 className='text-primary my-3 me-2'>ناقل للحركة</h4>
            <div className='form-check d-flex justify-content-start align-items-center text-primary fs-5'>
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
                className='form-check-label text-primary fw-bold'
                htmlFor='defaultCheck1'
              >
                مانيوال
              </label>
            </div>
            <div className='form-check d-flex justify-content-start align-items-center text-primary fs-5'>
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
                className='form-check-label text-primary fw-bold'
                htmlFor='defaultCheck2'
              >
                أوتوماتيك
              </label>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterRight;
