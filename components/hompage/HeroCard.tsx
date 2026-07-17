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
  const cardVisualRef = useRef<HTMLDivElement>(null);
  const colorLayerRef = useRef<HTMLDivElement>(null);
  const reducedMotionRef = useRef(false);
  const motionRef = useRef<CardMotion | null>(null);

  useEffect(() => {
    const shell = shellRef.current;
    const floatingCard = floatRef.current;
    const cardVisual = cardVisualRef.current;

    if (!shell || !floatingCard || !cardVisual) return;

    reducedMotionRef.current = prefersReducedMotion();

    if (reducedMotionRef.current) return;

    const context = gsap.context(() => {
      gsap.set(cardVisual, {
        filter: RESTING_SHADOW,
        transformOrigin: "50% 55%",
        transformPerspective: 1000,
      });

      const quickToOptions = {
        duration: 0.45,
        ease: "power3.out",
      };

      motionRef.current = {
        x: gsap.quickTo(cardVisual, "x", quickToOptions),
        y: gsap.quickTo(cardVisual, "y", quickToOptions),
        rotationX: gsap.quickTo(cardVisual, "rotationX", quickToOptions),
        rotationY: gsap.quickTo(cardVisual, "rotationY", quickToOptions),
        scale: gsap.quickTo(cardVisual, "scale", quickToOptions),
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

  useEffect(() => {
    const colorLayer = colorLayerRef.current;
    if (!colorLayer) return;

    const getColorLayerState = () => {
      const colorThemeEnabled =
        document.documentElement.dataset.colorTheme === "color";

      return {
        autoAlpha: colorThemeEnabled ? 1 : 0,
        clipPath: colorThemeEnabled
          ? "inset(0 0% 0 0)"
          : "inset(0 100% 0 0)",
      };
    };

    gsap.set(colorLayer, getColorLayerState());

    const syncColorLayer = () => {
      const nextState = getColorLayerState();

      if (prefersReducedMotion()) {
        gsap.set(colorLayer, nextState);
        return;
      }

      gsap.to(colorLayer, {
        ...nextState,
        duration: 0.72,
        ease: "power3.inOut",
        overwrite: "auto",
      });
    };

    const themeObserver = new MutationObserver(syncColorLayer);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-color-theme"],
    });

    return () => {
      themeObserver.disconnect();
      gsap.killTweensOf(colorLayer);
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
      className="relative z-20 isolate mx-auto flex w-full max-w-[215px] items-center justify-center [perspective:1000px] min-[375px]:max-w-[235px] sm:max-w-[300px] lg:max-w-[325px] xl:mx-0 xl:max-w-[345px]"
    >
      <div
        className="portfolio-hero-orbit-outer absolute left-1/2 top-1/2 -z-20 aspect-square w-[132%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.055]"
        aria-hidden="true"
      />
      <div
        className="portfolio-hero-orbit-inner absolute left-1/2 top-1/2 -z-10 aspect-square w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/35 backdrop-blur-[2px]"
        aria-hidden="true"
      />
      <div
        className="portfolio-hero-orbit-glow absolute inset-[12%] -z-30 rounded-full bg-black/10 blur-3xl"
        aria-hidden="true"
      />
      <div ref={floatRef} className="relative z-20 w-full will-change-transform">
        <div
          ref={cardVisualRef}
          className="relative w-full will-change-transform"
          style={{ filter: RESTING_SHADOW }}
        >
          <Image
            src="/images/hero/concept-to-conversion.png"
            alt="From concept to conversion - brand, UI/UX, and web development"
            width={712}
            height={884}
            priority
            sizes="(min-width: 1280px) 345px, (min-width: 1024px) 325px, (min-width: 640px) 300px, (min-width: 375px) 235px, 215px"
            className="relative z-0 h-auto w-full"
          />
          <div
            ref={colorLayerRef}
            className="portfolio-hero-card-color-layer absolute inset-0 z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
