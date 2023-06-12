import React, { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './nav/Navbar';
import TopNavbar from './nav/TopNavbar';
import Submenu from './Submenu';
import { useMainContext } from '../../contexts/MainProvider';
import RespnsiveNavbar from './nav/RespnsiveNavbar';
import Footer from './Footer';
import ResponsiveFilter from '../filter-ads/ResponsiveFilter';
import ImageModel from './ImageModel';
import Loading from './Loading';
import { useAdsContext } from '../../contexts/AdsProvider';
import { useEffect } from 'react';
const ShareLayout = () => {
  const {
    closeSubmenu,
    navbarStatus,
    filterStatus,
    imageModel,
    fetchLocationIp,
  } = useMainContext();
  useEffect(() => {
    fetchLocationIp();
  }, []);
  return (
    <>
      {navbarStatus && <RespnsiveNavbar />}
      {filterStatus && <ResponsiveFilter />}
      {imageModel && <ImageModel />}
      <TopNavbar />
      <Navbar />
      <Submenu />
      <div onMouseOver={closeSubmenu}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default ShareLayout;
