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
      className="experience bg-[#F8F8F8] py-[80px] md:py-24 lg:py-[120px]">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <p className="mb-2 font-nm-book text-base md:text-xl lg:text-2xl">Work</p>
          <div className="mb-8 flex items-center justify-between gap-4 md:mb-12 lg:mb-16">
            <h2 className="w-auto text-start font-nm-medium text-[32px] font-medium leading-[30px] text-black md:text-6xl md:leading-[0.95] lg:text-7xl xl:text-8xl xl:leading-[77px]">
              Experience
            </h2>
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
                  1280: {
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
                      <div className="h-full max-w-full rounded-[13px] bg-white p-6 xl:p-8">
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
