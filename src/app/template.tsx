"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "../../utils/motion";

const HEADING_SELECTOR = "[data-page-motion-heading]";
const COPY_SELECTOR = "[data-page-motion-copy]";
const MEDIA_SELECTOR = "[data-page-motion-media]";
const ACTION_SELECTOR = "[data-page-motion-action]";
const CUSTOM_MOTION_SELECTOR = [
  "[data-home-motion-section]",
  "[data-project-detail-intro]",
  "[data-project-detail-hero]",
].join(",");

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    if (prefersReducedMotion()) {
      return;
    }

    const headings = page.querySelectorAll<HTMLElement>(HEADING_SELECTOR);
    const copy = page.querySelectorAll<HTMLElement>(COPY_SELECTOR);
    const media = page.querySelectorAll<HTMLElement>(MEDIA_SELECTOR);
    const actions = page.querySelectorAll<HTMLElement>(ACTION_SELECTOR);
    const hasRouteMotionTargets =
      headings.length + copy.length + media.length + actions.length > 0;

    if (!hasRouteMotionTargets && page.querySelector(CUSTOM_MOTION_SELECTOR)) {
      return;
    }

    const context = gsap.context(() => {
      if (!hasRouteMotionTargets) {
        gsap.fromTo(
          page,
          { y: 18, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          },
        );
        return;
      }

      gsap.set(headings, {
        yPercent: 112,
        clipPath: "inset(0 0 100% 0)",
        autoAlpha: 0,
      });
      gsap.set(copy, { y: 26, autoAlpha: 0 });
      gsap.set(media, {
        y: 38,
        scale: 1.055,
        clipPath: "inset(7% 0 7% 0 round 18px)",
        autoAlpha: 0,
        transformOrigin: "50% 50%",
      });
      gsap.set(actions, { y: 20, autoAlpha: 0 });

      gsap
        .timeline({ defaults: { overwrite: "auto" } })
        .to(headings, {
          yPercent: 0,
          clipPath: "inset(0 0 0% 0)",
          autoAlpha: 1,
          duration: 1.05,
          stagger: 0.09,
          ease: "power4.out",
          clearProps: "transform,clipPath,opacity,visibility",
        })
        .to(
          copy,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.72,
            stagger: 0.075,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
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
            clearProps: "transform,clipPath,opacity,visibility",
          },
          0.08,
        )
        .to(
          actions,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.68,
            stagger: 0.065,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          },
          0.3,
        );
    }, page);

    return () => context.revert();
  }, []);

  return <div ref={pageRef}>{children}</div>;
};

export default PageTransition;
