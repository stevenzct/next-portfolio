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

const MOBILE_NAV_ITEM_SELECTOR = "[data-mobile-nav-item]";

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
    const backdrop = backdropRef.current;
    const items = panel.querySelectorAll<HTMLElement>(
      MOBILE_NAV_ITEM_SELECTOR
    );

    if (prefersReducedMotion()) {
      gsap.set([panel, ...(backdrop ? [backdrop] : []), ...items], {
        clearProps: "all",
      });
      return;
    }

    entranceContextRef.current = gsap.context(() => {
      const timeline = gsap.timeline();

      if (backdrop) {
        timeline.fromTo(
          backdrop,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.3, ease: "power2.out" }
        );
      }

      timeline
        .fromTo(
          panel,
          {
            yPercent: -6,
            autoAlpha: 0,
            clipPath: "inset(0 0 100% 0)",
          },
          {
            yPercent: 0,
            autoAlpha: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.55,
            ease: "power3.out",
          },
          0
        )
        .fromTo(
          items,
          { x: 20, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.4,
            stagger: 0.055,
            ease: "power3.out",
          },
          0.16
        );
    }, panel);
  }, []);

  const closeMenu = useCallback(() => {
    if (isClosingRef.current) return;

    const panel = panelRef.current;
    const backdrop = backdropRef.current;

    if (!panel || prefersReducedMotion()) {
      setMenuOpen(false);
      return;
    }

    isClosingRef.current = true;
    const items = panel.querySelectorAll<HTMLElement>(
      MOBILE_NAV_ITEM_SELECTOR
    );
    gsap.killTweensOf([panel, ...(backdrop ? [backdrop] : []), ...items]);

    const timeline = gsap.timeline({
      onComplete: () => {
        isClosingRef.current = false;
        exitTimelineRef.current = null;
        setMenuOpen(false);
      },
    });

    timeline
      .to(items, {
        x: 16,
        autoAlpha: 0,
        duration: 0.18,
        stagger: 0.025,
        ease: "power2.in",
      })
      .to(
        panel,
        {
          yPercent: -6,
          autoAlpha: 0,
          clipPath: "inset(0 0 100% 0)",
          duration: 0.35,
          ease: "power3.inOut",
        },
        0.05
      );

    if (backdrop) {
      timeline.to(
        backdrop,
        { autoAlpha: 0, duration: 0.25, ease: "power2.out" },
        0
      );
    }

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
