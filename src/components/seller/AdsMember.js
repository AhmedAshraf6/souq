import React from 'react';
import Loading from '../shared-components/Loading';
import Ad from '../home/Ad';
const AdsMember = ({ allAds, load, name }) => {
  return (
    <div className='w-100 '>
      <h4 className='border-bottom border-2 border-dark text-dark pb-5 ms-3 fw-bold'>
        {allAds && allAds.length > 0 && allAds[0].User.name}
      </h4>
      {/* All Ads */}
      <div className='ads mt-3 ms-3'>
        {load ? (
          <Loading />
        ) : (
          allAds &&
          allAds.length > 0 && (
            <>
              <h4 className='text-dark  fw-bold'>
                الاعلانات المنشورة [{allAds.length}]
              </h4>
              <div className='row mt-4 gy-3'>
                {allAds.map((ad) => {
                  return <Ad {...ad} key={ad.id} grid='col-xl-4 col-sm-6' />;
                })}
              </div>
            </>
          )
        )}
      </div>
      {/* All Ads */}
    </div>
  );
};

export default AdsMember;
