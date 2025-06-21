import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles["hero-section"]} pt-[80px] pb-[80px] md:pb-auto  md:pt-[160px]`}>
      <div className="container-wrapper w-full h-auto  md:h-[400px]">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h1 className="text-[45px] md:text-7xl lg:text-8xl text-center md:text-center lg:text-start font-nm-medium font-medium text-white w-auto leading-[44px] md:leading-20 lg:leading-[77px]">
            Design
            <br />
            Without Limits
          </h1>
          <p className="text-base md:text-2xl text-center lg:text-start font-nm-book text-[#EAE5FF] w-auto lg:w-[53%] mt-4">
            Designing and Developing Unique Web Experiences
          </p>
          <div className="cta flex justify-center lg:justify-start mt-6">
            <button
              type="button"
              className="text-black font-nm-medium font-medium w-48 h-12 rounded-lg bg-white inline-flex justify-center items-center text-base px-5 py-2.5"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
