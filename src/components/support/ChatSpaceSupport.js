import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSupportContext } from '../../contexts/SupportProvider';
import { useUserContext } from '../../contexts/UserProvider';
import { db } from '../../firebase';
import { image_url } from '../../utils/constants';

const ChatSpaceSupport = () => {
  const { chatId, clientName, clientImage } = useSupportContext();
  const [messages, setMessages] = useState([]);
  const { userInfo } = useUserContext();
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'supportChats', chatId), (doc) => {
        if (doc.data()) {
          setMessages(doc.data().messages);
        }
      });

      return () => {
        unsub();
      };
    };

    chatId && getChats();
  }, [chatId]);
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
                      src={`${image_url}${userInfo.image}`}
                      alt='person2'
                      className='rounded-circle avatar'
                      loading='lazy'
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
                  <img src={m.img} className='chat-image' loading='lazy'></img>
                )}
              </div>
            ) : (
              <div
                className='d-flex align-items-center gap-3 justify-content-end team-chat'
                ref={ref}
              >
                {clientImage && !m.img && (
                  <div className='d-flex flex-column align-items-center'>
                    <img
                      src={`${image_url}${clientImage}`}
                      alt='person2'
                      className='rounded-circle avatar'
                      loading='lazy'
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
                  <img src={m.img} className='chat-image' loading='lazy'></img>
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

export default ChatSpaceSupport;
