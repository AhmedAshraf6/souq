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

export const MainReducer = (state, action) => {
  if (action.type === DETECT_NAVBAR) {
    return { ...state, navbarStatus: action.payload };
  }
  if (action.type === DETECT_FILTER) {
    return { ...state, filterStatus: action.payload };
  }
  if (action.type === IMAGE_MODEL) {
    return {
      ...state,
      imagesInsideModel: action.payload,
    };
  }
  if (action.type === ACTIVE_IMAGE_CHANGE) {
    return {
      ...state,
      activeImage: action.payload,
    };
  }
  if (action.type === DETECT_IMAGE_MODEL) {
    return {
      ...state,
      imageModel: action.payload,
    };
  }
  if (action.type === GET_CATEGORIES) {
    const sublinks = action.payload.map((a) => {
      const links = a.rel.map((x) => {
        return { label: x.name_ar, subcatid: x.id };
      });
      return { page: a.name_ar, links, catid: a.id };
    });
    return { ...state, sublinks, allCats: action.payload };
  }
  if (action.type === OPEN_SUBMENU) {
    const page = action.payload3.find((link) => link.page === action.payload1);
    return { ...state, page, location: action.payload2, isSubmenuOpen: true };
  }
  if (action.type === CLOSE_SUBMENU) {
    return {
      ...state,
      isSubmenuOpen: false,
    };
  }
  if (action.type === CHANGE_DATA_FROM_LOCALSORAGE) {
    return {
      ...state,
      currentLocationId: action.payload,
      userCurrency: action.payload2,
      countryName: action.payload3,
      cityName: action.payload4,
      renderedWord: action.payload5,
      currency: action.payload6,
      countryId: action.payload7,
    };
  }
  if (action.type === COUNTRY_CODE) {
    return {
      ...state,
      countryId: action.payload,
      countryName: action.payload2,
      renderedWord: action.payload3,
      currency: action.payload4,
    };
  }
  if (action.type === CITY_NAME) {
    return {
      ...state,
      cityName: action.payload,
      renderedWord: action.payload2,
      currency: action.payload3,
      countryName: '',
    };
  }
  if (action.type === USER_LOCATION) {
    return {
      ...state,
      currentLocationId: action.payload,
      userCurrency: action.payload2,
      countryId: action.payload,
    };
  }
  if (action.type === GET_SEARCH_SUCCES) {
    return {
      ...state,
      searchedAds: action.payload,
      searchLoading: false,
    };
  }
  if (action.type === GET_SEARCH_LOADING) {
    return {
      ...state,
      searchLoading: true,
    };
  }
  if (action.type === GET_SEARCH_ERROR) {
    return {
      ...state,
      searchError: true,
      searchLoading: false,
    };
  }
  if (action.type === CLOSE_SEARCH) {
    return {
      ...state,
      openSearch: false,
    };
  }
  return state;
};
