import React, { useEffect } from 'react';
import MyAds from '../components/myads/MyAds';

import { useMainContext } from '../contexts/MainProvider';
const Profile = () => {
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className='profile'>
      <MyAds />
    </main>
  );
};

export default Profile;
