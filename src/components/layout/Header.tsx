import profile from "../../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { ThemeContext, ThemeContextProps } from "../../contexts/ThemeProvider";
import { useContext } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const themeContext = useContext<ThemeContextProps | undefined>(ThemeContext);
  const handleToggle = () => {
    setToggle(false);
  };

  useEffect(() => {
    const close = setTimeout(() => setToggle(false), 5000);
    return () => {
      clearTimeout(close);
    };
  }, [toggle]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId || "");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!themeContext) {
    return null;
  }
  const { theme, handleTheme } = themeContext;

  return (
    <div className="px-1 sm:px-2 md:px-5 lg:px-14 xl:px-24">
      <div className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-x-2 cursor-pointer">
          <img
            className="w-10 h-10 md:w-12 md:h-12 ml-2 md:ml-0 rounded-full border-2 border-gray-500 dark:border-gray-50"
            src={profile}
            alt="profile"
          />
          <span className="text-gray-500 dark:text-gray-100 font-bold text-xl sm:text-3xl">
            Web_Dev
          </span>
          <span className="animate-pulse text-gray-600 dark:text-gray-50 sm:mt-2 text-3xl">
            __
          </span>
        </Link>
        <div className="flex item-center gap-6">
          {/* desktop mode */}
          <div className="hidden lg:flex gap-7 items-center">
            <a href="#banner" className="navbar" onClick={handleClick}>
              Home
            </a>
            <a href="#about" onClick={handleClick} className="navbar">
              About
            </a>
            <a href="#service" onClick={handleClick} className="navbar">
              Services
            </a>
            <a href="#skill" onClick={handleClick} className="navbar">
              Skills
            </a>
            <a href="#myWork" onClick={handleClick} className="navbar">
              My Work
            </a>
            <a href="#contact" onClick={handleClick} className="navbar">
              Contact
            </a>
            <div
              className={`w-6 md:w-10 h-6 md:h-10 cursor-pointer flex items-center justify-center rounded-full ${
                theme === "light" ? "bg-gray-300" : "bg-gray-700"
              }`}
            >
              {theme === "dark" ? (
                <BiSun
                  onClick={handleTheme}
                  className="text-base md:text-xl text-yellow-300"
                />
              ) : (
                <BiMoon
                  onClick={handleTheme}
                  className="text-base md:text-xl"
                />
              )}
            </div>
          </div>
          <div
            className={`w-6 md:w-10 h-6 md:h-10 cursor-pointer flex items-center justify-center rounded-full lg:hidden ${
              theme === "light" ? "bg-gray-300" : "bg-gray-700"
            }`}
          >
            {theme === "dark" ? (
              <BiSun
                onClick={handleTheme}
                className="text-base md:text-xl text-yellow-300"
              />
            ) : (
              <BiMoon onClick={handleTheme} className="text-base md:text-xl" />
            )}
          </div>
          <button className="py-2 px-4 dark:bg-green-50 bg-blue-500 rounded-md text-md font-medium dark:hover:bg-blue-800 hover:text-blue-50 transition-all duration-200 hidden sm:block">
            Contact Me
          </button>
          <button
            className="sm:hidden"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <VscClose className="text-2xl text-gray-800 dark:text-slate-50 mr-3"></VscClose>
            ) : (
              <RxHamburgerMenu className="text-2xl text-gray-800 dark:text-slate-50 mr-3"></RxHamburgerMenu>
            )}
          </button>
        </div>
      </div>
      {/* mobile mode */}
      <div
        className={`absolute border-t-2 border-blue-500 top-16 right-0 z-50 flex w-4/5 text-center flex-col gap-y-2 bg-gray-50 dark:bg-[#334155] duration-300 ${
          toggle
            ? "translate-x-0 scale-100 transition-all"
            : "translate-x-96 scale-0"
        }`}
      >
        <a
          href="#banner"
          className="mobile-nav"
          onClick={() => {
            handleToggle(), handleClick;
          }}
        >
          Home
        </a>
        <a
          href="#about"
          className="mobile-nav"
          onClick={() => {
            handleToggle(), handleClick;
          }}
        >
          About
        </a>
        <a
          href="#service"
          className="mobile-nav"
          onClick={() => {
            handleToggle(), handleClick;
          }}
        >
          Services
        </a>
        <a
          href="#skill"
          className="mobile-nav"
          onClick={() => {
            handleToggle(), handleClick;
          }}
        >
          Skills
        </a>
        <a
          href="#myWork"
          className="mobile-nav"
          onClick={() => {
            handleToggle(), handleClick;
          }}
        >
          My Work
        </a>
        <a
          href="#contact"
          className="mobile-nav"
          onClick={() => {
            handleToggle(), handleClick;
          }}
        >
          Contact
        </a>
        <a
          target="_blank"
          href="https://github.com/masudwebdeveloper"
          className="mobile-nav"
          onClick={handleToggle}
        >
          <FaGithub className="text-center inline-block" />
        </a>
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
