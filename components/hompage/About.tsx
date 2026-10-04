import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { aboutTechStack } from "../../constants/aboutTechStack";
import { siteConfig } from "../../constants/site";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="homepage-about-heading"
      data-home-layout data-nav-theme="light"
      data-home-motion-section
      className="about bg-white pb-8 pt-[calc(80*var(--home-unit,1px))] md:pb-24 md:pt-24 lg:pt-[calc(120*var(--home-unit,1px))]"
    >
      <div className="container-wrapper h-auto w-full">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <div className="mb-8 md:mb-10 lg:mb-16">
            <p
              data-home-motion-copy
              className="mb-2 font-nm-book text-base md:text-xl lg:text-2xl"
            >
              My Expertise
            </p>
            <h2
              id="homepage-about-heading"
              data-home-motion-heading
              className="w-auto text-start font-nm-medium text-[clamp(2rem,6vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.035em] text-black"
            >
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-8 xl:gap-10">
            <div
              data-home-motion-media
              className="about-portrait-card group relative mx-auto w-full max-w-[calc(520*var(--home-unit,1px))] overflow-hidden rounded-[calc(20*var(--home-unit,1px))] border border-black/[0.06] bg-[#F4F4F2] shadow-[0_24px_60px_rgba(0,0,0,0.06)] md:h-[calc(680*var(--home-unit,1px))] md:max-w-[calc(640*var(--home-unit,1px))] lg:max-w-none xl:h-[calc(720*var(--home-unit,1px))]"
            >
              <Image
                src="/images/about/steve-profile.png"
                alt={siteConfig.profileImageAlt}
                width={1086}
                height={1448}
                sizes="(min-width: 4000px) 1392px, (min-width: 1280px) 35vw, (max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 640px, 42vw"
                className="h-auto w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.015] md:h-full md:object-top"
              />
            </div>

            <div
              data-home-motion-card
              className="about-tech-card relative mx-auto flex h-[calc(660*var(--home-unit,1px))] min-w-0 w-full flex-col overflow-hidden rounded-[calc(20*var(--home-unit,1px))] bg-[#0B0B0B] p-5 text-white shadow-[0_28px_70px_rgba(0,0,0,0.16)] sm:h-[calc(680*var(--home-unit,1px))] sm:p-7 md:max-w-[calc(640*var(--home-unit,1px))] md:p-8 lg:max-w-none lg:p-10 xl:h-[calc(720*var(--home-unit,1px))]"
            >
              <div
                aria-hidden="true"
                className="about-tech-glow-top absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/[0.07] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="about-tech-glow-bottom absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/[0.05] blur-3xl"
              />

              <div
                tabIndex={0}
                aria-label="Technology stack cards. Scroll to explore all categories."
                className="relative h-full min-h-0 overflow-y-auto overscroll-y-auto pr-1 outline-none [scrollbar-color:rgba(255,255,255,0.28)_transparent] [scrollbar-width:thin] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60"
              >
                <div className="relative overflow-hidden rounded-[calc(16*var(--home-unit,1px))] border border-white/10 bg-white/[0.055] p-5 sm:p-6">
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-16 size-40 rounded-full bg-white/[0.06] blur-3xl"
                  />

                  <div className="about-card-eyebrow relative font-nm-medium text-[calc(11*var(--home-unit,1px))] font-medium uppercase tracking-[0.16em] text-white/65 sm:text-xs">
                    Steven Cabugos
                  </div>

                  <p className="about-card-title relative mt-5 max-w-2xl text-balance font-nm-medium text-[clamp(1.65rem,3.4vw,2.55rem)] font-medium leading-[1.02] tracking-[-0.035em] text-white">
                    AI Engineer{" "}
                    <span className="text-white/45"><span>Full-Stack Engineer,</span>{" "}&amp; UI/UX Designer.</span>
                  </p>

                  <div className="relative mt-5 flex flex-col items-start gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:gap-4">
                    <Link
                      href="https://www.linkedin.com/company/paysophl/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Payso on LinkedIn"
                      className="group/payso inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-3.5 py-2 font-nm-medium text-xs font-medium text-black transition-[transform,background-color] duration-200 hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:hover:-translate-y-0.5 sm:text-sm"
                    >
                      Currently at Payso
                      <ArrowUpRightIcon
                        aria-hidden="true"
                        className="size-3.5 transition-transform duration-200 motion-safe:group-hover/payso:translate-x-0.5 motion-safe:group-hover/payso:-translate-y-0.5"
                      />
                    </Link>
                    <p className="max-w-md font-nm-book text-xs leading-5 text-white/55 sm:text-sm sm:leading-6">
                      Designing and developing high-impact digital experiences
                      for fintech products.
                    </p>
                  </div>
                </div>

                <div className="mt-8 sm:mt-9">
                  <div className="grid gap-4 pb-1 sm:grid-cols-2 sm:gap-5">
                    {aboutTechStack.map((group, index) => (
                      <section
                        key={group.category}
                        className="about-tech-group rounded-[calc(14*var(--home-unit,1px))] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-sm"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <h4 className="font-nm-medium text-sm font-medium text-white sm:text-base">
                            {group.category}
                          </h4>
                          <span className="about-tech-index font-nm-book text-[calc(10*var(--home-unit,1px))] tracking-[0.12em] text-white/35">
                            0{index + 1}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {group.tags.map(
                            ({ label, icon: TechIcon, color }) => (
                              <span
                                key={label}
                                className="about-tech-tag inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1.5 font-nm-book text-[calc(10*var(--home-unit,1px))] leading-none text-white/70 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.09] hover:text-white sm:text-[calc(11*var(--home-unit,1px))]"
                              >
                                <TechIcon
                                  aria-hidden="true"
                                  className="h-3.5 w-3.5 shrink-0"
                                  style={{ color }}
                                />
                                {label}
                              </span>
                            ),
                          )}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
