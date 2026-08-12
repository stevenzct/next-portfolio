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

const certificationAccents = [
  {
    surface: "#FFF0E7",
    surfaceSoft: "#FFF9F4",
    line: "#F5B99A",
    accent: "#F26A2E",
    glow: "rgba(242, 106, 46, 0.18)",
    shadow: "rgba(156, 75, 34, 0.13)",
  },
  {
    surface: "#EAF6FA",
    surfaceSoft: "#F6FBFD",
    line: "#A8D2DF",
    accent: "#247D96",
    glow: "rgba(36, 125, 150, 0.17)",
    shadow: "rgba(30, 91, 108, 0.13)",
  },
  {
    surface: "#F3EEFF",
    surfaceSoft: "#FBF9FF",
    line: "#CDBAF2",
    accent: "#7C50C9",
    glow: "rgba(124, 80, 201, 0.16)",
    shadow: "rgba(94, 62, 146, 0.13)",
  },
  {
    surface: "#EAF7F0",
    surfaceSoft: "#F7FCF9",
    line: "#ADD8C1",
    accent: "#2F8B64",
    glow: "rgba(47, 139, 100, 0.16)",
    shadow: "rgba(38, 104, 76, 0.13)",
  },
  {
    surface: "#FFF1F6",
    surfaceSoft: "#FFF9FB",
    line: "#EDBAD0",
    accent: "#B95780",
    glow: "rgba(185, 87, 128, 0.15)",
    shadow: "rgba(127, 62, 89, 0.12)",
  },
  {
    surface: "#FFF7D9",
    surfaceSoft: "#FFFCF1",
    line: "#E7CE76",
    accent: "#A77712",
    glow: "rgba(167, 119, 18, 0.14)",
    shadow: "rgba(118, 84, 15, 0.12)",
  },
];

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
      data-home-motion-section
      className="certifications bg-[#F8F8F8] py-[80px] md:py-24 lg:py-[120px]"
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <p
            data-home-motion-copy
            className="mb-1 font-nm-book text-base leading-5 md:mb-2 md:text-xl md:leading-normal lg:text-2xl"
          >
            Certifications
          </p>
          <div className="mb-7 flex items-end justify-between gap-2.5 sm:gap-3 md:mb-12 lg:mb-16">
            <h2
              data-home-motion-heading
              className="min-w-0 text-start font-nm-medium text-[28px] font-medium leading-[0.96] tracking-[-0.035em] text-black sm:text-[32px] md:text-[clamp(2.75rem,6vw,4.75rem)]"
            >
              Learning &amp; Growth
            </h2>
            <div
              data-home-motion-action
              className="flex shrink-0 justify-end gap-2 sm:gap-3"
            >
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
            <div className="certifications-wrapper -mx-6 overflow-hidden px-6 py-3 sm:-mx-8 sm:px-8">
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
                className="certification-cards !overflow-visible !pb-8"
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
                  }, index) => {
                    const palette =
                      certificationAccents[index % certificationAccents.length];
                    const cardStyle = {
                      "--cert-surface": palette.surface,
                      "--cert-surface-soft": palette.surfaceSoft,
                      "--cert-line": palette.line,
                      "--cert-accent": palette.accent,
                      "--cert-glow": palette.glow,
                      "--cert-shadow": palette.shadow,
                    } as React.CSSProperties;

                    return (
                      <SwiperSlide key={certificateName} className="!h-auto">
                        <article
                          data-home-motion-card
                          style={cardStyle}
                          className="certification-card group flex h-full max-w-full flex-col overflow-hidden rounded-[24px] border border-black/[0.07] bg-white shadow-[0_8px_24px_var(--cert-shadow)] transition-[transform,box-shadow,border-color] duration-500 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:border-[var(--cert-line)] motion-safe:hover:shadow-[0_14px_36px_var(--cert-shadow)]"
                        >
                        <div className="certification-card-media relative aspect-[1.27/1] overflow-hidden border-b border-black/[0.06] bg-[var(--cert-surface)] p-3.5 sm:p-4">
                          <div
                            aria-hidden="true"
                            className="certification-card-glow absolute -right-12 -top-16 h-52 w-52 rounded-full bg-[var(--cert-glow)] blur-[18px]"
                          />
                          <div
                            aria-hidden="true"
                            className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-white/80 blur-2xl"
                          />
                          <div
                            data-home-motion-media
                            className="certification-card-artwork-frame relative h-full w-full overflow-hidden rounded-[17px] border border-white/80 bg-white/70 shadow-[0_14px_34px_var(--cert-shadow)] backdrop-blur-sm transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.012]"
                          >
                            <Image
                              className="certification-card-artwork object-cover mix-blend-multiply"
                              src={imageSrc}
                              fill
                              sizes="(max-width: 767px) calc(100vw - 72px), (max-width: 1279px) 40vw, 27vw"
                              alt={imageAlt}
                            />
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col p-5 sm:p-6 xl:p-7">
                          <div className="mb-6 flex min-w-0 items-center gap-2.5">
                            <div className="certification-card-logo flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[11px] border border-[var(--cert-line)] bg-[var(--cert-surface-soft)] p-1.5 shadow-[0_4px_12px_var(--cert-shadow)] sm:h-11 sm:w-11">
                              {logoSrc ? (
                                <Image
                                  className="h-full w-full rounded-[5px] object-contain"
                                  src={logoSrc}
                                  height={51}
                                  width={51}
                                  alt={logoAlt ?? `${certificateName} Logo`}
                                />
                              ) : (
                                <span className="flex h-full w-full items-center justify-center rounded-[5px] bg-[var(--cert-accent)] font-nm-medium text-base font-medium text-white">
                                  {certificateName.charAt(0)}
                                </span>
                              )}
                            </div>
                            <p className="certification-card-issued min-w-0 rounded-full bg-[var(--cert-surface-soft)] px-3 py-2 font-nm-book text-[10px] uppercase leading-4 tracking-[0.09em] text-black/55 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.035)] sm:text-[11px]">
                              {Issued}
                            </p>
                          </div>

                          <h3 className="certification-card-name max-w-[15ch] font-nm-medium text-[28px] font-medium leading-[1.01] tracking-[-0.04em] text-black md:text-[30px]">
                            {certificateName}
                          </h3>
                          <h4 className="certification-card-company mt-2 font-nm-book text-base leading-5 text-black/60 md:text-lg md:leading-6">
                            {Company}
                          </h4>

                          <div className="mt-auto pt-7">
                            <a
                              href={certificateUrl ?? imageSrc}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="certification-card-link group/action inline-flex h-12 w-full items-center justify-between rounded-[13px] border border-[var(--cert-line)] bg-white/90 px-2.5 font-nm-medium text-sm font-medium text-black shadow-[0_6px_18px_var(--cert-shadow)] transition-[background-color,box-shadow,border-color] duration-300 hover:bg-[var(--cert-surface-soft)] hover:shadow-[0_9px_24px_var(--cert-shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cert-accent)]"
                            >
                              <span className="inline-flex items-center gap-2.5">
                                <span className="certification-card-action-icon flex h-8 w-8 items-center justify-center rounded-[9px] bg-[var(--cert-surface)] text-[var(--cert-accent)] shadow-[inset_0_0_0_1px_var(--cert-line)]">
                                  <DocumentCheckIcon className="h-4 w-4 shrink-0" />
                                </span>
                                {credentialType === "badge"
                                  ? "View Badge"
                                  : "View Certificate"}
                              </span>
                              <span className="certification-card-action-arrow flex h-8 w-8 items-center justify-center rounded-full bg-[var(--cert-accent)] text-white shadow-[0_5px_14px_var(--cert-shadow)] transition-transform duration-300 motion-safe:group-hover/action:-translate-y-0.5 motion-safe:group-hover/action:translate-x-0.5">
                                <ArrowUpRightIcon className="h-4 w-4" />
                              </span>
                            </a>
                          </div>
                        </div>
                        </article>
                      </SwiperSlide>
                    );
                  }
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
