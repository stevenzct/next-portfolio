"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const images = [
  "/images/Image1.jpg",
  "/images/Image2.jpg",
  "/images/Image3.jpg",
  "/images/Image4.jpg",
  "/images/Image5.jpg",
  "/images/Image6.jpg",
  "/images/Image7.jpg",
  "/images/Image8.jpg",
  "/images/Image9.jpg",
];

const SwiperUi = () => {
  return (
    <div className="SwiperUi-section bg-black">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto py-[80px] md:py-[120px]">
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
              <SwiperSlide key={index} style={{ width: 272 }}>
                <Image className="rounded-lg" src={src} width={272} height={208} alt={`hero${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperUi;