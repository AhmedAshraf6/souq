import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';

const SwiperColors = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      navigation
      modules={[Navigation]}
      className='mySwipercolor mt-2 px-3'
    >
      <div className='text-center'>
        <SwiperSlide>
          <div className='bg-primary w-50 h-100 mx-auto'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-secondary w-50 h-100 mx-auto'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-secondary w-50 h-100 mx-auto'></div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default SwiperColors;
