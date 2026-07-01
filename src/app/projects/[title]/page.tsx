import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import JsonLd from "../../../../components/JsonLd";
import ProjectLinksMenu from "../../../../components/ProjectLinksMenu";
import ProjectDetailMotion from "../../../../components/projects/ProjectDetailMotion";
import {
  projectDetails,
  type ProjectDetails,
} from "../../../../constants/projectDetails";
import { siteConfig } from "../../../../constants/site";
import { createPageMetadata } from "../../../../utils/metadata";

interface PageProps {
  params: Promise<{
    title: string;
  }>;
}

const getProjectByTitle = (title: string) => {
  const decodedTitle = decodeURIComponent(title).toLowerCase();
  return projectDetails.find(
    (project) => project.title.toLowerCase() === decodedTitle
  );
};

export const generateStaticParams = () =>
  projectDetails.map(({ title }) => ({ title }));

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { title } = await params;
  const project = getProjectByTitle(title);

  if (!project) {
    return createPageMetadata({
      title: "Project Not Found",
      description: "This project case study is not currently available.",
      path: `/projects/${encodeURIComponent(title)}`,
      noIndex: true,
    });
  }

  const path = `/projects/${encodeURIComponent(project.title)}`;

  return createPageMetadata({
    title: `${project.title} Case Study`,
    description: project.description,
    path,
    image: project.imageSrcMockup,
    imageAlt: `${project.title} project by ${siteConfig.name}`,
  });
};

const ProjectPage = async ({ params }: PageProps) => {
  const { title } = await params;
  const project: ProjectDetails | undefined = getProjectByTitle(title);

  if (!project) {
    return (
      <div className="pt-[120px] container-wrapper">
        <h1 className="text-center">Project details coming soon</h1>
      </div>
    );
  }

  const currentProjectIndex = projectDetails.findIndex(
    (item) => item.title === project.title
  );
  const previousProject =
    currentProjectIndex > 0 ? projectDetails[currentProjectIndex - 1] : null;
  const nextProject =
    project.nextImage && project.nextTitle
      ? {
          imageSrc: project.nextImage,
          title: project.nextTitle,
          description: project.nextDescription,
        }
      : null;
  const navigationImage =
    nextProject?.imageSrc ?? previousProject?.imageSrcMockup ?? "";
  const navigationTitle = nextProject?.title ?? previousProject?.title ?? "";
  const navigationDescription =
    nextProject?.description ?? previousProject?.description ?? "";
  const projectPath = `/projects/${encodeURIComponent(project.title)}`;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}${projectPath}`,
    image: `${siteConfig.url}${project.imageSrcMockup}`,
    dateCreated: String(project.year),
    keywords: project.tech,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <ProjectDetailMotion className="overflow-x-clip pt-[120px] md:pt-[160px]">
      <JsonLd data={projectJsonLd} />
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h1
            data-project-detail-intro
            className="text-[45px] md:text-7xl lg:text-8xl text-start font-nm-medium font-medium text-black w-auto leading-[44px] md:leading-20 lg:leading-[77px]"
          >
            {project.title}
          </h1>
          <p
            data-project-detail-intro
            className="text-base md:text-2xl text-start font-nm-book text-[#313131] w-auto lg:w-[83%] mt-4"
          >
            {project.description}
          </p>

          <div
            data-project-detail-intro
            className="pt-[32px] lg:pt-[64px] pb-[32px] lg:pb-[64px] gap-2 lg:gap-0 flex flex-col lg:flex-row lg:justify-between"
          >
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
                Year
              </h4>
              <p className="text-base font-nm-book text-[#242424]">
                {project.year}
              </p>
            </div>

            <div>
              <h4 className="text-[18px] font-nm-medium font-medium text-black">
                Link
              </h4>
              <p className="text-base font-nm-book text-[#242424]">
                {project.linkItem &&
                project.linkItem.href &&
                project.linkItem.label ? (
                  <a
                    className="text-[#242424] underline underline-offset-4 decoration-[#242424]"
                    href={project.linkItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkItem.label}
                  </a>
                ) : null}
              </p>

              {project.linkItems && project.linkItems.length > 0 && (
                <ProjectLinksMenu links={project.linkItems} />
              )}
            </div>
          </div>
        </div>

        <div
          data-project-detail-hero
          className="w-full relative aspect-[16/9]"
        >
          <Image
            src={project.imageSrcMockup}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="app-container lg:w-[75%] max-w-[1200px] mb-[120px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <div
            data-project-detail-reveal
            className="pt-[32px] lg:pt-[64px] pb-[32px] lg:pb-[64px] gap-2 lg:gap-[65px] flex flex-col lg:flex-row lg:justify-between"
          >
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
              <h4 className="text-[18px] font-nm-medium font-medium text-black w-max">
                Project Includes
              </h4>
              <ul className="text-base font-nm-book text-[#242424] lg:flex lg:flex-wrap ">
                {project.projectIncludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="gap-8 grid grid-cols-1">
            {project.imageSrcUi.map((src, index) => (
              <Image
                key={src}
                data-project-detail-reveal
                src={src}
                alt={`${project.title}-${index + 1}`}
                width={1200}
                height={800}
                className="object-cover"
              />
            ))}
          </div>
        </div>

        {(nextProject || previousProject) && (
          <div
            data-next-project
            className="relative w-full h-screen shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          >
            <div className="absolute inset-0 bg-black/45 z-10"></div>
            <Image
              src={navigationImage}
              alt={navigationTitle}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
              <h2
                data-next-project-content
                className="text-[45px] md:text-7xl lg:text-8xl text-center font-nm-medium font-medium text-white leading-[44px] md:leading-20 lg:leading-[77px]"
              >
                {navigationTitle}
              </h2>
              <p
                data-next-project-content
                className="text-base md:text-2xl text-center font-nm-book text-white lg:w-[53%] mt-4"
              >
                {navigationDescription}
              </p>
              <div
                data-next-project-content
                className={`cta grid w-full items-center justify-center gap-3 mt-6 ${
                  nextProject && previousProject
                    ? "max-w-[320px] grid-cols-2"
                    : "max-w-[154px] grid-cols-1"
                }`}
              >
                {previousProject && (
                  <Link
                    href={`/projects/${encodeURIComponent(
                      previousProject.title
                    )}`}
                    className="inline-flex h-11 w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-white px-4 text-black transition-colors duration-300 hover:bg-black hover:text-white"
                  >
                    <ArrowLeftIcon className="h-3.5 w-3.5" />
                    <span className="font-nm-medium text-sm font-medium">
                      Previous
                    </span>
                  </Link>
                )}
                {nextProject && (
                  <Link
                    href={`/projects/${encodeURIComponent(nextProject.title)}`}
                    className="inline-flex h-11 w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-white px-4 text-black transition-colors duration-300 hover:bg-black hover:text-white"
                  >
                    <span className="font-nm-medium text-sm font-medium">
                      Next
                    </span>
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </ProjectDetailMotion>
  );
};

export default ProjectPage;
