import React from "react";

// ** Data import
import { servicesData } from "../Utils/data";

// ** Third party imports
import clsx from "clsx";

import Wave1 from "../assets/svgs/waves-1.svg";

const Service = () => {
  const { title, subTitle, services } = servicesData;
  return (
    <section className={clsx("py-10 md:py-20", "relative")}>
      <div
        className={clsx("bg-no-repeat bg-cover w-full h-[600px] absolute bg-left")}
        style={{ backgroundImage: `url(${Wave1})` }}
      ></div>
      <div className="container mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className={clsx("text-3xl font-semibold", "mb-5")}
          >
            {title}
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="500"
            className={clsx("text-5xl md:text-6xl font-bold")}
          >
            {subTitle}
          </div>
        </div>
        <div className={clsx("grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ", "mx-auto md:p-0 px-10")}>
          {services.map((service, index) => {
            return (
              <div
                key={index}
                data-aos={service.aos}
                data-aos-delay={service.delay}
                className={clsx(
                  "flex gap-x-5",
                  "py-6 px-4",
                  "bg-accent-primary",
                  "text-accent-secondary",
                  "rounded"
                )}
              >
                <div className="">{service.icon}</div>
                <div className="my-auto">
                  <div className="text-xl md:text-2xl font-semibold ">{service.title}</div>
                  {/* <p className="text-md font-light">{service.description}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
