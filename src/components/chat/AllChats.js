import React from 'react';

import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useUserContext } from '../../contexts/UserProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import ChatBox from './ChatBox';
import { useLocation } from 'react-router-dom';
// import { useUserCalledContext } from '../../contexts/CalledUserProvider';
const AllChats = () => {
  const { chatRead } = useUserContext();
  const { userInfo, handleChatRead, setIsClickedFunc } = useUserContext();
  const makeFunc = async () => {
    handleChatRead(false);
    await updateDoc(doc(db, 'userChats', userInfo?.id), {
      chatRead: false,
    });
  };
  useEffect(() => {
    chatRead && makeFunc();
  }, [chatRead]);
  // Rended All Chats
  const [chats, setChats] = useState([]);
  const [chatsReaded, setChatsReaded] = useState([]);
  const [chatsUnReaded, setChatsUnReaded] = useState([]);
  const [show, setShow] = useState('all');

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', userInfo.id), (doc) => {
        setChats(Object.entries(doc.data()));
        setChatsReaded(() => {
          const a = Object.entries(doc.data()).filter(
            (a) => a[1]?.isRead && a[1]?.isRead == 'true'
          );
          return a;
        });
        setChatsUnReaded(() => {
          const a = Object.entries(doc.data()).filter(
            (a) => a[1]?.isRead && a[1]?.isRead == 'false'
          );
          return a;
        });
      });

      return () => {
        unsub();
      };
    };

    userInfo.id && getChats();
  }, [userInfo.id]);

  // Rended All Chats
  return (
    <div className='all-chats bg-primary rounded py-4  overflow-auto '>
      <div
        className='btn-group mx-2 d-flex flex-column flex-sm-row gap-2 justify-content-center'
        role='group'
      >
        <button
          type='button'
          className={`btn mx-3 fs-5 fw-bold ${
            show == 'all'
              ? 'btn-secondary text-white'
              : 'btn-light text-primary '
          }`}
          onClick={() => setShow('all')}
        >
          الكل
        </button>
        <button
          type='button'
          className={`btn mx-3 fs-5 fw-bold ${
            show == 'read'
              ? 'btn-secondary text-white'
              : 'btn-light text-primary '
          }`}
          onClick={() => setShow('read')}
        >
          مقروئة
        </button>
        <button
          type='button'
          className={`btn mx-3 fs-5 fw-bold ${
            show == 'unread'
              ? 'btn-secondary text-white'
              : 'btn-light text-primary '
          }`}
          onClick={() => setShow('unread')}
        >
          غير مقروئة
        </button>
      </div>

      <div className='border-bottom w-75 mx-auto mt-4'></div>
      {/* chats */}
      <div className='chats mt-3'>
        {show == 'all' ? (
          <ChatBox chats={chats} />
        ) : show == 'read' ? (
          <ChatBox chats={chatsReaded} />
        ) : (
          show == 'unread' && chatsUnReaded && <ChatBox chats={chatsUnReaded} />
        )}
      </div>
    </div>
  );
};

export default AllChats;
