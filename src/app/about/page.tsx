import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import Footer from "../../../components/Footer";
import JsonLd from "../../../components/JsonLd";
import { certifications } from "../../../constants/certifications";
import { experiences } from "../../../constants/experience";
import { projects } from "../../../constants/projects";
import { siteConfig } from "../../../constants/site";
import { socialButtons } from "../../../constants/socialButton";
import { createPageMetadata } from "../../../utils/metadata";
import { aboutProfileJsonLd } from "../../../utils/structuredData";

export const metadata = createPageMetadata({
  title: "About Steven Cabugos",
  description: siteConfig.description,
  path: "/about",
  image: siteConfig.profileImage,
  imageAlt: siteConfig.profileImageAlt,
});

const selectedProjectNames = [
  "Payso Cashier",
  "Payso Merchant",
  "RV Rioflorido",
  "Website Performance",
] as const;

const selectedProjects = projects.filter(({ title }) =>
  selectedProjectNames.some((projectTitle) => projectTitle === title),
);

const AboutPage = () => {
  return (
    <>
      <JsonLd data={aboutProfileJsonLd} />

      <article className="about-page overflow-x-clip bg-white">
        <header
          data-nav-theme="dark"
          className="bg-black pb-20 pt-[120px] text-white md:pb-24 md:pt-36 lg:pb-[120px] lg:pt-[160px]"
        >
          <div className="container-wrapper w-full">
            <div className="app-container mx-6 grid w-auto max-w-[1200px] items-center gap-12 md:mx-12 lg:mx-auto lg:w-[90%] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:w-[88%] 2xl:w-[75%]">
              <div>
                <p
                  data-page-motion-copy
                  className="font-nm-book text-xs uppercase tracking-[0.18em] text-white/50 md:text-sm"
                >
                  About / Steven Cabugos
                </p>
                <h1
                  data-page-motion-heading
                  className="mt-5 max-w-3xl text-balance font-nm-medium text-[clamp(3.25rem,8vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-white"
                >
                  Steven Cabugos
                </h1>
                <p
                  data-page-motion-copy
                  className="mt-7 max-w-2xl text-pretty font-nm-medium text-xl font-medium leading-8 text-white/90 md:text-2xl md:leading-9"
                >
                  Full-Stack Software Engineer &amp; UI/UX Designer
                </p>
                <p
                  data-page-motion-copy
                  className="mt-6 max-w-2xl text-pretty font-nm-book text-base leading-7 text-white/65 md:text-lg md:leading-8"
                >
                  {siteConfig.description}
                </p>
                <p
                  data-page-motion-copy
                  className="mt-4 max-w-2xl text-pretty font-nm-book text-base leading-7 text-white/65 md:text-lg md:leading-8"
                >
                  He currently works as a UI/UX Designer at Payso Inc.,
                  designing payment and merchant experiences. His background
                  also includes work as a Software Engineer II, an independent
                  designer and developer, and a UI/UX design intern.
                </p>
                <p
                  data-page-motion-copy
                  className="mt-4 font-nm-book text-sm leading-6 text-white/45"
                >
                  Also known as John Steven A. Cabugos and stevenzct.
                </p>

                <ul
                  data-page-motion-action
                  className="mt-8 flex flex-wrap gap-2.5"
                  aria-label="Professional specializations"
                >
                  {siteConfig.specialties.map((specialty) => (
                    <li
                      key={specialty}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 font-nm-book text-sm text-white/75"
                    >
                      {specialty}
                    </li>
                  ))}
                </ul>

                <nav
                  data-page-motion-action
                  aria-label="Steven Cabugos social profiles"
                  className="mt-8 flex flex-wrap gap-3"
                >
                  {socialButtons.map(({ buttonName, href }) => (
                    <a
                      key={buttonName}
                      href={href}
                      target="_blank"
                      rel="me noopener noreferrer"
                      aria-label={`${buttonName} profile for Steven Cabugos (opens in a new tab)`}
                      className="group inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-white/20 px-4 py-2.5 font-nm-medium text-sm font-medium text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {buttonName}
                      <ArrowUpRightIcon
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                      />
                    </a>
                  ))}
                </nav>
              </div>

              <figure
                data-page-motion-media
                className="relative mx-auto aspect-[3/4] w-full max-w-[520px] overflow-hidden rounded-[20px] border border-white/10 bg-[#171717] shadow-[0_32px_90px_rgba(0,0,0,0.42)] lg:mx-0 lg:ml-auto"
              >
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.profileImageAlt}
                  fill
                  priority
                  sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 520px, 42vw"
                  className="object-cover object-top"
                />
              </figure>
            </div>
          </div>
        </header>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          data-nav-theme="light"
          className="bg-white py-20 md:py-24 lg:py-[120px]"
        >
          <div className="container-wrapper w-full">
            <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
              <p className="font-nm-book text-sm uppercase tracking-[0.16em] text-black/45">
                Professional background
              </p>
              <h2
                id="experience-heading"
                className="mt-3 font-nm-medium text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.04em] text-black"
              >
                Experience
              </h2>

              <ol className="mt-10 divide-y divide-black/10 border-y border-black/10 md:mt-14">
                {experiences.map(
                  ({
                    role,
                    company,
                    startDate,
                    endDate,
                    location,
                    linkedinUrl,
                  }) => (
                    <li
                      key={`${company}-${role}`}
                      className="grid gap-4 py-7 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:py-9"
                    >
                      <div>
                        <h3 className="font-nm-medium text-2xl font-medium tracking-[-0.025em] text-black md:text-3xl">
                          {role}
                        </h3>
                        {linkedinUrl ? (
                          <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${company} on LinkedIn (opens in a new tab)`}
                            className="mt-2 inline-flex items-center gap-1.5 font-nm-book text-base text-black/60 underline decoration-black/25 underline-offset-4 transition-colors hover:text-black"
                          >
                            {company}
                            <ArrowUpRightIcon
                              aria-hidden="true"
                              className="h-3.5 w-3.5"
                            />
                          </a>
                        ) : (
                          <p className="mt-2 font-nm-book text-base text-black/60">
                            {company}
                          </p>
                        )}
                      </div>
                      <div className="md:text-right">
                        <p className="font-nm-medium text-base font-medium text-black/80">
                          {startDate} — {endDate ?? "Present"}
                        </p>
                        <p className="mt-2 font-nm-book text-sm leading-6 text-black/50">
                          {location}
                        </p>
                      </div>
                    </li>
                  ),
                )}
              </ol>
            </div>
          </div>
        </section>

        <section
          id="selected-projects"
          aria-labelledby="selected-projects-heading"
          data-nav-theme="light"
          className="bg-[#F4F4F2] py-20 md:py-24 lg:py-[120px]"
        >
          <div className="container-wrapper w-full">
            <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-nm-book text-sm uppercase tracking-[0.16em] text-black/45">
                    Fintech, design &amp; development
                  </p>
                  <h2
                    id="selected-projects-heading"
                    className="mt-3 font-nm-medium text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.04em] text-black"
                  >
                    Selected Projects
                  </h2>
                </div>
                <Link
                  href="/projects"
                  className="group inline-flex min-h-11 w-fit items-center gap-2 rounded-[10px] bg-black px-4 py-2.5 font-nm-medium text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  View all projects
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2">
                {selectedProjects.map(
                  ({ title, year, description, category }) => (
                    <article
                      key={title}
                      className="flex min-h-[260px] flex-col rounded-[20px] border border-black/[0.07] bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.045)] sm:p-8"
                    >
                      <div className="flex items-start justify-between gap-5">
                        <p className="font-nm-book text-xs uppercase tracking-[0.14em] text-black/45">
                          {category}
                        </p>
                        <time
                          dateTime={String(year)}
                          className="shrink-0 rounded-full bg-black/[0.055] px-3 py-1.5 font-nm-medium text-xs font-medium text-black/55"
                        >
                          {year}
                        </time>
                      </div>
                      <h3 className="mt-10 font-nm-medium text-[30px] font-medium leading-[1.02] tracking-[-0.035em] text-black md:text-[36px]">
                        {title}
                      </h3>
                      <p className="mt-3 font-nm-book text-base leading-7 text-black/55">
                        {description}
                      </p>
                      <Link
                        href={`/projects/${encodeURIComponent(title)}`}
                        aria-label={`View the ${title} project`}
                        className="group mt-auto inline-flex w-fit items-center gap-2 pt-8 font-nm-medium text-sm font-medium text-black underline decoration-black/20 underline-offset-4 transition-colors hover:decoration-black"
                      >
                        View project
                        <ArrowRightIcon
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                        />
                      </Link>
                    </article>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          id="credentials"
          aria-labelledby="credentials-heading"
          data-nav-theme="light"
          className="bg-white py-20 md:py-24 lg:py-[120px]"
        >
          <div className="container-wrapper w-full">
            <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
              <p className="font-nm-book text-sm uppercase tracking-[0.16em] text-black/45">
                Verified learning
              </p>
              <h2
                id="credentials-heading"
                className="mt-3 font-nm-medium text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.04em] text-black"
              >
                Credentials
              </h2>

              <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2">
                {certifications.map(
                  ({
                    certificateName,
                    Company,
                    Issued,
                    credentialType,
                    certificateUrl,
                    imageSrc,
                  }) => (
                    <article
                      key={certificateName}
                      className="flex min-h-[210px] flex-col rounded-[18px] border border-black/10 p-6 sm:p-7"
                    >
                      <p className="font-nm-book text-xs uppercase tracking-[0.13em] text-black/45">
                        {Company}
                      </p>
                      <h3 className="mt-5 max-w-[20ch] font-nm-medium text-2xl font-medium leading-[1.05] tracking-[-0.025em] text-black md:text-[28px]">
                        {certificateName}
                      </h3>
                      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-7">
                        <p className="font-nm-book text-sm text-black/50">
                          {Issued}
                        </p>
                        <a
                          href={certificateUrl ?? imageSrc}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${certificateName} ${credentialType} (opens in a new tab)`}
                          className="group inline-flex items-center gap-1.5 font-nm-medium text-sm font-medium text-black underline decoration-black/20 underline-offset-4 transition-colors hover:decoration-black"
                        >
                          {credentialType === "badge"
                            ? "View badge"
                            : "View certificate"}
                          <ArrowUpRightIcon
                            aria-hidden="true"
                            className="h-3.5 w-3.5 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                          />
                        </a>
                      </div>
                    </article>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
};

export default AboutPage;
