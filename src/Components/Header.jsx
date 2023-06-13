import React, { useState } from "react";

// ** Third party import
import clsx from "clsx";

// ** Components import
import Nav from "./Nav";

// ** Icons Import
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavMobile from "./NavMobile";

const Header = () => {
  const navigate = useNavigate();

  const [navMobile, setNavMobile] = useState();
  return (
    <header className="z-50 relative" data-aos="fade-down" data-aos-delay="900">
      <nav className="bg-transparent relative">
        <div className={clsx("container mx-auto", "py-5")}>
          <div className={clsx("flex items-center justify-between", "px-8")}>
            <div
              className={clsx("text-2xl font-bold", "cursor-pointer", "text-white")}
              onClick={() => navigate("/")}
            >
              YAAMI DESIGNS
            </div>

            <div className="md:block hidden">
              <Nav />
            </div>
            <div
              className="md:hidden text-2xl text-white cursor-pointer "
              onClick={() => setNavMobile((prevState) => !prevState)}
            >
              <FaBars />
            </div>
          </div>
        </div>
        <div
          className={clsx(
            `${navMobile ? "max-h-60" : "max-h-0"} bg-neutral-800`,
            "block lg:hidden",
            "bg-accent-tertiary",
            "overflow-hidden",
            "w-full font-bold rounded transition-all",
            "absolute top-[75px]",
            "z-[300]",
            "text-center"
          )}
        >
          <NavMobile />
        </div>
      </nav>
    </header>
  );
};

export default Header;
