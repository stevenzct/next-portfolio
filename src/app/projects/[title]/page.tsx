import React from "react";
import Image from "next/image";
import {
  projectDetails,
  ProjectDetails,
} from "../../../../constants/projectDetails";
import Button from "../../../../components/Button";
import Link from "next/link";

interface PageProps {
  params: {
    title: string;
  };
}

const ProjectPage = async ({ params }: PageProps) => {
  const awaitedParams = await params;
  const decodedTitle = decodeURIComponent(awaitedParams.title).toLowerCase();
  const project: ProjectDetails | undefined = projectDetails.find(
    (p) => p.title.toLowerCase() === decodedTitle
  );

  if (!project) {
    return (
      <div className="pt-[120px] container-wrapper">
        <h1 className="text-center">Project details coming soon</h1>
      </div>
    );
  }

  return (
    <div className="pt-[120px] md:pb-auto md:pt-[160px]">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h1 className="text-[45px] md:text-7xl lg:text-8xl text-start font-nm-medium font-medium text-black w-auto leading-[44px] md:leading-20 lg:leading-[77px]">
            {project.title}
          </h1>
          <p className="text-base md:text-2xl text-start font-nm-book text-[#313131] w-auto lg:w-[83%] mt-4">
            {project.description}
          </p>

          <div className="pt-[32px] lg:pt-[64px] pb-[32px] lg:pb-[64px] gap-2 lg:gap-0 flex flex-col lg:flex-row lg:justify-between ">
            <div>
              <h4 className="text-[18px] font-nm-medium font-medium text-black">
                Role
              </h4>
              <p className="text-base font-nm-book text-[#242424]">
                {project.role}
              </p>
            </div>

            <div>
              <h4 className="text-[18px] font-nm-medium font-medium text-black">
                Tech
              </h4>
              <p className="text-base font-nm-book text-[#242424]">
                {project.tech}
              </p>
            </div>

            <div>
              <h4 className="text-[18px] font-nm-medium font-medium text-black">
                Link
              </h4>
              <p className="text-base font-nm-book text-[#242424]">
                <a
                  className=" text-[#242424]"
                  href={`https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
              </p>
            </div>

            <div>
              <h4 className="text-[18px] font-nm-medium font-medium text-black">
                Year
              </h4>
              <p className="text-base font-nm-book text-[#242424]">
                {project.year}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full relative aspect-[16/9]">
          <Image
            src={project.imageSrcMockup}
            alt={project.title}
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="app-container lg:w-[75%] max-w-[1200px] mb-[120px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <div className="pt-[32px] lg:pt-[64px] pb-[32px] lg:pb-[64px] gap-2 lg:gap-30 flex flex-col lg:flex-row lg:justify-between">
            <div>
              <h4 className="text-[18px] font-nm-medium font-medium text-black">
                Assignment
              </h4>
              <p className="text-base font-nm-book text-[#242424]">
                {project.assignment}
              </p>
            </div>

            <div>
              <h4 className="text-[18px] font-nm-medium font-medium text-black">
                Objective
              </h4>
              <p className="text-base font-nm-book text-[#242424]">
                {project.objectives}
              </p>
            </div>

            <div>
              <h4 className="text-[18px] font-nm-medium font-medium text-black">
                Project Includes
              </h4>
              <ul className="text-base font-nm-book text-[#242424] lg:flex lg:flex-wrap">
                {project.projectIncludes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="gap-8 grid grid-cols-1">
            {project.imageSrcUi.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`${project.title}-${index + 1}`}
                width={1200}
                height={800}
                className="object-cover"
              />
            ))}
          </div>
        </div>

        <div className="relative w-full h-screen shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="absolute inset-0 bg-black/45 z-10"></div>
          <Image
            src={project.nextImage}
            alt={project.nextImage}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-[45px] md:text-7xl lg:text-8xl text-center font-nm-medium font-medium text-white leading-[44px] md:leading-20 lg:leading-[77px]">
              {project.nextTitle}
            </h1>
            <p className="text-base md:text-2xl text-center font-nm-book text-white lg:w-[53%] mt-4">
              {project.nextDescription}
            </p>
            <div className="cta flex justify-center  mt-6">
              <Link href={`/projects/${encodeURIComponent(project.nextTitle)}`} passHref>
                <Button type="button" title="Next Project" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
