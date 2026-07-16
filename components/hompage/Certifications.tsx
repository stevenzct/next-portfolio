"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { certifications } from "../../constants/certifications";

import "swiper/css";

function Certifications() {
  const swiperRef = React.useRef<SwiperType | null>(null);

  return (
    <div
      id="certifications"
      className="certifications bg-[#F8F8F8] py-[80px] md:py-24 lg:py-[120px]"
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <p className="mb-2 font-nm-book text-base md:text-xl lg:text-2xl">
            Certifications
          </p>
          <div className="mb-8 flex items-center justify-between gap-4 md:mb-12 lg:mb-16">
            <h2 className="w-auto text-start font-nm-medium text-[32px] font-medium leading-[30px] text-black md:text-6xl md:leading-[0.95] lg:text-7xl xl:text-8xl xl:leading-[77px]">
              Learning &amp; Growth
            </h2>
            <div className="flex shrink-0 justify-end gap-3">
              <button
                type="button"
                aria-label="Previous certification"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#D6D6D6] bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next certification"
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#D6D6D6] bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white"
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
                }}
                slidesPerView={1}
                spaceBetween={24}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1280: {
                    slidesPerView: 3,
                  },
                }}
                loop={false}
                allowTouchMove={true}
                grabCursor={true}
                slidesPerGroup={1}
                speed={400}
                className="certification-cards"
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
                      <div className="h-full max-w-full rounded-[13px] bg-white p-6 xl:p-8">
                        {logoSrc ? (
                          <Image
                            className="rounded-lg"
                            src={logoSrc}
                            height={51}
                            width={51}
                            alt={logoAlt ?? `${certificateName} Logo`}
                          />
                        ) : (
                          <div className="flex h-[51px] w-[51px] items-center justify-center rounded-lg bg-black text-white text-[20px] font-nm-medium font-medium">
                            {certificateName.charAt(0)}
                          </div>
                        )}
                        <h3 className="mt-1 text-[24px] font-nm-medium font-medium leading-tight text-black md:leading-normal">
                          {certificateName}
                        </h3>
                        <h4 className="text-[18px] font-nm-medium font-medium text-[#242424]">
                          {Company}
                        </h4>
                        <p className="text-[14px] font-nm-book text-[#242424]">
                          {Issued}
                        </p>
                        <a
                          href={certificateUrl ?? imageSrc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3.5 inline-flex w-full min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-[8px] border-1 border-[#D6D6D6] px-2 py-2 text-[11px] font-nm-book text-[#222222] transition-colors duration-300 hover:bg-[#F8F8F8] sm:gap-2 sm:px-3 sm:text-sm"
                        >
                          <DocumentCheckIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                          {credentialType === "badge"
                            ? "View Badge"
                            : "View Certificate"}
                        </a>
                        <div className="bg-[#F8F8F8] rounded-[8px] mt-4">
                          <Image
                            className="rounded-lg w-full"
                            src={imageSrc}
                            height={227}
                            width={323}
                            alt={imageAlt}
                          />
                        </div>
                      </div>
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
