import bannerImage from "../../assets/images/15.png";
import { TiChevronRightOutline } from "react-icons/ti";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
const Banner = () => {
  return (
    <div className="container mx-auto flex items-center h-[100vh]">
      <div className="-mt-10">
        <h4 className="text-3xl font-medium text-gray-950 dark:text-gray-200 -mt-10 mb-4">
          Web Developer
        </h4>
        <h1 className="text-8xl font-bold text-gray-950 dark:text-gray-50 mb-10">Hey! I am</h1>
        <h2 className="text-7xl font-bold mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">
            Masud Rana
          </span>
        </h2>
        <p className="text-2xl text-gray-900 dark:text-gray-300">
          Am a Front-end base Back-end focus web developer passionate and
          experienced in buinding Web application.
        </p>
        <button className="flex items-center bg-blue-500 hover:bg-blue-600 transition duration-150 px-10 py-4 rounded-full mt-10 text-2xl font-medium text-white group">
          Hire me
          <span>
            <TiChevronRightOutline className="inline-block ml-1 translate-x-0 group-hover:translate-x-2 transition-all duration-200"></TiChevronRightOutline>
          </span>
        </button>
        <p className="text-2xl text-gray-950 dark:text-gray-300 mt-20">Follow Me:</p>
        <div className="mt-5 flex gap-x-5">
            <a target="_blank" href="#" className="w-14 h-14 rounded-full border-2 dark:border-gray-200 border-gray-400 flex items-center justify-center">
                <FaFacebookF className="inline-block text-gray-950 dark:text-white text-2xl" />
            </a>
            <a target="_blank" href="#" className="w-14 h-14 rounded-full border-2 dark:border-gray-200 border-gray-400 flex items-center justify-center">
                <FaLinkedinIn className="inline-block text-gray-950 dark:text-white text-2xl" />
            </a>
            <a target="_blank" href="#" className="w-14 h-14 rounded-full border-2 dark:border-gray-200 border-gray-400 flex items-center justify-center">
                <FaInstagram className="inline-block text-gray-950 dark:text-white text-2xl" />
            </a>
            <a target="_blank" href="#" className="w-14 h-14 rounded-full border-2 dark:border-gray-200 border-gray-400 flex items-center justify-center">
                <FaTwitter className="inline-block text-gray-950 dark:text-white text-2xl" />
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
