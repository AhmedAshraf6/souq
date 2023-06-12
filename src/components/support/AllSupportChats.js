import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSupportContext } from '../../contexts/SupportProvider';
import photocamera from '../../assets/ICONs/photocamera.png';
import { image_url, seller_url, supportadmin } from '../../utils/constants';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const AllSupportChats = ({ supportChats }) => {
  const { dispatch, chatId } = useSupportContext();
  const { pathname } = useLocation();

  const handleSelectCLient = async (chatid, name, image) => {
    // this change previos chat and mae is read true beacuse we were in this chat and turned to another
    if (chatId) {
      await updateDoc(doc(db, 'support', supportadmin), {
        [chatId + '.isRead']: 'true',
      });
    }
    dispatch({
      type: 'CHANGE_USER',
      payload: chatid,
      payload2: name,
      payload3: image,
    });
    await updateDoc(doc(db, 'support', supportadmin), {
      [chatid + '.isRead']: 'true',
    });
  };

  return (
    <div className='chats mt-3'>
      {Object.entries(supportChats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => {
          // console.log(chat[0]);
          return (
            <div
              className='box text-decoration-none bg-light rounded mx-1 text-primary d-flex justify-content-between flex-column flex-sm-row py-3 mt-3 pointer'
              key={chat[0]}
            >
              <div
                className='d-flex align-items-center'
                onClick={() =>
                  handleSelectCLient(
                    chat[0],
                    chat[1].clientInfo.name,
                    chat[1].clientInfo.image
                  )
                }
              >
                <div className='d-flex align-items-center'>
                  <img
                    src={`${image_url}${chat[1].clientInfo.image}`}
                    alt='person'
                    className='avatar rounded-circle mx-2'
                    loading='lazy'
                  />
                  <div className='mx-3'>
                    <h4>{chat[1].clientInfo.name}</h4>
                    {chat[1].lastMessage?.text &&
                    chat[1].lastMessage?.text == 'صورة' ? (
                      <>
                        <span
                          className={`${
                            (chat[1]?.isRead && chat[1]?.isRead == 'true') ||
                            chat[0] == chatId
                              ? 'fw-lighter text-muted'
                              : 'fw-semibold fs-6'
                          }`}
                        >
                          {chat[1].lastMessage?.text}
                        </span>
                        <img
                          src={photocamera}
                          alt=''
                          className='chat-icon'
                          loading='lazy'
                        />
                      </>
                    ) : (
                      <span
                        className={`${
                          (chat[1]?.isRead && chat[1]?.isRead == 'true') ||
                          chat[0] == chatId
                            ? 'fw-lighter text-muted'
                            : 'fw-semibold fs-6'
                        }`}
                      >
                        {chat[1].lastMessage?.text &&
                        chat[1].lastMessage.text.length <= 10
                          ? chat[1].lastMessage?.text
                          : `${chat[1].lastMessage.text.slice(0, 10)}...`}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllSupportChats;
