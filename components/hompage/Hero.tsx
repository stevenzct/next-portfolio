import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className={`${styles["hero-section"]} min-h-[100svh] overflow-hidden pb-8 pt-[100px] sm:pt-[112px] md:pb-10 md:pt-[120px] lg:pb-12 lg:pt-[120px]`}
    >
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        quality={82}
        sizes="(min-width: 1024px) 180vw, 100vw"
        className="pointer-events-none -z-20 hidden object-cover object-center opacity-75 lg:block"
      />

      <div className="container-wrapper relative z-10 h-auto w-full">
        <div className="app-container mx-6 flex min-h-[calc(100svh-132px)] w-auto max-w-[1200px] flex-col md:mx-12 md:min-h-[calc(100svh-160px)] lg:mx-auto lg:min-h-[calc(100svh-168px)] lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <div className="grid flex-1 items-center gap-y-12 py-8 sm:gap-y-14 sm:py-10 min-[900px]:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] min-[900px]:gap-x-8 min-[900px]:py-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] lg:gap-x-12 lg:py-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(400px,0.85fr)] xl:gap-x-16">
            <div className="relative z-10 max-w-[640px]">
              <p
                className={`${styles["hero-reveal"]} ${styles["hero-reveal-delay"]} mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/55 px-3 py-1.5 font-nm-medium text-[9px] font-medium uppercase tracking-[0.2em] text-black/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-sm sm:mx-0 sm:text-[10px]`}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-black"
                  aria-hidden="true"
                />
                Design <span aria-hidden="true">/</span> Engineering{" "}
                <span aria-hidden="true">/</span> AI
              </p>

              <h1
                id="hero-title"
                className="max-w-[940px] text-center font-nm-medium text-[clamp(2.75rem,13vw,3.25rem)] font-medium leading-[0.9] tracking-[-0.05em] text-black sm:text-left sm:text-[clamp(3.75rem,8vw,4.5rem)] min-[900px]:text-[clamp(3.75rem,6.2vw,4.5rem)] lg:text-[clamp(4.5rem,6.4vw,7rem)] lg:leading-[0.96]"
              >
                <span className={styles["hero-title-line"]}>
                  Designed
                </span>
                <span
                  className={styles["hero-title-line"]}
                >
                  With Purpose
                </span>
              </h1>

              <div
                className={`${styles["hero-reveal"]} ${styles["hero-reveal-late"]} mx-auto mt-7 max-w-[540px] text-center sm:mx-0 sm:text-left lg:mt-6`}
              >
                <p className="text-balance font-nm-book text-[17px] leading-[1.5] text-black/65 sm:text-[21px] sm:leading-8">
                  Building clean, user-focused websites and apps that turn
                  ideas into polished digital products
                </p>
              </div>

              <div
                className={`${styles["hero-reveal"]} ${styles["hero-reveal-later"]} cta mt-7 grid w-full max-w-[380px] grid-cols-2 gap-3`}
              >
                <Link
                  href="/#projects"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white bg-white px-3 font-nm-medium text-sm font-medium text-black transition-colors duration-300 hover:bg-[#F8F8F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:text-base"
                >
                  View Projects
                  <ArrowRightIcon
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-black bg-black px-3 font-nm-medium text-sm font-medium text-white transition-colors duration-300 hover:bg-[#242424] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:text-base"
                >
                  See Pricing
                  <SparklesIcon
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            <div
              className={`${styles["hero-visual-reveal"]} relative flex w-full items-center justify-center min-[900px]:justify-self-end`}
            >
              <div
                className={`${styles["hero-artboard"]} flex aspect-square w-full max-w-[340px] items-center justify-center rounded-full sm:max-w-[420px] min-[900px]:max-w-[380px] lg:max-w-[430px] xl:max-w-[440px]`}
              >
                <HeroCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
