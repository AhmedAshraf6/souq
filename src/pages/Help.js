import React, { useEffect } from 'react';
import ChatWithSupport from '../components/help/ChatWithSupport';
import { useMainContext } from '../contexts/MainProvider';

const Help = () => {
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='help my-5'>
      <div className='container-fluid'>
        <div className='row gy-3'>
          <div className='col-md-2 text-center'>
            <>
              <h3 className='text-primary'>المساعدة</h3>
              <div
                className='btn-group-vertical'
                role='group'
                aria-label='Vertical button group'
              >
                <button
                  type='button'
                  className='btn btn-secondary text-white btn-lg'
                >
                  تحدث معنا
                </button>
              </div>
            </>
          </div>
          <div className='col-md-10'>
            <ChatWithSupport />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Help;
