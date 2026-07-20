"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { experiences } from "../../constants/experience";

import "swiper/css";

function Experience() {
  const swiperRef = React.useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const updateNavigation = React.useCallback((swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  return (
    <section
      id="work"
      data-home-motion-section
      className="experience bg-[#F8F8F8] py-[80px] md:py-24 lg:py-[120px]"
    >
      <div className="container-wrapper h-auto w-full">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <p
            data-home-motion-copy
            className="experience-kicker mb-1 font-nm-book text-base leading-5 md:mb-2 md:text-xl md:leading-normal lg:text-2xl"
          >
            Work
          </p>
          <div className="mb-7 flex items-end justify-between gap-3 md:mb-12 lg:mb-16">
            <h2
              data-home-motion-heading
              className="min-w-0 text-start font-nm-medium text-[clamp(2rem,6vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.035em] text-black"
            >
              Experience
            </h2>

            <div
              data-home-motion-action
              className="flex shrink-0 justify-end gap-2 sm:gap-3"
            >
              <button
                type="button"
                aria-label="Previous experience"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                className="experience-nav-button flex h-10 w-10 items-center justify-center rounded-lg border border-[#D6D6D6] bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-25 sm:h-11 sm:w-11"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next experience"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
                className="experience-nav-button flex h-10 w-10 items-center justify-center rounded-lg border border-[#D6D6D6] bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-25 sm:h-11 sm:w-11"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="experience-content">
            <div className="experience-wrapper">
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
                allowTouchMove={true}
                grabCursor={true}
                slidesPerGroup={1}
                speed={550}
                className="experience-cards !pb-7"
              >
                {experiences.map(
                  ({
                    role,
                    company,
                    startDate,
                    endDate,
                    location,
                    logoSrc,
                    logoAlt,
                    imageSrc,
                    imageAlt,
                    linkedinUrl,
                  }) => (
                    <SwiperSlide
                      key={`${company}-${role}`}
                      className="!h-auto"
                    >
                      <article
                        data-home-motion-card
                        className="experience-card group flex h-auto max-w-full flex-col overflow-hidden rounded-[13px] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.065)] transition-shadow duration-500 ease-out motion-safe:hover:shadow-[0_8px_26px_rgba(0,0,0,0.085)]"
                      >
                        <div
                          data-home-motion-media
                          className="experience-card-media relative aspect-[4/3] overflow-hidden bg-[#E8E8E3]"
                        >
                          {imageSrc ? (
                            <Image
                              className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]"
                              src={imageSrc}
                              fill
                              sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) 44vw, 30vw"
                              alt={imageAlt ?? ""}
                            />
                          ) : (
                            <div className="absolute inset-0 bg-[linear-gradient(135deg,#deded8,#f4f4ef)]" />
                          )}

                          <div
                            aria-hidden="true"
                            className="experience-card-shade absolute inset-0 bg-gradient-to-b from-black/[0.06] via-transparent to-black/[0.12]"
                          />

                          <div className="experience-card-logo absolute right-4 top-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/70 bg-white/95 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-sm md:right-5 md:top-5 md:h-14 md:w-14">
                            {logoSrc ? (
                              <Image
                                className="h-full w-full rounded-[7px] object-contain"
                                src={logoSrc}
                                height={51}
                                width={51}
                                alt={logoAlt ?? `${company} Logo`}
                              />
                            ) : (
                              <span className="portfolio-color-avatar flex h-full w-full items-center justify-center rounded-[7px] bg-black font-nm-medium text-lg font-medium text-white">
                                {company.charAt(0)}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col p-5 sm:p-6 xl:p-7">
                          <div className="flex items-center justify-between gap-3">
                            <p className="experience-card-period min-w-0 font-nm-book text-[11px] uppercase leading-4 tracking-[0.1em] text-black/50 md:text-xs">
                              {startDate} &mdash; {endDate}
                            </p>

                            {linkedinUrl && (
                              <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${company} on LinkedIn`}
                                className="experience-card-link group/linkedin relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-transparent bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.09)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black motion-safe:hover:-translate-y-0.5"
                              >
                                <Image
                                  src="/images/icons/linkedin.png"
                                  alt=""
                                  width={17}
                                  height={17}
                                />
                                <span
                                  role="tooltip"
                                  className="pointer-events-none absolute right-0 top-full z-30 mt-3 translate-y-1 whitespace-nowrap rounded-lg border border-white/15 bg-[#052F40] px-3 py-2 font-nm-medium text-xs font-medium leading-[1.25] tracking-[0.01em] text-white opacity-0 shadow-[0_10px_28px_rgba(3,32,43,0.28)] transition-[opacity,transform] duration-200 group-hover/linkedin:translate-y-0 group-hover/linkedin:opacity-100 group-focus-visible/linkedin:translate-y-0 group-focus-visible/linkedin:opacity-100"
                                >
                                  <span className="absolute right-[15px] top-[-4px] size-2 rotate-45 border-l border-t border-white/15 bg-[#052F40]" />
                                  View LinkedIn
                                </span>
                              </a>
                            )}
                          </div>

                          <h3 className="experience-card-company mt-2.5 break-words font-nm-medium text-[24px] font-medium leading-[1.02] tracking-[-0.025em] text-black sm:text-[27px] md:mt-3 md:text-[29px]">
                            {company}
                          </h3>
                          <h4 className="experience-card-role mt-1.5 font-nm-book text-[15px] leading-5 text-black/65 sm:text-base md:text-[17px] md:leading-6">
                            {role}
                          </h4>

                          <div className="mt-4">
                            <div className="flex items-start gap-2.5">
                              <MapPinIcon
                                aria-hidden="true"
                                className="experience-card-location-icon mt-0.5 h-4 w-4 shrink-0 text-black/35"
                              />
                              <p className="experience-card-location max-w-[30ch] font-nm-book text-[13px] leading-[18px] text-black/60 md:text-sm md:leading-5">
                                {location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
