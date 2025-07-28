import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="projects-section pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px]">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h3 className="font-nm-book text-base md:text-2xl mb-2">Projects</h3>
          <h1 className="text-[32px] md:text-7xl lg:text-8xl text-start mb-8 md:mb-16 font-nm-medium font-medium text-black w-auto leading-[30px] md:leading-20 lg:leading-[77px]">
            Where Ideas
            <br />
            Become Interfaces
          </h1>
          <div className="projects-content grid md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
            <div className="projects-wrapper">
              <div className="projects-images">
                <Image
                  className="content-projects rounded-lg w-full"
                  src="/images/projects/Rioflorido1.jpg"
                  height={482}
                  width={589}
                  alt="Rioflorido1"
                ></Image>
              </div>
              <div className="projects-title">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-nm-medium font-medium text-black mt-4 md:mt-6 mb-0">
                  RV Rioflorido | 2025
                </h2>
                <h3 className="font-nm-book text-base md:text-2xl leading-relaxed">
                  Quality-driven construction company
                </h3>
              </div>
            </div>

            <div className="projects-wrapper">
              <div className="projects-images">
                <Image
                  className="content-projects rounded-lg w-full"
                  src="/images/projects/Laprasca1.jpg"
                  height={482}
                  width={589}
                  alt="Laprasca1"
                ></Image>
              </div>
              <div className="projects-title">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-nm-medium font-medium text-black mt-4 md:mt-6 mb-0">
                  Laprasca Restaurant | 2021   
                </h2>
                <h3 className="font-nm-book text-base md:text-2xl leading-relaxed">
                  Fine dining table reservation restaurant
                </h3>
              </div>
            </div>

            <div className="projects-wrapper">
              <div className="projects-images">
                <Image
                  className="content-projects rounded-lg w-full"
                  src="/images/projects/Cryptofix1.jpg"
                  height={482}
                  width={589}
                  alt="Cryptofix"
                ></Image>
              </div>
              <div className="projects-title">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-nm-medium font-medium text-black mt-4 md:mt-6 mb-0">
                  Cryptofix | 2024
                </h2>
                <h3 className="font-nm-book text-base md:text-2xl leading-relaxed">
                  Ad agency in the cryptocurrency industry
                </h3>
              </div>
            </div>

            <div className="projects-wrapper">
              <div className="projects-images">
                <Image
                  className="content-projects rounded-lg w-full"
                  src="/images/projects/Planco1.jpg"
                  height={482}
                  width={589}
                  alt="Planco"
                ></Image>
              </div>
              <div className="projects-title">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-nm-medium font-medium text-black mt-4 md:mt-6 mb-0">
                  Planco | 2024
                </h2>
                <h3 className="font-nm-book text-base md:text-2xl leading-relaxed">
                  Outdoor travel planning agency
                </h3>
              </div>
            </div>

            <div className="projects-wrapper">
              <div className="projects-images">
                <Image
                  className="content-projects rounded-lg w-full"
                  src="/images/projects/Chatgpt1.jpg"
                  height={482}
                  width={589}
                  alt="Planco"
                ></Image>
              </div>
              <div className="projects-title">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-nm-medium font-medium text-black mt-4 md:mt-6 mb-0">
                  Chatgpt | 2024
                </h2>
                <h3 className="font-nm-book text-base md:text-2xl leading-relaxed">
                  Chatgpt AI conversational language
                </h3>
              </div>
            </div>

            <div className="projects-wrapper">
              <div className="projects-images">
                <Image
                  className="content-projects rounded-lg w-full"
                  src="/images/projects/CryptoMillions1.jpg"
                  height={482}
                  width={589}
                  alt="CryptoMillions"
                ></Image>
              </div>
              <div className="projects-title">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-nm-medium font-medium text-black mt-4 md:mt-6 mb-0">
                  CryptoMillions | 2024
                </h2>
                <h3 className="font-nm-book text-base md:text-2xl leading-relaxed">
                  Decentralized crypto-based lottery platform
                </h3>
              </div>
            </div>

            <div className="projects-wrapper">
              <div className="projects-images">
                <Image
                  className="content-projects rounded-lg w-full"
                  src="/images/projects/Viewminder1.jpg"
                  height={482}
                  width={589}
                  alt="Viewminder"
                ></Image>
              </div>
              <div className="projects-title">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-nm-medium font-medium text-black mt-4 md:mt-6 mb-0">
                  Viewminder | 2024
                </h2>
                <h3 className="font-nm-book text-base md:text-2xl leading-relaxed">
                  Enhances dark, low-quality videos for clearer insights
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
