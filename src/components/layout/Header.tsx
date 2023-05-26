import profile from "../../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { useEffect, useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(false);
  };

  useEffect(() => {
    const close = setTimeout(() => setToggle(false), 5000);
    return () => {
      clearTimeout(close);
    };
  }, [toggle]);

  return (
    <div className="container sm:px-20">
      <div className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-x-2 cursor-pointer">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 ml-2 sm:ml-0 rounded-full border-4 border-gray-900 dark:border-gray-50"
            src={profile}
            alt="profile"
          />
          <span className="text-gray-900 dark:text-gray-100 font-bold text-xl sm:text-3xl">
            Web_Dev{" "}
          </span>
          <span className="animate-pulse text-gray-900 dark:text-gray-50 sm:mt-2 text-3xl">
            __
          </span>
        </Link>
        <div className="flex item-center gap-6">
          {/* desktop mode */}
          <div className="hidden sm:flex gap-7 items-center">
            <a href="/" className="navbar">
              Home
            </a>
            <a href="#about" className="navbar">
              About
            </a>
            <a href="#service" className="navbar">
              Services
            </a>
            <a href="#skill" className="navbar">
              Skills
            </a>
            <a href="#myWork" className="navbar">
              My Work
            </a>
            <a href="#contact" className="navbar">
              Contact
            </a>
            <Link target="_blank" to="https://github.com/masudwebdeveloper" className="navbar">
              <FaGithub />
            </Link>
          </div>
          <button className="py-2 px-4 dark:bg-green-50 bg-blue-500 rounded-md text-md font-medium dark:hover:bg-blue-800 hover:text-blue-50 transition-all duration-200 hidden sm:block">
            Contact Me
          </button>
          <button
            className="sm:hidden"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <VscClose className="text-2xl text-slate-50 mr-7"></VscClose>
            ) : (
              <RxHamburgerMenu className="text-2xl text-slate-50 mr-7"></RxHamburgerMenu>
            )}
          </button>
        </div>
      </div>
      {/* mobile mode */}
      <div
        className={`absolute border-t-2 border-blue-500 top-16 right-0 z-50 flex w-4/5 text-center flex-col gap-y-2 bg-[#334155] duration-300 ${
          toggle
            ? "translate-x-0 scale-100 transition-all"
            : "translate-x-96 scale-0"
        }`}
      >
        <Link to="#" className="mobile-nav" onClick={handleToggle}>
          Home
        </Link>
        <Link to="#" className="mobile-nav" onClick={handleToggle}>
          About
        </Link>
        <Link to="#" className="mobile-nav" onClick={handleToggle}>
          Services
        </Link>
        <Link to="#" className="mobile-nav" onClick={handleToggle}>
          Skills
        </Link>
        <Link to="#" className="mobile-nav" onClick={handleToggle}>
          My Work
        </Link>
        <Link to="#" className="mobile-nav" onClick={handleToggle}>
          Contact
        </Link>
        <Link to="#" className="mobile-nav" onClick={handleToggle}>
          <FaGithub className="text-center inline-block" />
        </Link>
        <button
          className="py-2 px-3 mx-2 mb-2 bg-green-50 rounded-md text-md font-medium hover:bg-blue-800 hover:text-blue-50 transition-all duration-200"
          onClick={handleToggle}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Header;
