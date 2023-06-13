import React from "react";

// ** Third party import
import clsx from "clsx";

// ** Components import
import Nav from "./Nav";

// ** Icons Import
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="z-50 relative" data-aos="fade-down" data-aos-delay="900">
      <nav className="bg-transparent ">
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
              // onClick={() => setNavMobile((prevState) => !prevState)}
            >
              <FaBars />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
