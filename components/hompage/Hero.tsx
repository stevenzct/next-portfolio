import React from "react";
import styles from "./Hero.module.css";
import Link from "next/link";
import {
  BanknotesIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div
      id="home"
      className={`${styles["hero-section"]} pt-[120px] pb-[120px] md:pb-auto  md:pt-[160px]`}
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h1 className="text-[45px] md:text-7xl lg:text-8xl text-center md:text-center lg:text-start font-nm-medium font-medium text-black w-auto leading-[44px] md:leading-20 lg:leading-[77px]">
            Design
            <br />
            Without Limits
          </h1>
          <p className="text-base md:text-2xl text-center lg:text-start font-nm-book text-[#313131] w-auto lg:w-[53%] mt-4">
            Designing and Developing Unique Web Experiences
          </p>
          <div className="cta mx-auto mt-6 grid w-full max-w-[380px] grid-cols-2 gap-3 lg:mx-0">
            <Link
              href="/#projects"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white bg-white px-3 font-nm-medium text-sm font-medium text-black transition-colors duration-300 hover:bg-[#F8F8F8] sm:text-base"
            >
              <Squares2X2Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              View Projects
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-black bg-black px-3 font-nm-medium text-sm font-medium text-white transition-colors duration-300 hover:bg-[#242424] sm:text-base"
            >
              <BanknotesIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
