import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import person3 from '../../../assets/imgs/person3.png';
import { useSellerCalledContext } from '../../../contexts/CalledSellerProvider';
import { useUserContext } from '../../../contexts/UserProvider';
import { db } from '../../../firebase';
import { image_url } from '../../../utils/constants';

const ChatSpace = () => {
  const [messages, setMessages] = useState([]);
  const { chatId, sellerName, sellerImage } = useSellerCalledContext();
  const { userInfo } = useUserContext();

  const makeIsReadTrue = async () => {
    await updateDoc(doc(db, 'userChats', userInfo.id), {
      [chatId + '.isRead']: 'true',
    });
  };
  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', chatId), (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages);
        makeIsReadTrue();
      }
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <div className='d-flex flex-column gap-2 overflow-auto py-2'>
      {messages.map((m) => {
        return (
          <div key={m.id}>
            {userInfo.id == m.senderId ? (
              <div
                className='d-flex align-items-center gap-3 justify-content-start client-chat'
                ref={ref}
              >
                {userInfo.image && !m.img && (
                  <div className='d-flex flex-column align-items-center'>
                    <img
                      loading='lazy'
                      src={`${image_url}${userInfo.image}`}
                      alt='person2'
                      className='rounded-circle avatar'
                    />
                  </div>
                )}

                {m.text && (
                  <div className='message bg-light py-3 px-2 rounded d-flex '>
                    <p className='text-primary m-0 p-0 fs-6 fw-bold px-2 text-wrap'>
                      {m.text}
                    </p>
                  </div>
                )}
                {m.img && (
                  <img loading='lazy' src={m.img} className='chat-image'></img>
                )}
              </div>
            ) : (
              <div
                className='d-flex align-items-center gap-3 justify-content-end team-chat'
                ref={ref}
              >
                {m.text && (
                  <div className='message bg-light py-3 px-2 rounded d-flex '>
                    <p className='text-primary m-0 p-0 fs-6 fw-bold px-2 text-wrap'>
                      {m.text}
                    </p>
                  </div>
                )}
                {sellerImage && !m.img && (
                  <div className='d-flex flex-column align-items-center'>
                    <img
                      loading='lazy'
                      src={`${image_url}${sellerImage}`}
                      alt='person2'
                      className='rounded-circle avatar'
                    />
                  </div>
                )}
                {m.img && (
                  <img loading='lazy' src={m.img} className='chat-image'></img>
                )}
              </div>
            )}
          </div>
        );
      })}
      {/* Your Message */}
    </div>
  );
};

export default ChatSpace;
