import React from "react";
import styles from "./Hero.module.css";
import Link from "next/link";
import {
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div
      id="home"
      className={`${styles["hero-section"]} pb-[72px] pt-[112px] md:pb-[80px] md:pt-[132px] lg:pb-[88px] lg:pt-[136px]`}
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.65fr)] lg:gap-8 xl:gap-10">
            <div>
              <h1 className="text-[45px] md:text-7xl lg:text-8xl text-center md:text-center lg:text-start font-nm-medium font-medium text-black w-auto leading-[44px] md:leading-20 lg:leading-[77px]">
                Design
                <br />
                Without Limits
              </h1>
              <p className="mt-4 w-auto text-center font-nm-book text-base text-[#313131] md:text-2xl lg:max-w-[620px] lg:text-start">
                Building clean, user-focused websites and apps that turn ideas into polished digital products
              </p>
              <div className="cta mx-auto mt-6 grid w-full max-w-[380px] grid-cols-2 gap-3 lg:mx-0">
                <Link
                  href="/#projects"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white bg-white px-3 font-nm-medium text-sm font-medium text-black transition-colors duration-300 hover:bg-[#F8F8F8] sm:text-base"
                >
                  View Projects
                  <ArrowRightIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-black bg-black px-3 font-nm-medium text-sm font-medium text-white transition-colors duration-300 hover:bg-[#242424] sm:text-base"
                >
                  See Pricing
                  <SparklesIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <HeroCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
