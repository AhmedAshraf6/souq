import React from 'react';
import whitearrowleft from '../../assets/ICONs/whitearrowleft.png';
import phone from '../../assets/ICONs/phone.png';
import { Link } from 'react-router-dom';
import { image_url } from '../../utils/constants';
import { useState, useRef } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { useSellerCalledContext } from '../../contexts/CalledSellerProvider';
const SellerDetails2 = ({
  User: {
    id: seller_id,
    name: seller_name,
    image,
    created_at,
    phone: phone_num,
  } = {},
}) => {
  const [showNum, setShowNum] = useState(false);
  const { userInfo, setIsClickedFunc } = useUserContext();
  const { dispatch } = useSellerCalledContext();

  var today = new Date(created_at && created_at);
  var d = today.getFullYear();

  const handleShowNumber = () => {
    setShowNum(true);
  };
  const handleSelectSeller = (u, sellerName, sellerImage) => {
    dispatch({
      type: 'CHANGE_USER',
      payload: u,
      payload2: sellerName,
      payload3: sellerImage,
      payload4: phone_num && phone_num,
    });
  };
  // Handle Click On Seller
  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      userInfo.id > seller_id
        ? userInfo.id + seller_id
        : seller_id + userInfo.id;
    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, 'userChats', userInfo.id), {
          [combinedId + '.sellerInfo']: {
            id: seller_id,
            name: seller_name,
            image,
          },
          [combinedId + '.date']: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', seller_id), {
          [combinedId + '.sellerInfo']: {
            id: userInfo.id,
            name: userInfo.name,
            image: userInfo.image,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
        handleSelectSeller(seller_id, seller_name, image);
        setIsClickedFunc(true);
      } else {
        handleSelectSeller(seller_id, seller_name, image);
        setIsClickedFunc(true);
      }
    } catch (err) {}
  };
  return (
    <div className='box bg-primary py-4 px-3 text-white mt-3 rounded'>
      <div className='d-flex justify-content-start'>
        <h4 className='fw-bold'>وصف البائع</h4>
      </div>

      <div className='d-flex  justify-content-between mt-4 '>
        <div className='d-flex flex-column flex-sm-row justify-content-start'>
          {image && (
            <img
              loading='lazy'
              src={`${image_url}${image}`}
              alt='icon'
              className='avatar rounded-circle'
            />
          )}

          <div className='mx-0 mt-2 mt-sm-0 mx-sm-3'>
            {seller_name && <h5 className='fw-bold'>{seller_name}</h5>}

            <h6>
              <span> عضو منذ </span>
              {d && <span className='fw-lighter'>{d}</span>}
            </h6>
          </div>
        </div>

        {seller_id && (
          <Link className='text-decoration-none ' to={`/seller/${seller_id}`}>
            <img
              loading='lazy'
              src={whitearrowleft}
              alt='whitearrowleft '
              className='align-self-center'
            />
          </Link>
        )}
      </div>
      {phone_num && (
        <div className='d-flex flex-column flex-sm-row align-items-center  mt-3'>
          <img loading='lazy' src={phone} alt='phone' className='icon' />
          <span>{!showNum ? '*** **** **' : phone_num}</span>
          {!showNum && (
            <h4
              className='show-num text-decoration-underline pointer'
              onClick={handleShowNumber}
            >
              اظهار الرقم
            </h4>
          )}
        </div>
      )}
      <div className='d-flex justify-content-center mt-3 '>
        {seller_id && (
          <Link
            className='btn btn-secondary text-white fs-5 text-decoration-none'
            to={`/chat/user/${seller_id}`}
            onClick={() => handleSelect()}
          >
            تواصل مع البائع
          </Link>
        )}
      </div>
    </div>
  );
};

export default SellerDetails2;
