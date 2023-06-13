import React from "react";

// ** Data import
import { navData } from "../Utils/data";
import { useNavigate } from "react-router-dom";

const NavMobile = () => {
  const navigate = useNavigate();
  return (
    <ul className="flex flex-col py-3">
      {navData.map((item, index) => {
        return (
          <li className="py-4" key={index} onClick={() => navigate(`${item.href}`)}>
            <div className="text-white ">{item.name}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMobile;
