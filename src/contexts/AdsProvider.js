import axios from 'axios';
import React, { useContext, useEffect, useReducer, createContext } from 'react';
import AdsReducer from '../reducers/AdsReducer';
import { city_url, fav_ad_url } from '../utils/constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  GET_ALLADS_SUCCESS,
  GET_ALLADS_LOADING,
  GET_ALLADS_ERROR,
  FETCH_FAV_IDS,
} from '../actions';
import { useUserContext } from './UserProvider';

const initialState = {
  ahmed: [],
  ahmeddisable: false,
  renderdCountry: '',
  favidclicked: '',
  allAds: [],
  currentPage: 2,
  lastPage: '',
  lastPageSpecial: '',
  isSpecial: false,
  lastPagePaidPackage: '',
  isPaidPackage: false,
  isFree: false,
  currencySingleAd: '',
  favAdsIds: [],
  favAdsIdsInFavouritePage: [],
};

const AdsContext = createContext();

export const AdsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdsReducer, initialState);

  const { token } = useUserContext();

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
        JSON.stringify({ ad_id: ad_id }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: 'FAVIDCLICKED', payload: ad_id });

      if (response.data.attached.length > 0) {
        toast.success('تم اضافة الاعلان للمفضلة');
      } else {
        toast.success('تم حذف الاعلان من المفضلة');
      }
    } catch (error) {}
  };

  return (
    <AdsContext.Provider
      value={{
        ...state,

        fetchFavouriteIds,
        handleFavouriteAd,
        fetchCityAds,

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
