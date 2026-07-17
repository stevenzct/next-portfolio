"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { socialButtons } from "../../constants/socialButton";
import Link from "next/link";
import {
  ArrowPathIcon,
  ArrowUpRightIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CreditCardIcon,
  CursorArrowRaysIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { prefersReducedMotion } from "../../utils/motion";
import { aboutTechStack } from "../../constants/aboutTechStack";

const capabilities = [
  { label: "Product design", icon: CursorArrowRaysIcon },
  { label: "Full-stack build", icon: CodeBracketIcon },
  { label: "Fintech products", icon: CreditCardIcon },
  { label: "AI engineering", icon: SparklesIcon },
  { label: "Codex + Claude", icon: CpuChipIcon },
] as const;

const SocialBrandIcon = ({ name }: { name: string }) => {
  if (name === "LinkedIn") {
    return (
      <svg
        viewBox="0 0 448 512"
        aria-hidden="true"
        className="h-3 w-3 shrink-0 fill-current sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
      >
        <path d="M100.28 448H7.4V148.9h92.88zm-46.49-340.7C50.07 107.3 26 83.2 26 53.6A53.6 53.6 0 0 1 79.6 0c29.7 0 53.7 24.1 53.7 53.6 0 29.6-24.1 53.7-53.7 53.7zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
    );
  }

  if (name === "GitHub") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3 w-3 shrink-0 fill-current sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
      >
        <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.64 1.66.23 2.88.11 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 512"
      aria-hidden="true"
      className="h-3 w-3 shrink-0 fill-current sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
};

const About = () => {
  const flipCardRef = useRef<HTMLDivElement>(null);
  const techScrollRef = useRef<HTMLDivElement>(null);
  const [isTechVisible, setIsTechVisible] = useState(false);

  useEffect(() => {
    const flipCard = flipCardRef.current;
    if (!flipCard) return;

    gsap.set(flipCard, {
      rotationY: 0,
      transformPerspective: 1600,
      transformOrigin: "50% 50%",
      transformStyle: "preserve-3d",
    });

    return () => {
      gsap.killTweensOf(flipCard);
    };
  }, []);

  useEffect(() => {
    const techScroll = techScrollRef.current;
    if (!techScroll) return;

    const passScrollToPageAtBoundary = (event: WheelEvent) => {
      const isAtTop = techScroll.scrollTop <= 1;
      const isAtBottom =
        techScroll.scrollTop + techScroll.clientHeight >=
        techScroll.scrollHeight - 1;
      const isLeavingTop = event.deltaY < 0 && isAtTop;
      const isLeavingBottom = event.deltaY > 0 && isAtBottom;

      if (!isLeavingTop && !isLeavingBottom) return;

      const pageScrollDelta =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? event.deltaY * 16
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? event.deltaY * window.innerHeight
            : event.deltaY;

      event.preventDefault();
      window.scrollBy({ top: pageScrollDelta, behavior: "auto" });
    };

    techScroll.addEventListener("wheel", passScrollToPageAtBoundary, {
      passive: false,
    });

    return () => {
      techScroll.removeEventListener("wheel", passScrollToPageAtBoundary);
    };
  }, []);

  const handleCardFlip = () => {
    const flipCard = flipCardRef.current;
    const nextFaceIsTech = !isTechVisible;

    setIsTechVisible(nextFaceIsTech);

    if (nextFaceIsTech) {
      techScrollRef.current?.scrollTo({ top: 0 });
    }

    if (!flipCard) return;

    if (prefersReducedMotion()) {
      gsap.set(flipCard, { rotationY: nextFaceIsTech ? 180 : 0 });
      return;
    }

    gsap.killTweensOf(flipCard);
    gsap.to(flipCard, {
      rotationY: nextFaceIsTech ? 180 : 0,
      duration: 0.85,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  };

  return (
    <div
      id="about"
      className="about bg-white pb-8 pt-[80px] md:pb-24 md:pt-24 lg:pt-[120px]"
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <div className="mb-8 md:mb-10 lg:mb-16">
            <p className="mb-2 font-nm-book text-base md:text-xl lg:text-2xl">
              My Expertise
            </p>
            <h2 className="w-auto text-start font-nm-medium text-[32px] font-medium leading-[30px] text-black md:text-6xl md:leading-[0.95] lg:text-7xl xl:text-8xl xl:leading-[77px]">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-8 xl:gap-10">
            <div className="about-portrait-card group relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[20px] border border-black/[0.06] bg-[#F4F4F2] shadow-[0_24px_60px_rgba(0,0,0,0.06)] md:h-[680px] md:max-w-[640px] lg:max-w-none xl:h-[720px]">
              <Image
                src="/images/about/steve-profile.png"
                alt="Steven Cabugos"
                width={1086}
                height={1448}
                sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 640px, (max-width: 1279px) 42vw, 480px"
                className="h-auto w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.015] md:h-full md:object-top"
              />
            </div>

            <div className="relative mx-auto h-[660px] min-w-0 w-full [perspective:1600px] sm:h-[680px] md:max-w-[640px] lg:max-w-none xl:h-[720px]">
              <button
                type="button"
                onClick={handleCardFlip}
                aria-pressed={isTechVisible}
                aria-label={
                  isTechVisible
                    ? "Show About information"
                    : "Show my technology stack"
                }
                className="about-flip-trigger group/flip absolute right-5 top-5 z-30 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-2.5 py-1.5 font-nm-medium text-[10px] font-medium uppercase tracking-[0.12em] text-white/75 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-7 sm:top-7 sm:px-3 sm:py-2 sm:text-[11px] md:right-8 md:top-8 lg:right-10 lg:top-10"
              >
                <span className="about-flip-index text-white/45">01</span>
                <span
                  className="h-3 w-px bg-white/20"
                  aria-hidden="true"
                />
                <span>{isTechVisible ? "About" : "My Tech"}</span>
                <ArrowPathIcon
                  className={`h-3.5 w-3.5 transition-transform duration-500 ${
                    isTechVisible ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                ref={flipCardRef}
                className="grid h-full min-h-0 w-full [transform-style:preserve-3d] will-change-transform"
              >
                <div
                  aria-hidden={isTechVisible}
                  inert={isTechVisible ? true : undefined}
                  className="about-profile-card relative col-start-1 row-start-1 flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] bg-black p-5 text-white shadow-[0_28px_70px_rgba(0,0,0,0.16)] sm:p-7 md:p-8 lg:p-10"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="about-profile-glow-top absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
                  />
                  <div
                    aria-hidden="true"
                    className="about-profile-glow-bottom absolute -bottom-32 -left-28 h-80 w-80 rounded-full bg-white/[0.06] blur-3xl"
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="about-card-eyebrow flex items-center pr-28 font-nm-book text-[11px] uppercase tracking-[0.16em] text-white/55 sm:pr-32 sm:text-xs">
                      <span className="font-nm-medium font-medium text-white/90">
                        <span className="hidden sm:inline">About /{" "}</span>
                        Steven Cabugos
                      </span>
                    </div>

                    <h3 className="mt-12 max-w-2xl font-nm-medium text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[0.9] tracking-[-0.045em] text-white sm:mt-16">
                      Building{" "}
                      <span className="about-card-heading-muted text-white/45">
                        useful digital products.
                      </span>
                    </h3>

                    <p className="about-card-copy mt-7 max-w-xl font-nm-book text-base leading-7 text-white/70 md:text-lg">
                      Full-stack Software Engineer and currently working as a
                      UI/UX Designer at{" "}
                      <Link
                        href="https://www.linkedin.com/company/paysophl/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-nm-medium font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
                      >
                        Payso
                      </Link>
                      {", "}designing high-impact digital experiences for
                      fintech products.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5">
                      {capabilities.map(({ label, icon: CapabilityIcon }) => (
                        <span
                          key={label}
                          className="about-capability-chip inline-flex max-w-full items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1.5 font-nm-book text-[11px] text-white/75 backdrop-blur-sm sm:gap-2 sm:px-3 sm:py-2 sm:text-xs md:text-sm"
                        >
                          <span className="about-capability-icon flex size-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-white sm:size-5">
                            <CapabilityIcon
                              aria-hidden="true"
                              className="size-3 sm:size-3.5"
                            />
                          </span>
                          {label}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col items-start gap-5 pt-8 xl:pt-12">
                      <Link
                        href="https://tally.so/r/Y5gQDz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-primary-cta group/cta inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-white px-5 py-3 font-nm-medium text-sm font-medium text-black transition-all duration-300 hover:bg-[#E8E8E8] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:hover:-translate-y-0.5 sm:w-fit"
                      >
                        Share your project
                        <ArrowUpRightIcon
                          className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover/cta:translate-x-0.5 motion-safe:group-hover/cta:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </Link>

                      <div className="flex w-full max-w-full flex-nowrap items-center gap-1 sm:w-auto sm:gap-2 md:gap-3">
                        {socialButtons.map(({ buttonName, href }) => (
                          <a
                            key={buttonName}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-social-link inline-flex min-h-10 min-w-0 flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-[8px] border border-white/20 bg-white/[0.06] px-1 py-2 font-nm-book text-[10px] text-white/80 transition-all duration-300 hover:border-white/35 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:hover:-translate-y-0.5 sm:min-h-0 sm:flex-none sm:gap-1.5 sm:px-2 sm:text-[11px] md:gap-2 md:px-3 md:text-xs xl:px-4 xl:text-sm"
                          >
                            <SocialBrandIcon name={buttonName} />
                            {buttonName}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  aria-hidden={!isTechVisible}
                  inert={!isTechVisible ? true : undefined}
                  className="about-tech-card relative col-start-1 row-start-1 flex h-full min-h-0 min-w-0 flex-col overflow-hidden rounded-[20px] bg-[#0B0B0B] p-5 text-white shadow-[0_28px_70px_rgba(0,0,0,0.16)] sm:p-7 md:p-8 lg:p-10"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
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
                    ref={techScrollRef}
                    tabIndex={isTechVisible ? 0 : -1}
                    aria-label="Technology stack cards. Scroll to explore all categories."
                    className="relative h-full min-h-0 overflow-y-auto overscroll-y-auto pr-1 outline-none [scrollbar-color:rgba(255,255,255,0.28)_transparent] [scrollbar-width:thin] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60"
                  >
                    <div className="about-card-eyebrow pr-28 font-nm-medium text-[11px] font-medium uppercase tracking-[0.16em] text-white/80 sm:pr-32 sm:text-xs">
                      Steven Cabugos
                    </div>

                    <h3 className="mt-12 max-w-xl font-nm-medium text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.045em] text-white sm:mt-14">
                      My tech{" "}
                      <span className="about-card-heading-muted text-white/45">
                        stack.
                      </span>
                    </h3>

                    <div className="mt-9">
                      <div className="grid gap-4 pb-1 sm:grid-cols-2 sm:gap-5">
                        {aboutTechStack.map((group, index) => (
                          <section
                            key={group.category}
                            className="about-tech-group rounded-[14px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-sm"
                          >
                            <div className="flex items-center justify-between gap-4">
                              <h4 className="font-nm-medium text-sm font-medium text-white sm:text-base">
                                {group.category}
                              </h4>
                              <span className="about-tech-index font-nm-book text-[10px] tracking-[0.12em] text-white/35">
                                0{index + 1}
                              </span>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {group.tags.map(
                                ({ label, icon: TechIcon, color }) => (
                                  <span
                                    key={label}
                                    className="about-tech-tag inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1.5 font-nm-book text-[10px] leading-none text-white/70 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.09] hover:text-white sm:text-[11px]"
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
        </div>
      </div>
    </div>
  );
};

export default About;
