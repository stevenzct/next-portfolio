import React from "react";

const Hero = () => {
  return (
    <div className="section-hero pt-[160px]">
      <h1 className="text-4xl md:text-7xl lg:text-8xl text-center md:text-center lg:text-start font-nm-medium font-medium text-white w-auto lg:leading-[77px]">
        Design 
        <br />
        Without Limits
      </h1>
      <p className="text-base md:text-2xl text-center lg:text-start font-nm-book text-white w-auto lg:w-[53%] mt-4">
        Designing and Developing Unique Web Experiences
      </p>
      <div className="cta flex justify-center lg:justify-start mt-6">
          <button type="button" className="text-black font-nm-medium font-medium w-48 h-12 rounded-lg bg-white inline-flex justify-center items-center text-base px-5 py-2.5">View Projects</button>
      </div>
    </div>
  );
};

export default Hero;
