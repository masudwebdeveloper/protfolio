import { useEffect, useState } from "react";
import Banner from "../common/Banner";
import Header from "../layout/Header";
import About from "../common/About";
import Service from "../common/Service";
import SKills from "../common/SKills";
import MyWork from "../common/MyWork";
import Subcribe from "../common/Subcribe";
import Contact from "../common/Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <main>
      {/* Header */}
      <div className={`bg-[#0D012C] sticky top-0 z-50`}>
        <Header />
      </div>
      {/* Banner */}
      <div className="bg-[#1F2937]">
        <Banner />
      </div>
      {/* about section */}
      <div className="bg-[#0D012C]">
        <About />
      </div>
      {/* service section */}
      <div className="bg-[#0D012C]">
        <Service />
      </div>
      {/* skill section */}
      <div className="bg-[#0D012C]">
        <SKills />
      </div>
      {/* my work section */}
      <div className="bg-[#0D012C]">
        <MyWork />
      </div>
      {/* subscribe section */}
      <div className="bg-[#0D012C]">
        <Subcribe />
      </div>
      {/* contact section */}
      <div className="bg-[#0D012C]">
        <Contact />
      </div>
      {/* footer section */}
      <div className="bg-[#0D012C]">
        <Footer />
      </div>

    </main>
  );
};

export default Home;
