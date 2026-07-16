import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { projects } from "../../constants/projects";
import ProjectGrid from "../projects/ProjectGrid";

const FEATURED_PROJECT_COUNT = 6;

const Projects = () => {
  const featuredProjects = projects.slice(0, FEATURED_PROJECT_COUNT);

  return (
    <section id="projects" className="projects-section py-[80px] md:py-24 lg:py-[120px]">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <p className="mb-2 font-nm-book text-base md:text-xl lg:text-2xl">Projects</p>
          <div className="mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between lg:mb-16">
            <h2 className="w-auto text-start font-nm-medium text-[32px] font-medium leading-[30px] text-black md:text-6xl md:leading-[0.95] lg:text-7xl xl:text-8xl xl:leading-[77px]">
              Where Ideas
              <br />
              Become Interfaces
            </h2>
            <Link
              href="/projects"
              className="inline-flex h-12 w-fit shrink-0 items-center justify-center gap-2 rounded-lg bg-black px-5 font-nm-medium text-base font-medium text-white transition-colors duration-300 hover:bg-[#242424]"
            >
              All projects
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
