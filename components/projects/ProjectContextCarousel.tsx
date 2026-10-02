"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { ProjectGalleryImage } from "../../constants/projectDetails";
import { prefersReducedMotion } from "../../utils/motion";
import ProjectImageLightbox from "./ProjectImageLightbox";

import "swiper/css";
import "swiper/css/a11y";

type ProjectContextCarouselProps = {
  images: ProjectGalleryImage[];
  credit?: string;
};

const navigationClassName =
  "flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--project-line)] bg-[var(--project-canvas)] text-[var(--project-ink)] transition-colors hover:bg-[var(--project-surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--project-focus)] disabled:pointer-events-none disabled:opacity-30";

export default function ProjectContextCarousel({
  images,
  credit,
}: ProjectContextCarouselProps) {
  const headingId = useId();
  const carouselId = useId();
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    swiperRef.current?.keyboard.disable();
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    swiperRef.current?.keyboard.enable();
  };

  if (images.length === 0) return null;

  return (
    <section
      aria-labelledby={headingId}
      data-project-detail-reveal
      className="min-w-0 pb-16 md:pb-24 lg:pb-32"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5 sm:mb-10 md:mb-12 lg:mb-16">
        <div className="min-w-0 max-w-[1120px] flex-1 basis-full lg:basis-0">
          <p className="font-nm-book text-[11px] uppercase tracking-[0.16em] text-[var(--project-eyebrow)] sm:text-xs">
            Where I started
          </p>
          <h2
            id={headingId}
            className="mt-4 max-w-[15ch] break-words text-left text-balance font-nm-medium text-[clamp(2.25rem,5.4vw,4.5rem)] font-medium leading-[0.94] tracking-[-0.045em] text-[var(--project-ink)]"
          >
            Planning &amp; structure
          </h2>
          {credit && (
            <p className="mt-7 max-w-[70ch] text-left text-pretty font-nm-book text-base leading-7 text-[var(--project-copy-strong)] sm:text-lg sm:leading-8 md:mt-9">
              {credit}
            </p>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <p
            aria-live="polite"
            aria-atomic="true"
            className="mr-1 font-nm-book text-sm tabular-nums text-[var(--project-muted)]"
          >
            <span className="sr-only">Item </span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
            <span className="sr-only">: {images[activeIndex].title}</span>
          </p>
          <button
            type="button"
            aria-label="Previous planning item"
            aria-controls={carouselId}
            disabled={activeIndex === 0}
            onClick={() => swiperRef.current?.slidePrev()}
            className={navigationClassName}
          >
            <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next planning item"
            aria-controls={carouselId}
            disabled={activeIndex === images.length - 1}
            onClick={() => swiperRef.current?.slideNext()}
            className={navigationClassName}
          >
            <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Swiper
        id={carouselId}
        modules={[A11y, Keyboard]}
        a11y={{
          containerRoleDescriptionMessage: "carousel",
          itemRoleDescriptionMessage: "slide",
          slideLabelMessage: "{{index}} of {{slidesLength}}",
        }}
        keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: false }}
        slidesPerView={1}
        spaceBetween={24}
        speed={450}
        grabCursor
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.params.speed = prefersReducedMotion() ? 0 : 450;
          setActiveIndex(swiper.activeIndex);
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onBeforeDestroy={() => {
          swiperRef.current = null;
        }}
        className="project-context-swiper [&_.swiper-wrapper]:items-stretch"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={image.src}
            aria-hidden={index !== activeIndex}
            className="!h-auto"
          >
            <figure className="grid h-full min-w-0 overflow-hidden rounded-2xl border border-[var(--project-line-soft)] bg-[var(--project-surface)] md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
              <button
                type="button"
                onClick={() => openLightbox(index)}
                aria-haspopup="dialog"
                tabIndex={index === activeIndex ? 0 : -1}
                aria-label={`View ${image.title} full image`}
                className="relative block aspect-[4/3] min-w-0 cursor-zoom-in bg-[var(--project-canvas)] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--project-focus)] md:aspect-auto md:min-h-[360px] lg:min-h-[400px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) 55vw, 690px"
                  className="object-contain p-4 md:p-6"
                  draggable={false}
                />
              </button>
              <figcaption className="flex min-w-0 flex-col items-start border-t border-[var(--project-line-soft)] p-6 text-left sm:p-8 md:border-l md:border-t-0 lg:p-10">
                <div className="w-full max-w-[42ch]">
                  {image.label && (
                    <p className="font-nm-book text-[11px] leading-4 uppercase tracking-[0.14em] text-[var(--project-eyebrow)] sm:text-xs sm:leading-5">
                      {image.label}
                    </p>
                  )}
                  <h3
                    className={`${image.label ? "mt-3 " : ""}text-balance font-nm-medium text-[28px] font-medium leading-[1.15] tracking-[-0.03em] text-[var(--project-ink)] lg:text-[32px]`}
                  >
                    {image.title}
                  </h3>
                  {image.subtitle && (
                    <p className="mt-4 text-pretty font-nm-book text-lg leading-[1.45] tracking-[-0.01em] text-[var(--project-copy-soft)] lg:text-xl">
                      {image.subtitle}
                    </p>
                  )}
                  {image.description && (
                    <p className="mt-5 text-pretty font-nm-book text-base leading-[1.7] text-[var(--project-copy-strong)]">
                      {image.description}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  aria-haspopup="dialog"
                  tabIndex={index === activeIndex ? 0 : -1}
                  aria-label={`View ${image.title} full image`}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md font-nm-medium text-sm leading-5 text-[var(--project-link)] underline decoration-[var(--project-line-strong)] underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--project-focus)] md:mt-auto md:pt-6"
                >
                  View full image
                </button>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      {lightboxIndex !== null && (
        <ProjectImageLightbox
          images={images}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
