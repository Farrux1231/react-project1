import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdStarPurple500 } from 'react-icons/md';
import './style.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Slide({ movies }) {
  const url = import.meta.env.VITE_IMAGE_URL; 
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='slide'>
      {/* Katta slayd */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {movies?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide-container">
              <img src={url + item.backdrop_path} alt={item.title} className="slide-image" />
              <div className="slide-info">
                <h2>{item.title}</h2>
                <div className="second">
                  <p>
                    {item.release_date} · <MdStarPurple500 /> {item.vote_average}/10 · {item.original_language}
                  </p>
                </div>
                <button className="watch-button">Смотреть</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumb kichik slayd */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {movies?.map((item) => (
          <SwiperSlide key={item.id} >
            <img src={url + item.backdrop_path} alt={item.title} className="thumb-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
