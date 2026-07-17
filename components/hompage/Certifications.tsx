"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { certifications } from "../../constants/certifications";

import "swiper/css";

function Certifications() {
  const swiperRef = React.useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const updateNavigation = React.useCallback((swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  return (
    <div
      id="certifications"
      className="certifications bg-[#F8F8F8] py-[80px] md:py-24 lg:py-[120px]"
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <p className="mb-1 font-nm-book text-base leading-5 md:mb-2 md:text-xl md:leading-normal lg:text-2xl">
            Certifications
          </p>
          <div className="mb-7 flex items-end justify-between gap-2.5 sm:gap-3 md:mb-12 lg:mb-16">
            <h2 className="min-w-0 text-start font-nm-medium text-[28px] font-medium leading-[28px] text-black sm:text-[32px] sm:leading-[30px] md:text-6xl md:leading-[0.95] lg:text-7xl xl:text-8xl xl:leading-[77px]">
              Learning &amp; Growth
            </h2>
            <div className="flex shrink-0 justify-end gap-2 sm:gap-3">
              <button
                type="button"
                aria-label="Previous certification"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                className="certification-nav-button flex h-10 w-10 items-center justify-center rounded-lg border border-[#D6D6D6] bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-25 sm:h-11 sm:w-11"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next certification"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
                className="certification-nav-button flex h-10 w-10 items-center justify-center rounded-lg border border-[#D6D6D6] bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-25 sm:h-11 sm:w-11"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="certifications-content">
            <div className="certifications-wrapper">
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
                className="certification-cards !pb-7"
              >
                {certifications.map(
                  ({
                    certificateName,
                    Company,
                    Issued,
                    credentialType,
                    logoSrc,
                    logoAlt,
                    imageSrc,
                    imageAlt,
                    certificateUrl,
                  }) => (
                    <SwiperSlide key={certificateName} className="!h-auto">
                      <article className="certification-card group flex h-full max-w-full flex-col overflow-hidden rounded-[13px] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.065)] transition-shadow duration-500 ease-out motion-safe:hover:shadow-[0_8px_26px_rgba(0,0,0,0.085)]">
                        <div className="certification-card-media relative aspect-[4/3] bg-[#E8E8E3] p-3 sm:p-4">
                          <div className="certification-card-artwork-frame relative h-full w-full overflow-hidden rounded-[10px] bg-white shadow-[0_7px_22px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.015]">
                            <Image
                              className="certification-card-artwork object-cover"
                              src={imageSrc}
                              fill
                              sizes="(max-width: 767px) calc(100vw - 72px), (max-width: 1279px) 40vw, 27vw"
                              alt={imageAlt}
                            />
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col p-5 sm:p-6 xl:p-7">
                          <div className="mb-5 flex items-center justify-between gap-3">
                            <div className="certification-card-logo flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[4px] bg-white p-1 shadow-[0_1px_4px_rgba(0,0,0,0.055)] sm:h-11 sm:w-11">
                              {logoSrc ? (
                                <Image
                                  className="h-full w-full rounded-[2px] object-contain"
                                  src={logoSrc}
                                  height={51}
                                  width={51}
                                  alt={logoAlt ?? `${certificateName} Logo`}
                                />
                              ) : (
                                <span className="portfolio-color-avatar flex h-full w-full items-center justify-center rounded-[2px] bg-black font-nm-medium text-base font-medium text-white">
                                  {certificateName.charAt(0)}
                                </span>
                              )}
                            </div>
                            <p className="certification-card-issued text-right font-nm-book text-[11px] uppercase leading-4 tracking-[0.11em] text-black/45 md:text-xs">
                              {Issued}
                            </p>
                          </div>

                          <h3 className="certification-card-name font-nm-medium text-[28px] font-medium leading-[0.98] tracking-[-0.035em] text-black md:text-[30px]">
                            {certificateName}
                          </h3>
                          <h4 className="certification-card-company mt-2 font-nm-book text-base leading-5 text-black/60 md:text-lg md:leading-6">
                            {Company}
                          </h4>

                          <div className="mt-auto pt-6">
                            <a
                              href={certificateUrl ?? imageSrc}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="certification-card-link group/action inline-flex h-11 w-full items-center justify-between rounded-[8px] border border-transparent bg-[#F3F3F0] px-2.5 font-nm-medium text-sm font-medium text-black shadow-[inset_0_0_0_1px_rgba(0,0,0,0.045)] transition-[background-color,box-shadow] duration-300 hover:bg-[#EAEAE6] hover:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.07)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                              <span className="inline-flex items-center gap-2.5">
                                <span className="certification-card-action-icon flex h-7 w-7 items-center justify-center rounded-[6px] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
                                  <DocumentCheckIcon className="h-4 w-4 shrink-0" />
                                </span>
                                {credentialType === "badge"
                                  ? "View Badge"
                                  : "View Certificate"}
                              </span>
                              <span className="certification-card-action-arrow flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 motion-safe:group-hover/action:-translate-y-0.5 motion-safe:group-hover/action:translate-x-0.5">
                                <ArrowUpRightIcon className="h-3.5 w-3.5" />
                              </span>
                            </a>
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
    </div>
  );
}

export default Certifications;
