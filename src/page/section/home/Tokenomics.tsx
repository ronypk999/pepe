import React from "react";
import Divider from "../Divider";
import pepe from "../../../assets/tokenomics/pepememe.webp";
import { useInfoContext } from "../../../hook/ContextHook";

const Tokenomics: React.FC = () => {
  const { TokenomicsRef } = useInfoContext();
  return (
    <>
      <div className="px-6 md:px-12 py-12 max-w-[1200px] mx-auto">
        <div className="space-y-12">
          <h1 className="font5 text-3xl md:text-5xl text-stroke  text-center break-all">
            Tokenomics
          </h1>
          <div className="flex flex-col md:flex-row justify-between gap-12 md:pt-20">
            <div className="space-y-6">
              <div data-aos="zoom-in-right" className="space-y-3">
                <h2
                  ref={TokenomicsRef}
                  className="font5 text-xl md:text-2xl text-stroke  text-center"
                >
                  Token Supply:
                </h2>
                <h2 className="font5 text-xl md:text-2xl text-stroke  text-center break-all">
                  420,690,000,000,000
                </h2>
              </div>
              <div
                data-aos="zoom-in-left"
                className="pt-6 space-y-6 md:space-y-8"
              >
                <div className="bg-[#274B21] p-6 md:p-8 rounded-bl-[2rem] rounded-tr-[2rem] border-2 border-white">
                  <div className="space-y-8 pb-3">
                    <p className="md:text-xl font6 text-stroke-p">
                      No Taxes, No Bullshit. It’s that simple.
                    </p>
                    <p className="md:text-xl font6 text-stroke-p">
                      LP tokens are burnt, and contract ownership is renounced.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up-left" className="pt-12">
              <img src={pepe} alt="pepe meme" className="w-96 mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <Divider></Divider>
    </>
  );
};

export default Tokenomics;
