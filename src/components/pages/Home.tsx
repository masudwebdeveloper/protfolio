import { useEffect, useState } from "react";
import Banner from "../common/Banner";
import Header from "../layout/Header";
import About from "../common/About";
import Service from "../common/Service";
import SKills from "../common/SKills";

const Home = () => {
  return (
    <main>
      {/* Header */}
      <div className={`bg-[#334155] sticky top-0 z-50`}>
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
    </main>
  );
};

export default Home;
