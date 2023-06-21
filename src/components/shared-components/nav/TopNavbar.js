import React from 'react';
import { useMainContext } from '../../../contexts/MainProvider';
import LocationDropwon from './LocationDropwon';
import SearchInput from './SearchInput';
import { FaBars } from 'react-icons/fa';
import Signed from './Signed';
import NotSigned from './NotSigned';
import { useUserContext } from '../../../contexts/UserProvider';
import ads from '../../../assets/ICONs/ads.png';
import loc from '../../../assets/ICONs/pin.png';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  const { closeSubmenu, toggleNavbarFunc } = useMainContext();
  const {
    token,
    userInfo: { name },
  } = useUserContext();
  const userloc = JSON.parse(localStorage.getItem('userlocation'));

  return (
    <section
      className='top-navbar py-3 bg-white fixed fixed-top '
      onMouseOver={closeSubmenu}
    >
      {/* Start Destop */}
      <div className='d-none d-lg-block'>
        <div className='row '>
          <div className='col-lg-2'>
            <Link to='/' className='pointer '>
              <img loading='lazy' src={ads} alt='logo' className='w-100 logo' />
            </Link>
          </div>
          {/* Location DropDown */}
          <div className=' col-lg-3'>
            {/* <LocationDropwon /> */}
            <div className='d-flex flex-wrap gap-3 align-items-center justify-content-center text-primary'>
              <span>مرحبا {name && name}</span>
              <div className='fw-bold'>
                {userloc.userCountryName}
                <img
                  loading='lazy'
                  src={loc}
                  alt='location'
                  className='navbar-icon'
                />
              </div>
            </div>
          </div>
          {/* Search */}
          <div className=' col-lg-4'>
            <SearchInput />
          </div>
          <div className=' col-lg-3'>
            {token && <Signed />}
            {!token && <NotSigned />}
          </div>
        </div>
      </div>
      {/* End Destop */}

      {/* Start Tablet And Phones */}
      <div className='d-block d-lg-none'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='logo w-25'>
            <Link to='/' className='pointer '>
              <img
                loading='lazy'
                src={ads}
                alt='logo'
                className=' w-100 logo'
              />
            </Link>
          </div>
          <div className='bar mx-3 pointer text-primary'>
            <FaBars onClick={() => toggleNavbarFunc(true)} />
          </div>
        </div>
        <div className='mt-2 mx-3 '>
          <SearchInput />
        </div>
        <div className='mt-4 mx-3'>
          <div className='d-flex flex-wrap gap-3 align-items-center justify-content-center text-primary'>
            <span>مرحبا {name && name}</span>
            <div className='fw-bold'>
              {userloc.userCountryName}
              <img
                loading='lazy'
                src={loc}
                alt='location'
                className='navbar-icon'
              />
            </div>
          </div>
        </div>
      </div>
      {/* Start Tablet And Phones */}
    </section>
  );
};

export default TopNavbar;
