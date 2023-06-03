import React from "react";

// ** Data import
import { navData } from "../Utils/data";
const Nav = () => {
  return (
    <div>
      <ul className="flex gap-x-12">
        {navData.map((item, index) => {
          return <li className="text-white font-medium">{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Nav;
