import React from "react";
import Image from "next/image";
import { socialButtons } from "../../constants/socialButton";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div
      id="about"
      className="about bg-white pb-[56px] pt-[80px] md:pb-[88px] md:pt-[120px]"
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <p className="mb-2 font-nm-book text-base md:text-2xl">
              My Expertise
            </p>
            <h2 className="w-auto text-start font-nm-medium text-[32px] font-medium leading-[30px] text-black md:text-7xl md:leading-20 lg:text-8xl lg:leading-[77px]">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-stretch xl:gap-10">
            <div className="group relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[20px] border border-black/[0.06] bg-[#F4F4F2] shadow-[0_24px_60px_rgba(0,0,0,0.06)] xl:h-full xl:max-w-none">
              <Image
                src="/images/about/StevenCabugos.png"
                alt="Steven Cabugos"
                width={1086}
                height={1448}
                sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 520px, 480px"
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015] xl:h-full xl:object-top"
              />
            </div>

            <div className="flex min-w-0 flex-col rounded-[20px] border border-black/[0.06] bg-[#F7F7F5] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.06)] sm:p-7 md:p-8 lg:p-10 xl:h-full">
              <p className="font-nm-book text-[18px] leading-[1.45] text-[#222222] md:text-[20px] xl:text-[24px] xl:leading-[1.4]">
                I&apos;m Steven Cabugos, a{" "}
                <strong className="font-nm-medium font-medium">
                  Full-stack Software Engineer
                </strong>{" "}
                and currently working as a{" "}
                <strong className="font-nm-medium font-medium">
                  UI/UX Designer
                </strong>{" "}
                at{" "}
                <Link
                  href="https://www.linkedin.com/company/paysophl/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-nm-medium font-medium underline decoration-1 underline-offset-4 transition-opacity hover:opacity-60"
                >
                  Payso
                </Link>
                {", "}designing high-impact digital experiences for fintech
                products. I combine design thinking, software engineering, and
                AI-powered tools such as{" "}
                <strong className="font-nm-medium font-medium">
                  OpenAI Codex
                </strong>{" "}
                and{" "}
                <strong className="font-nm-medium font-medium">
                  Claude Code
                </strong>{" "}
                to turn ideas into functional and user-friendly digital
                products.
              </p>

              <div className="my-6 h-px w-full bg-[#D6D6D6] md:my-8" />

              <p className="mb-3 font-nm-medium text-xs font-medium uppercase tracking-[0.14em] text-[#666666]">
                From idea to launch
              </p>
              <p className="font-nm-book text-base leading-[1.55] text-[#363636] md:text-[18px] md:leading-[1.6]">
                Share your project details with me, and I&apos;ll be happy to help
                bring your idea to life&mdash;from planning and UI/UX design to
                development and launch. Whether you need a mobile app, website,
                booking system, CMS, dashboard, e-commerce platform, inventory
                or POS system, membership platform, or custom business
                software, I focus on building solutions that are simple,
                useful, scalable, and aligned with your goals.
              </p>

              <div className="mt-7 flex flex-col items-start gap-5 border-t border-[#D6D6D6] pt-6 lg:mt-8 xl:mt-auto xl:pt-8">
                <Link
                  href="https://tally.so/r/Y5gQDz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-black px-5 py-3 font-nm-medium text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2B2B2B] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:w-fit"
                >
                  Share your project
                  <ArrowUpRightIcon
                    className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>

                <div className="flex flex-nowrap gap-1 sm:gap-2 md:gap-3">
                  {socialButtons.map(({ buttonName, href, icon, iconAlt }) => (
                    <a
                      key={buttonName}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-[8px] border border-[#D6D6D6] bg-white px-1.5 py-2 font-nm-book text-[10px] text-[#222222] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B8B8B8] hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:gap-1.5 sm:px-2 sm:text-[11px] md:gap-2 md:px-3 md:text-xs xl:px-4 xl:text-sm"
                    >
                      <Image
                        src={icon}
                        alt={iconAlt}
                        width={16}
                        height={16}
                        className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4"
                      />
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
  );
};

export default About;
