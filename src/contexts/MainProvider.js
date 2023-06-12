import React, { createContext, useContext, useReducer } from 'react';
import { MainReducer } from '../reducers/MainReducer';
import { category_url, country_id_url, search_url } from '../utils/constants';
import {
  OPEN_SUBMENU,
  CLOSE_SUBMENU,
  DETECT_NAVBAR,
  DETECT_FILTER,
  GET_CATEGORIES,
  COUNTRY_CODE,
  USER_LOCATION,
  CITY_NAME,
  GET_SEARCH_SUCCES,
  CLOSE_SEARCH,
  IMAGE_MODEL,
  DETECT_IMAGE_MODEL,
  ACTIVE_IMAGE_CHANGE,
  GET_SEARCH_LOADING,
  GET_SEARCH_ERROR,
  CHANGE_DATA_FROM_LOCALSORAGE,
} from '../actions';
import { useEffect } from 'react';
import axios from 'axios';
const MainContext = createContext();

const initallState = {
  navbarStatus: false,
  filterStatus: false,
  imageModel: false,
  imagesInsideModel: '',
  activeImage: '0',
  sublinks: [],
  allCats: [],
  isSubmenuOpen: false,
  page: { page: '', links: [] },
  location: [],

  currentLocationId: '',
  userCurrency: '',
  countryId: '',
  countryName: '',
  cityName: '',
  renderedWord: '',
  currency: '',

  searchedAds: [],
  searchLoading: false,
  searchError: false,
  openSearch: false,
};

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initallState);
  /* main settings */
  const openSubmenu = (text, coordinates) => {
    dispatch({
      type: OPEN_SUBMENU,
      payload1: text,
      payload2: coordinates,
      payload3: state.sublinks,
    });
  };
  const closeSubmenu = () => {
    dispatch({
      type: CLOSE_SUBMENU,
    });
  };
  // Navbar
  const toggleNavbarFunc = (val) => {
    dispatch({ type: DETECT_NAVBAR, payload: val });
  };
  // Image Model
  const imageModelFunc = (image) => {
    dispatch({ type: IMAGE_MODEL, payload: image });
  };
  // Image Model
  const activeImageFunc = (curr) => {
    dispatch({ type: ACTIVE_IMAGE_CHANGE, payload: curr });
  };
  // Image Model
  const toggleImageModel = (val) => {
    dispatch({ type: DETECT_IMAGE_MODEL, payload: val });
  };
  // Filters
  const toggleFilterFunc = (val) => {
    dispatch({ type: DETECT_FILTER, payload: val });
  };
  // closeSearch
  const closeSearch = () => {
    dispatch({ type: CLOSE_SEARCH });
  };
  // fetch navbar data and submenu
  const fetchNavbar = async (url) => {
    try {
      const response = await axios(url);
      const categories = response.data.data;
      dispatch({ type: GET_CATEGORIES, payload: categories });
    } catch (error) {}
  };

  // handleSearch
  const fetchValueFromSearch = async (val) => {
    dispatch({
      type: GET_SEARCH_LOADING,
    });

    try {
      const response = await axios.post(
        `${search_url}`,
        JSON.stringify({ name: val, country_code: state.countryName }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      // console.log(
      //   JSON.stringify({ name: val, country_code: state.countryName })
      // );
      dispatch({ type: GET_SEARCH_SUCCES, payload: response.data.data.data });
    } catch (error) {
      dispatch({
        type: GET_SEARCH_ERROR,
      });
    }
  };

  /* main settings */

  const fetchLocationIp = async () => {
    const userloc = JSON.parse(localStorage.getItem('userlocation'));
    if (userloc) {
      // dispatch make handle two functions

      dispatch({
        type: CHANGE_DATA_FROM_LOCALSORAGE,
        payload: userloc.currentLocationId,
        payload2: userloc.userCurrency,
        payload3: userloc.countryName || userloc.userCountryName,
        payload4: userloc.cityName,
        payload5: userloc.renderedWord || userloc.userCountryName,
        payload6: userloc.currency,
        payload7: userloc.countryId,
      });
    } else {
      try {
        const res = await axios('https://ipapi.co/json/');
        fetchUserLocationId(res.data.country_name, res.data.currency);
        handleCountryId(
          res.data.country_name,
          res.data.country_name,
          res.data.currency
        );
      } catch (error) {}
    }
  };
  // Get Location using ip
  const fetchUserLocationId = async (cn, currency) => {
    try {
      const response = await axios(`${country_id_url}${cn}`);
      dispatch({
        type: USER_LOCATION,
        payload: response.data.data.id,
        payload2: currency,
      });
      localStorage.setItem(
        'userlocation',
        JSON.stringify({
          currentLocationId: response.data.data.id,
          userCountryName: cn,
          userCurrency: currency,
        })
      );
    } catch (error) {}
  };
  // Handle country Id Of User
  // location dropdown
  const handleCountryId = async (cn, rw, currency) => {
    const userloc = JSON.parse(localStorage.getItem('userlocation'));
    try {
      const response = await axios(`${country_id_url}${cn}`);
      dispatch({
        type: COUNTRY_CODE,
        payload: response.data.data.id,
        payload2: cn,
        payload3: rw,
        payload4: currency,
      });
      localStorage.setItem(
        'userlocation',
        JSON.stringify({
          currentLocationId: userloc.currentLocationId,
          userCountryName: userloc.userCountryName,
          userCurrency: userloc.userCurrency,
          countryName: cn,
          countryId: response.data.data.id,
          renderedWord: rw,
          currency,
        })
      );
    } catch (error) {
      console.log('error');
    }
  };

  // Handle city Id Of User
  const handleCityId = async (cityName, rw, currency) => {
    const userloc = JSON.parse(localStorage.getItem('userlocation'));
    dispatch({
      type: CITY_NAME,
      payload: cityName,
      payload2: rw,
      payload3: currency,
    });
    localStorage.setItem(
      'userlocation',
      JSON.stringify({
        currentLocationId: userloc.currentLocationId,
        userCountryName: userloc.userCountryName,
        userCurrency: userloc.userCurrency,
        countryName: '',
        cityName,
        renderedWord: rw,
        currency,
      })
    );
  };
  // استخدم الموقع الحالي
  const myLocationFunction = () => {
    const userloc = JSON.parse(localStorage.getItem('userlocation'));
    dispatch({
      type: COUNTRY_CODE,
      payload: userloc.currentLocationId,
      payload2: userloc.userCountryName,
      payload3: userloc.userCountryName,
      payload4: userloc.userCurrency,
    });
    localStorage.setItem(
      'userlocation',
      JSON.stringify({
        currentLocationId: userloc.currentLocationId,
        userCountryName: userloc.userCountryName,
        userCurrency: userloc.userCurrency,
        countryName: userloc.userCountryName,
        countryId: userloc.currentLocationId,
        renderedWord: userloc.userCountryName,
        currency: userloc.userCurrency,
      })
    );
  };

  // useeffect
  useEffect(() => {
    fetchNavbar(category_url);
  }, []);
  return (
    <MainContext.Provider
      value={{
        ...state,
        openSubmenu,
        closeSubmenu,
        toggleNavbarFunc,
        toggleFilterFunc,
        handleCountryId,
        fetchLocationIp,
        handleCityId,
        fetchValueFromSearch,
        closeSearch,
        imageModelFunc,
        toggleImageModel,
        activeImageFunc,
        myLocationFunction,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export const useMainContext = () => {
  return useContext(MainContext);
};

export default MainProvider;
