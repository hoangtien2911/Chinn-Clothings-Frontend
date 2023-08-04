import React, { useRef, useState } from 'react'
import "./Slider.scss"
import { slider_img_1 } from "../../utils/images"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='hero-slider'>
      <div id="home" className="hero-slider-item">
        <img src={slider_img_1} alt="banner" />
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide style={{ textAlign: 'center'}}>
          <div class="text-center carousel-item carousel-inner">
            <h2 class="text-capitalize text-white">Best Collection</h2>
            <h1 class="text-uppercase fw-bold text-white">new arrivals</h1>
            <a href="#" class="btn mt-3 text-uppercase">Shop now</a>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: 'center'}}>
          <div class="text-center carousel-item carousel-inner">
            <h2 class="text-capitalize text-white">Best price & offer</h2>
            <h1 class="text-uppercase fw-bold text-white">new season</h1>
            <a href="#" class="btn mt-3 text-uppercase">Buy now</a>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg ref={progressCircle} >
            {/* <circle cx="23" cy="24" r="10"></circle> */}
          </svg>
          <span ref={progressContent} style={{ display: 'none' }}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default Slider;
