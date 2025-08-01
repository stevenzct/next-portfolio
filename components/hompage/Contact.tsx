import React from "react";
import styles from "./Contact.module.css";
import Button from "../Button";

const Contact = () => {
  return (
    <div
      id="contact"
      className={`${styles["contact-section"]} contact  pt-[80px] pb-[80px] md:pt-[120px] md:pb-[100px]`}
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h1 className="text-[32px] md:text-7xl lg:text-8xl text-start mb-4 md:mb-8 font-nm-medium font-medium text-black w-auto leading-[30px] md:leading-20 lg:leading-[77px]">
            Let’s connect!
          </h1>

          <p className="text-lead md:text-[24px] font-nm-book text-[#222222] leading-normal md:leading-[29px] w-auto lg:w-[622px]">
            I’m always interested in UI/UX design, web development, and
            freelance projects. Feel free to send me a message to discuss how I
            can contribute to your project.
          </p>

          <div className="cta flex justify-start mt-6">
            <Button type="button" title="Send a message" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
