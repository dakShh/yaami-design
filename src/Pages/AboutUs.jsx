import React from "react";

import clsx from "clsx";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner1 from "../assets/about/banner-2.jpg";

const AboutUs = () => {
  return (
    <div>
      <Header />

      <div
        data-aos="zoom-in-up"
        data-aos-delay="400"
        style={{
          backgroundImage: `url(${Banner1})`,
          backgroundPositionY: "25%",
          backgroundPositionX: "30%",
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
          About US
        </div>
        <div className="font-thin text-md z-50 " data-aos="fade-down" data-aos-delay="300">
          Home / About US
        </div>
      </div>

      <div className="container mx-auto min-h-[50vh]">
        <div className={clsx("flex justify-center items-center", " mx-6")}>
          <div className={clsx("pt-5 px-10 pb-10")}>
            {/* <p className="mb-5">About Us</p> */}
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              className="text-2xl font-extralight text-justify"
            >
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on purpose (injected
              humour and the like). It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites still in their
              infancy. Various versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
