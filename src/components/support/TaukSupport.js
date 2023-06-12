import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import React from 'react';
import { useSupportContext } from '../../contexts/SupportProvider';
import { useUserContext } from '../../contexts/UserProvider';
import { db, storage } from '../../firebase';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import upload from '../../assets/ICONs/chat/upload.png';
import send from '../../assets/ICONs/chat/send.png';
import { supportadmin } from '../../utils/constants';

const TaukSupport = () => {
  const [textMessage, setTextMessage] = useState('');
  const { chatId } = useSupportContext();
  const { userInfo } = useUserContext();

  // console.log(img);
  const handleSubmit = async () => {
    if (textMessage) {
      try {
        setTextMessage('');
        await updateDoc(doc(db, 'supportChats', chatId), {
          messages: arrayUnion({
            id: uuid(),
            text: textMessage,
            senderId: userInfo.id,
            date: Timestamp.now(),
          }),
        });
        await updateDoc(doc(db, 'support', supportadmin), {
          [chatId + '.lastMessage']: {
            text: textMessage,
          },
          [chatId + '.date']: serverTimestamp(),
        });
      } catch (error) {}
    }
  };
  const handleChangeImage = async (img) => {
    const storageRef = ref(storage, uuid());

    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      (error) => {
        //TODO:Handle Error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateDoc(doc(db, 'supportChats', chatId), {
            messages: arrayUnion({
              id: uuid(),
              senderId: userInfo.id,
              date: Timestamp.now(),
              img: downloadURL,
            }),
          });
          await updateDoc(doc(db, 'support', supportadmin), {
            [chatId + '.lastMessage']: {
              text: 'صورة',
            },
            [chatId + '.date']: serverTimestamp(),
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
          <img loading='lazy' src={upload} alt='upload' className='icon' />
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
      <span onClick={handleSubmit}>
        <img loading='lazy' src={send} alt='send' className='icon' />
      </span>
    </div>
  );
};

export default TaukSupport;
