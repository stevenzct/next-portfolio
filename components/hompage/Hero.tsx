import {
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import styles from "./Hero.module.css";
import SwiperUi from "./SwiperUi";

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      data-nav-theme="dark"
      data-home-motion-section
      className={`${styles["hero-section"]} min-h-[100svh] overflow-hidden pb-8 pt-[100px] sm:pt-[112px] md:pb-10 md:pt-[120px] lg:pb-12 lg:pt-[120px] xl:h-[100svh] xl:min-h-[720px] xl:pb-0 xl:pt-20`}
    >
      <div className="container-wrapper relative z-10 h-auto w-full xl:h-full">
        <div className="app-container mx-6 flex min-h-[calc(100svh-132px)] w-auto max-w-[1200px] flex-col md:mx-12 md:min-h-[calc(100svh-160px)] lg:mx-auto lg:min-h-[calc(100svh-168px)] lg:w-[90%] xl:h-full xl:min-h-0 xl:w-[88%] 2xl:w-[75%]">
          <div
            className={`${styles["hero-layout"]} grid flex-1 content-center items-center gap-y-12 py-8 sm:gap-y-14 sm:py-10 xl:h-full xl:min-h-0 xl:content-stretch xl:grid-cols-2 xl:items-stretch xl:gap-x-16 xl:py-0`}
          >
            <div className="flex items-center">
              <div className="relative z-10 mx-auto w-full max-w-[640px] xl:mx-0">
                <h1
                  id="hero-title"
                  className={`${styles["hero-heading"]} mx-auto max-w-max text-center font-nm-medium text-[clamp(1.875rem,9vw,3.1rem)] font-medium leading-[0.92] tracking-[-0.055em] text-white sm:text-[clamp(3.2rem,7.1vw,4.3rem)] sm:leading-[0.94] xl:mx-0 xl:text-left xl:text-[clamp(3.55rem,4.3vw,4.65rem)]`}
                >
                  <span
                    data-home-motion-heading
                    className={styles["hero-title-line"]}
                  >
                    Designed to impress
                  </span>
                  <span
                    data-home-motion-heading
                    className={`${styles["hero-title-line"]} ${styles["hero-title-emphasis"]}`}
                  >
                    Built to convert
                  </span>
                </h1>

                <div
                  data-home-motion-copy
                  className="mx-auto mt-6 max-w-[500px] text-center sm:mt-7 xl:mx-0 xl:text-left"
                >
                  <p
                    className={`${styles["hero-copy"]} text-pretty font-nm-book text-base leading-[1.55] sm:text-lg sm:leading-[1.6]`}
                  >
                    I create custom websites, mobile apps, and software solutions that help businesses stand out, connect with customers, and achieve real results.
                  </p>
                </div>

                <div
                  data-home-motion-action
                  className="mx-auto mt-7 grid w-full max-w-[380px] grid-cols-1 gap-3 min-[390px]:grid-cols-2 xl:mx-0"
                >
                  <Link
                    href="/#projects"
                    className={`${styles["hero-primary"]} inline-flex h-12 w-full items-center justify-center gap-2 px-3 font-nm-medium text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-base`}
                  >
                    View Projects
                    <ArrowRightIcon
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="/#reviews"
                    className={`${styles["hero-secondary"]} inline-flex h-12 w-full items-center justify-center gap-2 px-3 font-nm-medium text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-base`}
                  >
                    See Reviews
                    <SparklesIcon
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative min-w-0 w-full xl:h-full xl:min-h-0">
              <SwiperUi />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
