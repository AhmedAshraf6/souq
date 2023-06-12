import React, { useEffect } from 'react';
import MySettings from '../components/settings/MySettings';
import { useMainContext } from '../contexts/MainProvider';
const Settings = () => {
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className='settings'>
      <MySettings />
    </main>
  );
};

export default Settings;
