import React from "react";
import Image from "next/image";
import { projects } from "../../constants/projects";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="projects-section pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px]">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h3 className="font-nm-book text-base md:text-2xl mb-2">Projects</h3>
          <h1 className="text-[32px] md:text-7xl lg:text-8xl text-start mb-8 md:mb-16 font-nm-medium font-medium text-black w-auto leading-[30px] md:leading-20 lg:leading-[77px]">
            Where Ideas
            <br />
            Become Interfaces
          </h1>
          <div className="projects-content grid md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
            {projects.map(({ title, year, description, imageSrc, imageAlt }) => (
              <div className="projects-wrapper" key={title}>
                <div className="projects-images">
                  <Link href={`/projects/${encodeURIComponent(title)}`}>
                    <Image
                      className="content-projects rounded-lg w-full"
                      src={imageSrc}
                      height={482}
                      width={589}
                      alt={imageAlt}
                    />
                </Link>
                </div>
                <div className="projects-title">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-nm-medium font-medium text-black mt-4 md:mt-6 mb-0">
                    {title} | {year}
                  </h2>
                  <h3 className="font-nm-book text-base md:text-2xl leading-auto">
                    {description}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
