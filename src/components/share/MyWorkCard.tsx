import React from "react";
import { IMyWork } from "../common/MyWork";
import github from "../../assets/images/github.png";
import { FaGithub } from "react-icons/fa";
type WorkType = {
  work: IMyWork;
};
const MyWorkCard = ({ work }: WorkType) => {
  return (
    <div className="glass-effect p-7 group h-[750px]">
      <div>
        <img
          className="rounded-lg group-hover:scale-105 transition-all duration-200"
          src={work.img}
          alt={work.title}
        />
      </div>
      <div>
        <h3 className="text-xl mt-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          {work.technology}
        </h3>
        <h2 className="mt-3 text-3xl font-semibold text-blue-500">
          {work.title}
        </h2>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <a
          className="flex items-center gap-x-2 text-xl text-gray-100"
          href={work.liveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl text-white" />
          Live Link
        </a>
        <a
          className="flex items-center gap-x-2 text-xl text-gray-100"
          href={work.clientCodeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl text-white" />
          client source
        </a>
        {work.serverCodeLink && (
          <a
            className="flex items-center gap-x-2 text-xl text-gray-100"
            href={work.serverCodeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-white" />
            server source
          </a>
        )}
      </div>
    </div>
  );
};

export default MyWorkCard;