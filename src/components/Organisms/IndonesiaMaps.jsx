import React from "react";
import Maps from "/assets/province/peta.svg";
import Peta from "/assets/province/peta2.svg";
import { Link } from "react-router-dom";
const IndonesiaMaps = ({padding, property}) => {
  return (
    <div className={`${padding}`}>
      <p className="text-sm text-center font-semibold text-black tracking-widest ">
        DISCOVER THE RICH CULTURE AND HERITAGE
      </p>
      <div className="flex items-center justify-center">
        <div className="flex-1 ml-28 border-t-2 border-red-700"></div>
        <h2 className="mx-4 text-2xl md:text-3xl lg:text-[32px] xl:text-4xl bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent font-bold font-third">
          Journey Through Indonesian Culture
        </h2>
        <div className="flex-1 mr-28 border-t-2 border-red-700"></div>
      </div>
      <div className="flex justify-center mt-6">
        <img src={Peta} alt="Peta Indonesia" className="w-full max-w-4xl" />
      </div>
      <div className="flex justify-center mt-5">
        <Link
          to="/province"
          className={`${property} bg-gradient-to-r from-0% hover:from-dark-red to-80% hover:to-light-red hover:text-white font-semibold w-1/4 p-2 text-center rounded-full border border-light-red text-light-red transition-all duration-300 text-sm`}
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default IndonesiaMaps;
