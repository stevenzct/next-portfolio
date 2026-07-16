import Footer from "../../../components/Footer";
import ProjectDetailMotion from "../../../components/projects/ProjectDetailMotion";
import ProjectGrid from "../../../components/projects/ProjectGrid";
import { projects } from "../../../constants/projects";
import { createPageMetadata } from "../../../utils/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore UI/UX design, software development, fintech, and digital product case studies by Steven Cabugos.",
  path: "/projects",
});

const AllProjectsPage = () => {
  return (
    <>
      <ProjectDetailMotion className="overflow-x-clip bg-white pb-20 pt-[120px] md:pb-24 md:pt-36 lg:pb-[120px] lg:pt-[160px]">
        <div className="container-wrapper h-auto w-full">
          <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
            <p
              data-project-detail-intro
              className="mb-2 font-nm-book text-base md:text-xl lg:text-2xl"
            >
              Case Studies
            </p>
            <h1
              data-project-detail-intro
              className="mb-8 w-auto text-start font-nm-medium text-[45px] font-medium leading-[0.98] text-black md:mb-12 md:text-6xl lg:mb-16 lg:text-7xl xl:text-8xl"
            >
              Featured Projects
            </h1>
            <ProjectGrid projects={projects} />
          </div>
        </div>
      </ProjectDetailMotion>
      <Footer />
    </>
  );
};

export default AllProjectsPage;
