import React, { createContext, useContext, useReducer } from 'react';
import { FilterReducer } from '../reducers/FilterReducer';

import { useEffect } from 'react';
import axios from 'axios';
import {
  GET_CATEGORY_SUCCESS,
  GET_CITY_SUCCESS,
  GET_FILTERED_ERROR,
  GET_FILTERED_SUCCESS,
  GET_PAGINATION_ADS,
  GET_PRICE_SUCCESS,
  LOAD_FILTERED_ADS,
} from '../actions';
import { useMainContext } from './MainProvider';
import {
  category_filter_url,
  city_url,
  price_filter_url,
} from '../utils/constants';
const FilterContext = createContext();

const initallState = {
  filteredAds: [],
  filterLoaded: false,
  filterError: false,
  currentPage: 1,
  lastPage: '',
  lastUrl: '',
  lastCat: '',
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, initallState);
  const { countryName, toggleFilterFunc, cityName } = useMainContext();
  // Filter
  const filterBasedUrl = async (url) => {
    dispatch({ type: LOAD_FILTERED_ADS });
    try {
      const res = await axios(`${url}/${state.lastCat}/${countryName}?page=1`);
      dispatch({
        type: GET_FILTERED_SUCCESS,
        payload: res.data.data.data,
        payload2: url,
        payload3: res.data.data.meta.last_page,
      });
    } catch (error) {
      dispatch({
        type: GET_FILTERED_ERROR,
      });
    }
  };

  // Handle Pagination
  const handlePagination = async (numpage) => {
    dispatch({ type: LOAD_FILTERED_ADS });
    if (countryName) {
      try {
        const res = await axios(
          `${state.lastUrl}/${state.lastCat}/${countryName}?page=${numpage}`
        );
        dispatch({
          type: GET_PAGINATION_ADS,
          payload: res.data.data.data,
          payload2: numpage,
        });
      } catch (error) {
        dispatch({
          type: GET_FILTERED_ERROR,
        });
      }
    } else {
      try {
        const res = await axios(
          `${state.lastUrl}/${cityName}/${state.lastCat}?page=${numpage}`
        );
        dispatch({
          type: GET_PAGINATION_ADS,
          payload: res.data.data.data,
          payload2: numpage,
        });
      } catch (error) {
        dispatch({
          type: GET_FILTERED_ERROR,
        });
      }
    }
  };

  const fetchAdsBasedCat = async (catid) => {
    dispatch({ type: LOAD_FILTERED_ADS });
    // state.filteredAds = [  ];
    if (countryName) {
      try {
        const res = await axios(
          `${category_filter_url}/${catid}/${countryName}`
        );
        // (state.filterLoaded);
        dispatch({
          type: GET_CATEGORY_SUCCESS,
          payload: res.data.data.data,
          payload2: res.data.data.meta.last_page,
          payload3: category_filter_url,
          payload4: catid,
        });
      } catch (error) {
        dispatch({
          type: GET_FILTERED_ERROR,
        });
      }
    } else {
      try {
        const res = await axios(`${city_url}/${cityName}/${catid}`);
        dispatch({
          type: GET_CATEGORY_SUCCESS,
          payload: res.data.data.data,
          payload2: res.data.data.meta.last_page,
          payload3: city_url,
          payload4: catid,
        });
      } catch (error) {
        dispatch({
          type: GET_FILTERED_ERROR,
        });
      }
    }
  };

  const fetchAdsBasedCity = async (cityname) => {
    dispatch({ type: LOAD_FILTERED_ADS });
    try {
      const res = await axios(`${city_url}/${cityname}`);
      dispatch({
        type: GET_CITY_SUCCESS,
        payload: res.data.data.data,
        payload2: res.data.data.meta.last_page,
        payload3: city_url,
      });
    } catch (error) {
      dispatch({
        type: GET_FILTERED_ERROR,
      });
    }
  };
  // For Mobile Filter
  useEffect(() => {
    toggleFilterFunc(false);
  }, [state.filterLoaded]);
  // price min max
  const HandlePriceMinMax = async (min, max) => {
    dispatch({ type: LOAD_FILTERED_ADS });
    try {
      const res = await axios.post(
        `${price_filter_url}`,
        JSON.stringify({
          min_price: min,
          max_price: max,
          category_id: state.lastCat,
          country_code: countryName,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch({
        type: GET_PRICE_SUCCESS,
        payload: res.data.data.data,
        payload2: res.data.data.meta.last_page,
        payload3: price_filter_url,
      });
    } catch (error) {
      dispatch({
        type: GET_FILTERED_ERROR,
      });
    }
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        filterBasedUrl,
        handlePagination,
        fetchAdsBasedCat,
        fetchAdsBasedCity,
        HandlePriceMinMax,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
