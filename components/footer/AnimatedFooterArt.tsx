"use client";

import gsap from "gsap";
import Image from "next/image";
import {
  useLayoutEffect,
  useRef,
  type PointerEvent,
} from "react";

import { prefersReducedMotion } from "../../utils/motion";
import styles from "../Footer.module.css";

type ArtworkMotion = {
  x: ReturnType<typeof gsap.quickTo>;
  y: ReturnType<typeof gsap.quickTo>;
  scale: ReturnType<typeof gsap.quickTo>;
};

const AnimatedFooterArt = () => {
  const shellRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const reducedMotionRef = useRef(false);
  const motionRef = useRef<ArtworkMotion | null>(null);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    const media = mediaRef.current;
    const image = imageRef.current;
    if (!shell || !media || !image) return;

    reducedMotionRef.current = prefersReducedMotion();
    if (
      reducedMotionRef.current ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const restScale = window.matchMedia("(max-width: 639px)").matches
      ? 1.08
      : 1.015;
    const animations: gsap.core.Animation[] = [];
    let idleTween: gsap.core.Tween | null = null;
    let hasRevealed = false;
    let isVisible = false;

    const context = gsap.context(() => {
      gsap.set(media, {
        transformOrigin: "50% 50%",
      });

      const quickToOptions = {
        duration: 0.7,
        ease: "power3.out",
      };
      motionRef.current = {
        x: gsap.quickTo(image, "x", quickToOptions),
        y: gsap.quickTo(image, "y", quickToOptions),
        scale: gsap.quickTo(image, "scale", quickToOptions),
      };
    }, shell);

    const startIdleMotion = () => {
      if (idleTween) return;

      idleTween = gsap.to(media, {
        xPercent: 0.7,
        yPercent: -1.2,
        scale: restScale + 0.018,
        duration: 6.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      animations.push(idleTween);

      if (!isVisible) idleTween.pause();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry?.isIntersecting);

        if (!isVisible) {
          idleTween?.pause();
          return;
        }

        if (hasRevealed) {
          idleTween?.resume();
          return;
        }

        hasRevealed = true;
        const revealTimeline = gsap
          .timeline({ onComplete: startIdleMotion })
          .fromTo(
            shell,
            {
              clipPath: "inset(0 100% 0 0 round 20px)",
            },
            {
              clipPath: "inset(0 0% 0 0 round 20px)",
              duration: 1.25,
              ease: "power4.inOut",
              clearProps: "clipPath",
              immediateRender: false,
            },
          )
          .fromTo(
            media,
            {
              xPercent: 4,
              scale: restScale + 0.1,
            },
            {
              xPercent: 0,
              scale: restScale,
              duration: 1.55,
              ease: "power3.out",
              immediateRender: false,
            },
            0,
          );

        animations.push(revealTimeline);
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(shell);

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.kill());
      gsap.killTweensOf([media, image]);
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

    motion.x(horizontal * 12);
    motion.y(vertical * 7);
    motion.scale(1.018);
  };

  const handlePointerLeave = () => {
    const motion = motionRef.current;
    if (!motion || reducedMotionRef.current) return;

    motion.x(0);
    motion.y(0);
    motion.scale(1);
  };

  return (
    <div
      ref={shellRef}
      className={styles["contact-art"]}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-hidden="true"
    >
      <div ref={mediaRef} className={styles["contact-art-media"]}>
        <Image
          ref={imageRef}
          src="/images/footer/creative-system-art.png"
          alt=""
          fill
          sizes="(max-width: 1023px) 100vw, 70vw"
          quality={90}
          className={styles["contact-art-image"]}
        />
      </div>
    </div>
  );
};

export default AnimatedFooterArt;
