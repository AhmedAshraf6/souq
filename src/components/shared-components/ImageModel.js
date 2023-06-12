import React from 'react';
import { useMainContext } from '../../contexts/MainProvider';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { image_url } from '../../utils/constants';
// Import Swiper styles
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';
const ImageModel = () => {
  const { imagesInsideModel, toggleImageModel, activeImage } = useMainContext();
  const handleClick = (e) => {
    if (e.target.classList.contains('swiper-slide')) {
      toggleImageModel(false);
    }
  };
  return (
    <section className='image-model ' onClick={handleClick}>
      <Swiper
        navigation
        modules={[Navigation]}
        className='my-swiper-images '
        initialSlide={activeImage}
      >
        {imagesInsideModel &&
          imagesInsideModel.length > 0 &&
          imagesInsideModel.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='img text-center box-shadow'>
                  <img
                    src={`${image_url}${img.files}`}
                    className='myimage rounded img-thumbnail mx-auto mx-sm-0'
                    alt='test'
                    loading='lazy'
                  />
                </div>
              </SwiperSlide>
            );
          })}
        <button
          type='button'
          className='btn-close'
          aria-label='Close'
          onClick={() => toggleImageModel(false)}
        ></button>
      </Swiper>
    </section>
  );
};

export default ImageModel;
