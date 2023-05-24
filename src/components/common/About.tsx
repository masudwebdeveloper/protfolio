import React from "react";
import aboutImage from "../../assets/images/mail-to-sms-compatible-toute-messagerie.svg";
import { TiChevronRightOutline } from "react-icons/ti";

const About = () => {
  return (
    <div className="flex container mx-auto items-center gap-5 h-[70vh]">
      <img src={aboutImage} className="w-full sm:w-2/5" alt="aboutIamge" />
      <div>
        <h4 className="text-blue-500 text-2xl font-bold mb-4">About Me</h4>
        <h2 className="text-gray-200 text-4xl font-normal uppercase">
          Why Hire me for your next Projects?
        </h2>
        <p className="text-gray-200 text-xl mt-5">I'm 24 years old creative <strong>Web developer</strong> based in <a href="http://"><strong>front-end</strong></a> specializing in User Interface Design and Development. I build clean, appealing, and functional interfaces which comply with the latest web standards🔥</p>
        <br />
        <p className="text-gray-200 text-xl">I am currently complete web development from <a href="http://" target="_blank" rel="noopener noreferrer"><strong className="hover:text-blue-600">Programming Hero</strong></a> Course. I'm React web developer passionate about open source.</p>
        <a href="https://" className="flex items-center bg-blue-500 hover:bg-blue-600 transition duration-150 px-10 py-4 rounded-full mt-10 text-2xl font-medium text-white group sm:w-[250px]">
          Download cv
          <span>
            <TiChevronRightOutline className="inline-block ml-1 translate-x-0 group-hover:translate-x-2 transition-all duration-200"></TiChevronRightOutline>
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;
