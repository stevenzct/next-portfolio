"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  "/images/Image.jpg",
  "/images/Image.jpg",
  "/images/Image.jpg",
  "/images/Image.jpg",
  "/images/Image.jpg",
  "/images/Image.jpg",
];

const SwiperUi = () => {
  return (
    <div className="SwiperUi-section bg-[#060415]">
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
            modules={[Pagination, Autoplay]}
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