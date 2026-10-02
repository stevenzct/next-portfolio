"use client";

import { useRef, type KeyboardEvent } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import IndustryIcon, { type IndustryIconKind } from "./IndustryIcon";
import styles from "./Industries.module.css";

import "swiper/css";

const industries = [
  {
    name: "Fintech & Payments",
    description: "Payment flows & digital transactions.",
    icon: "payments",
  },
  {
    name: "Construction",
    description: "Web experiences for construction businesses.",
    icon: "construction",
  },
  {
    name: "Online Gaming",
    description: "Gaming platforms & player experiences.",
    icon: "gaming",
  },
  {
    name: "Booking Systems",
    description: "Reservations & scheduling experiences.",
    icon: "booking",
  },
  {
    name: "CMS Platforms",
    description: "Content management & content experiences.",
    icon: "cms",
  },
] satisfies { name: string; description: string; icon: IndustryIconKind }[];

const Industries = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const swiper = swiperRef.current;
    if (!swiper?.enabled) return;

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      if (event.key === "ArrowLeft") swiper.slidePrev();
      else swiper.slideNext();
    }
  };

  return (
    <section
      id="industries"
      aria-labelledby="homepage-industries-heading"
      data-home-layout
      data-nav-theme="light"
      data-home-motion-section
      className={`${styles.section} py-[calc(56*var(--home-unit,1px))] md:py-24 lg:py-[calc(120*var(--home-unit,1px))]`}
    >
      <div className="container-wrapper h-auto w-full">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <div className={styles.header}>
            <div>
              <p
                data-home-motion-copy
                className="mb-2 font-nm-book text-base text-[#545454] md:text-xl lg:text-2xl"
              >
                Industry Experience
              </p>
              <h2
                id="homepage-industries-heading"
                data-home-motion-heading
                className="font-nm-medium text-[clamp(2rem,6vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.035em]"
              >
                <span className={styles.headingLine}>Different industries,</span>
                <span className={styles.headingLine}>One design mindset</span>
              </h2>
            </div>
            <p data-home-motion-copy className={styles.subtitle}>
              Building digital experiences across different industries and product
              types.
            </p>
          </div>

          <Swiper
            className={styles.carousel}
            wrapperClass={styles.grid}
            wrapperTag="ul"
            aria-label="Industries"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView="auto"
            spaceBetween={12}
            grabCursor
            breakpoints={{
              768: { enabled: false, spaceBetween: 0, grabCursor: false },
            }}
          >
            {industries.map(({ name, description, icon }, index) => (
              <SwiperSlide
                tag="li"
                key={name}
                data-home-motion-card
                className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
              >
                <div className={styles.iconFrame} aria-hidden="true">
                  <IndustryIcon kind={icon} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.name}>{name}</h3>
                  <p className={styles.description}>{description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Industries;
