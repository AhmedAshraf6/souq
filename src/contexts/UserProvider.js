import axios from 'axios';
import React, { useContext, createContext, useReducer } from 'react';
import dfaultimage from '../assets/imgs/dfaultimage.png';
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
} from '../actions';
import { USER_LOGOUT } from '../actions';
import { USER_WALLET } from '../actions';
import { USER_INFO } from '../actions';
import { logout_url } from '../utils/constants';
import { wallet_url } from '../utils/constants';
import { user_info_url } from '../utils/constants';
import reducer from '../reducers/userReducer';
import { useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const initialState = {
  token: '',
  wallet: {},
  userInfo: {},
  isAdminSupport: false,
  isLoading: false,
  chatRead: false,
  clickedChatInMobile: false,
  userAds: [],
  loadedAds: false,
  adsError: false,
  currentPage: 1,
  lastPage: '',
  url: '', // Url user for pagination when u click on number 1,2,3
};
const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChatRead = (chatRead) => {
    dispatch({ type: CHANGE_CHAT_READ, payload: chatRead });
  };
  const handleTokenRequest = (token) => {
    dispatch({ type: SET_TOKEN, payload: token });
  };
  const isAdminSupportFunc = () => {
    dispatch({ type: ADMIN_SUPPORT });
  };
  // Handle Clicked chat in  mobile and tablet
  const setIsClickedFunc = (val) => {
    dispatch({ type: CHANGE_CLICKED_CHAT, payload: val });
  };
  useEffect(() => {
    const localToken = JSON.parse(localStorage.getItem('login'));
    if (localToken) {
      handleTokenRequest(localToken.token);
    }
  }, []);
  // Handle Loading
  const handleLoading = (load) => {
    dispatch({ type: LOGIN_LOADING, payload: load });
  };
  // HandleLogout
  const handleLogout = async () => {
    try {
      const response = await axios(logout_url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch({ type: USER_LOGOUT, payload: response.data.success });
    } catch (error) {
      dispatch({ type: USER_LOGOUT, payload: 'a' });
    }
  };

  // HandleWallet
  const handleWallet = async () => {
    try {
      const response = await axios(wallet_url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch({ type: USER_WALLET, payload: response.data.data });
    } catch (error) {}
  };
  // Add Id To fireBase After login
  const addIdToFirebase = async (idUserInfo, nameUserInfo) => {
    try {
      //create user on firestore
      const user = await getDoc(doc(db, 'users', idUserInfo));
      if (!user.exists()) {
        await setDoc(doc(db, 'users', idUserInfo), {
          id: idUserInfo,
          name: nameUserInfo,
        });

        //create empty user chats on firestore
        await setDoc(doc(db, 'userChats', idUserInfo), {});
      }
    } catch (error) {}
  };
  // Handle User Info
  const HandleUserInfo = async () => {
    try {
      const response = await axios(user_info_url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.token}`,
        },
      });

      addIdToFirebase(response.data.id, response.data.name);

      dispatch({ type: USER_INFO, payload: response.data });
    } catch (error) {}
  };
  // All Ads
  const fetchAllAds = async (url) => {
    dispatch({ type: GET_USERADS_LOAD });
    try {
      const response = await axios(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch({ type: GET_USERADS, payload: response.data.data });
    } catch (error) {
      dispatch({ type: GET_USERADS_ERROR });
    }
  };
  // Ads By Status
  const fetchUserAdsByStatus = async (url) => {
    dispatch({ type: GET_USERADS_LOAD });
    try {
      const response = await axios(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.token}`,
        },
      });

      dispatch({
        type: GET_USERADS,
        payload: response.data.data.data,
        payload2: response.data.data.meta.current_page,
        payload3: response.data.data.meta.last_page,
        payload4: url,
      });
      // (response.data.data);
    } catch (error) {
      dispatch({ type: GET_USERADS_ERROR });
    }
  };
  const handlePagination = async (numPage) => {
    dispatch({ type: GET_USERADS_LOAD });
    try {
      const response = await axios(`${state.url}?page=${numPage}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch({
        type: GET_USERADS,
        payload: response.data.data.data,
      });
    } catch (error) {
      dispatch({ type: GET_USERADS_ERROR });
    }
  };
  const makePaginationReset = () => {
    dispatch({ type: RESET_PAGINATION });
  };
  useEffect(() => {
    if (state.token) {
      HandleUserInfo();
    }
  }, [state.token]);
  return (
    <userContext.Provider
      value={{
        ...state,
        handleTokenRequest,
        handleLogout,
        handleWallet,
        HandleUserInfo,
        isAdminSupportFunc,
        handleLoading,
        handleChatRead,
        setIsClickedFunc,
        fetchAllAds,
        makePaginationReset,
        fetchUserAdsByStatus,
        handlePagination,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(userContext);
};
