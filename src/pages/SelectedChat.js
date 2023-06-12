import React, { useEffect, useState } from 'react';
import AllChats from '../components/chat/AllChats';
import UserChat from '../components/selected-chat/UserChat';

import { useMainContext } from '../contexts/MainProvider';
import { useUserContext } from '../contexts/UserProvider';
const SelectedChat = () => {
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  const { clickedChatInMobile } = useUserContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className='selected-chat my-4 mx-3  '>
      <div className='d-none d-lg-block'>
        <div className='row gy-2 '>
          <div className='col-lg-5'>
            <AllChats />
          </div>
          <div className='col-lg-7 '>
            <UserChat />
          </div>
        </div>
      </div>
      {/* Tablet */}
      <div className='d-block d-lg-none'>
        <div className='row gy-2 '>
          <div className='col-12'>
            {!clickedChatInMobile && <AllChats />}
            {clickedChatInMobile && <UserChat />}
          </div>
          {/* <div className='col-12 '>
            <UserChat />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default SelectedChat;
