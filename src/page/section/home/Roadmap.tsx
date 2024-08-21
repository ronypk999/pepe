import React from "react";
import Divider from "../Divider";
import pepeCap from "../../../assets/roadmap/pepepissingnobackgroundcopy.webp";
import pepeThink from "../../../assets/roadmap/pepepisthinking.webp";

const Roadmap: React.FC = () => {
  return (
    <>
      <div className="px-6 md:px-12 py-12 max-w-[1200px] mx-auto">
        <div className="space-y-8 md:-space-y-16">
          <h1 className="font5 text-3xl md:text-5xl text-stroke  text-center break-all">
            Roadmap
          </h1>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <img src={pepeCap} alt="pepe meme" className="w-96" />
            </div>
            <div className="">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="pt-6 space-y-6 md:space-y-8">
                  <div className="bg-[#274B21] px-6 py-3 rounded-bl-[2rem] rounded-tr-[2rem] border-2 border-white">
                    <div className="space-y-3">
                      <p className="md:text-xl font6 text-stroke-p text-center">
                        Phase 1: Meme
                      </p>
                      <p className="md:text-xl font6 text-stroke-p">
                        Phase 2: Vibe and HODL
                      </p>
                      <p className="md:text-xl font6 text-stroke-p">
                        Phase 3: Meme Takeover
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <img src={pepeThink} alt="pepe meme" className="w-96" />
                </div>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <img src={pepeThink} alt="pepe meme" className="w-96" />
            </div>
          </div>
        </div>
      </div>
      <Divider></Divider>
    </>
  );
};

export default Roadmap;