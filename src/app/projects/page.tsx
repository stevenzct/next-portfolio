import Footer from "../../../components/Footer";
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
      <div className="pb-[80px] pt-[120px] md:pb-[120px] md:pt-[160px]">
        <div className="container-wrapper h-auto w-full">
          <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[75%]">
            <p className="mb-2 font-nm-book text-base md:text-2xl">Case Studies</p>
            <h1 className="mb-8 w-auto text-start font-nm-medium text-[45px] font-medium leading-[44px] text-black md:mb-16 md:text-7xl md:leading-20 lg:text-8xl lg:leading-[77px]">
              Featured Projects
            </h1>
            <ProjectGrid projects={projects} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProjectsPage;
