"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef, type PointerEvent } from "react";
import { prefersReducedMotion } from "../../utils/motion";

const RESTING_SHADOW = "drop-shadow(0 28px 45px rgba(0, 0, 0, 0.18))";

type CardMotion = {
  x: ReturnType<typeof gsap.quickTo>;
  y: ReturnType<typeof gsap.quickTo>;
  rotationX: ReturnType<typeof gsap.quickTo>;
  rotationY: ReturnType<typeof gsap.quickTo>;
  scale: ReturnType<typeof gsap.quickTo>;
};

const HeroCard = () => {
  const shellRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLImageElement>(null);
  const reducedMotionRef = useRef(false);
  const motionRef = useRef<CardMotion | null>(null);

  useEffect(() => {
    const shell = shellRef.current;
    const floatingCard = floatRef.current;
    const card = cardRef.current;

    if (!shell || !floatingCard || !card) return;

    reducedMotionRef.current = prefersReducedMotion();

    if (reducedMotionRef.current) return;

    const context = gsap.context(() => {
      gsap.set(card, {
        filter: RESTING_SHADOW,
        transformOrigin: "50% 55%",
        transformPerspective: 1000,
      });

      const quickToOptions = {
        duration: 0.45,
        ease: "power3.out",
      };

      motionRef.current = {
        x: gsap.quickTo(card, "x", quickToOptions),
        y: gsap.quickTo(card, "y", quickToOptions),
        rotationX: gsap.quickTo(card, "rotationX", quickToOptions),
        rotationY: gsap.quickTo(card, "rotationY", quickToOptions),
        scale: gsap.quickTo(card, "scale", quickToOptions),
      };

      gsap.to(floatingCard, {
        y: -8,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, shell);

    return () => {
      motionRef.current = null;
      context.revert();
    };
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const shell = shellRef.current;
    const motion = motionRef.current;

    if (
      !shell ||
      !motion ||
      reducedMotionRef.current ||
      event.pointerType === "touch"
    ) {
      return;
    }

    const bounds = shell.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    motion.x(horizontal * 8);
    motion.y(vertical * 4 - 6);
    motion.rotationX(vertical * -8);
    motion.rotationY(horizontal * 10);
    motion.scale(1.025);
  };

  const handlePointerLeave = () => {
    const motion = motionRef.current;

    if (!motion || reducedMotionRef.current) return;

    motion.x(0);
    motion.y(0);
    motion.rotationX(0);
    motion.rotationY(0);
    motion.scale(1);
  };

  return (
    <div
      ref={shellRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative z-20 isolate mx-auto flex w-full max-w-[215px] items-center justify-center [perspective:1000px] min-[375px]:max-w-[235px] sm:max-w-[300px] min-[900px]:mx-0 min-[900px]:max-w-[275px] lg:max-w-[325px] xl:max-w-[345px]"
    >
      <div
        className="absolute left-1/2 top-1/2 -z-20 aspect-square w-[132%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.055]"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/35 backdrop-blur-[2px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-[12%] -z-30 rounded-full bg-black/10 blur-3xl"
        aria-hidden="true"
      />
      <div ref={floatRef} className="relative z-20 w-full will-change-transform">
        <Image
          ref={cardRef}
          src="/images/hero/concept-to-conversion.png"
          alt="From concept to conversion - brand, UI/UX, and web development"
          width={712}
          height={884}
          priority
          sizes="(min-width: 1280px) 345px, (min-width: 1024px) 325px, (min-width: 900px) 275px, (min-width: 640px) 300px, (min-width: 375px) 235px, 215px"
          className="h-auto w-full will-change-transform"
          style={{ filter: RESTING_SHADOW }}
        />
      </div>
    </div>
  );
};

export default HeroCard;
