import React, { createContext, useContext, useReducer } from 'react';
import { reducers } from './Reducers';
const AppProvider = createContext();

const initallState = {
  ahmed: 'ahmed is here ok!!!!',
};

const ContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initallState);

  return (
    <AppProvider.Provider value={{ ...state }}>{children}</AppProvider.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppProvider);
};

export default ContextApi;
