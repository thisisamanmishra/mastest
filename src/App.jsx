import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import sample1 from './Images/sample1.jpg';
import sample2 from './Images/sample2.jfif';
import sample3 from './Images/sample3.jfif';
import sample4 from './Images/sample4.jfif';
import Typed from 'react-typed';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/App.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <section className="section-testimonials">
        <div className="container heading underline decoration-[#78097c] text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <Typed
              strings={['Testimonials']}
              typeSpeed={150}
              backSpeed={100}
              loop
              />
        </div>
        <div className="swiper mySwiper container">
      <Swiper
        breakpoints={{
          // when window width is <= 899px
          899: {
            slidesPerView: 1,
          },
          // when window width is >= 900px
          900: {
            slidesPerView: 2,
            spaceBetween:5
          }}}
         autoplay={{
           disableOnInteraction: false,
           delay: 2000,
           pauseOnMouseEnter: true,
         }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      > 
      <div className="swiper-slide">
      <SwiperSlide>
       <div className="swiper-client-msg">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       </div>
       <div className="swiper-client-data grid grid-two-column">
        <figure>
          <img src={sample1} alt="me" />
        </figure>
        <div className="swiper-client-data">
        <p>Mark</p>
        <p>Entrepreneur</p>
       </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className="swiper-client-msg">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       </div>
       <div className="swiper-client-data grid grid-two-column">
        <figure>
          <img src={sample2} alt="me" />
        </figure>
        <div className="swiper-client-data">
        <p>Aman</p>
        <p>Founder of XYZ</p>
       </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className="swiper-client-msg">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       </div>
       <div className="swiper-client-data grid grid-two-column">
        <figure>
          <img src={sample3} alt="me" />
        </figure>
        <div className="swiper-client-data">
        <p>Alex</p>
        <p>Software Enginner</p>
       </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className="swiper-client-msg">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       </div>
       <div className="swiper-client-data grid grid-two-column">
        <figure>
          <img src={sample4} alt="me" />
        </figure>
        <div className="swiper-client-data">
        <p>Amit</p>
        <p>Product Manager</p>
       </div>
       </div>
      </SwiperSlide>
      </div>
      </Swiper>
      </div>
      </section>
    </>
  );
}

