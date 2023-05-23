import profile from "../../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-x-2 cursor-pointer">
          <img
            className="w-12 h-12 rounded-full border-4"
            src={profile}
            alt="profile"
          />
          <span className="text-white font-bold text-3xl">Web_Dev </span>
          <span className="animate-pulse text-white mt-2 text-3xl">__</span>
        </Link>
        <div className="flex item-center gap-6">
          <div className="hidden sm:flex gap-6 items-center">
            <Link to="#" className="navbar">
              Home
            </Link>
            <Link to="#" className="navbar">
              About
            </Link>
            <Link to="#" className="navbar">
              Services
            </Link>
            <Link to="#" className="navbar">
              Skills
            </Link>
            <Link to="#" className="navbar">
              My Work
            </Link>
            <Link to="#" className="navbar">
              Contact
            </Link>
            <Link to="#" className="navbar">
              <FaGithub />
            </Link>
          </div>
          <button className="py-1 px-2 bg-green-50 rounded-md text-md font-medium hover:bg-blue-800 hover:text-blue-50 transition-all duration-200">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
