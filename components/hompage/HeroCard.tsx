"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef, type PointerEvent } from "react";

const RESTING_SHADOW = "drop-shadow(0 28px 45px rgba(0, 0, 0, 0.18))";
const HOVER_SHADOW = "drop-shadow(0 36px 50px rgba(0, 0, 0, 0.28))";

const HeroCard = () => {
  const shellRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLImageElement>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const shell = shellRef.current;
    const floatingCard = floatRef.current;
    const card = cardRef.current;

    if (!shell || !floatingCard || !card) return;

    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotionRef.current) return;

    const context = gsap.context(() => {
      gsap.set(card, {
        filter: RESTING_SHADOW,
        transformOrigin: "50% 55%",
        transformPerspective: 1000,
      });

      gsap.to(floatingCard, {
        y: -8,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, shell);

    return () => context.revert();
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const shell = shellRef.current;
    const card = cardRef.current;

    if (!shell || !card || reducedMotionRef.current || event.pointerType === "touch") {
      return;
    }

    const bounds = shell.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(card, {
      x: horizontal * 8,
      y: vertical * 4 - 6,
      rotationX: vertical * -8,
      rotationY: horizontal * 10,
      scale: 1.025,
      filter: HOVER_SHADOW,
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;

    if (!card || reducedMotionRef.current) return;

    gsap.to(card, {
      x: 0,
      y: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      filter: RESTING_SHADOW,
      duration: 0.7,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={shellRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate mx-auto flex w-full max-w-[300px] items-center justify-center [perspective:1000px] lg:max-w-[360px]"
    >
      <div
        className="absolute inset-[14%] -z-10 rounded-full bg-white/70 blur-3xl"
        aria-hidden="true"
      />
      <div ref={floatRef} className="w-full will-change-transform">
        <Image
          ref={cardRef}
          src="/images/hero/concept-to-conversion.png"
          alt="Concept to conversion design card"
          width={685}
          height={868}
          priority
          className="h-auto w-full will-change-transform"
        />
      </div>
    </div>
  );
};

export default HeroCard;
