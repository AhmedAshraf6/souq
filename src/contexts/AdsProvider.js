import axios from 'axios';
import React, { useContext, useEffect, useReducer, createContext } from 'react';
import AdsReducer from '../reducers/AdsReducer';
import {
  allAdsUrl,
  city_url,
  country_id_url,
  fav_ad_url,
  paid_package_url,
  premium_ads_url,
  special_ads_url,
} from '../utils/constants';
import {
  GET_ALLADS_SUCCESS,
  GET_ALLADS_LOADING,
  GET_ALLADS_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_MORE_ADS,
  GET_MORE_ADS_ERROR,
  GET_MORE_ADS_LOADING,
  FETCH_FAV_IDS,
  GET_SINGLE_PRODUCT_LOADING,
} from '../actions';
import { useMainContext } from './MainProvider';
import { useUserContext } from './UserProvider';

const initialState = {
  ahmed: [],
  ahmeddisable: false,
  allAds: [],
  allAdsLoading: false,
  allAdsError: false,
  singleAdLoading: false,
  singleAd: {},
  singleAderror: false,
  moreAdsLoading: false,
  currentPage: 2,
  lastPage: '',
  lastPageSpecial: '',
  isSpecial: false,
  lastPagePaidPackage: '',
  isPaidPackage: false,
  isFree: false,
  favAdsIds: [],
  favAdsIdsInFavouritePage: [],
  currencySingleAd: '',
};

const AdsContext = createContext();

export const AdsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdsReducer, initialState);
  const { countryName, cityName } = useMainContext();
  const { token } = useUserContext();
  const fetchAllAds = async (country, page = state.currentPage) => {
    dispatch({ type: GET_ALLADS_LOADING });
    try {
      const response = await axios.get(
        `${premium_ads_url}${country}?page=${page}`
      );

      const allads = response.data.data.data;
      dispatch({
        type: GET_ALLADS_SUCCESS,
        payload: allads,
        payload2: response.data.data.meta.last_page,
      });
      if (allads.length < 20) {
        turnToSpecial2();
      }
      console.log(`prem ${allads}`);
    } catch (error) {
      dispatch({ type: GET_ALLADS_ERROR });
    }
  };

  const fetchMoreAds = async () => {
    dispatch({ type: GET_MORE_ADS_LOADING });
    if (state.isSpecial) {
      // special
      try {
        const response = await axios.get(
          `${special_ads_url}${countryName}?page=${state.currentPage}`
        );
        const allads = response.data.data.data;
        dispatch({
          type: GET_MORE_ADS,
          payload: allads,
          payload2: state.currentPage + 1,
        });
      } catch (error) {
        dispatch({ type: GET_MORE_ADS_ERROR });
      }
    } else if (state.isPaidPackage) {
      try {
        const response = await axios.get(
          `${paid_package_url}${countryName}?page=${state.currentPage}`
        );
        const allads = response.data.data.data;
        dispatch({
          type: GET_MORE_ADS,
          payload: allads,
          payload2: state.currentPage + 1,
        });
      } catch (error) {
        dispatch({ type: GET_MORE_ADS_ERROR });
      }
    } else if (state.isFree) {
      if (state.allAds.length < 50) {
        try {
          const response = await axios.get(
            `${allAdsUrl}${countryName}?page=${state.currentPage}`
          );
          const resAds = response.data.data.data;
          const allads = resAds.slice(0, 50 - state.allAds.length);
          dispatch({
            type: GET_MORE_ADS,
            payload: allads,
            payload2: state.currentPage + 1,
          });
        } catch (error) {
          dispatch({ type: GET_MORE_ADS_ERROR });
        }
      }
    } else {
      // prem
      try {
        const response = await axios.get(
          `${premium_ads_url}${countryName}?page=${state.currentPage}`
        );
        const allads = response.data.data.data;
        dispatch({
          type: GET_MORE_ADS,
          payload: allads,
          payload2: state.currentPage + 1,
        });
      } catch (error) {
        dispatch({ type: GET_MORE_ADS_ERROR });
      }
    }
  };

  const turnToSpecial2 = async () => {
    dispatch({ type: GET_MORE_ADS_LOADING });
    try {
      const response = await axios.get(
        `${special_ads_url}${countryName}?page=${1}`,
        {
          headers: {
            'Content-Type': 'text/html',
            'Retry-After': 150,
          },
        }
      );
      const allads = response.data.data.data;
      console.log(`special ${allads}`);
      dispatch({
        type: 'TURN_TO_SPECIAL',
        payload: response.data.data.meta.last_page,
      });
      dispatch({
        type: GET_MORE_ADS,
        payload: allads,
        payload2: 2,
      });
      if (allads.length == 0) {
        turnToPaidPackage2();
        return;
      }
    } catch (error) {
      dispatch({ type: GET_MORE_ADS_ERROR });
    }
  };
  const turnToPaidPackage2 = async () => {
    dispatch({ type: GET_MORE_ADS_LOADING });
    try {
      const response = await axios.get(
        `${paid_package_url}${countryName}?page=${1}`,
        {
          headers: {
            'Content-Type': 'text/html',
            'Retry-After': 150,
          },
        }
      );
      const allads = response.data.data.data;
      console.log(`paid ${allads}`);
      dispatch({
        type: 'TURN_TO_PAID_PACKAGE',
        payload: response.data.data.meta.last_page,
      });

      dispatch({
        type: GET_MORE_ADS,
        payload: allads,
        payload2: 2,
      });
      if (allads.length == 0) {
        turnToFree2();
        return;
      }
    } catch (error) {
      dispatch({ type: GET_MORE_ADS_ERROR });
    }
  };
  const turnToFree2 = async () => {
    dispatch({ type: GET_MORE_ADS_LOADING });
    if (state.allAds.length < 50) {
      try {
        const response = await axios.get(
          `${allAdsUrl}${countryName}?page=${1}`
        );
        const resAds = response.data.data.data;
        const allads = resAds.slice(0, 50 - state.allAds.length);
        dispatch({
          type: 'TURN_TO_FREE',
          payload: response.data.data.meta.last_page,
        });
        dispatch({
          type: GET_MORE_ADS,
          payload: allads,
          payload2: 2,
        });
        console.log(`free ${allads}`);
      } catch (error) {
        dispatch({ type: GET_MORE_ADS_ERROR });
      }
    }
  };

  const fetchCityAds = async (city, page = state.currentPage) => {
    dispatch({ type: GET_ALLADS_LOADING });
    try {
      const response = await axios.get(`${city_url}/${city}?page=${page}`);
      const allads = response.data.data.data;
      dispatch({ type: GET_ALLADS_SUCCESS, payload: allads });
    } catch (error) {
      dispatch({ type: GET_ALLADS_ERROR });
    }
  };

  const fetchSingleAd = async (url) => {
    dispatch({
      type: GET_SINGLE_PRODUCT_LOADING,
    });
    try {
      const response = await axios(url);
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };
  const fetchFavouriteIds = async () => {
    try {
      const response = await axios(fav_ad_url);
      const filteredIds = response.data.data.map((ad) => ad.advertisement_id);
      dispatch({
        type: FETCH_FAV_IDS,
        payload: filteredIds,
        payload2: response.data.data,
      });
    } catch (error) {}
  };
  // Handle Favourite Ad
  const handleFavouriteAd = async (ad_id) => {
    try {
      const response = await axios.post(
        fav_ad_url,
        JSON.stringify({ ad_id: ad_id })
      );
      fetchFavouriteIds();
    } catch (error) {}
  };

  return (
    <AdsContext.Provider
      value={{
        ...state,
        fetchSingleAd,
        fetchAllAds,
        fetchMoreAds,
        fetchFavouriteIds,
        handleFavouriteAd,
        fetchCityAds,
        turnToSpecial2,
        turnToFree2,
        turnToPaidPackage2,
        dispatch,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
// make sure use
export const useAdsContext = () => {
  return useContext(AdsContext);
};
