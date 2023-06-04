import React from "react";

// ** Third party import
import clsx from "clsx";

// ** Data import
import { aboutData } from "../Utils/data";

// ** Image import
import About1 from "../assets/about/about-1.jpg";
import About2 from "../assets/about/about-2.jpg";

const About = () => {
  const { title, quote, content } = aboutData;

  return (
    <section className={clsx("py-32 overflow-hidden lg:h-[650px]")}>
      <div className={clsx("grid md:grid-cols-4 grid-cols-1", "container mx-auto")}>
        <div className={clsx("relative md:block hidden col-span-2")}>
          <img
            data-aos="fade-right"
            data-aos-delay="300"
            src={About1}
            alt=""
            className="absolute object-contain h-[420px] md:w-[200px] lg:w-auto"
          ></img>
          <img
            data-aos="fade-right"
            data-aos-delay="500"
            src={About2}
            alt=""
            className={clsx(
              "h-[420px] lg:w-[350px] md:w-[270px]",
              "absolute object-cover ",
              "xl:left-[200px] xl:top-[100px] md:left-[100px] md:top-[100px]"
            )}
          ></img>
        </div>

        <div className="p-5 col-span-2">
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className={clsx("text-4xl font-bold text-accent-primary", "max-w-xs", "mb-5")}
          >
            {title}
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className={clsx("text-xl font-light text-accent-primary", "mb-5")}
          >
            {quote}
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="700"
            className={clsx("text-md font-light text-accent-primary/60", "")}
          >
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
