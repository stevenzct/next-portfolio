"use client";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";

import { prefersReducedMotion } from "../../utils/motion";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (
      !section ||
      prefersReducedMotion() ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const slides = section.querySelectorAll<HTMLElement>(
      "[data-swiper-ui-slide]",
    );
    const animations: gsap.core.Animation[] = [];
    let hasRevealed = false;

    const context = gsap.context(() => {
      gsap.set(slides, {
        y: 40,
        scale: 0.94,
        autoAlpha: 0,
        transformOrigin: "50% 50%",
      });

    }, section);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (!entry.isIntersecting) {
          swiperRef.current?.autoplay.pause();
          return;
        }

        if (hasRevealed) {
          swiperRef.current?.autoplay.resume();
          return;
        }

        hasRevealed = true;
        swiperRef.current?.autoplay.pause();
        const reveal = gsap.to(slides, {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.85,
          stagger: 0.055,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          onComplete: () => swiperRef.current?.autoplay.resume(),
        });
        animations.push(reveal);
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.kill());
      gsap.killTweensOf(slides);
      context.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="SwiperUi-section bg-black">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container mx-6 w-auto max-w-[1200px] py-[80px] md:mx-12 md:py-24 lg:mx-auto lg:w-[90%] lg:py-[120px] xl:w-[88%] 2xl:w-[75%]">
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
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {/* Duplicate slides to create seamless loop */}
            {[...images, ...images].map((src, index) => (
              <SwiperSlide
                key={index}
                style={{ width: 272 }}
                data-swiper-ui-slide
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    className="block rounded-lg"
                    src={src}
                    width={272}
                    height={208}
                    alt={`Portfolio visual ${(index % images.length) + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperUi;
