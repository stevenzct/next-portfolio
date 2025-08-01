import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button";
import Link from "next/link";

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
          <div className="cta flex justify-center lg:justify-start mt-6">
            <Link href="#projects" passHref>
              <Button type="button" title="View Projects" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
