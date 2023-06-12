import React from 'react';
import Loading from '../shared-components/Loading';
import { useAdsContext } from '../../contexts/AdsProvider';
import Ad from './Ad';
import { useMainContext } from '../../contexts/MainProvider';
import RequestError from '../shared-components/RequestError';

const HomeNotSigned = () => {
  const {
    allAds,
    allAdsLoading,
    fetchMoreAds,
    currentPage,
    moreAdsLoading,
    allAdsError,
    turnToSpecial,
    lastPagePaidPackage,
    lastPageSpecial,
    lastPage,
    turnToFree,
    turnToPaidPackage,
  } = useAdsContext();
  const { closeSearch } = useMainContext();
  const handleAdMore = () => {
    if (lastPage == currentPage - 1) {
      //   dispatch change isSpecial :true and currentPage = 1 and lastPage : 'as'
      turnToSpecial();
    } else {
      if (lastPageSpecial == currentPage - 1) {
        turnToPaidPackage();
      } else if (lastPagePaidPackage == currentPage - 1 && allAds.length < 50) {
        turnToFree();
      } else {
        fetchMoreAds();
      }
    }
  };
  return (
    <section
      className='home-not-signed color-in-background py-3'
      onClick={closeSearch}
    >
      <div className='container-fluid'>
        <h3 className='py-4 ps-2 text-primary'>اعلانات جديدة</h3>
        <div className='row g-1 gy-2 mx-1'>
          {allAdsLoading ? (
            <Loading />
          ) : allAdsError ? (
            <RequestError />
          ) : (
            allAds &&
            allAds.length > 0 && (
              <>
                {allAds.map((ad, index) => {
                  return (
                    <Ad
                      {...ad}
                      key={index}
                      grid='col-md-6 col-lg-4 col-xl-3 '
                    />
                  );
                })}
                <div className='text-center mt-3'>
                  {moreAdsLoading && <Loading />}
                  <button
                    className='btn btn-light text-secondary fs-5 fw-bold px-4'
                    onClick={handleAdMore}
                  >
                    المزيد
                  </button>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeNotSigned;
