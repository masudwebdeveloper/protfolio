import { IMyWork } from "../common/MyWork";
import { FaGithub } from "react-icons/fa";
type WorkType = {
  work: IMyWork;
};
const MyWorkCard = ({ work }: WorkType) => {
  return (
    <div className="p-4 sm:p-7 group sm:min-h-[650px] bg-gradient-to-tr from-white-10 to-transparent backdrop-filter backdrop-blur-md shadow-md border-opacity-20 border border-gray-700 dark:border-gray-200 rounded-lg transition duration-300 ease-in-out">
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
      <div className="mt-10 flex flex-col gap-y-5 sm:flex-row items-center justify-between">
        <a
          className="flex items-center gap-x-2 text-md text-gray-950 dark:text-gray-100"
          href={work.liveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl text-gray-950 dark:text-white" />
          Live Link
        </a>
        <a
          className="flex items-center gap-x-2 text-md text-gray-950 dark:text-gray-100"
          href={work.clientCodeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl text-gray-950 dark:text-white" />
          client source
        </a>
        {work.serverCodeLink && (
          <a
            className="flex items-center gap-x-2 text-md text-gray-950 dark:text-gray-100"
            href={work.serverCodeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl text-gray-950 dark:text-white" />
            server source
          </a>
        )}
      </div>
    </div>
  );
};

export default MyWorkCard;
