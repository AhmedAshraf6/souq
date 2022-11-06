import React from 'react';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Navbar = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='w-100 text-center bg-white py-4 border-top border-2 '>
      <Slider {...settings} className='mx-5'>
        <h5 className='text-secondary pointer'>سيارات</h5>
        <h5 className='text-secondary pointer'>العقارات</h5>
        <h5 className='text-secondary pointer'>وظائف </h5>
        <h5 className='text-secondary pointer'>خدمات</h5>
        <h5 className='text-secondary pointer'>وظائف </h5>
        <h5 className='text-secondary pointer'>ملابس وأدوات تجمييل</h5>
        <h5 className='text-secondary pointer'>تجاري وزراعي وصناعي</h5>
      </Slider>
    </div>
  );
};

export default Navbar;
