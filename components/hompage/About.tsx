import React from "react";
import Image from "next/image";
import { socialButtons } from "../../constants/socialButton";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const capabilities = [
  "Product design",
  "Full-stack build",
  "Fintech products",
  "Codex + Claude",
] as const;

const SocialBrandIcon = ({ name }: { name: string }) => {
  if (name === "LinkedIn") {
    return (
      <svg
        viewBox="0 0 448 512"
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 fill-current md:h-4 md:w-4"
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
        className="h-3.5 w-3.5 shrink-0 fill-current md:h-4 md:w-4"
      >
        <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.64 1.66.23 2.88.11 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 512"
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0 fill-current md:h-4 md:w-4"
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
};

const About = () => {
  return (
    <div
      id="about"
      className="about bg-white pb-[56px] pt-[80px] md:pb-[88px] md:pt-[120px]"
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="w-auto text-start font-nm-medium text-[32px] font-medium leading-[30px] text-black md:text-7xl md:leading-20 lg:text-8xl lg:leading-[77px]">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-stretch xl:gap-10">
            <div className="group relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[20px] border border-black/[0.06] bg-[#F4F4F2] shadow-[0_24px_60px_rgba(0,0,0,0.06)] xl:h-full xl:max-w-none">
              <Image
                src="/images/about/steve-profile.png"
                alt="Steven Cabugos"
                width={1086}
                height={1448}
                sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 520px, 480px"
                className="h-auto w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.015] xl:h-full xl:object-top"
              />
            </div>

            <div className="relative flex min-w-0 flex-col overflow-hidden rounded-[20px] bg-black p-5 text-white shadow-[0_28px_70px_rgba(0,0,0,0.16)] sm:p-7 md:p-8 lg:p-10 xl:h-full xl:min-h-[720px]">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-28 h-80 w-80 rounded-full bg-white/[0.06] blur-3xl"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-4 font-nm-book text-[11px] uppercase tracking-[0.16em] text-white/55 sm:text-xs">
                  <span className="font-nm-medium font-medium text-white/90">
                    About / Steven Cabugos
                  </span>
                  <span>01</span>
                </div>

                <h3 className="mt-12 max-w-2xl font-nm-medium text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[0.9] tracking-[-0.045em] text-white sm:mt-16">
                  Building{" "}
                  <span className="text-white/45">useful digital products.</span>
                </h3>

                <p className="mt-7 max-w-xl font-nm-book text-base leading-7 text-white/70 md:text-lg">
                  Full-stack Software Engineer and currently working as a UI/UX Designer at{" "}
                  <Link
                    href="https://www.linkedin.com/company/paysophl/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-nm-medium font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
                  >
                    Payso
                  </Link>
                  {", "}designing high-impact digital experiences for fintech
                  products.
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 font-nm-book text-xs text-white/75 backdrop-blur-sm md:text-sm"
                    >
                      {capability}
                    </span>
                  ))}
                </div>

                <div className="mt-12 flex flex-col items-start gap-5 xl:mt-auto xl:pt-12">
                  <Link
                    href="https://tally.so/r/Y5gQDz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-white px-5 py-3 font-nm-medium text-sm font-medium text-black transition-all duration-300 hover:bg-[#E8E8E8] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:hover:-translate-y-0.5 sm:w-fit"
                  >
                    Share your project
                    <ArrowUpRightIcon
                      className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover/cta:translate-x-0.5 motion-safe:group-hover/cta:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>

                  <div className="flex flex-nowrap gap-1 sm:gap-2 md:gap-3">
                    {socialButtons.map(({ buttonName, href }) => (
                      <a
                        key={buttonName}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-[8px] border border-white/20 bg-white/[0.06] px-1.5 py-2 font-nm-book text-[10px] text-white/80 transition-all duration-300 hover:border-white/35 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:hover:-translate-y-0.5 sm:gap-1.5 sm:px-2 sm:text-[11px] md:gap-2 md:px-3 md:text-xs xl:px-4 xl:text-sm"
                      >
                        <SocialBrandIcon name={buttonName} />
                        {buttonName}
                      </a>
                    ))}
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
