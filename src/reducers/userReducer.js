import {
  ADMIN_SUPPORT,
  CHANGE_CHAT_READ,
  CHANGE_CLICKED_CHAT,
  GET_USERADS,
  GET_USERADS_ERROR,
  GET_USERADS_LOAD,
  LOGIN_LOADING,
  RESET_PAGINATION,
  SET_TOKEN,
  USER_INFO,
} from '../actions';
import { USER_LOGOUT } from '../actions';
import { USER_WALLET } from '../actions';
const userReducer = (state, action) => {
  if (action.type === SET_TOKEN) {
    return { ...state, token: action.payload };
  }
  if (action.type === USER_LOGOUT) {
    if (action.payload) {
      localStorage.removeItem('login');
      return { ...state, token: '' };
    }
  }
  if (action.type === USER_WALLET) {
    return { ...state, wallet: action.payload };
  }
  if (action.type === USER_INFO) {
    return { ...state, userInfo: action.payload };
  }
  if (action.type === ADMIN_SUPPORT) {
    return { ...state, isAdminSupport: true };
  }
  if (action.type === LOGIN_LOADING) {
    return { ...state, isLoading: action.payload };
  }
  if (action.type === CHANGE_CHAT_READ) {
    return { ...state, chatRead: action.payload };
  }
  if (action.type === CHANGE_CLICKED_CHAT) {
    return { ...state, clickedChatInMobile: action.payload };
  }
  if (action.type === GET_USERADS_LOAD) {
    return { ...state, loadedAds: true };
  }
  if (action.type === GET_USERADS_ERROR) {
    return { ...state, loadedAds: false, adsError: true };
  }
  if (action.type === GET_USERADS) {
    return {
      ...state,
      loadedAds: false,
      userAds: action.payload,
      currentPage: action.payload2,
      lastPage: action.payload3,
      url: action.payload4,
    };
  }
  if (action.type === RESET_PAGINATION) {
    return { ...state, currentPage: 1, lastPage: '', url: '' };
  }

  return state;
};
export default userReducer;
