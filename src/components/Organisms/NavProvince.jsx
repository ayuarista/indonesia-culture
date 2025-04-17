import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
const NavProvince = ({ nav, path, links }) => {
  const location = useLocation();
  const isProvincePage = links.some(link => location.pathname.startsWith(link.path));

  function setNav() {
    if (location.pathname === path || isProvincePage) {
      return "text-white rounded-full bg-gradient-to-r from-[#430304] to-[#A90809]";
    } else {
      return "border-transparent rounded-full text-black hover:bg-[#E7E7E7]";
    }
  }
  return (
    <div>
      <Link
        to={path}
        className={`text-[0.90rem] xl:text-[1rem] font-medium rounded-box transition  ease-in-out duration-300 px-4 py-1 ${setNav()}`}
      >
        {nav}
      </Link>
    </div>
  );
};

export default NavProvince;
