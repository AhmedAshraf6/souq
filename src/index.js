import React from 'react';
import ReactDOM from 'react-dom/client';
// All Contexts
import { AdsProvider } from './contexts/AdsProvider';
import MainProvider from './contexts/MainProvider';
// All Contexts
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './style.scss';
import App from './App';
import { UserProvider } from './contexts/UserProvider';
import FilterProvider from './contexts/FilterProvider';
import { CalledSellerProvider } from './contexts/CalledSellerProvider';
import { SupportProvider } from './contexts/SupportProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <MainProvider>
        <AdsProvider>
          <FilterProvider>
            <CalledSellerProvider>
              <SupportProvider>
                <App />
              </SupportProvider>
            </CalledSellerProvider>
          </FilterProvider>
        </AdsProvider>
      </MainProvider>
    </UserProvider>
  </React.StrictMode>
);
