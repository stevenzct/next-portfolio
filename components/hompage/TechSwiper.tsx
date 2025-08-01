"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const images = [
  "/images/tech/Figma.jpg",
  "/images/tech/Vuejs.jpg",
  "/images/tech/Reactjs.jpg",
  "/images/tech/Nuxtjs.jpg",
  "/images/tech/Javascript.jpg",
  "/images/tech/Nextjs.jpg",
   "/images/tech/Scss.jpg",
   "/images/tech/Google.jpg",
   "/images/tech/Postman.jpg",
   "/images/tech/Tailwind.jpg",
   "/images/tech/Typescript.jpg",
   "/images/tech/Bootstrap.jpg",
   "/images/tech/Php.jpg",
   "/images/tech/Mysql.jpg",
];

const TechSwiper = () => {
  return (
    <div className="TechSwiper-section">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <Swiper
            slidesPerView="auto"
            spaceBetween={16}
            pagination={{ clickable: false }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            allowTouchMove={false}
            loop={true}
            speed={3000}
            className="mySwiper"
          >
            {/* Duplicate slides to create seamless loop */}
            {[...images, ...images].map((src, index) => (
              <SwiperSlide key={index} style={{ width: 250 }}>
                <Image className="rounded-lg" src={src} width={250} height={125} alt={`tech${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TechSwiper;
