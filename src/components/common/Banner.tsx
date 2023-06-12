import bannerImage from "../../assets/images/15.png";
import { TiChevronRightOutline } from "react-icons/ti";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "../share/Button";
const Banner = () => {
  const handleHireMeClick = () => {
    window.location.href = "mailto:abdullainfo30@gmail.com";
  };

  return (
    <div id="banner" className="sm:px-32 sm:py-20 flex gap-y-8 flex-col sm:flex-row items-center">
      <div className="sm:-mt-10">
        <h4 className="text-xl sm:text-3xl text-center sm:text-left font-normal sm:font-medium text-gray-950 dark:text-gray-200 sm:mb-4">
          Web Developer
        </h4>
        <h1 className="text-2xl sm:text-7xl font-semibold sm:font-bold text-center sm:text-left text-gray-950 dark:text-gray-50 mb-3 sm:mb-5">
          Hey! I am
        </h1>
        <h2 className="text-3xl sm:text-6xl text-center sm:text-left font-bold mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">
            Masud Rana
          </span>
        </h2>
        <p className="text-md sm:text-2xl text-gray-900 text-center sm:text-left dark:text-gray-300">
          Am a Front-end base Back-end focus web developer passionate and
          experienced in buinding Web application.
        </p>
        {/* <button
          onClick={handleHireMeClick}
          className="flex items-center w-[170px] sm:w-[200px] mx-auto sm:ml-0 bg-blue-500 hover:bg-blue-600 transition duration-150 px-7 sm:px-10 py-2 sm:py-4 rounded-full mt-10 text-2xl font-medium text-white group"
        >
          Hire me
          <span>
            <TiChevronRightOutline className="inline-block ml-1 translate-x-0 group-hover:translate-x-2 transition-all duration-200"></TiChevronRightOutline>
          </span>
        </button> */}
        <Button text='Hire me' onClick={handleHireMeClick} />
        <p className="text-lg sm:text-2xl text-gray-950 dark:text-gray-300 mt-5 text-center sm:text-left sm:mt-20">
          Follow Me:
        </p>
        <div className="mt-5 flex justify-center sm:justify-start gap-x-5">
          <a
            target="_blank"
            href="https://www.facebook.com/masudwebdeveloper"
            className="w-9 sm:w-14 h-9 sm:h-14 rounded-full border sm:border-2 dark:border-gray-200 border-gray-400 flex items-center justify-center"
          >
            <FaFacebookF className="inline-block text-gray-950 dark:text-white text-lg sm:text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mrmasudrana/"
            className="w-9 sm:w-14 h-9 sm:h-14 rounded-full border-2 dark:border-gray-200 border-gray-400 flex items-center justify-center"
          >
            <FaLinkedinIn className="inline-block text-gray-950 dark:text-white text-lg sm:text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/masud_1432/"
            className="w-9 sm:w-14 h-9 sm:h-14 rounded-full border-2 dark:border-gray-200 border-gray-400 flex items-center justify-center"
          >
            <FaInstagram className="inline-block text-gray-950 dark:text-white text-lg sm:text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/MasudRana2143"
            className="w-9 sm:w-14 h-9 sm:h-14 rounded-full border-2 dark:border-gray-200 border-gray-400 flex items-center justify-center"
          >
            <FaTwitter className="inline-block text-gray-950 dark:text-white text-lg sm:text-2xl" />
          </a>
        </div>
      </div>
      <div className="">
        <img src={bannerImage} alt="bannderImage" />
      </div>
    </div>
  );
};

export default Banner;
