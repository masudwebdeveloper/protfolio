import Banner from "../common/Banner";
import Header from "../layout/Header";
import About from "../common/About";
import Service from "../common/Service";
import SKills from "../common/SKills";
import MyWork from "../common/MyWork";
import Subcribe from "../common/Subcribe";
import Contact from "../common/Contact";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <main className="relative">
      {/* Header */}
      <div
        className={`dark:bg-[#0D012C]  bg-gray-200 sticky top-0 z-50 text-opacity-0`}
      >
        <Header />
      </div>
      {/* Banner */}
      <div className=" dark:bg-[#11063E] bg-gray-100">
        <Banner />
      </div>
      {/* about section */}
      <div className="dark:bg-[#0D012C] bg-gray-100">
        <About />
      </div>
      {/* service section */}
      <div className="dark:bg-[#0D012C] bg-gray-100">
        <Service />
      </div>
      {/* skill section */}
      <div className="dark:bg-[#0D012C] bg-gray-100">
        <SKills />
      </div>
      {/* my work section */}
      <div className="dark:bg-[#0D012C] bg-gray-100">
        <MyWork />
      </div>
      {/* subscribe section */}
      <div className="dark:bg-[#0D012C] bg-gray-100">
        <Subcribe />
      </div>
      {/* contact section */}
      <div className="dark:bg-[#0D012C] bg-gray-100">
        <Contact />
      </div>
      {/* footer section */}
      <div className="dark:bg-[#0D012C] bg-gray-100">
        <Footer />
      </div>
    </main>
  );
};

export default Home;
