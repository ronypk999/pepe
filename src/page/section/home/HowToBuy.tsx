import React from "react";
import Divider from "../Divider";
import usb from "../../../assets/howtobuy/usb.webp";
import eth from "../../../assets/howtobuy/eth.webp";
import us from "../../../assets/howtobuy/uniswap.webp";
import ex from "../../../assets/howtobuy/ex.webp";
import cow from "../../../assets/howtobuy/pepcow.webp";
import cowLeft from "../../../assets/howtobuy/cowleft.webp";

const HowToBuy: React.FC = () => {
  return (
    <>
      <div className="px-6 md:px-12 py-12 max-w-[1200px] mx-auto">
        <div className="space-y-8">
          <h1 className="font5 text-3xl md:text-5xl text-stroke  text-center">
            How to buy
          </h1>
          <div className="pt-12 space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-center bg-[#274B21] p-6 md:p-8 rounded-bl-[2rem] rounded-tr-[2rem] border-2 border-white">
              <div className="md:px-10">
                <img src={usb} alt="usb" className="w-full" />
              </div>
              <div className="flex-1 space-y-5 pb-3">
                <h1 className="font5 text-xl md:text-2xl text-stroke  text-center sm:text-start">
                  Create a wallet
                </h1>
                <p className="md:text-lg font6 text-stroke-p">
                  download metamask or your wallet of choice from the app store
                  or google play store for free. Desktop users, download the
                  google chrome extension by going to metamask.io.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center bg-[#274B21] p-6 md:p-8 rounded-bl-[2rem] rounded-tr-[2rem] border-2 border-white">
              <div className="md:px-10">
                <img src={eth} alt="eth" className="w-full" />
              </div>
              <div className="flex-1 space-y-5 pb-3">
                <h1 className="font5 text-xl md:text-2xl text-stroke  text-center sm:text-start">
                  Get Some ETH
                </h1>
                <p className="md:text-lg font6 text-stroke-p">
                  have ETH in your wallet to switch to $PEPE. If you don’t have
                  any ETH, you can buy directly on metamask, transfer from
                  another wallet, or buy on another exchange and send it to your
                  wallet.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center bg-[#274B21] p-6 md:p-8 rounded-bl-[2rem] rounded-tr-[2rem] border-2 border-white">
              <div className="md:px-10">
                <img src={us} alt="uniswap" className="w-full" />
              </div>
              <div className="flex-1 space-y-5 pb-3">
                <h1 className="font5 text-xl md:text-2xl text-stroke  text-center sm:text-start">
                  Go to Uniswap
                </h1>
                <p className="md:text-lg font6 text-stroke-p">
                  Connect to Uniswap. Go to app.uniswap.org in google chrome or
                  on the browser inside your Metamask app. Connect your wallet.
                  Paste the $PEPE token address into Uniswap, select Pepe, and
                  confirm. When Metamask prompts you for a wallet signature,
                  sign.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center bg-[#274B21] p-6 md:p-8 rounded-bl-[2rem] rounded-tr-[2rem] border-2 border-white">
              <div>
                <img src={ex} alt="exchange pepe" className="w-full" />
              </div>
              <div className="flex-1 space-y-5 pb-3">
                <h1 className="font5 text-xl md:text-2xl text-stroke  text-center sm:text-start">
                  Switch ETH for $PEPE
                </h1>
                <p className="md:text-lg font6 text-stroke-p">
                  switch ETH for $PEPE. We have ZERO taxes so you don’t need to
                  worry about buying with a specific slippage, although you may
                  need to use slippage during times of market volatility.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex-1 hidden sm:block">
              <img className="w-full" src={cowLeft} alt="pepe cow" />
            </div>
            <div>
              <img className="w-full" src={cow} alt="pepe cow" />
            </div>
          </div>
        </div>
      </div>
      <Divider></Divider>
    </>
  );
};

export default HowToBuy;
