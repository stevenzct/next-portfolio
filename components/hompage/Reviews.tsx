"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { reviews } from "../../constants/reviews";

import "swiper/css";

const platformLabels = {
  facebook: "Facebook",
  linkedin: "LinkedIn",
} as const;

const Reviews = () => {
  const swiperRef = React.useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const updateNavigation = React.useCallback((swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      data-home-motion-section
      className="reviews-section relative overflow-hidden border-y border-black/[0.06] bg-[#F1F0EA] py-[80px] md:py-24 lg:py-[120px]"
    >
      <div
        aria-hidden="true"
        className="reviews-atmosphere pointer-events-none absolute inset-0"
      />

      <div className="container-wrapper relative z-10 h-auto w-full">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <p
            data-home-motion-copy
            className="reviews-kicker mb-1 font-nm-book text-base leading-5 md:mb-2 md:text-xl md:leading-normal lg:text-2xl"
          >
            Reviews
          </p>

          <div className="mb-7 flex items-end justify-between gap-3 md:mb-12 lg:mb-16">
            <h2
              id="reviews-heading"
              data-home-motion-heading
              className="min-w-0 font-nm-medium text-[clamp(2rem,6vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.035em] text-black"
            >
              What People Say
            </h2>

            <div
              data-home-motion-action
              className="flex shrink-0 justify-end gap-2 sm:gap-3"
            >
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                className="review-nav-button flex h-10 w-10 items-center justify-center rounded-lg border border-[#D6D6D6] bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-25 sm:h-11 sm:w-11"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
                className="review-nav-button flex h-10 w-10 items-center justify-center rounded-lg border border-[#D6D6D6] bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-25 sm:h-11 sm:w-11"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavigation(swiper);
            }}
            onSlideChange={updateNavigation}
            onBreakpoint={updateNavigation}
            slidesPerView={1.08}
            spaceBetween={14}
            breakpoints={{
              480: {
                slidesPerView: 1.12,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            loop={false}
            allowTouchMove
            grabCursor
            slidesPerGroup={1}
            speed={550}
            className="reviews-cards !pb-7"
          >
            {reviews.map(
              (
                {
                  quote,
                  attribution,
                  context,
                  imageSrc,
                  imageAlt,
                  imageFit = "cover",
                  imagePosition = "50% 50%",
                  profileUrl,
                  platform,
                },
                index,
              ) => (
                <SwiperSlide
                  key={`${attribution}-${context}`}
                  className="!h-auto"
                >
                  <article
                    data-home-motion-card
                    className={`review-ticket group relative h-full max-w-full overflow-hidden rounded-[13px] ${
                      index === 0
                        ? "review-ticket--dark"
                        : "review-ticket--light"
                    }`}
                  >
                    <a
                      href={profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${attribution} on ${platformLabels[platform]}`}
                      className="review-ticket-link relative z-10 flex min-h-[370px] h-full flex-col p-6 focus-visible:outline-2 focus-visible:outline-offset-[-7px] focus-visible:outline-current sm:min-h-[390px] sm:p-7"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="review-card-index font-nm-book text-[11px] uppercase tracking-[0.16em] opacity-55">
                          Review / {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="review-card-platform inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-nm-book text-[11px] leading-none transition-colors duration-500">
                          {platform === "facebook" ? (
                            <FaFacebookF className="h-3 w-3" />
                          ) : (
                            <FaLinkedinIn className="h-3 w-3" />
                          )}
                          {platformLabels[platform]}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col justify-center py-9 sm:py-10">
                        <div className="mb-4" aria-hidden="true">
                          <span className="font-nm-medium text-[38px] leading-[0.7]">
                            &ldquo;
                          </span>
                        </div>

                        <blockquote>
                          <p className="review-card-quote max-w-[31ch] font-nm-medium text-[19px] font-medium leading-[1.22] tracking-[-0.022em] sm:text-[21px]">
                            {quote}
                          </p>
                        </blockquote>
                      </div>

                      <footer className="review-card-footer flex items-center gap-3 border-t pt-5 transition-colors duration-500">
                        <span className="review-card-profile relative h-12 w-12 shrink-0 overflow-hidden rounded-full border bg-white">
                          <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            sizes="48px"
                            style={{ objectPosition: imagePosition }}
                            className={
                              imageFit === "contain"
                                ? "object-contain p-1.5"
                                : "object-cover"
                            }
                          />
                        </span>

                        <div className="min-w-0 flex-1">
                          <cite className="review-card-attribution block truncate font-nm-medium text-[15px] font-medium leading-tight not-italic sm:text-base">
                            {attribution}
                          </cite>
                          <p className="review-card-context mt-1 truncate font-nm-book text-xs leading-4 opacity-50 sm:text-[13px]">
                            {context}
                          </p>
                        </div>

                        <span
                          aria-hidden="true"
                          className="review-card-arrow inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-[background-color,color,transform] duration-500 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                        >
                          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 motion-safe:group-hover:rotate-45" />
                        </span>
                      </footer>
                    </a>
                  </article>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
