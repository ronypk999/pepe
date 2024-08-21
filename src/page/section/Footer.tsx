import React, { useEffect, useState } from "react";
import twitter from "../../assets/twtttt.webp";
import logo from "../../assets/pepetitle.webp";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useInfoContext } from "../../hook/ContextHook";
const Footer: React.FC = () => {
  const { scrollToTop } = useInfoContext();
  const [scrolledOverScreenHeight, setScrolledOverScreenHeight] =
    useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setScrolledOverScreenHeight(true);
    } else {
      setScrolledOverScreenHeight(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="pt-12 space-y-12">
        <div
          data-aos="zoom-in-down"
          className="flex flex-col-reverse md:flex-row justify-center items-center gap-12"
        >
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <img src={logo} alt="logo" />
        </div>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p data-aos="fade-right" className="md:text-lg font6 text-stroke-p">
            $pepe coin has no association with Matt Furie or his creation Pepe
            the Frog. This token is simply paying homage to a meme we all love
            and recognize.
          </p>
          <p data-aos="fade-left" className="md:text-lg font6 text-stroke-p">
            $PEPE is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only.
          </p>
        </div>
        <div className="py-3  footer-box-shadow">
          <p className="text-black text-center text-sm">
            © 2024 by Pepe. All rights reserved!
          </p>
        </div>
      </div>
      {scrolledOverScreenHeight && (
        <div className="fixed bottom-6 right-6">
          <IoIosArrowDropupCircle
            className="text-5xl cursor-pointer"
            onClick={scrollToTop}
          />
        </div>
      )}
    </>
  );
};

export default Footer;
