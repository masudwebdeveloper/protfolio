// import React from "react";
import { DiResponsive } from "react-icons/di";
import { BsCodeSlash } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
export interface IService {
  id: number;
  title: string;
  description: string;
  icon?: any;
}
import ServiceCard from "../share/ServiceCard";
const responsive = (
  <DiResponsive className="font-bold text-5xl text-white inline-block" />
);
const webDevelopment = (
  <BsCodeSlash className="font-bold text-5xl text-white inline-block" />
);
const backEnd = (
  <FaNodeJs className="font-bold text-5xl text-white inline-block" />
);
const authentication = (
  <SiFirebase className="font-bold text-5xl text-white inline-block" />
);
const services: IService[] = [
  {
    id: 1,
    title: "Web Design",
    description: "Expert web design service creating visually stunning, user-friendly websites optimized for performance and maximum impact.",
    icon: responsive,
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "As a Web developer use coding languages like  HTML, CSS, JavaScript, and Python to build websites and web applications.",
    icon: webDevelopment,
  },
  {
    id: 3,
    title: "Back-End",
    description: "Powerful back-end development service building robust and scalable solutions to handle complex data processing and server-side functionalities efficiently.",
    icon: backEnd,
  },
  {
    id: 4,
    title: "Authentication",
    description: "Secure authentication service implementing advanced protocols and encryption methods to protect user data and ensure reliable access control for enhanced security.",
    icon: authentication,
  },
];
const Service = () => {
  return (
    <div className="container mx-auto">
      <div className="py-16 text-center">
        <h2 className="uppercase text-2xl text-gray-200">
          What service i offer you
        </h2>
        <h1 className="uppercase text-5xl text-blue-600">Services</h1>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;