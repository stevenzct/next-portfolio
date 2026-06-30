"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { experiences } from "../../constants/experience";

import "swiper/css";

function Experience() {
  const swiperRef = React.useRef<SwiperType | null>(null);

  return (
    <div
      id="work"
      className="experience pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] bg-[#F8F8F8]">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h3 className="font-nm-book text-base md:text-2xl mb-2">Work</h3>
          <div className="mb-8 flex items-center justify-between gap-4 md:mb-16">
            <h1 className="text-[32px] md:text-7xl lg:text-8xl text-start font-nm-medium font-medium text-black w-auto leading-[30px] md:leading-20 lg:leading-[77px]">
              Experience
            </h1>
            <div className="flex shrink-0 justify-end gap-3">
              <button
                type="button"
                aria-label="Previous experience"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#D6D6D6] bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next experience"
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#D6D6D6] bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white"
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
                }}
                slidesPerView={1}
                spaceBetween={24}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                loop={false}
                allowTouchMove={true}
                grabCursor={true}
                slidesPerGroup={1}
                speed={400}
                className="experience-cards"
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
                      <div className="h-full max-w-full p-6 lg:p-8 rounded-[13px] bg-white">
                        {logoSrc ? (
                          <Image
                            className="rounded-lg"
                            src={logoSrc}
                            height={51}
                            width={51}
                            alt={logoAlt ?? `${company} Logo`}
                          />
                        ) : (
                          <div className="flex h-[51px] w-[51px] items-center justify-center rounded-lg bg-black text-white text-[20px] font-nm-medium font-medium">
                            {company.charAt(0)}
                          </div>
                        )}
                        <h3 className="mt-1 text-[24px] font-nm-medium font-medium text-black">
                          {role}
                        </h3>
                        <h4 className="text-[18px] font-nm-medium font-medium text-[#242424]">
                          {company}
                        </h4>
                        <p className="text-[14px] font-nm-book text-[#242424]">
                          {startDate} to {endDate}
                        </p>
                        <p className="text-[14px] font-nm-book text-[#242424]">
                          {location}
                        </p>
                        <div className="pt-3.5">
                          <a
                            href={linkedinUrl ?? undefined}
                            target={linkedinUrl ? "_blank" : undefined}
                            rel={linkedinUrl ? "noopener noreferrer" : undefined}
                            aria-disabled={!linkedinUrl}
                            className={`w-full ${
                              !linkedinUrl ? "pointer-events-none" : ""
                            }`}
                          >
                            <button className={`inline-flex w-full min-w-0 items-center justify-center gap-1.5 whitespace-nowrap px-1.5 py-2 transition-colors duration-300 hover:bg-[#F8F8F8] text-[11px] sm:gap-2 sm:px-3 sm:text-sm font-nm-book rounded-[8px] border-1 border-[#D6D6D6] ${
                              linkedinUrl ? "text-[#222222]" : "text-[#9A9A9A]"
                            }`}>
                              <Image
                                src="/images/icons/linkedin.png"
                                alt="LinkedIn"
                                width={14}
                                height={14}
                              />
                              LinkedIn
                            </button>
                          </a>
                        </div>
                        {imageSrc && (
                          <div className="bg-[#F8F8F8] rounded-[8px] mt-4">
                            <Image
                              className="rounded-lg w-full"
                              src={imageSrc}
                              height={227}
                              width={323}
                              alt={imageAlt ?? ""}
                            />
                          </div>
                        )}
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

export default Experience;
