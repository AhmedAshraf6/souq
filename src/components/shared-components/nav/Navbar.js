import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

//link
import { Link } from 'react-router-dom';
import { useMainContext } from '../../../contexts/MainProvider';

const Navbar = () => {
  const { openSubmenu, closeSubmenu, sublinks } = useMainContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-nav')) {
      closeSubmenu();
    }
  };
  // console.log(sublinks);
  return (
    <nav
      className='mynavbar w-100 text-center bg-white  border-top border-2 px-5'
      onMouseOver={handleSubmenu}
    >
      <Swiper
        spaceBetween={30}
        navigation
        breakpoints={{
          0: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 2,
          },
          992: {
            // width: 768,
            slidesPerView: 3,
          },
          1200: {
            // width: 768,
            slidesPerView: 4,
          },
        }}
        modules={[Navigation, Scrollbar]}
        className='mySwiper'
      >
        {sublinks &&
          sublinks.length > 0 &&
          sublinks.map((l, index) => {
            return (
              <SwiperSlide
                className='link-nav py-4 text-nowrap px-4 px-sm-0'
                key={index}
              >
                <Link
                  className='link-nav text-secondary pointer fs-5 text-decoration-none '
                  onMouseOver={displaySubmenu}
                  onScroll={displaySubmenu}
                  to={`/categoryPage/${l.page}/${l.catid}`}
                >
                  {l.page}
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </nav>
  );
};

export default Navbar;
