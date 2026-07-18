"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef, type ReactNode } from "react";

import { prefersReducedMotion } from "../../utils/motion";

const SECTION_SELECTOR = "[data-home-motion-section]";
const HEADING_SELECTOR = "[data-home-motion-heading]";
const COPY_SELECTOR = "[data-home-motion-copy]";
const MEDIA_SELECTOR = "[data-home-motion-media]";
const CARD_SELECTOR = "[data-home-motion-card]";
const ACTION_SELECTOR = "[data-home-motion-action]";

type HomepageMotionProps = {
  children: ReactNode;
};

const HomepageMotion = ({ children }: HomepageMotionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (
      !container ||
      prefersReducedMotion() ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const sections = container.querySelectorAll<HTMLElement>(SECTION_SELECTOR);
    const timelines: gsap.core.Timeline[] = [];

    const context = gsap.context(() => {
      sections.forEach((section) => {
        const headings = section.querySelectorAll<HTMLElement>(HEADING_SELECTOR);
        const copy = section.querySelectorAll<HTMLElement>(COPY_SELECTOR);
        const media = section.querySelectorAll<HTMLElement>(MEDIA_SELECTOR);
        const cards = section.querySelectorAll<HTMLElement>(CARD_SELECTOR);
        const actions = section.querySelectorAll<HTMLElement>(ACTION_SELECTOR);

        gsap.set(headings, {
          yPercent: 112,
          clipPath: "inset(0 0 100% 0)",
          autoAlpha: 0,
          willChange: "transform,clip-path,opacity",
        });
        gsap.set(copy, {
          y: 26,
          autoAlpha: 0,
          willChange: "transform,opacity",
        });
        gsap.set(media, {
          y: 38,
          scale: 1.055,
          clipPath: "inset(7% 0 7% 0 round 18px)",
          autoAlpha: 0,
          transformOrigin: "50% 50%",
          willChange: "transform,clip-path,opacity",
        });
        gsap.set(cards, {
          y: 48,
          scale: 0.985,
          autoAlpha: 0,
          transformOrigin: "50% 100%",
          willChange: "transform,opacity",
        });
        gsap.set(actions, {
          y: 20,
          autoAlpha: 0,
          willChange: "transform,opacity",
        });
      });
    }, container);

    const observer = new IntersectionObserver(
      (entries, sectionObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target as HTMLElement;
          const headings = section.querySelectorAll<HTMLElement>(HEADING_SELECTOR);
          const copy = section.querySelectorAll<HTMLElement>(COPY_SELECTOR);
          const media = section.querySelectorAll<HTMLElement>(MEDIA_SELECTOR);
          const cards = section.querySelectorAll<HTMLElement>(CARD_SELECTOR);
          const actions = section.querySelectorAll<HTMLElement>(ACTION_SELECTOR);

          const timeline = gsap
            .timeline({ defaults: { overwrite: "auto" } })
            .to(headings, {
              yPercent: 0,
              clipPath: "inset(0 0 0% 0)",
              autoAlpha: 1,
              duration: 1.05,
              stagger: 0.09,
              ease: "power4.out",
              clearProps: "transform,clipPath,opacity,visibility,willChange",
            })
            .to(
              copy,
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.72,
                stagger: 0.075,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility,willChange",
              },
              0.16,
            )
            .to(
              media,
              {
                y: 0,
                scale: 1,
                clipPath: "inset(0% 0 0% 0 round 18px)",
                autoAlpha: 1,
                duration: 1.25,
                stagger: 0.1,
                ease: "expo.out",
                clearProps: "transform,clipPath,opacity,visibility,willChange",
              },
              0.08,
            )
            .to(
              cards,
              {
                y: 0,
                scale: 1,
                autoAlpha: 1,
                duration: 0.9,
                stagger: 0.085,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility,willChange",
              },
              0.24,
            )
            .to(
              actions,
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.68,
                stagger: 0.065,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility,willChange",
              },
              0.3,
            );

          timelines.push(timeline);
          sectionObserver.unobserve(section);
        });
      },
      { threshold: 0.13, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      timelines.forEach((timeline) => timeline.kill());
      context.revert();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default HomepageMotion;
