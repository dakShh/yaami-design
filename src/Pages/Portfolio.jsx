import React from "react";

// ** Third party import
import clsx from "clsx";

// ** Component import
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Banner1 from "../assets/portfolio/banner-1.jpg";

import Portfolio1 from "../assets/portfolio/portfolio-1.jpg";
import Portfolio2 from "../assets/portfolio/portfolio-2.jpg";
import Portfolio3 from "../assets/portfolio/portfolio-3.jpg";
import Portfolio4 from "../assets/portfolio/portfolio-4.jpg";
import Portfolio5 from "../assets/portfolio/portfolio-5.jpg";
import Portfolio6 from "../assets/portfolio/portfolio-6.jpg";
import Portfolio7 from "../assets/portfolio/portfolio-7.jpg";
import Portfolio8 from "../assets/portfolio/portfolio-8.jpg";
import Portfolio9 from "../assets/portfolio/portfolio-9.jpg";
import Portfolio10 from "../assets/portfolio/portfolio-10.jpg";
import Portfolio11 from "../assets/portfolio/portfolio-11.jpg";
import Portfolio12 from "../assets/portfolio/portfolio-12.jpg";
import PortfolioImage from "../Components/PortfolioImage";

const Portfolio = () => {
  const portfolios = [
    { image_src: Portfolio1, name: "Bed Room" },
    { image_src: Portfolio2, name: "Bath Room" },
    { image_src: Portfolio3, name: "Living Room" },
    { image_src: Portfolio4, name: "Kitchen Area" },
    { image_src: Portfolio5, name: "Modular Room" },
    { image_src: Portfolio6, name: "brd Room" },
    { image_src: Portfolio7, name: "Living Room" },
    { image_src: Portfolio8, name: "Kitchen Area" },
    { image_src: Portfolio9, name: "Living Room" },
    { image_src: Portfolio10, name: "Modular Room" },
    { image_src: Portfolio11, name: "Dining Room" },
    { image_src: Portfolio12, name: "Guest Room" },
  ];
  return (
    <>
      <Header />

      <div
        data-aos="zoom-in-up"
        data-aos-delay="400"
        style={{
          backgroundImage: `url(${Banner1})`,
          backgroundPositionY: "55%",
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
          Portfolio GRID
        </div>
        <div className="font-thin text-md z-50 " data-aos="fade-down" data-aos-delay="300">
          Home / Portfolio
        </div>
      </div>
      <section className={clsx("mb-20")}>
        <div
          className={clsx(
            "container mx-auto",
            "pt-10 pb-20 text-center",
            "text-5xl font-extrabold"
          )}
          data-aos="fade-down"
          data-aos-delay={`600`}
        >
          <div className="text-xl font-extralight">All</div>
          PROJECTS
        </div>
        <div className={clsx("grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4", "w-full", "gap-1")}>
          {portfolios.map((image, index) => {
            return <PortfolioImage image_src={image.image_src} name={image.name} index={index} />;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
