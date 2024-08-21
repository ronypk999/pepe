import React from "react";
import Banner from "./section/home/Banner";
import About from "./section/home/About";
import HowToBuy from "./section/home/HowToBuy";
import Tokenomics from "./section/home/Tokenomics";
import Roadmap from "./section/home/Roadmap";

const Home: React.FC = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <HowToBuy></HowToBuy>
      <Tokenomics></Tokenomics>
      <Roadmap></Roadmap>
    </>
  );
};

export default Home;
