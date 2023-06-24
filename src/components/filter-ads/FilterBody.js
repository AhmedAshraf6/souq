import React from 'react';
import { useParams } from 'react-router-dom';
import { useFilterContext } from '../../contexts/FilterProvider';
import Loading from '../shared-components/Loading';
import RequestError from '../shared-components/RequestError';
import Pagination from './Pagination';
import { useEffect } from 'react';
import { useMainContext } from '../../contexts/MainProvider';
import { useAdsContext } from '../../contexts/AdsProvider';
import Ad from '../home/Ad';

const FilterBody = () => {
  const { catid, subcatid } = useParams();
  const { countryName, cityName, currency } = useMainContext();
  const { filteredAds, filterLoaded, filterError, fetchAdsBasedCat } =
    useFilterContext();

  useEffect(() => {
    fetchAdsBasedCat(subcatid ? subcatid : catid); // we put default cat id for cars
  }, [catid, subcatid, countryName, cityName]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filteredAds]);

  if (filterLoaded) {
    return <Loading />;
  }
  if (filterError) {
    return <RequestError />;
  }
  return (
    <div className='filter-body mt-3'>
      <div className='row g-1 gy-2 '>
        {filteredAds && filteredAds.length > 0 ? (
          <>
            {filteredAds.map((ad) => {
              return (
                <Ad
                  {...ad}
                  key={ad.id}
                  grid='col-xl-4 col-md-6'
                  currency={currency}
                />
              );
            })}
            <Pagination />
          </>
        ) : (
          <h6 className='text-center text-primary'>لا يوجد اعلانات</h6>
        )}
      </div>
    </div>
  );
};

export default FilterBody;
