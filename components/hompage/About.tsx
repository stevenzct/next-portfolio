import React from "react";
import Image from "next/image";
import { socialButtons } from "../../constants/socialButton";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="about pt-[80px] pb-[32px] md:pt-[120px] md:pb-[100px] bg-white"
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-20 xl:gap-24">
            <div className="overflow-hidden rounded-[13px] bg-[#F8F8F8]">
              <Image
                src="/images/about/StevenCabugos.png"
                alt="Steven Cabugos"
                width={520}
                height={640}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className="flex min-w-0 flex-col">
              <h3 className="font-nm-book text-base md:text-2xl mb-2">
                My Expertise
              </h3>
              <h1 className="text-[32px] md:text-7xl lg:text-8xl text-start mb-4 md:mb-8 font-nm-medium font-medium text-black w-auto leading-[30px] md:leading-20 lg:leading-[77px]">
                About Me
              </h1>
              <p className="text-lead md:text-[24px] font-nm-book text-[#222222] leading-normal md:leading-[29px] pb-4">
                I&#39;m Steven Cabugos, a{" "}
                <span className="font-nm-medium font-medium">
                  {" "}
                  Software Developer{" "}
                </span>{" "}
                and currently working as{" "}
                <span className="font-nm-medium font-medium">
                  {" "}
                  UI/UX Designer
                </span>{" "}
                at{" "}
                <span className="font-nm-medium font-medium">
                  <Link
                    href="https://www.linkedin.com/company/paysophl/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-nm-medium font-medium underline underline-offset-4 hover:opacity-80"
                  >
                    Payso
                  </Link>
                </span>
                , designing high-impact digital experiences for fintech
                products. I combine software engineering skills, design thinking, AI tools to speed up workflows, improve efficiency, and build successful digital products. 
              </p>

              <div className="flex flex-nowrap gap-2 pt-3.5 md:gap-4">
                {socialButtons.map(({ buttonName, href, icon, iconAlt }) => (
                  <a
                    key={buttonName}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-[8px] border-1 border-[#D6D6D6] px-2 py-2 text-xs font-nm-book text-[#222222] transition-colors duration-300 hover:bg-[#F8F8F8] md:gap-2 md:px-4 md:text-sm"
                  >
                    <Image src={icon} alt={iconAlt} width={16} height={16} />
                    {buttonName}
                  </a>
                ))}
              </div>
              <iframe
                data-testid="embed-iframe"
                title="Spotify playlist"
                src="https://open.spotify.com/embed/playlist/63rfA69SeqNJqyKc8pr3Ro?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="mt-6 h-[352px] w-full max-w-full rounded-[12px] md:h-[300px] lg:min-h-[180px] lg:flex-1 lg:mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
