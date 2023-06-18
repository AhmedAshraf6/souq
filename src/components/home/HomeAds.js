import React, { useEffect, useState } from 'react';
import Loading from '../shared-components/Loading';
import { useAdsContext } from '../../contexts/AdsProvider';
import Ad from './Ad';
import { useMainContext } from '../../contexts/MainProvider';
import RequestError from '../shared-components/RequestError';
import { useQuery } from 'react-query';
import {
  allAdsUrl,
  paid_package_url,
  premium_ads_url,
  special_ads_url,
} from '../../utils/constants';
import axios from 'axios';
import { GET_ALLADS_SUCCESS, GET_MORE_ADS } from '../../actions';

const HomeNotSigned = () => {
  const userloc = JSON.parse(localStorage.getItem('userlocation'));
  const {
    dispatch,
    allAds,
    currentPage,
    isSpecial,
    lastPagePaidPackage,
    lastPageSpecial,
    lastPage,
    isFree,
    isPaidPackage,
    turnToSpecial2,
    turnToPaidPackage2,
    turnToFree2,
    ahmeddisable,
    ahmed,
    moreAdsLoading,
  } = useAdsContext();
  const [special, setSpecial] = useState(false);
  const [paid, setPaid] = useState(false);
  const [free, setFree] = useState(false);
  const [fetch, setFetch] = useState(false);
  const [isClicked, setIsclicked] = useState(false);
  const handleAdMore = () => {
    if (lastPage == currentPage - 1) {
      //   dispatch change isSpecial :true and currentPage = 1 and lastPage : 'as'
      return turnToSpecial();
    } else {
      if (lastPageSpecial == currentPage - 1) {
        return turnToPaidPackage();
      } else if (lastPagePaidPackage == currentPage - 1 && allAds.length < 50) {
        return turnToFree();
      } else {
        return fetchMoreAds();
      }
    }
  };

  // // Fetch Moore Ads
  const fetchMoreAds = () => {
    if (isSpecial) {
      // special
      const response = axios
        .get(`${special_ads_url}${userloc.userCountryName}?page=1`)
        .then((data) => {
          console.log('admore special');
          setSpecial(true);
          dispatch({
            type: GET_MORE_ADS,
            payload: data.data.data.data,
            payload2: currentPage + 1,
          });
          return data;
        });
      return response;
    } else if (isPaidPackage) {
      const response = axios
        .get(
          `${paid_package_url}${userloc.userCountryName}?page=${currentPage}`
        )
        .then((data) => {
          console.log('admore paidpackage');
          dispatch({
            type: GET_MORE_ADS,
            payload: data.data.data.data,
            payload2: currentPage + 1,
          });
          return data;
        });
      return response;
    } else if (isFree) {
      if (allAds.length < 50) {
        const response = axios
          .get(`${allAdsUrl}${userloc.userCountryName}?page=${currentPage}`)
          .then((data) => {
            console.log('admore free');
            dispatch({
              type: GET_MORE_ADS,
              payload: data.data.data.data.slice(0, 50 - allAds.length),
              payload2: currentPage + 1,
            });
            return data;
          });
        return response;
      }
    } else {
      // prem
      const response = axios
        .get(`${premium_ads_url}${userloc.userCountryName}?page=${currentPage}`)
        .then((data) => {
          console.log('admore else');
          dispatch({
            type: GET_MORE_ADS,
            payload: data.data.data.data,
            payload2: currentPage + 1,
          });
          return data;
        });
      return response;
    }
  };

  const fetchAllAds = () => {
    const response = axios
      .get(`${premium_ads_url}${userloc.userCountryName}?page=1`)
      .then((data) => {
        if (data.data.data.data.length < 20) {
          console.log('prem');
          setSpecial(true);
          dispatch({
            type: GET_ALLADS_SUCCESS,
            payload: [],
            payload2: data.data.data.meta.last_page,
          });
          return data;
        }
      });

    return response;
  };
  const turnToSpecial = () => {
    const response = axios
      .get(`${special_ads_url}${userloc.userCountryName}?page=1`)
      .then((data) => {
        if (data.data.data.data.length == 0) {
          console.log('special');
          setPaid(true);
          dispatch({
            type: 'TURN_TO_SPECIAL',
            payload: data.data.data.meta.last_page,
          });
          dispatch({
            type: GET_MORE_ADS,
            payload: [],
            payload2: 2,
          });
          return data;
        }
      });
    return response;
  };
  const turnToPaidPackage = () => {
    const response = axios
      .get(`${paid_package_url}${userloc.userCountryName}?page=1`)
      .then((data) => {
        if (data.data.data.data.length == 0) {
          console.log(`paid `);
          setFree(true);
          dispatch({
            type: 'TURN_TO_PAID_PACKAGE',
            payload: data.data.data.meta.last_page,
          });

          dispatch({
            type: GET_MORE_ADS,
            payload: [],
            payload2: 2,
          });
          return data;
        }
      });
    return response;
  };
  const turnToFree = () => {
    const response = axios
      .get(`${allAdsUrl}${userloc.userCountryName}?page=${1}`)
      .then((data) => {
        dispatch({
          type: 'TURN_TO_FREE',
          payload: data.data.data.meta.last_page,
        });
        dispatch({
          type: GET_MORE_ADS,
          payload: [],
          payload2: 2,
        });
        return data;
      });

    console.log(`free`);
    return response;
  };

  const {
    isLoading: load,
    isError: err,
    data: prem,
    error,
  } = useQuery('ads', fetchAllAds, {
    staleTime: 12000,
  });

  const {
    isLoading: load2,
    isError: err2,
    data: sp,
    error: error2,
  } = useQuery('adsspecial', turnToSpecial, {
    enabled: special,
    staleTime: 12000,
  });
  const {
    isLoading: load3,
    isError: err3,
    data: pa,
    error: error3,
  } = useQuery('adspaid', turnToPaidPackage, {
    enabled: paid,
    staleTime: 12000,
  });

  const {
    isLoading: load4,
    isError: err4,
    data: fr,
    error: error4,
  } = useQuery('adsfree', turnToFree, {
    enabled: free,
    staleTime: 12000,
  });

  const handleClick = () => {
    setFetch(true);
    setIsclicked(true);
    refetch();
  };
  const {
    isLoading: load5,
    isError: err5,
    data: admoreads,
    error: error5,
    refetch,
  } = useQuery('admoreads', handleAdMore, {
    enabled: fetch,
    refetchOnWindowFocus: false,
    staleTime: 120000,
  });
  useEffect(() => {
    if (!ahmeddisable && admoreads?.data.data.data) {
      dispatch({
        type: 'AHMED',
        payload: admoreads.data.data.data,
      });
    }
    if (isClicked && admoreads?.data.data.data == 0) {
      dispatch({
        type: 'AHMEDDISABLE',
      });
    }
  }, [admoreads]);

  if (load || load2 || load3 || load4) {
    return <Loading />;
  }
  if (err || err2 || err3 || err4) {
    return <h2>error</h2>;
  }
  const allfree = fr?.data.data.data.slice(
    0,
    50 -
      (prem?.data.data.data.length +
        sp?.data.data.data.length +
        pa?.data.data.data.length)
  );

  return (
    <section className='home-not-signed color-in-background py-3'>
      <div className='container-fluid'>
        <h3 className='py-4 ps-2 text-primary'>اعلانات جديدة</h3>
        <div className='row g-1 gy-2 mx-1'>
          <>
            {prem?.data.data.data.map((ad, index) => {
              return (
                <Ad {...ad} key={index} grid='col-md-6 col-lg-4 col-xl-3 ' />
              );
            })}
            {sp?.data.data.data.map((ad, index) => {
              return (
                <Ad {...ad} key={index} grid='col-md-6 col-lg-4 col-xl-3 ' />
              );
            })}
            {pa?.data.data.data.map((ad, index) => {
              return (
                <Ad {...ad} key={index} grid='col-md-6 col-lg-4 col-xl-3 ' />
              );
            })}
            {allfree.map((ad, index) => {
              return (
                <Ad {...ad} key={index} grid='col-md-6 col-lg-4 col-xl-3 ' />
              );
            })}
            {ahmed?.map((ad, index) => {
              return (
                <Ad {...ad} key={index} grid='col-md-6 col-lg-4 col-xl-3 ' />
              );
            })}

            <div className='text-center mt-3'>
              {moreAdsLoading && <Loading />}
              <button
                className='btn btn-light text-secondary fs-5 fw-bold px-4'
                onClick={handleClick}
              >
                المزيد
              </button>
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default HomeNotSigned;
