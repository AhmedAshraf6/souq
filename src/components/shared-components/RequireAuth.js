import React, { Suspense } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import Navbar from './nav/Navbar';
import TopNavbar from './nav/TopNavbar';
import Submenu from './Submenu';
import { useMainContext } from '../../contexts/MainProvider';
import RespnsiveNavbar from './nav/RespnsiveNavbar';
import ResponsiveFilter from '../filter-ads/ResponsiveFilter';
import { useUserContext } from '../../contexts/UserProvider';
import Footer from './Footer';
import Loading from './Loading';
import { useEffect } from 'react';

const RequireAuth = ({ footer }) => {
  const {
    closeSubmenu,
    navbarStatus,
    filterStatus,
    closeSearch,
    fetchLocationIp,
  } = useMainContext();
  const { token } = useUserContext();
  const location = useLocation();
  useEffect(() => {
    fetchLocationIp();
  }, []);
  return (
    <>
      {token ? (
        <>
          {navbarStatus && <RespnsiveNavbar />}
          {filterStatus && <ResponsiveFilter />}
          <TopNavbar />
          <Navbar onClick={closeSearch} />
          <Submenu />
          <div onMouseOver={closeSubmenu} onClick={closeSearch}>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </div>
          {!footer && <Footer />}
        </>
      ) : (
        <Navigate to='/' state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
