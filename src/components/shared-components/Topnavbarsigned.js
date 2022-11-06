import React from 'react';
import { Link } from 'react-router-dom';
import person from '../../assets/imgs/person.png';
import person2 from '../../assets/imgs/person2.png';
import add from '../../assets/ICONs/add.png';
import bellRing from '../../assets/ICONs/bellring.png';
import chat from '../../assets/ICONs/chat.png';
import share from '../../assets/ICONs/share.png';
import debitcard from '../../assets/ICONs/debitcard.png';
import resume from '../../assets/ICONs/resume.png';
import blogger from '../../assets/ICONs/blogger.png';
import w from '../../assets/ICONs/w.png';
import setting from '../../assets/ICONs/setting.png';
import help from '../../assets/ICONs/help.png';
import logout from '../../assets/ICONs/logout.png';
import loupe from '../../assets/ICONs/loupe.png';

const Topnavbarsigned = () => {
  return (
    <section className='top-navbar-signed  py-3 bg-white'>
      <div className='row'>
        <div className='col-md-2'>
          <h4>logo</h4>
        </div>
        <div className='col-md-3'>
          <div className='dropdown w-100 position-relative h-100'>
            <button
              className='custom-dropdown btn h-100 btn-secondary dropdown-toggle w-100 text-primary fw-bold '
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              مصر
            </button>
            <ul className='dropdown-menu bg-primary w-100'>
              <li>
                <a className='dropdown-item' href='#'></a>
              </li>
            </ul>
            <img
              src={loupe}
              alt='loupe'
              className='position-absolute custom-icon'
            />
          </div>
        </div>
        <div className='col-md-4'>
          <input
            type='text'
            className='form-control search fs-6 fw-bold'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default'
            placeholder='ابحث عما تريد'
          />
        </div>
        <div className='col-md-3'>
          <div className='login d-flex align-items-center'>
            <img src={chat} alt='' className='me-3 pointer navbar-icon' />
            {/* Bellring Dropdown */}
            <div className='dropdown me-3 '>
              <button
                className='border-0 bg-transparent dropdown-toggle removearrow'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <img
                  src={bellRing}
                  alt=''
                  className='fs-3 me-3 pointer navbar-icon'
                />
              </button>
              <ul className='dropdown-menu bill bg-primary text-white '>
                <li className=' '>
                  <h5 className='text-end mx-3'>الإشعارات</h5>
                </li>

                <li className='bg-white borderd'>
                  <a className='dropdown-item' href='#'>
                    <div className='d-flex'>
                      <img
                        src={person}
                        className='rounded-circle ms-2'
                        alt=''
                      />
                      <div className='d-flex flex-column text-primary'>
                        <span className='text-end text-wrap'>زياد فؤاد</span>
                        <span>تمت رؤية المنشور من قبل ذياد فؤاد</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <Link to='/sell'>
              <img src={add} alt='' className='fs-3 me-3 pointer navbar-icon' />
            </Link>
            {/* Profile Dropdown */}
            <div className='dropdown me-3'>
              <button
                className='border-0 bg-transparent dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <img
                  src={person2}
                  alt='person'
                  className=' navbar-icon rounded-circle'
                  aria-expanded='false'
                />
              </button>
              <ul className='dropdown-menu bg-primary text-white '>
                <li className='border-bottom pb-3 dropdown-item'>
                  <div className='d-flex'>
                    <img src={person2} className='rounded-circle ms-2' alt='' />
                    <div className='d-flex flex-column'>
                      <span className='text-end'>أهلا</span>
                      <span>مهيتاب عادل</span>
                    </div>
                  </div>
                </li>
                {/*  text-decoration-none */}
                <li className='border-bottom pb-3'>
                  <Link
                    className='link d-flex align-items-center mx-3 mt-3 pointer'
                    to='/profile/wallet'
                  >
                    <img src={debitcard} alt='' className='navbar-icon' />
                    <h5 className='me-4'>محفظة أدس</h5>
                  </Link>
                  <Link
                    className='link d-flex align-items-center mx-3 mt-3 pointer'
                    to='/profile/editprofile'
                  >
                    <img src={resume} alt='' className='navbar-icon' />
                    <h5 className='me-4'> تعديل الملف الشخصي</h5>
                  </Link>
                  <Link
                    className='link d-flex align-items-center mx-3 mt-3 pointer'
                    to='/profile'
                  >
                    <img src={blogger} alt='' className='navbar-icon' />
                    <h5 className='me-4'>إعلاناتي</h5>
                  </Link>
                </li>
                <li className='border-bottom pb-3 '>
                  <div className='link d-flex align-items-center mx-3 mt-3 pointer'>
                    <img src={w} alt='' className='navbar-icon' />
                    <h5 className='me-4'>شارك أدس واكسب فلوس</h5>
                  </div>
                  <div className='link d-flex align-items-center mx-3 mt-3 pointer'>
                    <img src={help} alt='' className='navbar-icon' />
                    <h5 className='me-4'>المساعدة</h5>
                  </div>
                  <div className='link d-flex align-items-center mx-3 mt-3 pointer'>
                    <img src={setting} alt='' className='navbar-icon' />
                    <h5 className='me-4'> الإعدادات</h5>
                  </div>
                </li>
                <li>
                  <div className='link d-flex align-items-center mx-3 mt-3 pointer pb-3'>
                    <img src={logout} alt='' className='navbar-icon' />
                    <h5 className='me-4'>تسجيل الخروج</h5>
                  </div>
                </li>
              </ul>
            </div>
            <img src={share} alt='' className='fs-3 me-3 pointer navbar-icon' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topnavbarsigned;
