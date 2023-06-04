import React from "react";

// ** Third Party imports
import clsx from "clsx";

import { navData } from "../Utils/data";

import { AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-accent-primary">
      <div className={clsx("container mx-auto ", "py-20 px-20")}>
        <div className={clsx("flex flex-col lg:flex-row w-full")}>
          <div className="text-5xl mb-16 lg:mb-0 font-extrabold">Yaami Designs</div>
          <div className="w-full flex flex-col gap-y-6">
            <div className="mb-8">
              <div>
                <ul className="flex flex-col md:flex-row gap-x-12 md:gap-y-0 gap-y-5 text-center md:text-left">
                  {navData.map((item, index) => {
                    return (
                      <li className="text-white font-bold text-xl cursor-pointer">{item.name}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className={clsx("flex w-full items-center")}>
              <div className="text-3xl font-extrabold w-[550px]">Start a conversation</div>
              <div className="border border-red-400 h-[1px] w-full hidden md:block"></div>
            </div>
            <div
              className={clsx(
                "w-full flex flex-col md:flex-row justify-between",
                "px-2",
                "gap-y-5 md:gap-y-0"
              )}
            >
              <div className="flex gap-x-2 items-center">
                <AiOutlineWhatsApp className="text-4xl" />
                <div className="font-light text-accent-primary/80">+91-9769642166</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <AiOutlineFacebook className="text-4xl" />
                <div className="font-light text-accent-primary/80">
                  www.facebook.com/yaami-designs
                </div>
              </div>
              <div className="flex gap-x-2 items-center">
                <AiOutlineInstagram className="text-4xl" />
                <div className="font-light text-accent-primary/80">@yaami_designs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={clsx("container mx-auto", "bg-stone-700", "text-center", "py-4")}>
        BACK TO TOP
      </div> */}
    </footer>
  );
};

export default Footer;
