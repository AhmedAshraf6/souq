import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Icons

import person from '../../../assets/imgs/person.png';
import { image_url } from '../../../utils/constants';
import add from '../../../assets/ICONs/add.png';
import bellRing from '../../../assets/ICONs/bellring.png';
import chat from '../../../assets/ICONs/chat.png';
import share from '../../../assets/ICONs/share.png';
import dfaultimage from '../../../assets/imgs/dfaultimage.png';
import debitcard from '../../../assets/ICONs/debitcard.png';
import resume from '../../../assets/ICONs/resume.png';
import blogger from '../../../assets/ICONs/blogger.png';
import w from '../../../assets/ICONs/w.png';
import setting from '../../../assets/ICONs/setting.png';
import help from '../../../assets/ICONs/help.png';
import logout from '../../../assets/ICONs/logout.png';

import { useUserContext } from '../../../contexts/UserProvider';
import Notifications from './Notifications';
import { useState } from 'react';
import { db, realTimedb } from '../../../firebase';
import { onValue, ref, set, update } from 'firebase/database';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import ShareBox from '../../home/ShareBox';
// notification
const Signed = () => {
  const {
    handleLogout,
    userInfo: { id, name, image },
    isAdminSupport,
    handleChatRead,
    chatRead,
  } = useUserContext();
  const [notsCounter, setNotsCounter] = useState(0);
  const [key, setKey] = useState([]);

  const handleNots = () => {
    key.map((a) => {
      update(ref(realTimedb, `/notification/types/${a}`), {
        isRead: 1,
      });
    });
  };
  useEffect(() => {
    if (id) {
      const unSub = onSnapshot(doc(db, 'userChats', id), (doc) => {
        doc.exists() && handleChatRead(doc.data().chatRead);
      });

      return () => {
        unSub();
      };
    }
  }, [id]);

  return (
    <div className='login d-flex align-items-center'>
      <Link to='/chat' className='position-relative'>
        <img
          loading='lazy'
          src={chat}
          alt=''
          className='me-xl-3 me-lg-2 pointer navbar-icon'
        />
        {chatRead && (
          <span className='position-absolute top-0 start-50 translate-middle p-2 bg-danger border border-light rounded-circle'>
            <span className='visually-hidden'>New alerts</span>
          </span>
        )}
      </Link>
      {/* Bellring Dropdown */}
      <div className='dropdown me-xl-3 me-lg-2 '>
        <button
          className='border-0 bg-transparent dropdown-toggle removearrow position-relative'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
          onClick={handleNots}
        >
          <img
            loading='lazy'
            src={bellRing}
            alt=''
            className='fs-3 me-3 pointer navbar-icon'
          />
          {notsCounter > 0 && (
            <span className='position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger'>
              {notsCounter}
              <span className='visually-hidden'>unread messages</span>
            </span>
          )}
        </button>
        <Notifications
          setNotsCounter={setNotsCounter}
          notsCounter={notsCounter}
          setKey={setKey}
        />
      </div>
      <Link to='/ads'>
        <img
          loading='lazy'
          src={add}
          alt='add'
          className='fs-3 me-xl-3 me-lg-2 pointer navbar-icon'
        />
      </Link>
      {/* Profile Dropdown */}
      <div className='dropdown me-xl-3 me-lg-2'>
        <button
          className='border-0 bg-transparent dropdown-toggle'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <img
            loading='lazy'
            src={`${image_url ? image_url + image : dfaultimage}`}
            alt='person'
            className=' navbar-icon rounded-circle'
            aria-expanded='false'
          />
        </button>
        <ul className='dropdown-menu bg-primary text-white '>
          <li className='border-bottom pb-3 dropdown-item'>
            <div className='d-flex'>
              <img
                loading='lazy'
                src={`${image_url}${image}`}
                className='rounded-circle ms-2 image'
                alt='image'
              />
              <div className='d-flex flex-column'>
                <span className='text-end'>أهلا</span>
                <span>{name}</span>
              </div>
            </div>
          </li>
          {/*  text-decoration-none */}
          <li className='border-bottom pb-3'>
            <Link
              className='link d-flex align-items-center mx-3 mt-3 pointer'
              to='/profile/wallet'
            >
              <img
                loading='lazy'
                src={debitcard}
                alt='debitcard'
                className='navbar-icon'
              />
              <h5 className='me-4'>محفظة أدس</h5>
            </Link>
            <Link
              className='link d-flex align-items-center mx-3 mt-3 pointer'
              to='/profile/editprofile'
            >
              <img loading='lazy' src={resume} alt='' className='navbar-icon' />
              <h5 className='me-4'> تعديل الملف الشخصي</h5>
            </Link>
            <Link
              className='link d-flex align-items-center mx-3 mt-3 pointer'
              to='/profile/myads'
            >
              <img
                loading='lazy'
                src={blogger}
                alt=''
                className='navbar-icon'
              />
              <h5 className='me-4'>إعلاناتي</h5>
            </Link>
          </li>
          <li className='border-bottom pb-3 '>
            <div className='link d-flex align-items-center mx-3 mt-3 pointer'>
              <img loading='lazy' src={w} alt='' className='navbar-icon' />
              <h5 className='me-4 text-wrap text-end'>شارك أدس واكسب فلوس</h5>
            </div>

            <Link
              className='link d-flex align-items-center mx-3 mt-3 pointer'
              to='/help'
            >
              <img loading='lazy' src={help} alt='' className='navbar-icon' />
              <h5 className='me-4'>المساعدة</h5>
            </Link>

            <Link
              className='link d-flex align-items-center mx-3 mt-3 pointer'
              to='/profile/settings'
            >
              <img
                loading='lazy'
                src={setting}
                alt='settings'
                className='navbar-icon'
              />
              <h5 className='me-4'> الإعدادات</h5>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <div className='link d-flex align-items-center mx-3 mt-3 pointer pb-3'>
              <img loading='lazy' src={logout} alt='' className='navbar-icon' />
              <h5 className='me-4'>تسجيل الخروج</h5>
            </div>
          </li>
        </ul>
      </div>
      <ShareBox url='https://adsapp.org/#/' />
    </div>
  );
};

export default Signed;
