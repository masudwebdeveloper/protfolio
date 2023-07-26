import bannerImage from "../../assets/images/15.png";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "../share/Button";
import Tooltip from "../share/Tooltip";
const Banner = () => {
  const handleHireMeClick = () => {
    window.location.href = "mailto:abdullainfo30@gmail.com";
  };

  return (
    <div
      id="banner"
      className="px-1 sm:px-2 md:px-5 lg:px-14 xl:px-24 sm:py-20 flex gap-y-8 flex-col sm:flex-row items-center"
    >
      <div className="sm:-mt-10 content">
        <h4 className="text-xl sm:text-3xl text-center sm:text-left font-normal sm:font-medium text-gray-400 dark:text-gray-200 sm:mb-4">
          Web Developer
        </h4>
        <h1 className="text-2xl sm:text-7xl font-semibold sm:font-bold text-center sm:text-left text-gray-600 dark:text-gray-50 mb-3 sm:mb-5">
          Hey! I am
        </h1>
        <h2 className="text-3xl sm:text-6xl text-center sm:text-left font-bold mb-3">
          <span className="title">Masud Rana</span>
        </h2>
        <p className="text-md sm:text-2xl mb-5 text-gray-900 text-center sm:text-left dark:text-gray-300">
          Am a Front-end base Back-end focus web developer passionate and
          experienced in buinding Web application.
        </p>
        <Button text="Hire me" onClick={handleHireMeClick} />
        <p className="text-lg sm:text-2xl text-gray-950 dark:text-gray-300 mt-5 text-center sm:text-left sm:mt-20">
          Follow Me:
        </p>
        <div className="mt-5 flex justify-center sm:justify-start gap-x-5">
          <Tooltip content="Facebook">
            <a
              target="_blank"
              href="https://www.facebook.com/masudwebdeveloper"
              className="w-6 md:w-10 h-6 md:h-10 rounded-full border dark:border-gray-200 border-gray-400 flex items-center justify-center"
            >
              <FaFacebookF className="inline-block text-gray-950 dark:text-white text-lg sm:text-2xl" />
            </a>
          </Tooltip>
          <Tooltip content="Github">
            <a
              target="_blank"
              href="https://github.com/masudwebdeveloper"
              className="w-6 md:w-10 h-6 md:h-10 rounded-full border dark:border-gray-200 border-gray-400 flex items-center justify-center"
            >
              <FaGithub className="inline-block text-gray-950 dark:text-white text-lg sm:text-2xl" />
            </a>
          </Tooltip>
          <Tooltip content="Linkedin">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mrmasudrana/"
              className="w-6 md:w-10 h-6 md:h-10 rounded-full border border-gray-400 flex items-center justify-center"
            >
              <FaLinkedinIn className="inline-block text-gray-950 dark:text-white text-lg sm:text-2xl" />
            </a>
          </Tooltip>
          <Tooltip content="Instagram">
            <a
              target="_blank"
              href="https://www.instagram.com/masud_1432/"
              className="w-6 md:w-10 h-6 md:h-10 rounded-full border border-gray-400 flex items-center justify-center"
            >
              <FaInstagram className="inline-block text-gray-950 dark:text-white text-lg sm:text-2xl" />
            </a>
          </Tooltip>
          <Tooltip content="Twitter">
            <a
              target="_blank"
              href="https://twitter.com/MasudRana2143"
              className="w-6 md:w-10 h-6 md:h-10 rounded-full border border-gray-400 flex items-center justify-center"
            >
              <FaTwitter className="inline-block text-gray-950 dark:text-white text-lg sm:text-2xl" />
            </a>
          </Tooltip>
        </div>
      </div>
      <div className="">
        <img src={bannerImage} alt="bannderImage" />
      </div>
    </div>
  );
};

export default Banner;
