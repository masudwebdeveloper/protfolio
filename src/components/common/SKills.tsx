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
// import Swiper core and required modules

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export interface ISkill {
  id: number;
  name: string;
  label: string;
  percentage: string;
  icon?: any;
}

const SKills = () => {
  const git = <FaGitAlt className="text-4xl text-[#E94D2E]" />;
  const github = <FaGithub className="text-4xl text-[#171515]" />;
  const html = <FaHtml5 className="text-4xl text-[#E86228]" />;
  const css = <FaCss3 className="text-4xl text-[#2862E9]" />;
  const bootStrap = <FaBootstrap className="text-4xl text-[#7410EC]" />;
  const react = <FaReact className="text-4xl text-[#5CD0EE]" />;
  const node = <FaNodeJs className="text-4xl text-[#63985E]" />;
  const javascript = <IoLogoJavascript className="text-4xl text-[#000000]" />;
  const typescript = <SiTypescript className="text-4xl text-[#0174C2]" />;
  const tailwind = <SiTailwindcss className="text-4xl text-[#06ADC9]" />;
  const express = <SiExpress className="text-4xl text-[#000000]" />;
  const mongodb = <SiMongodb className="text-4xl text-[#459544]" />;
  const firebase = <SiFirebase className="text-4xl text-[#E97B0C]" />;
  const vercel = <SiVercel className="text-4xl text-[#000000]" />;
  const netlify = <SiNetlify className="text-4xl text-[#2DAFB2]" />;
  const redux = <SiRedux className="text-4xl text-[#7046B2]" />;
  const next = <TbBrandNextjs className="text-4xl text-[#000000]" />;

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
  const splideOptions: {
    type: string;
    rewind: boolean;
    autoplay: boolean;
    interval: number;
    perPage: number;
    perMove: number;
    gap: string;
    pauseOnHover: boolean;
    pauseOnFocus: boolean,
    speed: number;
    pagination: boolean;
    arrows: boolean;
  } = {
    type: "slide",
    rewind: true,
    autoplay: true,
    interval: 1500,
    perPage: 5,
    perMove: 1,
    gap: "1rem",
    pauseOnHover: true,
    pauseOnFocus: false,
    speed: 1000,
    pagination: false,
    arrows: false,
  };
  return (
    <div className="container mx-auto py-20">
      <div className="py-16 text-center">
        <h2 className="uppercase text-2xl text-gray-200">
          My Skill progress so far
        </h2>
        <h1 className="uppercase text-5xl text-blue-600">SKills</h1>
      </div>
      <div>
        <Splide
          hasTrack={true}
          options={splideOptions}
          aria-label="My Favorite Images"
        >
          {skills.map((skill) => (
            <SplideSlide key={skill.id}>
              <SkillCard skill={skill} />
            </SplideSlide>
          ))}
          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>

          <button className="splide__toggle" type="button">
            <span className="splide__toggle__play">Play</span>
            <span className="splide__toggle__pause">Pause</span>
          </button>
        </Splide>
      </div>
    </div>
  );
};

export default SKills;
