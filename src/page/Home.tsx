import React from "react";
import Banner from "./section/home/Banner";
import About from "./section/home/About";
import HowToBuy from "./section/home/HowToBuy";

const Home: React.FC = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <HowToBuy></HowToBuy>
    </>
  );
};

export default Home;
