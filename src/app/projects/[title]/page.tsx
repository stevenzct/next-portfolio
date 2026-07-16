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
  type ProjectGalleryImage,
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

const normalizeGalleryImage = (
  image: ProjectDetails["imageSrcUi"][number],
  projectTitle: string,
  index: number
): ProjectGalleryImage => {
  if (typeof image !== "string") return image;

  return {
    src: image,
    width: 1200,
    height: 800,
    alt: `${projectTitle} interface ${index + 1}`,
  };
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
      <div className="container-wrapper flex min-h-screen items-center justify-center px-6 pt-[120px] md:px-12 md:pt-36">
        <h1 className="text-center font-nm-medium text-3xl font-medium text-black md:text-5xl">
          Project details coming soon
        </h1>
      </div>
    );
  }

  const hasEditorialGallery = project.imageSrcUi.some(
    (image) => typeof image !== "string" && Boolean(image.title)
  );

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
    <ProjectDetailMotion className="overflow-x-clip bg-white pt-[120px] md:pt-36 lg:pt-[160px]">
      <JsonLd data={projectJsonLd} />
      <div className="container-wrapper h-auto w-full">
        <div className="app-container mx-6 w-auto max-w-[1200px] pb-8 md:mx-12 md:pb-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <Link
            data-project-detail-intro
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 rounded-lg border border-[#D6D6D6] px-3.5 py-2 font-nm-book text-sm text-[#242424] transition-colors duration-300 hover:bg-[#F8F8F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:mb-10"
          >
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            All Projects
          </Link>

          <p
            data-project-detail-intro
            className="mb-3 font-nm-book text-sm uppercase tracking-[0.14em] text-[#666666] md:text-base"
          >
            Case Study
          </p>
          <h1
            data-project-detail-intro
            className="max-w-5xl break-words text-start font-nm-medium text-[clamp(2.8rem,8vw,6rem)] font-medium leading-[0.94] tracking-[-0.035em] text-black"
          >
            {project.title}
          </h1>
          <p
            data-project-detail-intro
            className="mt-5 max-w-4xl text-start font-nm-book text-base leading-7 text-[#4A4A4A] md:text-xl md:leading-8 lg:text-2xl lg:leading-9"
          >
            {project.description}
          </p>

          <dl
            data-project-detail-intro
            className="relative z-30 mt-10 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-[#D6D6D6] py-6 sm:grid-cols-2 md:mt-12 md:py-8 xl:grid-cols-4 xl:gap-y-0"
          >
            <div className="min-w-0">
              <dt className="font-nm-book text-xs uppercase tracking-[0.12em] text-[#777777]">
                Role
              </dt>
              <dd className="mt-2 font-nm-medium text-base font-medium leading-6 text-[#242424]">
                {project.role}
              </dd>
            </div>

            <div className="min-w-0">
              <dt className="font-nm-book text-xs uppercase tracking-[0.12em] text-[#777777]">
                Tech
              </dt>
              <dd className="mt-2 font-nm-medium text-base font-medium leading-6 text-[#242424]">
                {project.tech}
              </dd>
            </div>

            <div className="min-w-0">
              <dt className="font-nm-book text-xs uppercase tracking-[0.12em] text-[#777777]">
                Year
              </dt>
              <dd className="mt-2 font-nm-medium text-base font-medium leading-6 text-[#242424]">
                {project.year}
              </dd>
            </div>

            <div className="min-w-0">
              <dt className="font-nm-book text-xs uppercase tracking-[0.12em] text-[#777777]">
                Link
              </dt>
              <dd className="mt-2 min-h-10 font-nm-medium text-base font-medium leading-6 text-[#242424]">
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

                {project.linkItems && project.linkItems.length > 0 ? (
                  <ProjectLinksMenu links={project.linkItems} />
                ) : !project.linkItem?.href || !project.linkItem?.label ? (
                  <span aria-label="No public project link">—</span>
                ) : null}
              </dd>
            </div>
          </dl>
        </div>

        <div
          data-project-detail-hero
          className="relative z-0 mx-4 aspect-[4/3] overflow-hidden rounded-[16px] bg-[#F3F3F3] shadow-[0_24px_70px_rgba(0,0,0,0.10)] sm:mx-6 sm:aspect-[16/10] md:mx-8 md:rounded-[20px] lg:mx-auto lg:aspect-[16/9] lg:w-[calc(100%_-_96px)] xl:max-w-[1600px]"
        >
          <Image
            src={project.imageSrcMockup}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1695px) calc(100vw - 96px), 1600px"
            className="object-cover object-center"
          />
        </div>

        <div className="app-container mx-6 mb-20 w-auto max-w-[1200px] md:mx-12 md:mb-24 lg:mx-auto lg:mb-[120px] lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <section className="py-[64px] md:py-[88px] lg:py-[104px]">
            <div data-project-detail-reveal>
              <p className="font-nm-book text-sm uppercase tracking-[0.14em] text-[#777777]">
                Project Overview
              </p>
              <h2 className="mt-3 max-w-3xl font-nm-medium text-[32px] font-medium leading-[1.05] tracking-[-0.025em] text-black md:text-[52px]">
                The thinking behind the work.
              </h2>
            </div>

            <div
              data-project-detail-reveal
              className="mt-8 grid grid-cols-1 border-y border-[#D6D6D6] md:mt-12 md:grid-cols-2 xl:grid-cols-[1fr_1fr_0.72fr]"
            >
              <article className="py-6 md:pr-8 md:py-8 xl:pr-10">
                <h3 className="font-nm-medium text-lg font-medium text-black">
                  Assignment
                </h3>
                <p className="mt-3 font-nm-book text-base leading-7 text-[#4A4A4A]">
                  {project.assignment}
                </p>
              </article>

              <article className="border-t border-[#D6D6D6] py-6 md:border-l md:border-t-0 md:px-8 md:py-8 xl:px-10">
                <h3 className="font-nm-medium text-lg font-medium text-black">
                  Objective
                </h3>
                <p className="mt-3 font-nm-book text-base leading-7 text-[#4A4A4A]">
                  {project.objectives}
                </p>
              </article>

              <article className="border-t border-[#D6D6D6] py-6 md:col-span-2 md:py-8 xl:col-span-1 xl:border-l xl:border-t-0 xl:pl-10">
                <h3 className="font-nm-medium text-lg font-medium text-black">
                  Project Includes
                </h3>
                <ul className="mt-3 font-nm-book text-base leading-7 text-[#4A4A4A] sm:grid sm:grid-cols-2 sm:gap-x-8 xl:grid-cols-1 xl:gap-x-0">
                  {project.projectIncludes.map((item) => (
                    <li
                      key={item}
                      className="border-t border-[#E5E5E5] py-2.5 first:border-t-0 first:pt-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section>
            {!hasEditorialGallery && (
              <div
                data-project-detail-reveal
                className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:gap-6 md:mb-8"
              >
                <div>
                  <p className="font-nm-book text-sm uppercase tracking-[0.14em] text-[#777777]">
                    Selected Work
                  </p>
                  <h2 className="mt-2 font-nm-medium text-[32px] font-medium leading-[1.05] tracking-[-0.025em] text-black md:text-[52px]">
                    Interface Gallery
                  </h2>
                </div>
                <p className="shrink-0 font-nm-book text-sm text-[#777777]">
                  {project.imageSrcUi.length}{" "}
                  {project.imageSrcUi.length === 1 ? "image" : "images"}
                </p>
              </div>
            )}

            <div
              className={
                hasEditorialGallery
                  ? "grid grid-cols-1 gap-16 md:gap-24 lg:gap-32"
                  : "grid grid-cols-1 gap-6 md:gap-10"
              }
            >
              {project.imageSrcUi.map((image, index) => {
                const galleryImage = normalizeGalleryImage(
                  image,
                  project.title,
                  index
                );
                const hasCaption = Boolean(
                  galleryImage.label ||
                    galleryImage.title ||
                    galleryImage.subtitle ||
                    galleryImage.description ||
                    galleryImage.points?.length
                );
                return (
                  <figure
                    key={galleryImage.src}
                    data-project-detail-reveal
                    className={
                      hasEditorialGallery
                        ? "min-w-0"
                        : "overflow-hidden rounded-[16px] border border-black/[0.06] bg-[#F5F5F3] p-1.5 md:rounded-[20px] md:p-2"
                    }
                  >
                    {hasCaption && (
                      <figcaption className="mb-8 text-left sm:mb-10 md:mb-12 lg:mb-16">
                        <div className="max-w-[1120px]">
                          {galleryImage.label && (
                            <p className="font-nm-book text-[11px] uppercase tracking-[0.16em] text-[#666666] sm:text-xs">
                              {galleryImage.label}
                            </p>
                          )}

                          {galleryImage.title && (
                            <h3 className="mt-4 max-w-[15ch] break-words text-left text-balance font-nm-medium text-[clamp(2.65rem,6.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-black">
                              {galleryImage.title}
                            </h3>
                          )}
                          {galleryImage.subtitle && (
                            <p className="mt-5 max-w-3xl text-left text-pretty font-nm-book text-lg leading-7 text-[#545454] sm:text-xl sm:leading-8 md:text-2xl md:leading-9">
                              {galleryImage.subtitle}
                            </p>
                          )}

                          {galleryImage.description && (
                            <p className="mt-7 max-w-[70ch] text-left text-pretty font-nm-book text-base leading-7 text-[#333333] sm:text-lg sm:leading-8 md:mt-9">
                              {galleryImage.description}
                            </p>
                          )}

                          {galleryImage.points?.length ? (
                            <ol className="mt-10 divide-y divide-black/[0.12] border-y border-black/[0.12] lg:mt-14">
                              {galleryImage.points.map((point, pointIndex) => (
                                <li
                                  key={point.title}
                                  className="grid grid-cols-[36px_minmax(0,1fr)] gap-x-4 gap-y-2 py-5 sm:grid-cols-[44px_minmax(0,1fr)] sm:py-6 lg:grid-cols-[56px_210px_minmax(0,1fr)] lg:gap-x-8 lg:py-8"
                                >
                                  <span className="col-start-1 row-start-1 pt-0.5 font-nm-book text-[11px] tracking-[0.14em] text-[#6A6A6A] sm:text-xs">
                                    {String(pointIndex + 1).padStart(2, "0")}
                                  </span>
                                  <h4 className="col-start-2 row-start-1 text-left font-nm-medium text-lg font-medium leading-tight text-black sm:text-xl lg:text-2xl">
                                    {point.title}
                                  </h4>
                                  <p className="col-start-2 row-start-2 max-w-[68ch] text-left font-nm-book text-sm leading-6 text-[#454545] sm:text-base sm:leading-7 lg:col-start-3 lg:row-start-1 lg:text-lg lg:leading-8">
                                    {point.description}
                                  </p>
                                </li>
                              ))}
                            </ol>
                          ) : null}
                        </div>
                      </figcaption>
                    )}

                    <div
                      className={
                        hasEditorialGallery
                          ? "overflow-hidden rounded-[16px] bg-[#F5F5F3] md:rounded-[24px]"
                          : ""
                      }
                    >
                      <Image
                        src={galleryImage.src}
                        alt={galleryImage.alt}
                        width={galleryImage.width}
                        height={galleryImage.height}
                        sizes="(max-width: 767px) calc(100vw - 60px), (max-width: 1023px) calc(100vw - 112px), 1200px"
                        className={
                          hasEditorialGallery
                            ? "h-auto w-full object-contain"
                            : "h-auto w-full rounded-[12px] object-contain md:rounded-[14px]"
                        }
                      />
                    </div>
                  </figure>
                );
              })}
            </div>
          </section>
        </div>

        {(nextProject || previousProject) && (
          <div
            data-next-project
            className="relative min-h-[72svh] w-full overflow-hidden bg-black shadow-[0_-18px_60px_rgba(0,0,0,0.12)] lg:min-h-[82svh]"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />
            <Image
              src={navigationImage}
              alt={navigationTitle}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1200ms] motion-safe:hover:scale-[1.02]"
            />
            <div className="relative z-20 flex min-h-[72svh] flex-col items-center justify-center px-6 py-20 text-white md:px-12 lg:min-h-[82svh]">
              <p
                data-next-project-content
                className="mb-4 font-nm-book text-xs uppercase tracking-[0.18em] text-white/70 md:text-sm"
              >
                {nextProject ? "Next Case Study" : "Previous Case Study"}
              </p>
              <h2
                data-next-project-content
                className="max-w-5xl break-words text-center font-nm-medium text-[clamp(2.8rem,8vw,6rem)] font-medium leading-[0.94] tracking-[-0.035em] text-white"
              >
                {navigationTitle}
              </h2>
              <p
                data-next-project-content
                className="mt-5 max-w-3xl text-center font-nm-book text-base leading-7 text-white/80 md:text-xl md:leading-8 lg:text-2xl lg:leading-9"
              >
                {navigationDescription}
              </p>
              <div
                data-next-project-content
                className={`cta mt-7 grid w-full items-center justify-center gap-3 ${
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
                    className="inline-flex h-11 w-full cursor-pointer items-center justify-center gap-1.5 rounded-[10px] border border-white bg-white px-4 text-black transition-colors duration-300 hover:bg-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="font-nm-medium text-sm font-medium">
                      Previous
                    </span>
                  </Link>
                )}
                {nextProject && (
                  <Link
                    href={`/projects/${encodeURIComponent(nextProject.title)}`}
                    className="inline-flex h-11 w-full cursor-pointer items-center justify-center gap-1.5 rounded-[10px] border border-white bg-white px-4 text-black transition-colors duration-300 hover:bg-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span className="font-nm-medium text-sm font-medium">
                      Next
                    </span>
                    <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
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
