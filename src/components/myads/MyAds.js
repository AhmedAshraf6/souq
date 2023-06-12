import React, { useState } from 'react';
import FavouriteAds from './FavouriteAds';
import Ad from '../home/Ad';
import { useEffect } from 'react';
import { ads_status_url, user_ads__by_status_url } from '../../utils/constants';
import { all_user_ads } from '../../utils/constants';
import { useUserContext } from '../../contexts/UserProvider';
import axios from 'axios';
import Loading from '../shared-components/Loading';
import { useMainContext } from '../../contexts/MainProvider';
import { useLocation } from 'react-router-dom';
import SkeltonPlaceHolders from './SkeltonPlaceHolders';
const MyAds = () => {
  const {
    token,
    fetchAllAds,
    userAds,
    loadedAds,
    adsError,
    makePaginationReset,
    fetchUserAdsByStatus,
  } = useUserContext();
  const { countryName } = useMainContext();
  const [change, setChange] = useState(true);
  const [currentAdId, setCurrentAdId] = useState('');
  const [adsStatus, setAdsStatus] = useState([]);
  const prev = useLocation();
  // Buttons like تحت المراجعة ومنشور
  const fetchAdsStatus = async () => {
    try {
      const response = await axios(ads_status_url);
      setAdsStatus(response.data.data);
    } catch (error) {}
  };

  // For Buttons (تحت المراجعة -  المعلقة)
  useEffect(() => {
    fetchAdsStatus();
  }, []);
  useEffect(() => {
    if (currentAdId) {
      makePaginationReset();
      fetchUserAdsByStatus(
        `${user_ads__by_status_url}${currentAdId}/${countryName}`
      );
    } else {
      makePaginationReset();
      fetchAllAds(all_user_ads);
    }
  }, [currentAdId]);

  if (loadedAds) {
    return <SkeltonPlaceHolders />;
  } else if (adsError) {
    return <h3 className='text-center text-primary'>حدث خطأ ما</h3>;
  }
  // Ads By Status
  return (
    <div className='profile-com py-5 '>
      <div className='container-fluid '>
        <div className='btn-group mx-3' role='group' aria-label='Basic example'>
          <button
            type='button'
            className={
              change == true
                ? 'btn btn-secondary btn-lg mx-2'
                : 'btn btn-primary btn-lg mx-2'
            }
            onClick={() => setChange(true)}
          >
            الإعلانات
          </button>
          <button
            type='button'
            className={
              change == false
                ? 'btn btn-secondary btn-lg mx-2'
                : 'btn btn-primary btn-lg mx-2'
            }
            onClick={() => setChange(false)}
          >
            المفضلة
          </button>
        </div>
        {/* Settings */}
        {change && (
          <div className='settings'>
            <div className='mx-3 mt-3 d-flex flex-column flex-sm-row justify-content-center '>
              <button
                type='button'
                className={
                  currentAdId == ''
                    ? 'btn btn-secondary btn-lg mx-2 mt-3 mt-sm-0'
                    : 'btn btn-primary btn-lg mx-2 mt-3 mt-sm-0'
                }
                onClick={() => {
                  setCurrentAdId('');
                }}
              >
                عرض الكل
              </button>
              {adsStatus.map((status) => {
                const { id, name_ar } = status;
                return (
                  <button
                    type='button'
                    className={
                      currentAdId == id
                        ? 'btn btn-secondary btn-lg mx-2 mt-3 mt-sm-0'
                        : 'btn btn-primary btn-lg mx-2 mt-3 mt-sm-0'
                    }
                    onClick={() => setCurrentAdId(id)}
                    key={id}
                  >
                    {name_ar}
                  </button>
                );
              })}
            </div>
            <div className='row g-1 gy-2 mx-1 mt-2'>
              {userAds && userAds.length > 0 ? (
                userAds.map((ad) => {
                  return (
                    <Ad
                      {...ad}
                      key={ad.id}
                      grid='col-lg-3 col-md-6'
                      prevLink={prev}
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
        )}
        {/* Favourites */}
        {!change && <FavouriteAds />}
      </div>
    </div>
  );
};

export default MyAds;
