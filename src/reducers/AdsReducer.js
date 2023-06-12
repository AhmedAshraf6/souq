import {
  GET_ALLADS_SUCCESS,
  GET_ALLADS_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_ALLADS_LOADING,
  GET_MORE_ADS,
  GET_MORE_ADS_ERROR,
  GET_MORE_ADS_LOADING,
  FETCH_FAV_IDS,
  GET_SINGLE_PRODUCT_LOADING,
} from '../actions';

const AdsReducer = (state, action) => {
  if (action.type == GET_ALLADS_LOADING) {
    return { ...state, allAdsLoading: true };
  }
  if (action.type === GET_ALLADS_SUCCESS) {
    return {
      ...state,
      allAds: action.payload,
      allAdsLoading: false,
      allAdsError: false,
      lastPage: action.payload2,
    };
  }
  if (action.type === GET_ALLADS_ERROR) {
    return { ...state, allAdsError: true, allAdsLoading: false };
  }

  if (action.type === GET_SINGLE_PRODUCT_LOADING) {
    return {
      ...state,
      singleAdLoading: true,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      singleAdLoading: false,
      singleAd: action.payload,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      singleAdLoading: false,
      singleAdError: true,
    };
  }
  if (action.type === GET_MORE_ADS) {
    return {
      ...state,
      moreAdsLoading: false,
      allAds: [...state.allAds, ...action.payload],
      currentPage: action.payload2,
    };
  }
  if (action.type === 'TURN_TO_SPECIAL') {
    return {
      ...state,
      isSpecial: true,
      lastPage: 'as',
      currentPage: 1,
      lastPageSpecial: action.payload,
    };
  }
  if (action.type === 'TURN_TO_PAID_PACKAGE') {
    return {
      ...state,
      isSpecial: false,
      isPaidPackage: true,
      lastPageSpecial: 'as',
      currentPage: 1,
      lastPagePaidPackage: action.payload,
    };
  }
  if (action.type === 'TURN_TO_FREE') {
    return {
      ...state,
      isFree: true,
      isPaidPackage: false,
      isSpecial: false,
      lastPageSpecial: 'as',
      currentPage: 1,
      lastPagePaidPackage: 'sda',
    };
  }
  if (action.type === GET_MORE_ADS_ERROR) {
    return { ...state, allAdsError: true, moreAdsLoading: false };
  }
  if (action.type === GET_MORE_ADS_LOADING) {
    return { ...state, moreAdsLoading: true };
  }
  if (action.type === FETCH_FAV_IDS) {
    return {
      ...state,
      favAdsIds: action.payload,
      favAdsIdsInFavouritePage: action.payload2,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default AdsReducer;
