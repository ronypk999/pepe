import React from "react";
import pepe from "../../../assets/about/pepe.webp";
import Divider from "../Divider";

const About: React.FC = () => {
  return (
    <>
      <div className="px-6 md:px-12 py-12 max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row gap-6 justify-between items-center">
        <div>
          <img src={pepe} alt="pepe great" />
        </div>

        <div className="space-y-8 max-w-lg">
          <h1 className="font5 text-3xl md:text-5xl text-stroke  text-start sm:text-center">
            about
          </h1>
          <p className="text-xl md:text-2xl font6">
            Pepe is tired of watching everyone play hot potato with the endless
            derivative{" "}
            <span className="break-all">
              ShibaCumGMElonKishuTurboAssFlokiMoon
            </span>{" "}
            Inu coins. The Inu’s have had their day. It’s time for the most
            recognizable meme in the world to take his reign as king of the
            internet.
          </p>
          <p className="text-xl md:text-2xl font6">
            Pepe is here to make memecoins great again. Launched stealth with no
            presale, zero taxes, LP burnt and contract renounced, $PEPE is a
            coin for the people, forever. Fueled by pure memetic power, let
            $PEPE show you the way.
          </p>
        </div>
      </div>
      <Divider></Divider>
    </>
  );
};

export default About;
