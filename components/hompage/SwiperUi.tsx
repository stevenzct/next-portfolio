"use client";

import Image from "next/image";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./SwiperUi.module.css";

import "swiper/css";

type PortfolioVisual = {
  src: string;
  alt: string;
};

const mobileVisuals: PortfolioVisual[] = [
  {
    src: "/images/Image1.jpg",
    alt: "Pixel Buds ecommerce landing page concept",
  },
  {
    src: "/images/Image2.jpg",
    alt: "Fruit ecommerce landing page concept",
  },
  {
    src: "/images/Image3.jpg",
    alt: "Rioflorido residential property website",
  },
  {
    src: "/images/Image4.jpg",
    alt: "Rioflorido interior design website",
  },
  {
    src: "/images/Image5.jpg",
    alt: "Florida travel landing page concept",
  },
  {
    src: "/images/Image6.jpg",
    alt: "Planco travel planning website",
  },
  {
    src: "/images/Image7.jpg",
    alt: "Laprasca restaurant booking website",
  },
  {
    src: "/images/Image8.jpg",
    alt: "Designer and developer portfolio concept",
  },
  {
    src: "/images/Image9.jpg",
    alt: "Monochrome designer portfolio concept",
  },
];

const firstRailVisuals = [
  mobileVisuals[0],
  mobileVisuals[4],
  mobileVisuals[8],
  mobileVisuals[3],
  mobileVisuals[6],
];

const secondRailVisuals = [
  mobileVisuals[7],
  mobileVisuals[2],
  mobileVisuals[5],
  mobileVisuals[1],
];

const MOBILE_AUTOPLAY_SPEED = 3000;
const MOBILE_INTERACTION_SPEED = 650;

type DesktopRailProps = {
  items: PortfolioVisual[];
  reverse?: boolean;
  paused: boolean;
};

const DesktopRail = ({
  items,
  reverse = false,
  paused,
}: DesktopRailProps) => {
  const directionClass = reverse
    ? styles["desktop-track-reverse"]
    : styles["desktop-track-forward"];

  return (
    <div className={styles["desktop-rail"]}>
      <div
        className={`${styles["desktop-track"]} ${directionClass} ${
          paused ? styles["desktop-track-paused"] : ""
        }`}
      >
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className={styles["desktop-track-group"]}
          >
            {items.map((visual, itemIndex) => (
              <div
                key={`${groupIndex}-${itemIndex}-${visual.src}`}
                className={styles["desktop-visual"]}
              >
                <Image
                  src={visual.src}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 25vw, 1px"
                  className={styles["visual-image"]}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const SwiperUi = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const mobileSwiperRef = useRef<SwiperInstance | null>(null);
  const [desktopMotionRunning, setDesktopMotionRunning] = useState(false);

  const handleMobileKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const mobileSwiper = mobileSwiperRef.current;
    if (!mobileSwiper || mobileSwiper.destroyed) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      mobileSwiper.slidePrev(MOBILE_INTERACTION_SPEED);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      mobileSwiper.slideNext(MOBILE_INTERACTION_SPEED);
    }
  };

  useEffect(() => {
    const showcase = showcaseRef.current;
    if (!showcase) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopLayout = window.matchMedia("(min-width: 1280px)");
    let isVisible = true;

    const syncMotion = () => {
      const motionAllowed =
        isVisible && !document.hidden && !motionPreference.matches;

      setDesktopMotionRunning(motionAllowed && desktopLayout.matches);

      const mobileSwiper = mobileSwiperRef.current;
      if (!mobileSwiper || mobileSwiper.destroyed) return;

      if (motionAllowed && !desktopLayout.matches) {
        if (!mobileSwiper.autoplay.running) {
          mobileSwiper.autoplay.paused = false;
          mobileSwiper.autoplay.start();
        }
        return;
      }

      if (mobileSwiper.autoplay.running) {
        const currentTranslate = mobileSwiper.getTranslate();
        mobileSwiper.autoplay.stop();
        mobileSwiper.translateTo(currentTranslate, 0, false, false);
        mobileSwiper.animating = false;
        mobileSwiper.autoplay.paused = false;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry?.isIntersecting);
        syncMotion();
      },
      { threshold: 0.08 },
    );

    observer.observe(showcase);
    syncMotion();
    document.addEventListener("visibilitychange", syncMotion);
    motionPreference.addEventListener("change", syncMotion);
    desktopLayout.addEventListener("change", syncMotion);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncMotion);
      motionPreference.removeEventListener("change", syncMotion);
      desktopLayout.removeEventListener("change", syncMotion);
    };
  }, []);

  return (
    <div
      ref={showcaseRef}
      data-home-motion-media
      className={styles.showcase}
    >
      <div
        data-home-motion-media-surface
        className={styles["showcase-surface"]}
      >
        <div className={styles["desktop-gallery"]} aria-hidden="true">
          <DesktopRail
            items={firstRailVisuals}
            paused={!desktopMotionRunning}
          />
          <DesktopRail
            items={secondRailVisuals}
            reverse
            paused={!desktopMotionRunning}
          />
        </div>

        <div
          className={styles["mobile-gallery"]}
          role="region"
          aria-roledescription="carousel"
          aria-label="Selected portfolio work"
          tabIndex={0}
          onKeyDown={handleMobileKeyDown}
        >
          <Swiper
            slidesPerView="auto"
            spaceBetween={16}
            speed={MOBILE_AUTOPLAY_SPEED}
            resistanceRatio={0.78}
            threshold={4}
            grabCursor
            watchOverflow
            allowTouchMove
            loop
            loopAdditionalSlides={2}
            loopPreventsSliding={false}
            touchAngle={45}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            modules={[A11y, Autoplay]}
            a11y={{
              prevSlideMessage: "Previous project",
              nextSlideMessage: "Next project",
              slideLabelMessage: "{{index}} of {{slidesLength}}",
            }}
            onSwiper={(swiper) => {
              mobileSwiperRef.current = swiper;

              const motionReduced = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
              ).matches;
              const desktopLayout = window.matchMedia(
                "(min-width: 1280px)",
              ).matches;

              if (motionReduced || desktopLayout || document.hidden) {
                swiper.autoplay.stop();
                swiper.autoplay.paused = false;
              }
            }}
            onTouchStart={(swiper) => {
              swiper.params.speed = MOBILE_INTERACTION_SPEED;
            }}
            onTouchEnd={(swiper) => {
              window.requestAnimationFrame(() => {
                if (!swiper.destroyed) {
                  swiper.params.speed = MOBILE_AUTOPLAY_SPEED;
                }
              });
            }}
            onBeforeDestroy={(swiper) => {
              if (mobileSwiperRef.current === swiper) {
                mobileSwiperRef.current = null;
              }
            }}
            className={styles["mobile-swiper"]}
          >
            {mobileVisuals.map((visual, index) => (
              <SwiperSlide key={visual.src}>
                <div className={styles["mobile-visual"]}>
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    priority={index === 0}
                    draggable={false}
                    sizes="272px"
                    className={styles["visual-image"]}
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
