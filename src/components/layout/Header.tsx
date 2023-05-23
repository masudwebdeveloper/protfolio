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
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-x-2 cursor-pointer">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 ml-2 sm:ml-0 rounded-full border-4"
            src={profile}
            alt="profile"
          />
          <span className="text-white font-bold text-xl sm:text-3xl">
            Web_Dev{" "}
          </span>
          <span className="animate-pulse text-white sm:mt-2 text-3xl">__</span>
        </Link>
        <div className="flex item-center gap-6">
          {/* desktop mode */}
          <div className="hidden sm:flex gap-7 items-center">
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
          <button className="py-2 px-4 bg-green-50 rounded-md text-md font-medium hover:bg-blue-800 hover:text-blue-50 transition-all duration-200 hidden sm:block">
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
