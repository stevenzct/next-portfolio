import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import type { Project } from "../../constants/projects";
import styles from "./ProjectGrid.module.css";

type ProjectGridProps = {
  projects: readonly Project[];
  showStatusRibbon?: boolean;
};

const ProjectGrid = ({
  projects,
  showStatusRibbon = false,
}: ProjectGridProps) => {
  return (
    <div className="projects-content grid gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16">
      {projects.map(
        ({
          title,
          year,
          description,
          imageSrc,
          imageAlt,
          imageWidth,
          imageHeight,
          imageFit,
          category,
          status,
        }) => (
          <article
            data-project-detail-reveal
            data-home-motion-card
            className="project-card projects-wrapper"
            key={title}
          >
            <div
              data-home-motion-media
              className={`project-card-media projects-images group relative ${
                showStatusRibbon && status
                  ? styles["status-ribbon-media"]
                  : ""
              }`}
            >
              <Link
                data-home-motion-media-surface
                href={`/projects/${encodeURIComponent(title)}`}
                aria-label={`View ${title} project${showStatusRibbon && status ? ` - ${status}` : ""}`}
                className="relative block aspect-[589/482] overflow-hidden rounded-lg"
              >
                <Image
                  className={`project-card-image content-projects h-full w-full rounded-lg filter transition duration-300 group-hover:brightness-30 ${
                    imageFit === "contain"
                      ? "bg-[#e8e4df] object-contain"
                      : "object-cover"
                  }`}
                  src={imageSrc}
                  height={imageHeight ?? 482}
                  width={imageWidth ?? 589}
                  quality={90}
                  alt={imageAlt}
                  sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc((100vw - 128px) / 2), 589px"
                />
                <span
                  aria-hidden="true"
                  className="project-card-arrow absolute left-1/2 top-1/2 flex size-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--project-arrow-bg)] text-[var(--project-arrow-ink)] opacity-0 shadow-[0_12px_30px_rgba(3,32,43,0.16)] transition-opacity duration-300 group-hover:opacity-100"
                >
                  <ArrowUpRightIcon className="size-8" strokeWidth={1.6} />
                </span>
                <div className="project-card-overlay absolute inset-0 flex flex-col justify-end rounded-lg p-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:p-6 xl:p-8">
                  <span className="project-card-overlay-title font-nm-medium text-[18px] font-medium">
                    {title}
                  </span>
                  <span className="project-card-overlay-category font-nm-book text-[16px]">
                    {category}
                  </span>
                </div>
              </Link>
              {showStatusRibbon && status ? (
                <span
                  data-home-motion-badge
                  aria-hidden="true"
                  className={styles["status-ribbon"]}
                >
                  <span className={styles["status-ribbon-label"]}>
                    {status}
                  </span>
                </span>
              ) : null}
            </div>
            <div className="projects-title">
              <div className="mt-4 flex items-start justify-between gap-4 md:mt-6">
                <h2 className="project-card-title mb-0 font-nm-medium text-2xl font-medium leading-tight text-[var(--project-ink)] md:text-[28px] xl:text-[32px]">
                  {title}
                </h2>
                <time
                  dateTime={String(year)}
                  className="project-card-year mt-1 shrink-0 rounded-full bg-[var(--project-chip)] px-3 py-1.5 font-nm-medium text-xs font-medium leading-none tracking-[0.05em] text-[var(--project-chip-ink)] md:mt-2 md:text-sm"
                >
                  {year}
                </time>
              </div>
              <p className="project-card-description font-nm-book text-base leading-relaxed text-[var(--project-card-copy)] md:text-lg xl:text-xl">
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
