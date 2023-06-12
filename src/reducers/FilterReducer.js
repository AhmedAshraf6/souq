import {
  GET_CATEGORY_SUCCESS,
  GET_CITY_SUCCESS,
  GET_FILTERED_ERROR,
  GET_FILTERED_SUCCESS,
  GET_PAGINATION_ADS,
  GET_PRICE_SUCCESS,
  LOAD_FILTERED_ADS,
} from '../actions';

export const FilterReducer = (state, action) => {
  if (action.type === LOAD_FILTERED_ADS) {
    return { ...state, filterLoaded: true };
  }
  if (action.type === GET_FILTERED_SUCCESS) {
    return {
      ...state,
      filterLoaded: false,
      filterError: false,
      filteredAds: action.payload,
      lastUrl: action.payload2,
      lastPage: action.payload3,
    };
  }
  if (action.type === GET_FILTERED_ERROR) {
    return { ...state, filterLoaded: false, filterError: true };
  }
  if (action.type === GET_PAGINATION_ADS) {
    return {
      ...state,
      filterLoaded: false,
      filterError: false,
      filteredAds: action.payload,
      currentPage: action.payload2,
    };
  }
  if (action.type === GET_CATEGORY_SUCCESS) {
    if (state.filterLoaded) {
      return {
        ...state,
        filterLoaded: false,
        filterError: false,
        filteredAds: action.payload,
        currentPage: 1,
        lastPage: action.payload2,
        lastUrl: action.payload3,
        lastCat: action.payload4,
      };
    }
  }
  if (action.type === GET_CITY_SUCCESS) {
    return {
      ...state,
      filterLoaded: false,
      filterError: false,
      filteredAds: action.payload,
      currentPage: 1,
      lastPage: action.payload2,
      lastUrl: action.payload3,
    };
  }
  if (action.type === GET_PRICE_SUCCESS) {
    return {
      ...state,
      filterLoaded: false,
      filterError: false,
      filteredAds: action.payload,
      currentPage: 1,
      lastPage: action.payload2,
      lastUrl: action.payload3,
    };
  }

  return state;
};
