import React from 'react';
import { useEffect } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import { useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import { image_url, seller_url, supportadmin } from '../../utils/constants';
import { useRef } from 'react';
import axios from 'axios';
const ChatSpaceWithSupport = () => {
  const { userInfo } = useUserContext();
  const [messages, setMessages] = useState([]);
  const [imageSupport, setImageSupport] = useState('');
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, 'supportChats', `${supportadmin}${userInfo.id}`),
        (doc) => {
          if (doc.data()) {
            setMessages(doc.data().messages);
          }
        }
      );
      return () => {
        unsub();
      };
    };
    userInfo.id && getChats();
  }, [userInfo.id]);

  const refMsg = useRef();
  useEffect(() => {
    refMsg.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  const getImageSupport = async () => {
    const response = await axios(`${seller_url}${supportadmin}`);
    setImageSupport(response?.data?.data[0]?.User?.image);
  };
  useEffect(() => {
    getImageSupport();
  }, []);
  return (
    <div className='d-flex flex-column gap-2 overflow-auto py-2'>
      {messages &&
        messages.map((m) => {
          return (
            <div key={m.id}>
              {userInfo.id == m.senderId ? (
                <div
                  className='d-flex align-items-center gap-3 justify-content-start client-chat'
                  ref={refMsg}
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
                    <img
                      src={m.img}
                      className='chat-image'
                      loading='lazy'
                    ></img>
                  )}
                </div>
              ) : (
                <div
                  className='d-flex align-items-center gap-3 justify-content-end team-chat'
                  ref={refMsg}
                >
                  {imageSupport && !m.img && (
                    <div className='d-flex flex-column align-items-center'>
                      <img
                        src={`${image_url}${imageSupport}`}
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
                    <img
                      src={m.img}
                      className='chat-image'
                      loading='lazy'
                    ></img>
                  )}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ChatSpaceWithSupport;
