import React, { useEffect } from 'react';
import twitter from '../../assets/ICONs/twitter.png';
import smartphone from '../../assets/ICONs/smartphone.png';

// google
import { useState } from 'react';
import { gapi } from 'gapi-script';
import { social_login } from '../../utils/constants';
import axios from 'axios';
import { useUserContext } from '../../contexts/UserProvider';
const OtherMethods = ({ setShowPhone }) => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  // const { handleTokenRequest } = useUserContext();
  // const clientId =
  //   '979484814823-2bt5eclc417bicv43v0ualeb2qmj168p.apps.googleusercontent.com';
  // const onSuccess = async (res) => {
  //   (res);
  //   try {
  //     const response = await axios(social_login, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     (response);
  //   } catch (error) {
  //     (error);
  //   }
  // };
  // const onFailure = (res) => {
  //   (res);
  // };
  // useEffect(() => {
  //   const start = () => {
  //     gapi.client.init({
  //       client_id: clientId,
  //       scope: '',
  //     });
  //   };
  //   gapi.load('client:auth2', start);
  // }, []);

  return (
    <>
      {/* <div
        className='box d-flex align-items-center justify-content-center text-primary bg-white rounded-pill mx-auto mt-3 pointer w-50 py-2'
        data-bs-dismiss='modal'
      >
        <img src={search} alt='search' className='navbar-icon ms-2 ' />
        <h6>تابع بايميل جوجل</h6>
      </div> */}
      {/* <GoogleLogin
        clientId={clientId}
        className='box d-flex align-items-center justify-content-center text-primary bg-white rounded-pill mx-auto mt-3 pointer w-50 '
        buttonText='تابع بايميل جوجل'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      /> */}

      <div className='box d-flex align-items-center justify-content-center text-primary bg-white rounded-pill mx-auto mt-3 pointer w-50 py-2'>
        <img src={twitter} alt='twitter' className='navbar-icon ms-2 ' />
        <h6>تابع بايميل تويتر</h6>
      </div>
    </>
  );
};

export default OtherMethods;
