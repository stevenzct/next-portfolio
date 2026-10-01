"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const images = [
  "/images/tech/Bootstrap.jpg",
  "/images/tech/claude.jpg",
  "/images/tech/Figma.jpg",
  "/images/tech/firebase.jpg",
  "/images/tech/github.jpg",
  "/images/tech/Google.jpg",
  "/images/tech/Javascript.jpg",
  "/images/tech/mongoDB.jpg",
  "/images/tech/Mysql.jpg",
  "/images/tech/Nextjs.jpg",
  "/images/tech/Nuxtjs.jpg",
  "/images/tech/nodejs.jpg",
  "/images/tech/Php.jpg",
  "/images/tech/Postman.jpg", 
  "/images/tech/Reactjs.jpg",
  "/images/tech/Scss.jpg",
  "/images/tech/shadcnUI.jpg",
  "/images/tech/supabase.png",
  "/images/tech/Tailwind.jpg",
  "/images/tech/Typescript.jpg",
  "/images/tech/Vuejs.jpg",
];

const TechSwiper = () => {
  return (
    <div data-home-layout data-nav-theme="light" className="TechSwiper-section">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container mx-6 w-auto max-w-[1200px] pb-[calc(80*var(--home-unit,1px))] md:mx-12 md:pb-24 lg:mx-auto lg:w-[90%] lg:pb-[calc(120*var(--home-unit,1px))] xl:w-[88%] 2xl:w-[75%]">
          <div className="tech-marquee-window" aria-hidden="true">
            <Swiper
              slidesPerView="auto"
              spaceBetween={16}
              breakpoints={{ 1280: { spaceBetween: "1.333333%" } }}
              pagination={{ clickable: false }}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              allowTouchMove={false}
              loop={true}
              speed={3000}
              className="mySwiper tech-marquee"
            >
              {/* Duplicate slides to create seamless loop */}
              {[...images, ...images].map((src, index) => (
                <SwiperSlide
                  className="tech-logo-card"
                  key={index}
                  style={{ width: "calc(250 * var(--home-unit, 1px))" }}
                >
                  <Image
                    className="tech-logo-image rounded-lg"
                    src={src}
                    width={250}
                    height={125}
                    sizes="(min-width: 4000px) 667px, (min-width: 1280px) 16.7vw, 250px"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSwiper;
