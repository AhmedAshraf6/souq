import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Ad from '../components/home/Ad';
import Footer from '../components/shared-components/Footer';
import Loading from '../components/shared-components/Loading';
import RequestError from '../components/shared-components/RequestError';
import { useMainContext } from '../contexts/MainProvider';

const Search = () => {
  const {
    toggleNavbarFunc,
    closeSubmenu,
    closeSearch,
    searchLoading,
    searchError,
    searchedAds,
  } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section
        className='home-not-signed color-in-background py-3'
        onClick={closeSearch}
      >
        <div className='container-fluid'>
          <h3 className='py-4 ps-2 text-primary'>اعلانات من البحث</h3>
          <div className='row g-1 gy-2 mx-1'>
            {searchLoading ? (
              <Loading />
            ) : searchError ? (
              <RequestError />
            ) : searchedAds && searchedAds.length > 0 ? (
              <>
                {searchedAds.map((ad) => {
                  return <Ad {...ad} key={ad.id} grid='col-lg-3 col-md-6' />;
                })}
              </>
            ) : (
              <>
                <h3 className='text-center text-primary fw-bold'>
                  لم يتم ايجاد اي اعلان
                </h3>
                <div className='d-flex justify-content-center'>
                  <Link
                    className='btn btn-primary text-white  text-center'
                    to='/'
                  >
                    عودة إلي الرئيسية
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Search;
