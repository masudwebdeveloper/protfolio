import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiRedux,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import SkillCard from "../share/SkillCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

export interface ISkill {
  id: number;
  name: string;
  label: string;
  percentage: string;
  icon?: any;
}

const SKills = () => {
  const git = <FaGitAlt className="text-2xl sm:text-4xl text-[#E94D2E]" />;
  const github = <FaGithub className="text-2xl sm:text-4xl text-[#171515]" />;
  const html = <FaHtml5 className="text-2xl sm:text-4xl text-[#E86228]" />;
  const css = <FaCss3 className="text-2xl sm:text-4xl text-[#2862E9]" />;
  const bootStrap = (
    <FaBootstrap className="text-2xl sm:text-4xl text-[#7410EC]" />
  );
  const react = <FaReact className="text-2xl sm:text-4xl text-[#5CD0EE]" />;
  const node = <FaNodeJs className="text-2xl sm:text-4xl text-[#63985E]" />;
  const javascript = (
    <IoLogoJavascript className="text-2xl sm:text-4xl text-[#000000]" />
  );
  const typescript = (
    <SiTypescript className="text-2xl sm:text-4xl text-[#0174C2]" />
  );
  const tailwind = (
    <SiTailwindcss className="text-2xl sm:text-4xl text-[#06ADC9]" />
  );
  const express = <SiExpress className="text-2xl sm:text-4xl text-[#000000]" />;
  const mongodb = <SiMongodb className="text-2xl sm:text-4xl text-[#459544]" />;
  const firebase = (
    <SiFirebase className="text-2xl sm:text-4xl text-[#E97B0C]" />
  );
  const vercel = <SiVercel className="text-2xl sm:text-4xl text-[#000000]" />;
  const netlify = <SiNetlify className="text-2xl sm:text-4xl text-[#2DAFB2]" />;
  const redux = <SiRedux className="text-2xl sm:text-4xl text-[#7046B2]" />;
  const next = (
    <TbBrandNextjs className="text-2xl sm:text-4xl text-[#000000]" />
  );

  const skills: ISkill[] = [
    {
      id: 1,
      name: "Git",
      label: "Junior",
      percentage: "45%",
      icon: git,
    },
    {
      id: 2,
      name: "Github",
      label: "Junior",
      percentage: "55%",
      icon: github,
    },
    {
      id: 3,
      name: "html",
      label: "Intermediate",
      percentage: "85%",
      icon: html,
    },
    {
      id: 4,
      name: "css",
      label: "Intermediate",
      percentage: "80%",
      icon: css,
    },
    {
      id: 5,
      name: "javascript",
      label: "Medium",
      percentage: "70%",
      icon: javascript,
    },
    {
      id: 6,
      name: "typescript",
      label: "Beginner",
      percentage: "45%",
      icon: typescript,
    },
    {
      id: 7,
      name: "bootstrap",
      label: "Intermediate",
      percentage: "65%",
      icon: bootStrap,
    },
    {
      id: 8,
      name: "Tailwind",
      label: "Expert",
      percentage: "90%",
      icon: tailwind,
    },
    {
      id: 9,
      name: "React",
      label: "Junior",
      percentage: "75%",
      icon: react,
    },
    {
      id: 10,
      name: "Express",
      label: "Junior",
      percentage: "50%",
      icon: express,
    },
    {
      id: 11,
      name: "Node",
      label: "Junior",
      percentage: "50%",
      icon: node,
    },
    {
      id: 12,
      name: "Mongodb",
      label: "Junior",
      percentage: "65%",
      icon: mongodb,
    },
    {
      id: 13,
      name: "firebase",
      label: "Junior",
      percentage: "50%",
      icon: firebase,
    },
    {
      id: 14,
      name: "nextjs",
      label: "beginner",
      percentage: "35%",
      icon: next,
    },
    {
      id: 15,
      name: "vecel",
      label: "Junior",
      percentage: "65%",
      icon: vercel,
    },
    {
      id: 16,
      name: "redux",
      label: "beginner",
      percentage: "35%",
      icon: redux,
    },
    {
      id: 17,
      name: "netlify",
      label: "beginner",
      percentage: "35%",
      icon: netlify,
    },
  ];

  return (
    <div id="skill" className="px-1 sm:px-2 md:px-5 lg:px-14 xl:px-24 sm:py-20">
      <div className="py-7 sm:pb-16 text-center">
        <h2 className="uppercase text-base md:text-xl text-gray-950 dark:text-gray-200">
          My Skill progress so far
        </h2>
        <h1 className="uppercase text-base md:text-2xl font-bold text-blue-600">
          SKills
        </h1>
      </div>
      <div className="">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={10}
          slidesPerView={8}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            319: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.id}>
              <SkillCard skill={skill} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SKills;
