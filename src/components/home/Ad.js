import React, { useState } from 'react';
import view from '../../assets/ICONs/view.png';
import pin from '../../assets/ICONs/pin.png';
import heart2 from '../../assets/ICONs/heart2.png';
import heart from '../../assets/ICONs/heart.png';
import { Link, useNavigate } from 'react-router-dom';
import { image_url, video_url } from '../../utils/constants';
import { useMainContext } from '../../contexts/MainProvider';
import { useAdsContext } from '../../contexts/AdsProvider';

import ShareBox from './ShareBox';
const Ad = ({
  id,
  title,
  price,
  location,
  created_at,
  User,
  AdWatch,
  advertisement_attachements: [a],
  grid,
  prevLink = 'default',
  cover_photo,
}) => {
  const { token, favAdsIds, handleFavouriteAd } = useAdsContext();
  const { currency } = useMainContext();
  const [showMsg, setShowMsg] = useState(false);
  // var dte = created_at;
  // var today = new Date(dte);
  // var d = today.getFullYear();
  var dte = created_at;
  var today = new Date(dte);
  var d =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (!e.target.classList.contains('heart')) {
      navigate(`/singleproduct/${id}`, { prevLink });
    }
  };
  const renderedPrice = price && price.toLocaleString();

  return (
    <div className={grid}>
      <div className='card h-100'>
        {a && a.files.split('.').pop() == 'mp4' ? (
          cover_photo && cover_photo.includes('/uploads') ? (
            <Link
              className='img bg-info w-100  text-center'
              to={`/singleproduct/${id}`}
              state={prevLink.pathname ? prevLink.pathname : null}
              style={{
                backgroundImage: `${cover_photo && image_url + cover_photo}`,
                backgroundSize: 'cover',
              }}
            >
              <img
                src={`${cover_photo && image_url + cover_photo}`}
                className='card-img-top image-card '
                alt='img1'
                loading='lazy'
              />
            </Link>
          ) : (
            <Link
              className='img bg-info w-100  text-center'
              to={`/singleproduct/${id}`}
              state={prevLink.pathname ? prevLink.pathname : null}
            >
              <div className='video-upload w-100'>
                <video
                  controls='controls'
                  src={`${video_url}${a.files}`}
                  className='w-100 h-100'
                  loading='lazy'
                ></video>
              </div>
            </Link>
          )
        ) : (
          <Link
            className='img bg-info w-100  text-center'
            to={`/singleproduct/${id}`}
            state={prevLink.pathname ? prevLink.pathname : null}
          >
            <img
              src={`${a && image_url + a.files}`}
              className='card-img-top image-card '
              alt='img1'
            />
          </Link>
        )}

        {/* start card */}
        <div className='py-2 px-2  d-flex flex-sm-nowrap  justify-content-between align-items-center w-100 gap-2'>
          <h6>{title}</h6>
          <h6 className='text-secondary'>
            {/* {price} */}
            {renderedPrice}

            <span className='text-primary'>{currency}</span>
          </h6>
          {/* <ShareBox
                url={`https://adsapp.org/#/singleproduct/${id}`}
                quote={title}
              /> */}
        </div>
        <div className='px-2 d-flex align-items-start align-items-sm-center flex-column flex-sm-row text-decoration-none '>
          <Link
            className='d-flex flex-row flex-sm-column align-items-center gap-3 text-decoration-none'
            to={`/seller/${User.id}`}
          >
            <img
              src={User.image && `${image_url}${User.image}`}
              alt='person'
              className='rounded-circle avatar'
            />
            <span className='text-nowrap'>
              {User.name.length > 10
                ? User.name.slice(0, 10) + '...'
                : User.name}
            </span>
          </Link>
          <div
            className='w-100 me-2  text-decoration-none pointer'
            onClick={handleClick}
          >
            <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
              <address className='text-primary info ms-2'>
                <img
                  src={pin}
                  alt='pination'
                  className='very-small-icon ms-1'
                />
                {location.length > 10
                  ? location.slice(0, 10) + '...'
                  : location}
              </address>
              <span className='text-primary info'>
                <img src={view} alt='view' className='very-small-icon ms-1' />
                {AdWatch && AdWatch}
              </span>
            </div>
          </div>
        </div>
        <img
          src={favAdsIds.includes(id) ? heart2 : heart}
          alt='heart'
          className='position-absolute heart pointer'
          onClick={() => handleFavouriteAd(id)}
        />
        <Link
          className='text-muted text-center pb-3 text-decoration-none'
          to={`/singleproduct/${id}`}
          state={prevLink.pathname ? prevLink.pathname : null}
        >
          تاريخ النشر {d}
        </Link>
      </div>

      {/* end card */}
    </div>
  );
};

export default Ad;
