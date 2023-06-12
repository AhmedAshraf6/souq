import React from 'react';
import { useEffect } from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { useUserContext } from '../../contexts/UserProvider';
import Help from '../../pages/Help';
import Support from '../../pages/Support';

const IsAdminSupport = () => {
  const { userInfo, isAdminSupportFunc, isAdminSupport, token } =
    useUserContext();
  const location = useLocation();

  useEffect(() => {
    if (userInfo.email == 'elqutamy.zeyad15@gmail.com') {
      isAdminSupportFunc();
    }
  }, [userInfo.id]);

  return (
    <div>
      {token ? (
        isAdminSupport ? (
          <Support />
        ) : (
          <Help />
        )
      ) : (
        <Navigate to='/' state={{ from: location }} replace />
      )}
    </div>
  );
};

export default IsAdminSupport;
