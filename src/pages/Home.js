import { async } from '@firebase/util';
import React, { useEffect } from 'react';
import HomeAds from '../components/home/HomeAds';
import Footer from '../components/shared-components/Footer';
import { useAdsContext } from '../contexts/AdsProvider';
import { useMainContext } from '../contexts/MainProvider';
import { useUserContext } from '../contexts/UserProvider';
import useScript from '../hooks/useScript';
import { url_for_advertise } from '../utils/constants';

const Home = () => {
  useScript(url_for_advertise);
  const {
    toggleNavbarFunc,
    closeSubmenu,
    closeSearch,
    fetchLocationIp,
    countryName,
    cityName,
  } = useMainContext();
  const { fetchAllAds, fetchCityAds, fetchFavouriteIds, turnToFree } =
    useAdsContext();
  const { token } = useUserContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='home'>
      <HomeAds />
      <Footer />
    </main>
  );
};
export default Home;
