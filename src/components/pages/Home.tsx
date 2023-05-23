import { useEffect, useState } from "react";
import Banner from "../common/Banner";
import Header from "../layout/Header";

const Home = () => {

  return (
    <main>
      {/* Header */}
      <div
        className={`bg-[#334155] sticky top-0 z-50`}
      >
        <Header />
      </div>
      {/* Banner */}
      <div className="bg-[#1F2937] h-[100vh]">
        <Banner />
      </div>
    </main>
  );
};

export default Home;
