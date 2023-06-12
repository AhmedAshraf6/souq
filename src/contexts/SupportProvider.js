import React, { useContext, createContext, useReducer } from 'react';
// import {useUserContext} from './'

const SupportContext = createContext();

export const SupportProvider = ({ children }) => {
  const INITIAL_STATE = {
    chatId: '',
    clientName: '',
    clientImage: '',
  };

  const chatReducer = (state, action) => {
    if (action.type == 'CHANGE_USER') {
      return {
        chatId: action.payload,
        clientName: action.payload2,
        clientImage: action.payload3,
      };
    }

    return state;
  };
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <SupportContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SupportContext.Provider>
  );
};

export const useSupportContext = () => {
  return useContext(SupportContext);
};
