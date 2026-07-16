import Image from "next/image";
import Link from "next/link";

import type { Project } from "../../constants/projects";

type ProjectGridProps = {
  projects: readonly Project[];
};

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="projects-content grid gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16">
      {projects.map(
        ({ title, year, description, imageSrc, imageAlt, category }) => (
          <article
            data-project-detail-reveal
            className="projects-wrapper"
            key={title}
          >
            <div className="projects-images group relative">
              <Link
                href={`/projects/${encodeURIComponent(title)}`}
                aria-label={`View ${title} project`}
              >
                <Image
                  className="content-projects w-full rounded-lg filter transition duration-300 group-hover:brightness-30"
                  src={imageSrc}
                  height={482}
                  width={589}
                  alt={imageAlt}
                  sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc((100vw - 128px) / 2), 589px"
                />
                <Image
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  src="/images/icons/circleArrow.jpg"
                  height={76}
                  width={76}
                  alt=""
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex flex-col justify-end rounded-lg p-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:p-6 xl:p-8">
                  <span className="font-nm-medium text-[18px] font-medium">
                    {title}
                  </span>
                  <span className="font-nm-book text-[16px]">{category}</span>
                </div>
              </Link>
            </div>
            <div className="projects-title">
              <div className="mt-4 flex items-start justify-between gap-4 md:mt-6">
                <h2 className="mb-0 font-nm-medium text-2xl font-medium text-black md:text-[28px] xl:text-4xl">
                  {title}
                </h2>
                <time
                  dateTime={String(year)}
                  className="mt-1 shrink-0 rounded-full bg-neutral-200/70 px-3 py-1.5 font-nm-medium text-xs font-medium leading-none tracking-[0.05em] text-neutral-600 md:mt-2 md:text-sm"
                >
                  {year}
                </time>
              </div>
              <p className="font-nm-book text-base leading-normal md:text-xl xl:text-2xl">
                {description}
              </p>
            </div>
          </article>
        )
      )}
    </div>
  );
};

export default ProjectGrid;
