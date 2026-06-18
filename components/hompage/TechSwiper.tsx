"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const images = [
  "/images/tech/bootstrap.jpg",
  "/images/tech/chatgpt.jpg",
  "/images/tech/claude.jpg",
  "/images/tech/codex.jpg",
  "/images/tech/copilot.jpg",
  "/images/tech/figma.jpg",
  "/images/tech/firebase.jpg",
  "/images/tech/firebaseStudio.jpg",
  "/images/tech/github.jpg",
  "/images/tech/Google.jpg",
  "/images/tech/javascript.jpg",
  "/images/tech/mongoDB.jpg",
  "/images/tech/mysql.jpg",
  "/images/tech/Nextjs.jpg",
  "/images/tech/nuxtjs.jpg",
  "/images/tech/Php.jpg",
  "/images/tech/postman.jpg",
  "/images/tech/reactjs.jpg",
  "/images/tech/Scss.jpg",
  "/images/tech/shadcnUI.jpg",
  "/images/tech/tailwind.jpg",
  "/images/tech/typescript.jpg",
  "/images/tech/vuejs.jpg",
];

const TechSwiper = () => {
  return (
    <div className="TechSwiper-section">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto pb-[80px] md:pb-[120px]">
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
