import React from 'react';
import upload from '../../assets/ICONs/chat/upload.png';
import send from '../../assets/ICONs/chat/send.png';
import { useUserContext } from '../../contexts/UserProvider';
import { useState } from 'react';
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../../firebase';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { supportadmin } from '../../utils/constants';

const TaikWithSupport = () => {
  const { userInfo } = useUserContext();
  const [textMessage, setTextMessage] = useState('');
  const handleSubmit = async () => {
    const compinedid = `${supportadmin}${userInfo.id}`;
    if (textMessage) {
      try {
        //create user on firestore
        const user = await getDoc(doc(db, 'supportChats', compinedid));
        if (!user.exists()) {
          setTextMessage('');
          await updateDoc(doc(db, 'support', supportadmin), {
            [compinedid + '.clientInfo']: {
              id: userInfo.id,
              name: userInfo.name,
              image: userInfo?.image,
            },
            [compinedid + '.lastMessage']: {
              text: textMessage,
            },
            [compinedid + '.isRead']: 'false',
            [compinedid + '.date']: serverTimestamp(),
          });
          await setDoc(doc(db, 'supportChats', compinedid), {
            messages: arrayUnion({
              id: uuid(),
              text: textMessage,
              senderId: userInfo.id,
              date: Timestamp.now(),
            }),
          });
        } else {
          setTextMessage('');

          await updateDoc(doc(db, 'supportChats', compinedid), {
            messages: arrayUnion({
              id: uuid(),
              text: textMessage,
              senderId: userInfo.id,
              date: Timestamp.now(),
            }),
          });
          await updateDoc(doc(db, 'support', supportadmin), {
            [compinedid + '.lastMessage']: {
              text: textMessage,
            },
            [compinedid + '.date']: serverTimestamp(),
            [compinedid + '.isRead']: 'false',
          });
        }
      } catch (error) {}
    }
  };
  const handleChangeImage = async (img) => {
    const storageRef = ref(storage, uuid());
    const compinedid = `${supportadmin}${userInfo.id}`;
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      (error) => {
        //TODO:Handle Error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateDoc(
            doc(db, 'supportChats', `${supportadmin}${userInfo.id}`),
            {
              messages: arrayUnion({
                id: uuid(),
                senderId: userInfo.id,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            }
          );
          await updateDoc(doc(db, 'support', supportadmin), {
            [compinedid + '.lastMessage']: {
              text: 'صورة',
            },
            [compinedid + '.date']: serverTimestamp(),
            [compinedid + '.isRead']: 'false',
          });
        });
      }
    );
  };
  const handleKey = (e) => {
    e.code === 'Enter' && handleSubmit();
  };
  return (
    <div className='taik d-flex justify-content-between align-items-center bg-light rounded mx-1 text-primary py-2 px-3'>
      <div className='removed-input'>
        <label htmlFor='file-input' className='pointer'>
          <img src={upload} alt='upload' className='icon' loading='lazy' />
        </label>
        <input
          id='file-input'
          type='file'
          onChange={(e) => handleChangeImage(e.target.files[0])}
          accept='image/*'
        />
      </div>
      <input
        type='text'
        className='message w-100 mx-2 h-100 border-0 outline-0'
        placeholder='اكتب رسالة'
        value={textMessage}
        onKeyDown={handleKey}
        onChange={(e) => setTextMessage(e.target.value)}
      />
      {/*  */}
      <span onClick={handleSubmit}>
        <img src={send} alt='send' className='icon' loading='lazy' />
      </span>
    </div>
  );
};

export default TaikWithSupport;
