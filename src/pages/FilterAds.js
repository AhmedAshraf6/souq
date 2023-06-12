import React, { useEffect } from 'react';
import { BsFillFilterSquareFill } from 'react-icons/bs';
import FilterBody from '../components/filter-ads/FilterBody';
import FilterRight from '../components/filter-ads/FilterRight';
import FilterTop from '../components/filter-ads/FilterTop';
import Footer from '../components/shared-components/Footer';
import { useMainContext } from '../contexts/MainProvider';
import useScript from '../hooks/useScript';
import { url_for_advertise } from '../utils/constants';

const FilterAds = () => {
  useScript(url_for_advertise);

  const { toggleFilterFunc, toggleNavbarFunc, closeSubmenu, closeSearch } =
    useMainContext();

  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className='filter-ads  '>
        <div className='container-fluid'>
          <div className='row'>
            {/* Desktop Devices */}
            <div className='d-none d-lg-block col-12'>
              <FilterTop />
            </div>
            <div className='d-none d-lg-block col-lg-3'>
              <FilterRight />
            </div>
            {/* Desktop Devices */}
            {/* Small Devices And Desktops */}
            <div className='d-block d-lg-none col-12'>
              <div className='py-3'>
                <button
                  className='btn btn-primary  fw-bold d-flex align-items-center'
                  onClick={() => toggleFilterFunc(true)}
                >
                  فلاتر
                  <BsFillFilterSquareFill className='mx-2' />
                </button>
              </div>
            </div>
            {/* Small Devices And Desktops */}
            <div className='col-lg-9'>
              <FilterBody />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FilterAds;
