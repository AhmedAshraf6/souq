import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

import { useState } from 'react';
import { image_url, video_url } from '../../utils/constants';
import { useEffect } from 'react';
import { useMainContext } from '../../contexts/MainProvider';

const SwiperImages = ({ advertisement_attachements }) => {
  const { toggleImageModel, imageModelFunc, activeImageFunc } =
    useMainContext();
  const [video, setVideo] = useState(false);
  const detectPicVid = () => {
    if (advertisement_attachements) {
      if (advertisement_attachements[0].files.split('.').pop() == 'mp4') {
        setVideo(true);
      }
    }
  };
  useEffect(() => {
    detectPicVid();
  }, [advertisement_attachements]);

  return (
    <>
      {video ? (
        <div className='video-upload w-100 '>
          <video
            controls='controls'
            src={`${video_url}${advertisement_attachements[0].files}`}
            type='video/mp4'
            className='w-100 h-100'
            loading='lazy'
          ></video>
        </div>
      ) : (
        <Swiper
          navigation
          modules={[Navigation]}
          className='my-swiper-images '
          onActiveIndexChange={(e) => activeImageFunc(e.activeIndex)}
        >
          {advertisement_attachements &&
            advertisement_attachements.length > 0 &&
            advertisement_attachements.map((img, index) => {
              return (
                <SwiperSlide className='bg-info' key={index}>
                  <div className='card border-0 bg-transparent'>
                    <div className='img text-center'>
                      <img
                        src={`${image_url}${img.files}`}
                        className='card-img-top mx-auto mx-sm-0'
                        alt='test'
                        onClick={() => {
                          toggleImageModel(true);
                          imageModelFunc(advertisement_attachements);
                        }}
                        loading='lazy'
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
    </>
  );
};

export default SwiperImages;
