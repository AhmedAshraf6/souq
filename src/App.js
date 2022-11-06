import React, { Profiler } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PuplishProduct from './pages/PuplishProduct';
import Sell from './pages/Sell';
import Seller from './pages/Seller';
import Wallet from './pages/Wallet';

// import { useGlobalContext } from './contexts/Context';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />}></Route>
            <Route path='seller/:sellerid' element={<Seller />}></Route>
          </Route>
          <Route path='profile'>
            <Route index element={<Profile />} />
            <Route path='wallet' element={<Wallet />} />
            <Route path='editprofile' element={<EditProfile />} />
          </Route>
          <Route path='sell'>
            <Route index element={<Sell />} />
            <Route path='puplish' element={<PuplishProduct />} />
            {/*
            <Route path='editprofile' element={<EditProfile />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
