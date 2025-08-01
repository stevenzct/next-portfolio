import React from "react";

const About = () => {
  return (
    <div
     id="about"
     className="about pt-[80px] pb-[32px] md:pt-[120px] md:pb-[100px] bg-white">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h3 className="font-nm-book text-base md:text-2xl mb-2">
            My Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <h1 className="text-[32px] md:text-7xl lg:text-8xl text-start mb-4 md:mb-16 font-nm-medium font-medium text-black w-auto leading-[30px] md:leading-20 lg:leading-[77px]">
                About Me
            </h1>

          <div>
            <p className="text-lead md:text-[24px] font-nm-book text-[#222222] leading-normal md:leading-[29px] pb-4">
              Creative <span className="font-nm-medium font-medium"> Software Developer & UI/UX Designer</span> passionate about
              crafting user-friendly and visually engaging web applications.
              Passionate about continuous learning, minimal design, and creating
              meaningful user experiences.
            </p>

            <p className="text-lead md:text-[24px] font-nm-book text-[#222222] leading-normal md:leading-[29px]">
              I have a proven track record of designing and developing software
              and web applications using tools like <span className="font-nm-medium font-medium">Figma</span> and <span className="font-nm-medium font-medium">Adobe XD</span>, along
              with technologies such as <span className="font-nm-medium font-medium">JavaScript, React, Vue.js, Next.js, Nuxt.js</span>, and 
              <span className="font-nm-medium font-medium"> Typescript</span>. I also work with CSS frameworks including <span className="font-nm-medium font-medium">Materialize,
              Bootstrap</span>, and <span className="font-nm-medium font-medium">Tailwind</span>, and I have experience with backend
              technologies like <span className="font-nm-medium font-medium">PHP</span> and <span className="font-nm-medium font-medium">MySQL</span>.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
