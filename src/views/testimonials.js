import React from 'react'

import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Testimonials = () => {
  return (
    <div id="testimonials" className="homePage " style={{minHeight:'80vh', padding: '0 15%' }}>
      <h1 className='mainPageHeader text-center'>TESTAMONIALS</h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
      <SwiperSlide>
        <img src='https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' style={{maxWidth: '100%'}}  alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' style={{maxWidth: '100%'}}  alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' style={{maxWidth: '100%'}}  alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' style={{maxWidth: '100%'}}  alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' style={{maxWidth: '100%'}}  alt='' />
      </SwiperSlide>
    </Swiper>

    
    </div>
  )
}
export {Testimonials}