import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ShareLayout from './components/shared-components/ShareLayout';
import Loading from './components/shared-components/Loading';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';

// App Pages With Lazy load
// Home
const Home = lazy(() => import('./pages/Home'));
const SingleProduct = lazy(() => import('./pages/SingleProduct'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const IsAdminSupport = lazy(() =>
  import('./components/shared-components/IsAdminSupport')
);
const CommonQuestions = lazy(() => import('./pages/CommonQuestions'));
const Search = lazy(() => import('./pages/Search'));
const Seller = lazy(() => import('./pages/Seller'));
const FilterAds = lazy(() => import('./pages/FilterAds'));
// profile
const RequireAuth = lazy(() =>
  import('./components/shared-components/RequireAuth')
);
const Profile = lazy(() => import('./pages/Profile'));
const Wallet = lazy(() => import('./pages/Wallet'));
const EditProfile = lazy(() => import('./pages/EditProfile'));
const Settings = lazy(() => import('./pages/Settings'));
const PuplishProduct = lazy(() => import('./pages/PuplishProduct'));
const Sell = lazy(() => import('./pages/Sell'));
const Chat = lazy(() => import('./pages/Chat'));
const SelectedChat = lazy(() => import('./pages/SelectedChat'));
const EditAdd = lazy(() => import('./pages/EditAdd'));
const EditPackage = lazy(() => import('./pages/EditPackage'));
const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path='/' element={<ShareLayout />}>
                <Route index element={<Home />}></Route>
                <Route
                  path='singleproduct/:adid'
                  element={<SingleProduct />}
                ></Route>
                <Route
                  path='resetpass/:idreset'
                  element={<ResetPassword />}
                ></Route>
                <Route path='help' element={<IsAdminSupport />}></Route>
                <Route
                  path='commonquestions'
                  element={<CommonQuestions />}
                ></Route>
                <Route path='search' element={<Search />}></Route>
                <Route path='seller/:sellerid' element={<Seller />}></Route>
                <Route
                  path='category/:cat/:subcat/:catid/:subcatid'
                  element={<FilterAds />}
                ></Route>
                <Route
                  path='categoryPage/:cat/:catid/'
                  element={<FilterAds />}
                ></Route>
                <Route path='categoryPage' element={<FilterAds />}></Route>
              </Route>
              <Route path='profile' element={<RequireAuth />}>
                <Route path='myads' element={<Profile />} />
                <Route path='wallet' element={<Wallet />} />
                <Route path='editprofile' element={<EditProfile />} />
                <Route path='settings' element={<Settings />} />
              </Route>
              <Route path='ads' element={<RequireAuth />}>
                <Route index element={<Sell />} />
                <Route
                  path='puplish/:mainid/:subid/:namecat'
                  element={<PuplishProduct />}
                />
                <Route path='edit/:adid' element={<EditAdd />} />
                <Route path='editpackage/:adid' element={<EditPackage />} />
              </Route>
              <Route path='chat' element={<RequireAuth footer='nofooter' />}>
                <Route index element={<Chat />} />
                <Route path='user/:id' element={<SelectedChat />} />
              </Route>
            </Routes>
          </Suspense>
        </HashRouter>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        <ToastContainer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
