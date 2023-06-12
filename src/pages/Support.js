import React from 'react';
import { useEffect } from 'react';
import { useMainContext } from '../contexts/MainProvider';
import SupportChatSpace from '../components/support/SpecifiChat';
import { doc, onSnapshot } from 'firebase/firestore';
import AllSupportChats from '../components/support/AllSupportChats';
import ChatUs from '../components/help/ChatWithSupport';
import { useUserContext } from '../contexts/UserProvider';
import { db } from '../firebase';
import { useState } from 'react';
import chat from '../assets/ICONs/chat/chat.png';

import SpecifiChat from '../components/support/SpecifiChat';
import { useSupportContext } from '../contexts/SupportProvider';
const Support = () => {
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  const { userInfo } = useUserContext();
  const [adminSupport, setAdminSupport] = useState(false);
  const [supportChats, setSupportChats] = useState([]);
  const { chatId } = useSupportContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'support', userInfo.id), (doc) => {
        if (doc.data()) {
          setSupportChats(doc.data());
        }
      });

      return () => {
        unsub();
      };
    };
    if (userInfo.email == 'elqutamy.zeyad15@gmail.com') {
      setAdminSupport(true);
      getChats();
    }
  }, [userInfo.id]);
  return (
    <main className='support my-5'>
      <div className='container-fluid'>
        <div className='row gy-3'>
          <div className='col-md-3 text-center'>
            <AllSupportChats supportChats={supportChats} />
          </div>
          <div className='col-md-9'>
            {chatId ? (
              <SpecifiChat />
            ) : (
              <div className=' bg-primary rounded choose-chat d-flex justify-content-center align-items-center'>
                <div>
                  <img
                    src={chat}
                    alt='chat'
                    className='chat-image '
                    loading='lazy'
                  />
                  <h5 className='text-center text-white fw-bold mt-3'>
                    اختر محادثة لعرضها
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Support;
