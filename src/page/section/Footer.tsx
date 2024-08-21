import React from "react";
import twitter from "../../assets/twtttt.webp";
import logo from "../../assets/pepetitle.webp";
const Footer: React.FC = () => {
  return (
    <>
      <div className="pt-12 space-y-12">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-12">
          <img src={twitter} alt="twitter" />
          <img src={logo} alt="logo" />
        </div>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="md:text-lg font6 text-stroke-p">
            $pepe coin has no association with Matt Furie or his creation Pepe
            the Frog. This token is simply paying homage to a meme we all love
            and recognize.
          </p>
          <p className="md:text-lg font6 text-stroke-p">
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
    </>
  );
};

export default Footer;
