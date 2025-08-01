import React from "react";
import Image from "next/image";
import { experiences } from "../../constants/experience";
function Experience() {
  return (
    <div className="experience pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] bg-[#F8F8F8]">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h3 className="font-nm-book text-base md:text-2xl mb-2">Work</h3>
          <h1 className="text-[32px] md:text-7xl lg:text-8xl text-start mb-8 md:mb-16 font-nm-medium font-medium text-black w-auto leading-[30px] md:leading-20 lg:leading-[77px]">
            Experience
          </h1>
          <div className="experience-content">
            <div className="experience-wrapper">
              <div className="experience-cards grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
                {experiences.map(
                  ({
                    role,
                    company,
                    startDate,
                    endDate,
                    location,
                    logoSrc,
                    logoAlt,
                    imageSrc,
                    imageAlt,
                  }) => (
                    <div
                      key={`${company}-${role}`}
                      className="max-w-full p-6 lg:p-8 rounded-[13px] bg-white"
                    >
                      <Image
                        className="rounded-lg"
                        src={logoSrc}
                        height={51}
                        width={51}
                        alt={logoAlt}
                      />
                      <h3 className="text-[24px] font-nm-medium font-medium text-black">
                        {role}
                      </h3>
                      <h4 className="text-[18px] font-nm-medium font-medium text-[#242424]">
                        {company}
                      </h4>
                      <p className="text-[14px] font-nm-book text-[#242424]">
                        {startDate} to {endDate} <br />
                        {location}
                      </p>
                      {imageSrc && (
                        <div className="bg-[#F8F8F8] rounded-[8px] mt-4">
                          <Image
                            className="rounded-lg w-full"
                            src={imageSrc}
                            height={227}
                            width={323}
                            alt={imageAlt ?? ""}
                          />
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
