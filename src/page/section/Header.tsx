import React from "react";
import logo from "../../assets/pepetitle.webp";
import { useRef, useState } from "react";

import { useInfoContext } from "../../hook/ContextHook";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Header: React.FC = () => {
  const { aboutRef, HowToBuyRef, TokenomicsRef, RoadmapRef, scrollTo } =
    useInfoContext();
  const [hide, setHide] = useState(true);

  const stickyElement = useRef<HTMLDivElement>(null);

  const menuHandle = () => {
    if (hide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    setHide(!hide);
  };
  return (
    <>
      <div
        ref={stickyElement}
        className="
   text-[#2a4c75] lg:text-white lg:border-b border-[#376B2E] shadow lg:shadow-lg py-5"
      >
        <div className="max-w-[1200px] lg:mx-auto  bg-[#4F9843] py-3 lg:py-6 px-3 flex items-center gap-12">
          <div className="flex px-3 justify-between items-center w-full lg:w-fit">
            <div className="">
              <img src={logo} className="w-40 lg:w-64 cursor-pointer" />
            </div>
            <div className="lg:hidden">
              <div onClick={menuHandle} className="text-3xl">
                <BiMenu className="text-white"></BiMenu>
              </div>
            </div>
          </div>
          <div
            className={`${
              hide && "hidden"
            } absolute bg-[#4F9843] h-screen w-screen nav lg:h-fit p-3 space-y-12 lg:space-y-0 lg:p-0 right-0 top-0 lg:static lg:flex items-center w-full justify-around lg:justify-between lg:px-6 font-medium bg-md-none`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="lg:hidden p-3 pt-8">
              <div onClick={menuHandle} className="text-3xl flex justify-end">
                <IoMdClose />
              </div>
            </div>
            <div className="hidden font5 lg:flex flex-col lg:flex-row items-start gap-8 w-full justify-center">
              <button className="uppercase" onClick={() => scrollTo(aboutRef)}>
                About
              </button>
              <button
                className="uppercase"
                onClick={() => {
                  scrollTo(HowToBuyRef);
                }}
              >
                How To Buy
              </button>
              <button
                className="uppercase"
                onClick={() => scrollTo(TokenomicsRef)}
              >
                Tokenomics
              </button>
              <button
                className="uppercase"
                onClick={() => scrollTo(RoadmapRef)}
              >
                Roadmap
              </button>
            </div>
            <div className="lg:hidden text-white font5 flex flex-col lg:flex-row items-center gap-6 uppercase">
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                  scrollTo(aboutRef);
                }}
              >
                About
              </button>
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                  scrollTo(HowToBuyRef);
                }}
              >
                How To Buy
              </button>
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                  scrollTo(TokenomicsRef);
                }}
              >
                Tokenomics
              </button>
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                  scrollTo(RoadmapRef);
                }}
              >
                Roadmap
              </button>
            </div>

            <div className="flex font5 flex-col lg:flex-row gap-3 px-6">
              {/* <img src={logo} className="w-40 mx-auto" /> */}
              <a
                href="#"
                className="hidden text-xs bg-transparent hover:bg-[#7CB17A] lg:block btn px-6 border-2 border-white rounded-[30px] text-white pt-4 uppercase font5"
              >
                Buy Now
              </a>

              <a
                href="#"
                className="lg:hidden max-w-48 mx-auto text-xs  bg-transparent hover:bg-[#7CB17A] btn px-12 border-2 border-white rounded-[30px] text-white py-2 uppercase font5"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
