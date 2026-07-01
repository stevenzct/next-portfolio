"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "../../utils/motion";

const INTRO_SELECTOR = "[data-project-detail-intro]";
const HERO_SELECTOR = "[data-project-detail-hero]";
const REVEAL_SELECTOR = "[data-project-detail-reveal]";
const NEXT_PROJECT_SELECTOR = "[data-next-project]";
const NEXT_PROJECT_CONTENT_SELECTOR = "[data-next-project-content]";

type ProjectDetailMotionProps = {
  children: ReactNode;
  className?: string;
};

const ProjectDetailMotion = ({
  children,
  className,
}: ProjectDetailMotionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const introItems = container.querySelectorAll<HTMLElement>(INTRO_SELECTOR);
    const hero = container.querySelector<HTMLElement>(HERO_SELECTOR);
    const revealItems =
      container.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
    const nextProject =
      container.querySelector<HTMLElement>(NEXT_PROJECT_SELECTOR);
    const nextProjectContent = nextProject?.querySelectorAll<HTMLElement>(
      NEXT_PROJECT_CONTENT_SELECTOR
    );
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      return;
    }

    const observerAnimations: gsap.core.Animation[] = [];

    const context = gsap.context(() => {
      gsap.fromTo(
        introItems,
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.09,
          ease: "power3.out",
        }
      );

      if (hero) {
        gsap.fromTo(
          hero,
          { y: 24, clipPath: "inset(0 0 4% 0)" },
          {
            y: 0,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform,clipPath",
          }
        );
      }

      gsap.set(revealItems, { y: 44, autoAlpha: 0 });

      if (nextProject) {
        gsap.set(nextProject, {
          clipPath: "inset(8% 0 8% 0)",
        });
      }

      if (nextProjectContent) {
        gsap.set(nextProjectContent, { y: 28, autoAlpha: 0 });
      }
    }, container);

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          observerAnimations.push(
            gsap.to(entry.target, {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            })
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const nextProjectObserver = nextProject
      ? new IntersectionObserver(
          (entries, observer) => {
            if (!entries[0]?.isIntersecting) return;

            const timeline = gsap
              .timeline()
              .to(nextProject, {
                clipPath: "inset(0% 0 0% 0)",
                duration: 0.9,
                ease: "power3.out",
                clearProps: "clipPath",
              })
              .to(
                nextProjectContent ?? [],
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.55,
                  stagger: 0.09,
                  ease: "power3.out",
                  clearProps: "transform,opacity,visibility",
                },
                0.18
              );
            observerAnimations.push(timeline);

            observer.unobserve(nextProject);
          },
          { threshold: 0.18 }
        )
      : null;

    if (nextProject && nextProjectObserver) {
      nextProjectObserver.observe(nextProject);
    }

    return () => {
      revealObserver.disconnect();
      nextProjectObserver?.disconnect();
      observerAnimations.forEach((animation) => animation.kill());
      context.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ProjectDetailMotion;
