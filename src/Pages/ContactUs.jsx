import React from "react";
import clsx from "clsx";
import Header from "../Components/Header";

import Banner1 from "../assets/contact/banner-3.jpg";
import Footer from "../Components/Footer";

import { AiTwotoneHome } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { BsFillPhoneFill, BsClockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const ContactUs = () => {
  return (
    <div>
      <Header />
      <div
        data-aos="zoom-in-up"
        data-aos-delay="400"
        style={{
          backgroundImage: `url(${Banner1})`,
          backgroundPositionY: "44%",
          backgroundPositionX: "30%",
          backgroundRepeat: "repeat",
        }}
        className={clsx(
          "relative",
          "h-[320px] ",
          "flex flex-col justify-center items-center",
          "my-5"
        )}
      >
        <div className="w-full h-full bg-black/70 absolute"></div>

        <div
          className="font-extrabold text-5xl z-50 text-center mb-3"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Contact US
        </div>
        <div className="font-thin text-md z-50 " data-aos="fade-down" data-aos-delay="300">
          Home / Contact US
        </div>
      </div>

      <div className="container mx-auto min-h-[80vh]">
        <div className={clsx("flex justify-around  p-5")}>
          <div className={clsx("py-14")}>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className={clsx("text-5xl font-thin", "mb-8 ")}
            >
              CONTACT INFO
            </div>
            <div className="max-w-md mb-10" data-aos="fade-right" data-aos-delay="600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula orci at neque
              venenatis molestie. Donec quis tincidunt ligula. Duis.
            </div>
            <div className="flex flex-col gap-y-3" data-aos="fade-up" data-aos-delay="700">
              <div className={clsx("flex items-center gap-x-4")}>
                <AiTwotoneHome className="text-xl text-white/60" />
                <div className="text-white/60 font-thin max-w-[290px] sm:max-w-sm">
                  E2 Wing, Kailash Co Op Hsg Society, 293 Belasis Road, Mumbai, Maharashtra
                </div>
              </div>

              <div className={clsx("flex items-center gap-x-4")}>
                <BsFillPhoneFill className="text-white/60 text-xl" />
                <div className="text-white/60">{`(+91) 97694 37843`}</div>
              </div>

              <div className={clsx("flex items-center gap-x-4")}>
                <IoCall className="text-white/60 text-xl" />
                <div className="text-white/60"> {`(+91) 97694 37843`}</div>
              </div>

              <div className={clsx("flex items-center gap-x-4")}>
                <MdEmail className="text-white/60 text-xl" />
                <div className="text-white/60"> {`yaami.designs@gmail.com`}</div>
              </div>

              <div className={clsx("flex items-center gap-x-4")}>
                <BsClockFill className="text-white/60 text-xl" />
                <div className="text-white/60"> {`Monday to Friday  (09:00 - 21:00) `}</div>
              </div>

              <div className={clsx("flex items-center gap-x-4")}>
                <BsClockFill className="text-white/60 text-xl" />
                <div className="text-white/60"> {`Saturday / Sunday  (09:00 - 15:00) `}</div>
              </div>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
