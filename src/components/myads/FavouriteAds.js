import React from 'react';
import { useEffect } from 'react';
import { fav_ad_url, video_url } from '../../utils/constants';
import axios from 'axios';
import { useState } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import Loading from '../shared-components/Loading';
import Ad from '../home/Ad';
import { useAdsContext } from '../../contexts/AdsProvider';
const FavouriteAds = () => {
  const { favAdsIdsInFavouritePage } = useAdsContext();
  return (
    <div className='favourites'>
      <div className='row g-1 gy-2 mx-1 mt-2'>
        {favAdsIdsInFavouritePage && favAdsIdsInFavouritePage.length > 0 ? (
          favAdsIdsInFavouritePage.map((ad) => {
            return (
              <Ad
                {...ad.Advertisement[0]}
                key={ad.id}
                grid='col-lg-3 col-md-6'
              />
            );
          })
        ) : (
          <h2 className='text-center my-5 text-dark fw-bold'>
            لا يوجد اعلانات
          </h2>
        )}
      </div>
    </div>
  );
};

export default FavouriteAds;
