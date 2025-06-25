import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="projects-section pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px]">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h3 className="font-nm-book text-base md:text-2xl mb-2">Projects</h3>
          <h1 className="text-[32px] md:text-7xl lg:text-8xl text-start mb-8 md:mb-16 font-nm-medium font-medium text-black w-auto leading-[30px] md:leading-20 lg:leading-[77px]">
            Where Ideas
            <br />
            Become Interfaces
          </h1>
          <div className="projects-content grid md:grid-cols-2 gap-x-8">
            <div className="projects-wrapper">
              <div className="projects-images">
                <Image
                  className="content-projects rounded-lg w-full"
                  src="/images/projects/Rioflorido1.jpg"
                  height={482}
                  width={589}
                  alt="Rioflorido1"
                ></Image>
              </div>
              <div className="projects-title">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-nm-medium font-medium text-black mt-6 mb-1 md:mb-2">
                  RV Rioflorido | 2025
                </h2>
                <h3 className="font-nm-book text-base md:text-2xl">
                  Experienced construction company
                </h3>
              </div>
            </div>

            <div className="projects-wrapper">
              <div className="projects-images">
                <Image
                  className="content-projects rounded-lg w-full"
                  src="/images/projects/Rioflorido1.jpg"
                  height={482}
                  width={589}
                  alt="Rioflorido1"
                ></Image>
              </div>
              <div className="projects-title">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-nm-medium font-medium text-black mt-6 mb-1 md:mb-2">
                  RV Rioflorido | 2025
                </h2>
                <h3 className="font-nm-book text-base md:text-2xl">
                  Experienced construction company
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
