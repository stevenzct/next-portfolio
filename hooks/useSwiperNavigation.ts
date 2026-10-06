"use client";

import { useCallback, useRef, useState } from "react";
import type { Swiper } from "swiper";

export function useSwiperNavigation() {
  const swiperRef = useRef<Swiper | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigation = useCallback((swiper: Swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const onSwiper = useCallback(
    (swiper: Swiper) => {
      swiperRef.current = swiper;
      updateNavigation(swiper);
    },
    [updateNavigation],
  );

  return { swiperRef, isBeginning, isEnd, updateNavigation, onSwiper };
}
