"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "../../utils/motion";

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

    const context = gsap.context(() => {
      gsap.fromTo(
        page,
        {
          y: 24,
          scale: 0.995,
          clipPath: "inset(0 0 5% 0)",
        },
        {
          y: 0,
          scale: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.65,
          ease: "power3.out",
          clearProps: "transform,clipPath",
        }
      );
    }, page);

    return () => context.revert();
  }, []);

  return <div ref={pageRef}>{children}</div>;
};

export default PageTransition;
