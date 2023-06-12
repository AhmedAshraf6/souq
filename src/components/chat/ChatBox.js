import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { image_url } from '../../utils/constants';
import photocamera from '../../assets/ICONs/photocamera.png';
import { useUserContext } from '../../contexts/UserProvider';
import { useSellerCalledContext } from '../../contexts/CalledSellerProvider';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
const ChatBox = ({ chats }) => {
  const { userInfo, setIsClickedFunc } = useUserContext();
  const { chatId, dispatch } = useSellerCalledContext();
  const { pathname } = useLocation();

  const handleSelectSeller = async (u, name, image, phone) => {
    if (chatId) {
      await updateDoc(doc(db, 'userChats', userInfo.id), {
        [chatId + '.isRead']: 'true',
      });
    }
    dispatch({
      type: 'CHANGE_USER',
      payload: u,
      payload2: name,
      payload3: image,
      payload4: phone,
    });
    await updateDoc(doc(db, 'userChats', userInfo.id), {
      [`${userInfo.id > u ? userInfo.id + u : u + userInfo.id}` + '.isRead']:
        'true',
    });
  };
  return (
    <>
      {chats &&
        chats.length > 0 &&
        chats
          .sort((a, b) => b[1].date - a[1].date)
          .map((chat) => {
            return (
              <div key={chat[0]}>
                {chat[1].lastMessage?.text && (
                  <Link
                    className='box text-decoration-none bg-light rounded mx-1 text-primary d-flex justify-content-between flex-column flex-sm-row py-3 mt-3'
                    to={`/chat/user/${chat[1].sellerInfo.id}`}
                    onClick={() => {
                      handleSelectSeller(
                        chat[1].sellerInfo.id,
                        chat[1].sellerInfo.name,
                        chat[1].sellerInfo.image,
                        chat[1].sellerInfo.phone
                      );
                      setIsClickedFunc(true);
                    }}
                    key={chat[0]}
                  >
                    <div className='d-flex align-items-center'>
                      <img
                        src={`${image_url}${chat[1].sellerInfo.image}`}
                        alt='person'
                        className='avatar rounded-circle mx-2'
                      />
                      <div className='mx-3'>
                        <h4>{chat[1].sellerInfo.name}</h4>
                        {chat[1].lastMessage?.text &&
                        chat[1].lastMessage?.text == 'صورة' ? (
                          <>
                            <span
                              className={`${
                                chat[1]?.isRead == 'true' ||
                                (chat[0] == chatId && pathname.includes('user'))
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
                            />
                          </>
                        ) : (
                          <span
                            className={`${
                              chat[1]?.isRead == 'true' ||
                              (chat[0] == chatId && pathname.includes('user'))
                                ? 'fw-lighter text-muted'
                                : 'fw-semibold fs-6'
                            }`}
                          >
                            {chat[1].lastMessage?.text &&
                            chat[1].lastMessage.text.length <= 20
                              ? chat[1].lastMessage?.text
                              : `${chat[1].lastMessage.text.slice(0, 20)}...`}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
    </>
  );
};

export default ChatBox;
