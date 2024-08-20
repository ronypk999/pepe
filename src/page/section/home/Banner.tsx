import React from "react";
import twitter from "../../../assets/banner/twitter.webp";
import telegram from "../../../assets/banner/telegram.webp";
import dextools from "../../../assets/banner/dextools.webp";
import etherscan from "../../../assets/banner/etherscan.webp";
import cmc from "../../../assets/banner/cmc.webp";
import uniswap from "../../../assets/banner/uniswap.webp";
import pepeCow from "../../../assets/banner/cow.webp";
import pepe from "../../../assets/banner/pepeBanner.webp";

//exhchange
import gemini from "../../../assets/banner/exchanges/gemini-dollar-gusd-logo.webp";
import binance from "../../../assets/banner/exchanges/Binance_Logo_svg.webp";
import crypto from "../../../assets/banner/exchanges/crypto.com.png";
import htx from "../../../assets/banner/exchanges/huobi-token-ht-logo.webp";
import bybit from "../../../assets/banner/exchanges/bybit_logo-min.webp";
import okx from "../../../assets/banner/exchanges/A60595EC12C04739-removebg-preview.webp";
import coinbaseEx from "../../../assets/banner/exchanges/coinbase-coin-logo-C86F46D7B8-seeklogo_com.webp";
import kucoin from "../../../assets/banner/exchanges/kucoin-logo.webp";
import uniswapEx from "../../../assets/banner/exchanges/Uniswap_Logo_svg.webp";

const Banner: React.FC = () => {
  return (
    <>
      <div className="p-6 md:p-12 max-w-[1200px] mx-auto">
        <div className="flex justify-center md:p-12 py-12">
          <div className="space-y-12">
            <div className="max-w-xl space-y-8 text-center md:text-start">
              <h1 className="font4 text-7xl text-stroke">$pepe</h1>
              <p className="text-3xl font6">
                The most memeable memecoin in existence. The dogs have had their
                day, it’s time for Pepe to take reign.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="flex gap-6 flex-wrap justify-center">
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="#">
                  <img src={telegram} alt="telegram" />
                </a>
                <a href="#">
                  <img src={dextools} alt="dextools" />
                </a>
              </div>
              <div className="flex gap-6 flex-wrap justify-center">
                <a href="#">
                  <img src={etherscan} alt="etherscan" />
                </a>
                <a href="#">
                  <img src={cmc} alt="coinmarketcap" />
                </a>
                <a href="#">
                  <img src={uniswap} alt="uniswap" />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img src={pepe} alt="pepe" className="w-[500px]" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="space-y-6 flex-1">
            <a
              href="#"
              className="bg-transparent hover:bg-[#7CB17A] btn border-2 border-white rounded-[30px] text-white px-2 py-4 w-full h-fit uppercase"
            >
              <span className="font5 text-xl flex-1">Gemini</span>
              <img src={gemini} alt="gemini" className="w-8" />
            </a>
            <a
              href="#"
              className="bg-transparent hover:bg-[#7CB17A] btn border-2 border-white rounded-[30px] text-white px-2 py-4 w-full h-fit uppercase"
            >
              <span className="font5 text-xl flex-1">binance</span>
              <img src={binance} alt="binance" className="w-8" />
            </a>
            <a
              href="#"
              className="bg-transparent hover:bg-[#7CB17A] btn border-2 border-white rounded-[30px] text-white px-2 py-4 w-full h-fit uppercase"
            >
              <span className="font5 text-xl flex-1">crypto.com</span>
              <img src={crypto} alt="crypto.com" className="w-8" />
            </a>
          </div>
          <div className="space-y-6 flex-1">
            <a
              href="#"
              className="bg-transparent hover:bg-[#7CB17A] btn border-2 border-white rounded-[30px] text-white px-2 py-4 w-full h-fit uppercase"
            >
              <span className="font5 text-xl flex-1">htx</span>
              <img src={htx} alt="htx" className="w-8" />
            </a>
            <a
              href="#"
              className="bg-transparent hover:bg-[#7CB17A] btn border-2 border-white rounded-[30px] text-white px-2 py-4 w-full h-fit uppercase"
            >
              <span className="font5 text-xl flex-1">bybit</span>
              <img src={bybit} alt="bybit" className="w-8" />
            </a>
            <a
              href="#"
              className="bg-transparent hover:bg-[#7CB17A] btn border-2 border-white rounded-[30px] text-white px-2 py-4 w-full h-fit uppercase"
            >
              <span className="font5 text-xl flex-1">okx</span>
              <img src={okx} alt="okx" className="w-8" />
            </a>
          </div>
          <div className="space-y-6 flex-1">
            <a
              href="#"
              className="bg-transparent hover:bg-[#7CB17A] btn border-2 border-white rounded-[30px] text-white px-2 py-4 w-full h-fit uppercase"
            >
              <span className="font5 text-xl flex-1">cb wallet</span>
              <img src={coinbaseEx} alt="coinbase" className="w-8" />
            </a>
            <a
              href="#"
              className="bg-transparent hover:bg-[#7CB17A] btn border-2 border-white rounded-[30px] text-white px-2 py-4 w-full h-fit uppercase"
            >
              <span className="font5 text-xl flex-1">kucoin</span>
              <img src={kucoin} alt="kucoin" className="w-8" />
            </a>
            <a
              href="#"
              className="bg-transparent hover:bg-[#7CB17A] btn border-2 border-white rounded-[30px] text-white px-2 py-4 w-full h-fit uppercase"
            >
              <span className="font5 text-xl flex-1">uniswap</span>
              <img src={uniswapEx} alt="uniswap" className="w-8" />
            </a>
          </div>
        </div>
        <div className="md:hidden py-12">
          <img src={pepe} alt="pepe" className="w-[500px] mx-auto" />
        </div>
      </div>
    </>
  );
};

export default Banner;
