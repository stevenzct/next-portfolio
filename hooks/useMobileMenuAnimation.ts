"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type Dispatch,
  type SetStateAction,
} from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "../utils/motion";

const MOBILE_NAV_PANEL_DURATION = 0.64;
const MOBILE_NAV_PANEL_EASE = "power4.inOut";
const MOBILE_NAV_OPEN_X = 0;
const MOBILE_NAV_CLOSED_X = 14;
const MOBILE_NAV_OPEN_CLIP = "inset(0 0 0% 0)";
const MOBILE_NAV_CLOSED_CLIP = "inset(0 0 0 100%)";

export const useMobileMenuAnimation = (
  setMenuOpen: Dispatch<SetStateAction<boolean>>
) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isClosingRef = useRef(false);
  const entranceContextRef = useRef<gsap.Context | null>(null);
  const exitTimelineRef = useRef<gsap.core.Timeline | null>(null);

  const setPanelRef = useCallback((panel: HTMLDivElement | null) => {
    exitTimelineRef.current?.kill();
    exitTimelineRef.current = null;
    entranceContextRef.current?.revert();
    entranceContextRef.current = null;
    panelRef.current = panel;

    if (!panel) return;

    isClosingRef.current = false;
    if (prefersReducedMotion()) {
      gsap.set(panel, {
        clearProps: "all",
      });
      return;
    }

    entranceContextRef.current = gsap.context(() => {
      gsap.set(panel, {
        autoAlpha: 1,
        xPercent: MOBILE_NAV_CLOSED_X,
        clipPath: MOBILE_NAV_CLOSED_CLIP,
        transformOrigin: "right center",
        willChange: "clip-path, transform",
      });

      const timeline = gsap.timeline({
        defaults: { overwrite: "auto" },
      });

      timeline
        .fromTo(
          panel,
          {
            xPercent: MOBILE_NAV_CLOSED_X,
            clipPath: MOBILE_NAV_CLOSED_CLIP,
          },
          {
            xPercent: MOBILE_NAV_OPEN_X,
            clipPath: MOBILE_NAV_OPEN_CLIP,
            duration: MOBILE_NAV_PANEL_DURATION,
            ease: MOBILE_NAV_PANEL_EASE,
          },
          0
        );
    }, panel);
  }, []);

  const closeMenu = useCallback(() => {
    if (isClosingRef.current) return;

    const panel = panelRef.current;
    if (!panel || prefersReducedMotion()) {
      setMenuOpen(false);
      return;
    }

    isClosingRef.current = true;
    gsap.killTweensOf(panel);

    const timeline = gsap.timeline({
      onComplete: () => {
        isClosingRef.current = false;
        exitTimelineRef.current = null;
        setMenuOpen(false);
      },
      defaults: { overwrite: "auto" },
    });

    timeline.to(
      panel,
      {
        xPercent: MOBILE_NAV_CLOSED_X,
        clipPath: MOBILE_NAV_CLOSED_CLIP,
        duration: MOBILE_NAV_PANEL_DURATION,
        ease: MOBILE_NAV_PANEL_EASE,
      },
      0
    );

    exitTimelineRef.current = timeline;
  }, [setMenuOpen]);

  useEffect(() => {
    return () => {
      exitTimelineRef.current?.kill();
      entranceContextRef.current?.revert();
    };
  }, []);

  return {
    backdropRef,
    closeMenu,
    setPanelRef,
  };
};
