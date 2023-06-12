import React, { useContext, createContext, useReducer } from 'react';
import { useUserContext } from './UserProvider';
// import {useUserContext} from './'

const calledSellerContext = createContext();

export const CalledSellerProvider = ({ children }) => {
  const { userInfo } = useUserContext();

  const INITIAL_STATE = {
    chatId: 'null',
    sellerCalled: '',
    sellerName: '',
    sellerImage: '',
    sellerPhone: '',
  };

  const chatReducer = (state, action) => {
    if (action.type == 'CHANGE_USER') {
      return {
        sellerCalled: action.payload,
        chatId:
          userInfo.id > action.payload
            ? userInfo.id + action.payload
            : action.payload + userInfo.id,
        sellerName: action.payload2,
        sellerImage: action.payload3,
        sellerPhone: action.payload4,
      };
    }

    return state;
  };
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <calledSellerContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </calledSellerContext.Provider>
  );
};

export const useSellerCalledContext = () => {
  return useContext(calledSellerContext);
};
